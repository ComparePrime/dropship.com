import { Currency, Product } from "./types";
import { getOptionalPrice, getPriceForCurrency } from "./currency";

/**
 * Campagne commerciale "Black Month" : source UNIQUE pour les pages produits, les cartes produits,
 * le bandeau, l'accueil et le panier.
 *
 * Elle concerne tous les produits qui ont un prix de reference (prix barre) superieur au prix actuel
 * et une promotion active (`promotion.active`) : les prix et prix barres sont ceux du catalogue
 * (products.ts), identiques a ceux de l'Offre d'automne qui a precede.
 * Fin : 30 novembre 2026 inclus, jusqu'a 23 h 59 heure suisse (CET, UTC+1).
 *
 * Apres la fin, la campagne cesse d'etre affichee (badges, prix de reference). Les prix du catalogue
 * ne changent pas automatiquement : voir products.ts pour les ajuster.
 */
export const BLACK_MONTH_CAMPAIGN = {
  id: "black-month",
  name: "Black Month",
  endsAt: "2026-11-30T23:59:59+01:00",
  endsAtLabel: "30 novembre 2026",
};

/** Date de fin ecrite dans la langue du visiteur (heure suisse). */
export function campaignEndLabel(locale: string): string {
  if (locale === "fr") return BLACK_MONTH_CAMPAIGN.endsAtLabel;
  const end = new Date(BLACK_MONTH_CAMPAIGN.endsAt);
  return new Intl.DateTimeFormat(locale, { timeZone: "Europe/Zurich", day: "numeric", month: "long", year: "numeric" }).format(end);
}

export function isCampaignRunning(now: number = Date.now()): boolean {
  return now < new Date(BLACK_MONTH_CAMPAIGN.endsAt).getTime();
}

export interface CampaignDeal {
  price: number;
  referencePrice: number;
  savings: number;
  percent: number;
}

/** Offre Black Month du produit dans la devise donnee, ou null s'il n'y en a pas (independamment de la date). */
export function getCampaignDeal(product: Product, currency: Currency): CampaignDeal | null {
  const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
  const reference = getOptionalPrice(product.compareAtPriceCHF, product.compareAtPriceEUR, currency);
  if (!product.promotion.active || !reference || reference <= price) return null;
  const savings = Math.round((reference - price) * 100) / 100;
  return { price, referencePrice: reference, savings, percent: Math.round((savings / reference) * 100) };
}
