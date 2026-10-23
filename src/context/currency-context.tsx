"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Currency } from "@/lib/types";
import { CURRENCIES } from "@/lib/fx";
import { formatPrice as formatPriceFor } from "@/lib/currency";
import { useLocale } from "@/i18n/provider";
import { isLiveLocale, localizePath, stripLocale } from "@/i18n/config";

/** Posé par le sélecteur de langue : le visiteur a choisi sa langue, on ne la change plus automatiquement. */
export const LANG_CHOSEN_KEY = "mf_lang_chosen";

/** Devises nord-américaines : le site passe en anglais (si la langue est ouverte et non choisie à la main). */
function switchToEnglishIfNeeded(currency: Currency, locale: string) {
  if (currency !== "USD" && currency !== "CAD") return;
  if (locale !== "fr" || !isLiveLocale("en")) return;
  try {
    if (window.localStorage.getItem(LANG_CHOSEN_KEY)) return;
  } catch {
    // ignore
  }
  const target = localizePath(stripLocale(window.location.pathname).path, "en");
  if (target === window.location.pathname) return;
  window.location.assign(`${target}${window.location.search}${window.location.hash}`);
}

const isCurrency = (value: unknown): value is Currency => CURRENCIES.includes(value as Currency);

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  /** Prix formaté selon la langue de la page (virgule ou point décimal). */
  formatPrice: (amount: number, currency: Currency) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const STORAGE_KEY = "mf_currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const [currency, setCurrencyState] = useState<Currency>("EUR");

  useEffect(() => {
    try {
      // ?currency=EUR|CHF|USD|CAD (liens des flux Google) : devise imposee, puis memorisee.
      const requested = new URLSearchParams(window.location.search).get("currency")?.toUpperCase();
      if (isCurrency(requested)) {
        setCurrencyState(requested);
        window.localStorage.setItem(STORAGE_KEY, requested);
        switchToEnglishIfNeeded(requested, locale);
        return;
      }
      const stored = window.localStorage.getItem(STORAGE_KEY) as Currency | null;
      if (isCurrency(stored)) {
        setCurrencyState(stored);
        switchToEnglishIfNeeded(stored, locale);
        return;
      }
      // Sans choix explicite : devise du pays du visiteur (CH/LI : CHF, US : USD, CA : CAD, ailleurs : EUR).
      // En attendant la reponse, ou si le pays est inconnu, on se base sur la langue du navigateur.
      const browserLang = navigator.language || "";
      setCurrencyState(browserLang.toLowerCase().includes("ch") ? "CHF" : "EUR");
      fetch("/api/geo", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (isCurrency(data?.currency)) {
            // Le visiteur a pu changer de devise entre-temps : son choix prime.
            if (!window.localStorage.getItem(STORAGE_KEY)) {
              setCurrencyState(data.currency);
              switchToEnglishIfNeeded(data.currency, locale);
            }
          }
        })
        .catch(() => {});
    } catch {
      // ignore
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    switchToEnglishIfNeeded(c, locale);
    try {
      window.localStorage.setItem(STORAGE_KEY, c);
    } catch {
      // ignore
    }
  };

  const value = useMemo(
    () => ({ currency, setCurrency, formatPrice: (amount: number, c: Currency) => formatPriceFor(amount, c, locale) }),
    [currency, locale]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
