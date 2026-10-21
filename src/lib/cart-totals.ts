import { CartLine, Currency } from "./types";
import { getPriceForCurrency } from "./currency";
import { computeDiscountCents } from "./promo";
import { getCampaignDeal } from "./campaign";
import { getProductById } from "./products";
import { resolveLine } from "./sku";
import { getMultiBuyPercent } from "./multi-buy";

export interface CartTotals {
  subtotal: number;
  /** Remise du code promo (deja deduite du total). */
  discount: number;
  /** D'ou vient la remise : remise automatique "plusieurs articles", code promo, ou aucune. */
  discountSource: "multi-buy" | "promo" | null;
  /** Pourcentage reellement applique (celui du code ou de la remise automatique). */
  discountPercent: number;
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
    const compareAt = resolveLine(product, line.variantLabel)[currency === "CHF" ? "compareAtCHF" : "compareAtEUR"];
    if (compareAt !== undefined) {
      // Produit a tailles : le prix de reference est celui de la taille choisie.
      if (campaignRunning && compareAt > unitCents / 100) {
        includedCents += Math.round(compareAt * 100 - unitCents) * line.quantity;
      }
    } else if (pack) {
      const singleCents = Math.round(getPriceForCurrency(product.priceCHF, product.priceEUR, currency) * 100);
      includedCents += Math.max(0, singleCents * pack.quantity - unitCents) * line.quantity;
    } else if (campaignRunning) {
      const deal = getCampaignDeal(product, currency);
      if (deal) includedCents += Math.round(deal.savings * 100) * line.quantity;
    }
  }

  // Remise automatique et code promo ne se cumulent pas : la plus avantageuse gagne.
  const multiBuyPercent = getMultiBuyPercent(lines);
  const useMultiBuy = multiBuyPercent > 0 && multiBuyPercent >= (promoPercent ?? 0);
  const appliedPercent = useMultiBuy ? multiBuyPercent : (promoPercent ?? 0);
  const discountCents = appliedPercent ? computeDiscountCents(subtotalCents, appliedPercent) : 0;
  return {
    subtotal: subtotalCents / 100,
    discount: discountCents / 100,
    discountSource: discountCents > 0 ? (useMultiBuy ? "multi-buy" : "promo") : null,
    discountPercent: discountCents > 0 ? appliedPercent : 0,
    total: (subtotalCents - discountCents) / 100,
    includedSavings: includedCents / 100,
  };
}
