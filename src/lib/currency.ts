import { Currency } from "./types";
import { fromEur } from "./fx";

export function formatPrice(amount: number, currency: Currency): string {
  const value = amount.toFixed(2);
  switch (currency) {
    case "CHF":
      return `CHF ${value}`;
    case "USD":
      return `$${value} USD`;
    case "CAD":
      return `$${value} CAD`;
    default:
      return `${value.replace(".", ",")} EUR`;
  }
}

/**
 * Prix dans la devise choisie. L'EUR est la base ; le CHF est deja calcule dans le catalogue a partir de l'EUR
 * (voir products.ts) ; USD et CAD sont calcules ici a partir de l'EUR.
 */
export function getPriceForCurrency(priceCHF: number, priceEUR: number, currency: Currency): number {
  if (currency === "EUR") return priceEUR;
  if (currency === "CHF") return priceCHF;
  return fromEur(priceEUR, currency);
}

/** Idem pour un prix de reference facultatif (prix barre) : undefined s'il n'y en a pas. */
export function getOptionalPrice(
  priceCHF: number | undefined,
  priceEUR: number | undefined,
  currency: Currency
): number | undefined {
  if (priceEUR === undefined || priceCHF === undefined) return undefined;
  return getPriceForCurrency(priceCHF, priceEUR, currency);
}
