import type { Currency } from "./types";

/**
 * Devise de base de la boutique : l'EURO. Tous les prix du catalogue (products.ts) sont saisis en EUR ;
 * le franc suisse, le dollar americain et le dollar canadien sont convertis automatiquement a partir
 * de ces prix avec les taux ci-dessous, puis arrondis a n,99.
 *
 * Pour mettre a jour les taux : modifier FX_RATES_PER_EUR et FX_RATES_DATE (aucune autre modification).
 */
export const FX_RATES_DATE = "2026-10-22";

/** Combien d'unites de la devise valent 1 EUR. */
export const FX_RATES_PER_EUR: Record<Currency, number> = {
  EUR: 1,
  CHF: 0.9201,
  USD: 1.1212,
  CAD: 1.5713,
};

export const CURRENCIES: Currency[] = ["EUR", "CHF", "USD", "CAD"];

/** Arrondi commercial : la valeur la plus proche de la forme n,99 (ex. 36,79 -> 36,99 ; 44,84 -> 44,99). */
export function retailRound(amount: number): number {
  return Math.max(0.99, Math.round(Math.round(amount - 0.99) * 100 + 99) / 100);
}

/** Prix en `currency` a partir d'un prix en EUR (le prix EUR reste tel quel). */
export function fromEur(eur: number, currency: Currency): number {
  if (currency === "EUR") return eur;
  return retailRound(eur * FX_RATES_PER_EUR[currency]);
}
