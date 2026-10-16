import { CartLine, Currency } from "./types";
import { getPriceForCurrency } from "./currency";
import { computeDiscountCents } from "./promo";
import { getCampaignDeal } from "./campaign";
import { getProductById } from "./products";

export interface CartTotals {
  subtotal: number;
  /** Remise du code promo (deja deduite du total). */
  discount: number;
  total: number;
  /**
   * Economies deja incluses dans les prix du panier : prix de reference de
   * l'Offre d'automne (tant qu'elle est en cours) et remise de lot. N'est PAS
   * deduit une seconde fois du total.
   */
  includedSavings: number;
}

/** Totaux affiches dans le panier (le paiement reel est recalcule cote serveur). */
export function getCartTotals(
  lines: CartLine[],
  currency: Currency,
  promoPercent: number | null,
  campaignRunning = true
): CartTotals {
  let subtotalCents = 0;
  let includedCents = 0;

  for (const line of lines) {
    const unitCents = Math.round(getPriceForCurrency(line.priceCHF, line.priceEUR, currency) * 100);
    subtotalCents += unitCents * line.quantity;

    const product = getProductById(line.productId);
    if (!product) continue;
    const pack = product.packOffers?.find((p) => p.label === line.variantLabel);
    if (pack) {
      const singleCents = Math.round(getPriceForCurrency(product.priceCHF, product.priceEUR, currency) * 100);
      includedCents += Math.max(0, singleCents * pack.quantity - unitCents) * line.quantity;
    } else if (campaignRunning) {
      const deal = getCampaignDeal(product, currency);
      if (deal) includedCents += Math.round(deal.savings * 100) * line.quantity;
    }
  }

  const discountCents = promoPercent ? computeDiscountCents(subtotalCents, promoPercent) : 0;
  return {
    subtotal: subtotalCents / 100,
    discount: discountCents / 100,
    total: (subtotalCents - discountCents) / 100,
    includedSavings: includedCents / 100,
  };
}
