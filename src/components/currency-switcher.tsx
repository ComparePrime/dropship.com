"use client";

import { useCurrency } from "@/context/currency-context";
import clsx from "clsx";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center rounded-full border border-ink/15 p-0.5 text-xs">
      <button
        type="button"
        onClick={() => setCurrency("CHF")}
        className={clsx(
          "rounded-full px-2.5 py-1.5 transition-colors",
          currency === "CHF" ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
        )}
      >
        CH CHF
      </button>
      <button
        type="button"
        onClick={() => setCurrency("EUR")}
        className={clsx(
          "rounded-full px-2.5 py-1.5 transition-colors",
          currency === "EUR" ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
        )}
      >
        EU EUR
      </button>
    </div>
  );
}
