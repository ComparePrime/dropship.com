"use client";

import { FormEvent, useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "@/i18n/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { Icon } from "@/components/icons";
import { WELCOME_OFFER_PERCENT } from "@/lib/promo";
import { useLocale, useT } from "@/i18n/provider";
import { localizePath, stripLocale } from "@/i18n/config";

export const OPEN_WELCOME_POPUP_EVENT = "ml:open-welcome-popup";

const STORAGE_KEY = "ml_welcome";
const SESSION_START_KEY = "ml_welcome_t0";
const COOKIE_CONSENT_KEY = "ml_cookie_consent";
const SHOW_AFTER_MS = 8000;
/** Une fois fermee, la fenetre ne revient pas avant ce delai. */
const SNOOZE_MS = 30 * 24 * 60 * 60 * 1000;
/** Pages ou la fenetre ne s'affiche jamais d'elle-meme (achat en cours, pages legales, outils). */
const QUIET_PATHS = ["/panier", "/confirmation", "/cgv", "/confidentialite", "/mentions-legales", "/admin", "/desinscription"];

interface Stored {
  state: "dismissed" | "subscribed";
  at: number;
  code?: string;
}

function readStored(): Stored | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Stored) : null;
  } catch {
    return null;
  }
}

function writeStored(value: Stored) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // ignore
  }
}

/**
 * Fenetre de bienvenue discrete : s'ouvre apres ~8 s sur le site (et apres le choix des cookies),
 * jamais sur les pages de panier/paiement, sans voile ni blocage de la navigation. Une fois fermee
 * ou utilisee, elle ne revient pas (30 jours apres fermeture, jamais apres inscription).
 */
export function WelcomePopup() {
  const t = useT();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { applyPromo, promo, isOpen: cartOpen } = useCart();
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [applyMessage, setApplyMessage] = useState<string | null>(null);
  const [applying, setApplying] = useState(false);
  const openedAt = useRef(0);
  const shownOnce = useRef(false);
  const titleId = useId();
  const emailId = useId();

  const close = useCallback(() => {
    setOpen(false);
    const stored = readStored();
    if (stored?.state !== "subscribed") writeStored({ state: "dismissed", at: Date.now() });
  }, []);

  // Ouverture automatique : temps passe sur le site, choix des cookies fait, page autorisee.
  useEffect(() => {
    let start = Date.now();
    try {
      const saved = window.sessionStorage.getItem(SESSION_START_KEY);
      if (saved) start = Number(saved);
      else window.sessionStorage.setItem(SESSION_START_KEY, String(start));
    } catch {
      // ignore
    }
    const tick = window.setInterval(() => {
      if (shownOnce.current) return;
      const stored = readStored();
      if (stored?.state === "subscribed") return;
      if (stored?.state === "dismissed" && Date.now() - stored.at < SNOOZE_MS) return;
      if (QUIET_PATHS.some((p) => stripLocale(window.location.pathname).path.startsWith(p))) return;
      let consentMade = false;
      try {
        consentMade = !!window.localStorage.getItem(COOKIE_CONSENT_KEY);
      } catch {
        consentMade = true;
      }
      if (!consentMade || Date.now() - start < SHOW_AFTER_MS) return;
      shownOnce.current = true;
      openedAt.current = Date.now();
      setOpen(true);
    }, 1000);
    return () => window.clearInterval(tick);
  }, []);

  // Ouverture manuelle (bouton de la fiche produit) : montre le code si l'inscription est deja faite.
  useEffect(() => {
    const onOpen = () => {
      const stored = readStored();
      if (stored?.state === "subscribed" && stored.code) setCode(stored.code);
      shownOnce.current = true;
      openedAt.current = Date.now();
      setOpen(true);
    };
    window.addEventListener(OPEN_WELCOME_POPUP_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_WELCOME_POPUP_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (submitting) return;
    setError(null);
    if (!consent) {
      setError(t("Cochez la case pour recevoir votre code et la newsletter."));
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-locale": locale },
        body: JSON.stringify({
          email,
          consent: true,
          locale,
          website: honeypot,
          elapsedMs: Date.now() - openedAt.current,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.code) throw new Error(data.error ?? t("Inscription impossible. Réessayez."));
      setCode(data.code);
      setEmailSent(data.emailSent === true);
      writeStored({ state: "subscribed", at: Date.now(), code: data.code });
    } catch (e) {
      setError(e instanceof Error ? e.message : t("Inscription impossible. Réessayez."));
    }
    setSubmitting(false);
  };

  const copy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const area = document.createElement("textarea");
      area.value = code;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const apply = async () => {
    if (!code || applying) return;
    setApplying(true);
    setApplyMessage(null);
    const result = await applyPromo(code);
    setApplying(false);
    if (!result.ok) {
      setApplyMessage(result.message);
      return;
    }
    if (stripLocale(window.location.pathname).path.startsWith("/produit/")) {
      setApplyMessage(t("Code appliqué : −{percent} % sera déduit à l'étape de paiement.", { percent: WELCOME_OFFER_PERCENT }));
    } else {
      setOpen(false);
      router.push(localizePath("/panier", locale));
    }
  };

  if (!open || cartOpen) return null;
  if (QUIET_PATHS.some((p) => stripLocale(pathname).path.startsWith(p)) && !code) return null;

  const applied = !!code && promo?.code === code;

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      className="motion-safe:animate-soft-in fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-xl2 border border-ink/10 bg-cream p-5 shadow-lift md:inset-x-auto md:bottom-6 md:left-6 md:mx-0 md:w-[400px] md:p-6"
    >
      <button
        type="button"
        onClick={close}
        aria-label={t("Fermer")}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-sand hover:text-ink"
      >
        <Icon.close className="h-4 w-4" />
      </button>

      {code ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage">{t("Merci, c'est enregistré")}</p>
          <h2 id={titleId} className="mt-1 pr-8 font-display text-2xl leading-snug text-ink">
            {t("Voici votre code de bienvenue")}</h2>
          <div className="mt-4 flex items-center gap-2">
            <span
              aria-label={t("Votre code : {code}", { code })}
              className="flex-1 select-all rounded-xl border border-dashed border-terracotta/60 bg-blush/20 px-4 py-3 text-center font-mono text-base font-semibold tracking-widest text-terracottaText"
            >
              {code}
            </span>
            <button
              type="button"
              onClick={copy}
              className="flex-shrink-0 rounded-full border border-ink/20 px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-sand"
            >
              {copied ? t("Copié ✓") : t("Copier")}
            </button>
          </div>
          {emailSent && (
            <p className="mt-3 text-sm text-ink/70">{t("Nous vous l'avons aussi envoyé par e-mail.")}</p>
          )}
          <p className="mt-3 text-sm text-ink/70">
            {t("−{percent} % sur votre première commande, à usage unique. Non cumulable avec une autre remise : la plus avantageuse s'applique.", { percent: WELCOME_OFFER_PERCENT })}
          </p>
          {applied ? (
            <p role="status" className="mt-4 flex items-center gap-2 rounded-full bg-sage/15 px-4 py-2.5 text-sm font-medium text-sageDeep">
              <Icon.check className="h-4 w-4 flex-shrink-0" strokeWidth={2.25} />
              {applyMessage ?? t("Code appliqué : −{percent} % à l'étape de paiement", { percent: WELCOME_OFFER_PERCENT })}
            </p>
          ) : (
            <button type="button" onClick={apply} disabled={applying} className="btn-primary mt-4 w-full py-3.5 disabled:cursor-wait">
              {applying ? t("Application…") : t("Appliquer mes {percent} %", { percent: WELCOME_OFFER_PERCENT })}
            </button>
          )}
          {applyMessage && !applied && (
            <p role="alert" className="mt-2 text-sm text-terracottaText">
              {applyMessage}
            </p>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage">{t("Bienvenue chez Maison Loravie")}</p>
          <h2 id={titleId} className="mt-1 pr-8 font-display text-2xl leading-snug text-ink">
            {t("Profitez de −{percent} % sur votre première commande", { percent: WELCOME_OFFER_PERCENT })}
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            {t("Inscrivez-vous à notre newsletter pour recevoir votre code de bienvenue et découvrir nos nouveautés et inspirations déco.")}</p>

          <label htmlFor={emailId} className="sr-only">
            {t("Votre adresse e-mail")}</label>
          <input
            id={emailId}
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            placeholder={t("Votre adresse e-mail")}
            required
            aria-invalid={!!error}
            className="mt-4 w-full rounded-full border border-ink/15 bg-white/80 px-5 py-3 text-base text-ink placeholder:text-stone focus:border-sage focus:outline-none"
          />
          {/* Champ piege anti-robots : invisible pour les visiteurs. */}
          <input
            type="text"
            name="hp_field_7q"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-ink/70">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setError(null);
              }}
              className="mt-0.5 h-4 w-4 flex-shrink-0 accent-sage"
            />
            <span>
              {t("J'accepte de recevoir la newsletter de Maison Loravie (nouveautés, inspirations déco et offres). Je peux me désinscrire à tout moment.")}</span>
          </label>
          <p className="mt-2 text-[11px] leading-relaxed text-ink/55">
            {t("Votre adresse sert à vous envoyer votre code et nos communications. Voir notre")}{" "}
            <Link href="/confidentialite" className="underline underline-offset-2 hover:text-ink">
              {t("politique de confidentialité")}</Link>
            .
          </p>

          {error && (
            <p role="alert" className="mt-3 text-sm text-terracottaText">
              {error}
            </p>
          )}
          <button type="submit" disabled={submitting} className="btn-primary mt-4 w-full py-3.5 disabled:cursor-wait">
            {submitting ? t("Enregistrement…") : t("Débloquer mes {percent} %", { percent: WELCOME_OFFER_PERCENT })}
          </button>
        </form>
      )}
    </div>
  );
}
