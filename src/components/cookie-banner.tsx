"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadGoogleTag } from "@/lib/google-tag";

const CONSENT_KEY = "ml_cookie_consent";
export const OPEN_COOKIE_SETTINGS_EVENT = "ml:open-cookie-settings";

type Consent = "granted" | "denied";

function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Bandeau de consentement. Tant que le visiteur n'a pas accepte, AUCUNE balise
 * Google (Analytics, Ads) n'est chargee. "Tout refuser" et "Accepter" ont le
 * meme poids visuel. Le choix est memorise et modifiable via "Gérer les cookies".
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored === "granted") loadGoogleTag();
    if (stored === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const choose = (choice: Consent) => {
    const previous = readConsent();
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
    if (choice === "granted") {
      loadGoogleTag();
    } else if (previous === "granted") {
      // Une balise deja chargee ne peut pas etre retiree a chaud : on recharge la page.
      window.location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-2xl rounded-xl2 border border-ink/10 bg-cream p-5 shadow-lift md:bottom-5 md:p-6"
    >
      <p className="font-display text-lg text-ink">Vos choix concernant les cookies</p>
      <p className="mt-2 text-sm text-ink/75">
        Nous utilisons des cookies de mesure d&apos;audience et de publicité (Google Analytics et
        Google Ads) pour comprendre comment le site est utilisé et mesurer nos annonces. Ils ne sont
        activés qu&apos;avec votre accord. Les cookies nécessaires au panier fonctionnent dans tous les
        cas. Plus de détails dans notre{" "}
        <Link href="/confidentialite" className="underline underline-offset-2">
          politique de confidentialité
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="flex-1 rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-sand"
        >
          Tout refuser
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="flex-1 rounded-full border border-sage bg-sage px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sage/90"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
