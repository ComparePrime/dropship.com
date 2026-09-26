import { Currency } from "./types";

export function formatPrice(amount: number, currency: Currency): string {
  const formatted = amount.toFixed(2).replace(".", currency === "CHF" ? "." : ",");
  return currency === "CHF" ? `CHF ${formatted}` : `${formatted} EUR`;
}

export function getPriceForCurrency(
  priceCHF: number,
  priceEUR: number,
  currency: Currency
): number {
  return currency === "CHF" ? priceCHF : priceEUR;
}
