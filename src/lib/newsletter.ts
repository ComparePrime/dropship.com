import { createHash, randomBytes, randomInt, timingSafeEqual } from "crypto";
import { kv } from "./newsletter-store";
import { siteConfig } from "./site-config";
import { WELCOME_OFFER_PERCENT } from "./promo";

/**
 * Inscriptions a la newsletter + code de bienvenue PERSONNEL (un par adresse, une seule utilisation).
 * Aucune donnee personnelle n'est ecrite dans les journaux : seules des cles hachees circulent.
 *
 * Cles du stockage :
 *   sub/<hash e-mail normalise>   fiche de l'abonne (e-mail, consentement, code, statut du code)
 *   code/<CODE>                   renvoie vers la cle de l'abonne
 *   tok/<jeton>                   jeton de desinscription -> cle de l'abonne
 *   rl/<nom>/<hash ip>            compteurs de limitation (anti-abus)
 */
export const CONSENT_VERSION = "2026-10-22";
export const CONSENT_TEXT =
  "J'accepte de recevoir la newsletter de Maison Loravie (nouveautés, inspirations déco et offres). Je peux me désinscrire à tout moment.";
export const WELCOME_CODE_PREFIX = "BIENVENUE-";
export const WELCOME_PERCENT = WELCOME_OFFER_PERCENT;

export type CodeStatus = "available" | "pending" | "used";

export interface Subscriber {
  email: string;
  key: string;
  createdAt: string;
  consentAt: string;
  consentVersion: string;
  consentText: string;
  source: string;
  code: string;
  codeStatus: CodeStatus;
  pendingSessionId?: string;
  usedAt?: string;
  usedSessionId?: string;
  unsubscribeToken: string;
  unsubscribedAt?: string;
  /** Date d'envoi de l'e-mail de bienvenue (absente si l'envoi n'est pas configure ou a echoue). */
  welcomeEmailSentAt?: string;
}

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "yopmail.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com",
  "tempmail.com", "temp-mail.org", "10minutemail.com", "trashmail.com", "getnada.com",
  "throwawaymail.com", "maildrop.cc", "dispostable.com", "fakeinbox.com", "mailnesia.com",
]);

const EMAIL_FORMAT = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

/** Adresse nettoyee + cle de deduplication (casse, "+alias" et points Gmail ignores), ou null si invalide. */
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

/** Limitation : au plus `limit` appels par fenetre ; renvoie false quand la limite est atteinte. */
export async function allowRequest(name: string, ipHash: string, limit: number, windowMs: number): Promise<boolean> {
  const key = `rl/${name}/${ipHash}`;
  const now = Date.now();
  const hits = ((await kv.get<number[]>(key)) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) return false;
  hits.push(now);
  await kv.set(key, hits);
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

export type SubscribeResult =
  | { status: "created" | "existing"; subscriber: Subscriber }
  | { status: "used" };

/** Enregistre l'adresse (une seule fiche par adresse) et renvoie son code personnel. */
export async function subscribe(normalized: { email: string; key: string }, source: string): Promise<SubscribeResult> {
  const subKey = `sub/${normalized.key}`;
  const existing = await kv.get<Subscriber>(subKey);
  if (existing) {
    return existing.codeStatus === "used" ? { status: "used" } : { status: "existing", subscriber: existing };
  }

  // Reserve un code unique avant de creer la fiche.
  let code = randomCode();
  for (let attempt = 0; attempt < 8 && !(await kv.setIfNew(`code/${code}`, normalized.key)); attempt++) {
    code = randomCode();
  }
  const now = new Date().toISOString();
  const subscriber: Subscriber = {
    email: normalized.email,
    key: normalized.key,
    createdAt: now,
    consentAt: now,
    consentVersion: CONSENT_VERSION,
    consentText: CONSENT_TEXT,
    source,
    code,
    codeStatus: "available",
    unsubscribeToken: randomBytes(16).toString("hex"),
  };
  const created = await kv.setIfNew(subKey, subscriber);
  if (!created) {
    // Inscription simultanee de la meme adresse : on garde la premiere fiche.
    await kv.delete(`code/${code}`);
    const winner = await kv.get<Subscriber>(subKey);
    if (!winner) throw new Error("Inscription impossible.");
    return winner.codeStatus === "used" ? { status: "used" } : { status: "existing", subscriber: winner };
  }
  await kv.set(`tok/${subscriber.unsubscribeToken}`, normalized.key);
  return { status: "created", subscriber };
}

export async function findSubscriberByCode(code: string): Promise<Subscriber | null> {
  if (!isPersonalCode(code)) return null;
  const key = await kv.get<string>(`code/${code}`);
  return key ? kv.get<Subscriber>(`sub/${key}`) : null;
}

export async function markWelcomeEmailSent(subscriber: Subscriber): Promise<void> {
  const current = await kv.get<Subscriber>(`sub/${subscriber.key}`);
  if (current) await kv.set(`sub/${subscriber.key}`, { ...current, welcomeEmailSentAt: new Date().toISOString() });
}

export function unsubscribeUrl(subscriber: Pick<Subscriber, "unsubscribeToken">): string {
  return `${siteConfig.domain}/desinscription?t=${subscriber.unsubscribeToken}`;
}

export async function markCodePending(subscriber: Subscriber, sessionId: string): Promise<void> {
  await kv.set(`sub/${subscriber.key}`, { ...subscriber, codeStatus: "pending", pendingSessionId: sessionId });
}

/** Consomme definitivement le code (idempotent) une fois le paiement confirme. */
export async function markCodeUsed(code: string, sessionId: string): Promise<void> {
  const subscriber = await findSubscriberByCode(code);
  if (!subscriber || subscriber.codeStatus === "used") return;
  await kv.set(`sub/${subscriber.key}`, {
    ...subscriber,
    codeStatus: "used",
    usedAt: new Date().toISOString(),
    usedSessionId: sessionId,
  });
}

export async function unsubscribeByToken(token: string): Promise<boolean> {
  if (!/^[a-f0-9]{32}$/.test(token)) return false;
  const key = await kv.get<string>(`tok/${token}`);
  if (!key) return false;
  const subscriber = await kv.get<Subscriber>(`sub/${key}`);
  if (!subscriber) return false;
  if (!subscriber.unsubscribedAt) {
    await kv.set(`sub/${key}`, { ...subscriber, unsubscribedAt: new Date().toISOString() });
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
  const keys = await kv.list("sub/");
  const subscribers: Subscriber[] = [];
  for (const key of keys) {
    const subscriber = await kv.get<Subscriber>(key);
    if (subscriber) subscribers.push(subscriber);
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
    "date_utilisation_code",
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
      s.codeStatus === "used" ? "utilisé" : s.codeStatus === "pending" ? "en cours de paiement" : "disponible",
      s.usedAt,
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
