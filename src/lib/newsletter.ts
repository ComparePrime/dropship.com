import { createHash, randomBytes, randomInt, timingSafeEqual } from "crypto";
import type Stripe from "stripe";
import { getStripeClient } from "./stripe";
import { siteConfig } from "./site-config";
import { defaultLocale, localizePath, type Locale } from "@/i18n/config";
import { WELCOME_OFFER_PERCENT } from "./promo";

/**
 * Inscriptions a la newsletter + code de bienvenue PERSONNEL (un par adresse, une seule utilisation).
 *
 * Stockage : STRIPE (deja en service pour les paiements, aucun autre service a configurer).
 *  - Chaque abonne est un "Customer" Stripe : e-mail + metadonnees (consentement, date, jeton de
 *    desinscription, code). Ils se consultent dans Stripe (Clients) et s'exportent via /admin/abonnes.
 *  - Chaque code est un "Promotion code" Stripe limite a UNE utilisation (max_redemptions = 1) :
 *    c'est Stripe lui-meme qui garantit l'usage unique, au paiement.
 *
 * Aucune donnee personnelle n'est ecrite dans les journaux.
 */
export const CONSENT_VERSION = "2026-10-22";
export const CONSENT_TEXT =
  "J'accepte de recevoir la newsletter de Maison Loravie (nouveautés, inspirations déco et offres). Je peux me désinscrire à tout moment.";
export const WELCOME_CODE_PREFIX = "BIENVENUE-";
export const WELCOME_PERCENT = WELCOME_OFFER_PERCENT;
const WELCOME_COUPON_ID = `loravie_bienvenue_${WELCOME_PERCENT}`;

export type CodeStatus = "available" | "used";

export interface Subscriber {
  customerId: string;
  email: string;
  key: string;
  createdAt: string;
  consentAt: string;
  consentVersion: string;
  consentText: string;
  source: string;
  code: string;
  promotionCodeId: string;
  codeStatus: CodeStatus;
  unsubscribeToken: string;
  unsubscribedAt?: string;
  welcomeEmailSentAt?: string;
}

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "yopmail.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com",
  "tempmail.com", "temp-mail.org", "10minutemail.com", "trashmail.com", "getnada.com",
  "throwawaymail.com", "maildrop.cc", "dispostable.com", "fakeinbox.com", "mailnesia.com",
]);

const EMAIL_FORMAT = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

/** Adresse nettoyee + cle de deduplication (casse, "+alias" et points Gmail ignores), ou une erreur. */
export function normalizeEmail(raw: unknown): { email: string; key: string } | { error: string } {
  if (typeof raw !== "string") return { error: "Saisissez une adresse e-mail valide." };
  const email = raw.trim().toLowerCase();
  if (email.length < 6 || email.length > 254 || !EMAIL_FORMAT.test(email)) {
    return { error: "Saisissez une adresse e-mail valide." };
  }
  const [local, domain] = email.split("@");
  if (local.length > 64 || DISPOSABLE_DOMAINS.has(domain)) {
    return { error: "Cette adresse e-mail n'est pas acceptée. Utilisez une adresse personnelle." };
  }
  let canonicalLocal = local.split("+")[0];
  let canonicalDomain = domain;
  if (domain === "gmail.com" || domain === "googlemail.com") {
    canonicalLocal = canonicalLocal.replace(/\./g, "");
    canonicalDomain = "gmail.com";
  }
  if (!canonicalLocal) return { error: "Saisissez une adresse e-mail valide." };
  return { email, key: sha256(`${canonicalLocal}@${canonicalDomain}`).slice(0, 40) };
}

/** Empreinte de l'adresse IP (jamais l'IP en clair) servant uniquement a limiter les abus. */
export function hashIp(ip: string): string {
  return sha256(`${process.env.NEWSLETTER_SALT ?? "maison-loravie"}|${ip}`).slice(0, 24);
}

/**
 * Limitation par adresse IP (en memoire, par instance du serveur : protection de base contre les rafales).
 * Les doublons d'adresses sont, eux, bloques de facon durable par la fiche Stripe de l'abonne.
 */
const hitsByKey = new Map<string, number[]>();
export async function allowRequest(name: string, ipHash: string, limit: number, windowMs: number): Promise<boolean> {
  const key = `${name}-${ipHash}`;
  const now = Date.now();
  const hits = (hitsByKey.get(key) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) {
    hitsByKey.set(key, hits);
    return false;
  }
  hits.push(now);
  hitsByKey.set(key, hits);
  if (hitsByKey.size > 5000) hitsByKey.clear();
  return true;
}

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
function randomCode(): string {
  let body = "";
  for (let i = 0; i < 6; i++) body += CODE_ALPHABET[randomInt(CODE_ALPHABET.length)];
  return `${WELCOME_CODE_PREFIX}${body}`;
}

export function isPersonalCode(code: string): boolean {
  return /^BIENVENUE-[A-Z0-9]{6}$/.test(code);
}

async function ensureWelcomeCoupon(stripe: Stripe): Promise<string> {
  try {
    await stripe.coupons.retrieve(WELCOME_COUPON_ID);
    return WELCOME_COUPON_ID;
  } catch (error) {
    if ((error as { code?: string }).code !== "resource_missing") throw error;
  }
  try {
    await stripe.coupons.create({
      id: WELCOME_COUPON_ID,
      name: "Code de bienvenue",
      percent_off: WELCOME_PERCENT,
      duration: "once",
    });
  } catch (error) {
    if ((error as { code?: string }).code !== "resource_already_exists") throw error;
  }
  return WELCOME_COUPON_ID;
}

function toSubscriber(customer: Stripe.Customer, promo?: Stripe.PromotionCode | null): Subscriber | null {
  const m = customer.metadata ?? {};
  if (!m.nl_code || !m.nl_promo) return null;
  const promotion = promo ?? null;
  const used = promotion ? promotion.times_redeemed >= (promotion.max_redemptions ?? 1) : m.nl_code_used === "1";
  return {
    customerId: customer.id,
    email: customer.email ?? "",
    key: m.nl_key ?? "",
    createdAt: m.nl_created ?? new Date(customer.created * 1000).toISOString(),
    consentAt: m.nl_consent_at ?? "",
    consentVersion: m.nl_consent_version ?? "",
    consentText: m.nl_consent_text ?? "",
    source: m.nl_source ?? "",
    code: m.nl_code,
    promotionCodeId: m.nl_promo,
    codeStatus: used ? "used" : "available",
    unsubscribeToken: m.nl_token ?? "",
    unsubscribedAt: m.nl_unsub_at || undefined,
    welcomeEmailSentAt: m.nl_welcome_email_at || undefined,
  };
}

async function usedStatus(stripe: Stripe, subscriberCustomer: Stripe.Customer): Promise<Stripe.PromotionCode | null> {
  const id = subscriberCustomer.metadata?.nl_promo;
  if (!id) return null;
  try {
    return await stripe.promotionCodes.retrieve(id);
  } catch {
    return null;
  }
}

async function findCustomer(stripe: Stripe, normalized: { email: string; key: string }): Promise<Stripe.Customer | null> {
  // 1) adresse exacte (immediat) ; 2) meme personne sous un alias (recherche par cle, indexee en quelques secondes).
  const byEmail = await stripe.customers.list({ email: normalized.email, limit: 5 });
  const subscribed = byEmail.data.find((c) => c.metadata?.nl_code);
  if (subscribed) return subscribed;
  try {
    const found = await stripe.customers.search({ query: `metadata['nl_key']:'${normalized.key}'`, limit: 1 });
    if (found.data[0]) return found.data[0];
  } catch {
    // La recherche est facultative : en cas d'indisponibilite, la liste par adresse suffit.
  }
  return byEmail.data[0] ?? null;
}

export type SubscribeResult =
  | { status: "created" | "existing"; subscriber: Subscriber }
  | { status: "used" };

/** Enregistre l'adresse (une seule fiche par adresse) et renvoie son code personnel. */
export async function subscribe(normalized: { email: string; key: string }, source: string): Promise<SubscribeResult> {
  const stripe = getStripeClient();
  const existing = await findCustomer(stripe, normalized);

  if (existing?.metadata?.nl_code) {
    const promo = await usedStatus(stripe, existing);
    const subscriber = toSubscriber(existing, promo);
    if (!subscriber) throw new Error("Fiche abonne illisible.");
    return subscriber.codeStatus === "used" ? { status: "used" } : { status: "existing", subscriber };
  }

  const couponId = await ensureWelcomeCoupon(stripe);
  const now = new Date().toISOString();
  const token = randomBytes(16).toString("hex");

  // Code unique : Stripe refuse un code deja pris, on en tire un autre.
  let promotion: Stripe.PromotionCode | null = null;
  let code = randomCode();
  for (let attempt = 0; attempt < 6 && !promotion; attempt++) {
    try {
      promotion = await stripe.promotionCodes.create({
        coupon: couponId,
        code,
        max_redemptions: 1,
        metadata: { nl_key: normalized.key },
      });
    } catch (error) {
      if ((error as { code?: string }).code !== "resource_already_exists") throw error;
      code = randomCode();
    }
  }
  if (!promotion) throw new Error("Code indisponible.");

  const metadata: Record<string, string> = {
    nl_key: normalized.key,
    nl_created: now,
    nl_consent_at: now,
    nl_consent_version: CONSENT_VERSION,
    nl_consent_text: CONSENT_TEXT,
    nl_source: source,
    nl_code: code,
    nl_promo: promotion.id,
    nl_token: token,
  };
  const customer = existing
    ? await stripe.customers.update(existing.id, { metadata })
    : await stripe.customers.create({ email: normalized.email, description: "Abonné newsletter", metadata });
  await stripe.promotionCodes.update(promotion.id, { metadata: { nl_key: normalized.key, customer: customer.id } });

  const subscriber = toSubscriber(customer, promotion);
  if (!subscriber) throw new Error("Inscription impossible.");
  return { status: "created", subscriber };
}

/** Retrouve l'abonne d'un code de bienvenue (null si le code n'existe pas ou est inactif). */
export async function findSubscriberByCode(code: string): Promise<Subscriber | null> {
  if (!isPersonalCode(code)) return null;
  const stripe = getStripeClient();
  const promotions = await stripe.promotionCodes.list({ code, limit: 1, expand: ["data.coupon"] });
  const promotion = promotions.data[0];
  if (!promotion) return null;
  const customerId = promotion.metadata?.customer;
  let email = "";
  let customer: Stripe.Customer | null = null;
  if (customerId) {
    try {
      const c = await stripe.customers.retrieve(customerId);
      if (!("deleted" in c && c.deleted)) customer = c as Stripe.Customer;
    } catch {
      // fiche supprimee : le code reste valable sans pre-remplissage
    }
  }
  if (customer) email = customer.email ?? "";
  const used = promotion.times_redeemed >= (promotion.max_redemptions ?? 1) || !promotion.active;
  return {
    customerId: customer?.id ?? "",
    email,
    key: promotion.metadata?.nl_key ?? "",
    createdAt: "",
    consentAt: "",
    consentVersion: "",
    consentText: "",
    source: "",
    code,
    promotionCodeId: promotion.id,
    codeStatus: used ? "used" : "available",
    unsubscribeToken: "",
  };
}

export async function markWelcomeEmailSent(subscriber: Subscriber): Promise<void> {
  if (!subscriber.customerId) return;
  await getStripeClient().customers.update(subscriber.customerId, {
    metadata: { nl_welcome_email_at: new Date().toISOString() },
  });
}

export function unsubscribeUrl(subscriber: Pick<Subscriber, "unsubscribeToken">, locale: Locale = defaultLocale): string {
  return `${siteConfig.domain}${localizePath("/desinscription", locale)}?t=${subscriber.unsubscribeToken}`;
}

export async function unsubscribeByToken(token: string): Promise<boolean> {
  if (!/^[a-f0-9]{32}$/.test(token)) return false;
  const stripe = getStripeClient();
  const found = await stripe.customers.search({ query: `metadata['nl_token']:'${token}'`, limit: 1 });
  const customer = found.data[0];
  if (!customer) return false;
  if (!customer.metadata?.nl_unsub_at) {
    await stripe.customers.update(customer.id, { metadata: { nl_unsub_at: new Date().toISOString() } });
  }
  return true;
}

const csvCell = (value: string | undefined) => {
  let text = value ?? "";
  // Neutralise l'injection de formules dans Excel / Google Sheets.
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
};

/** Export CSV de tous les abonnes (avec leur lien de desinscription individuel pour vos envois). */
export async function exportSubscribersCsv(): Promise<{ csv: string; count: number }> {
  const stripe = getStripeClient();

  // Etat des codes : tous les codes de bienvenue en une seule lecture paginee.
  const usedCodes = new Set<string>();
  for await (const promo of stripe.promotionCodes.list({ limit: 100 })) {
    if (promo.code.startsWith(WELCOME_CODE_PREFIX) && promo.times_redeemed >= (promo.max_redemptions ?? 1)) {
      usedCodes.add(promo.code);
    }
  }

  // Tous les clients Stripe qui portent une fiche d'abonne (lecture paginee, sans delai d'indexation).
  const subscribers: Subscriber[] = [];
  for await (const customer of stripe.customers.list({ limit: 100 })) {
    const subscriber = toSubscriber(customer);
    if (subscriber) {
      subscribers.push({ ...subscriber, codeStatus: usedCodes.has(subscriber.code) ? "used" : "available" });
    }
  }

  subscribers.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  const header = [
    "email",
    "consentement_marketing",
    "date_consentement",
    "version_consentement",
    "source",
    "code_bienvenue",
    "statut_code",
    "desinscrit_le",
    "email_bienvenue_envoye",
    "lien_desinscription",
  ];
  const lines = subscribers.map((s) =>
    [
      s.email,
      "oui",
      s.consentAt,
      s.consentVersion,
      s.source,
      s.code,
      s.codeStatus === "used" ? "utilisé" : "disponible",
      s.unsubscribedAt,
      s.welcomeEmailSentAt,
      unsubscribeUrl(s),
    ]
      .map(csvCell)
      .join(",")
  );
  return { csv: "﻿" + [header.map(csvCell).join(","), ...lines].join("\r\n"), count: subscribers.length };
}

export function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}
