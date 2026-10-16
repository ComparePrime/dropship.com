import { Currency, Product } from "./types";

/**
 * Campagne commerciale "Offre d'automne" : source UNIQUE pour les pages produits,
 * les cartes produits, le bandeau, le panier et le compte a rebours.
 *
 * Elle concerne tous les produits qui ont un prix de reference (prix barre)
 * superieur au prix actuel et une promotion active (`promotion.active`).
 * Heure de fin : 31 octobre 2026, 23 h 59 heure suisse (CET, UTC+1 a cette date,
 * le passage a l'heure d'hiver ayant lieu le 25 octobre).
 *
 * Apres la fin, la campagne cesse d'etre affichee (badges, prix de reference,
 * compte a rebours). Les prix du catalogue ne changent pas automatiquement :
 * voir products.ts pour les ajuster.
 */
export const AUTUMN_CAMPAIGN = {
  id: "offre-automne",
  name: "Offre d'automne",
  endsAt: "2026-10-31T23:59:00+01:00",
  endsAtLabel: "31 octobre à 23 h 59",
};

export function isCampaignRunning(now: number = Date.now()): boolean {
  return now < new Date(AUTUMN_CAMPAIGN.endsAt).getTime();
}

export interface CampaignDeal {
  price: number;
  referencePrice: number;
  savings: number;
  percent: number;
}

/** Offre d'automne du produit dans la devise donnee, ou null s'il n'y en a pas (independamment de la date). */
export function getCampaignDeal(product: Product, currency: Currency): CampaignDeal | null {
  const price = currency === "CHF" ? product.priceCHF : product.priceEUR;
  const reference = currency === "CHF" ? product.compareAtPriceCHF : product.compareAtPriceEUR;
  if (!product.promotion.active || !reference || reference <= price) return null;
  const savings = Math.round((reference - price) * 100) / 100;
  return { price, referencePrice: reference, savings, percent: Math.round((savings / reference) * 100) };
}
