"use client";

import { useCurrency } from "@/context/currency-context";
import { CURRENCIES } from "@/lib/fx";
import { Currency } from "@/lib/types";
import { useT } from "@/i18n/provider";

const LABELS: Record<Currency, string> = { EUR: "EUR €", CHF: "CHF", USD: "USD $", CAD: "CAD $" };

/** Choix de la devise (EUR, CHF, USD, CAD) : liste deroulante compacte, adaptee au mobile. */
export function CurrencySwitcher() {
  const t = useT();
  const { currency, setCurrency } = useCurrency();

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t("Devise")}</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as Currency)}
        className="cursor-pointer appearance-none rounded-full border border-ink/15 bg-transparent py-1.5 pl-3 pr-7 text-xs font-medium text-ink/80 transition-colors hover:border-ink/30 focus:border-sage focus:outline-none"
      >
        {CURRENCIES.map((c) => (
          <option key={c} value={c}>
            {LABELS[c]}
          </option>
        ))}
      </select>
      <span aria-hidden="true" className="pointer-events-none absolute right-2.5 text-[10px] text-ink/60">
        ▾
      </span>
    </label>
  );
}
