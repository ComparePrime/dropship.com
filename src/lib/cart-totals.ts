import { CartLine, Currency } from "./types";
import { getPriceForCurrency } from "./currency";
import { computeDiscountCents } from "./promo";

export interface CartTotals {
  subtotal: number;
  discount: number;
  total: number;
}

/** Totaux affiches dans le panier (le paiement reel est recalcule cote serveur). */
export function getCartTotals(
  lines: CartLine[],
  currency: Currency,
  promoPercent: number | null
): CartTotals {
  const subtotalCents = lines.reduce(
    (sum, l) => sum + Math.round(getPriceForCurrency(l.priceCHF, l.priceEUR, currency) * 100) * l.quantity,
    0
  );
  const discountCents = promoPercent ? computeDiscountCents(subtotalCents, promoPercent) : 0;
  return {
    subtotal: subtotalCents / 100,
    discount: discountCents / 100,
    total: (subtotalCents - discountCents) / 100,
  };
}
