"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Currency } from "@/lib/types";
import { CURRENCIES } from "@/lib/fx";

const isCurrency = (value: unknown): value is Currency => CURRENCIES.includes(value as Currency);

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const STORAGE_KEY = "mf_currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("EUR");

  useEffect(() => {
    try {
      // ?currency=EUR|CHF|USD|CAD (liens des flux Google) : devise imposee, puis memorisee.
      const requested = new URLSearchParams(window.location.search).get("currency")?.toUpperCase();
      if (isCurrency(requested)) {
        setCurrencyState(requested);
        window.localStorage.setItem(STORAGE_KEY, requested);
        return;
      }
      const stored = window.localStorage.getItem(STORAGE_KEY) as Currency | null;
      if (isCurrency(stored)) {
        setCurrencyState(stored);
        return;
      }
      // Sans choix explicite : devise du pays du visiteur (CH/LI : CHF, US : USD, CA : CAD, ailleurs : EUR).
      // En attendant la reponse, ou si le pays est inconnu, on se base sur la langue du navigateur.
      const locale = navigator.language || "";
      setCurrencyState(locale.toLowerCase().includes("ch") ? "CHF" : "EUR");
      fetch("/api/geo", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (isCurrency(data?.currency)) {
            // Le visiteur a pu changer de devise entre-temps : son choix prime.
            if (!window.localStorage.getItem(STORAGE_KEY)) setCurrencyState(data.currency);
          }
        })
        .catch(() => {});
    } catch {
      // ignore
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      window.localStorage.setItem(STORAGE_KEY, c);
    } catch {
      // ignore
    }
  };

  const value = useMemo(() => ({ currency, setCurrency }), [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
