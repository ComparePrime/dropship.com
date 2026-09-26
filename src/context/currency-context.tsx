"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Currency } from "@/lib/types";

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const STORAGE_KEY = "mf_currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("CHF");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Currency | null;
      if (stored === "CHF" || stored === "EUR") {
        setCurrencyState(stored);
        return;
      }
      const locale = navigator.language || "";
      if (locale.toLowerCase().includes("ch")) {
        setCurrencyState("CHF");
      } else {
        setCurrencyState("EUR");
      }
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
