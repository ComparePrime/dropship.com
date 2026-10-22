import type { Product } from "./types";

/** Pays livres aujourd'hui (doivent correspondre a ce que la page de paiement Stripe accepte). */
export const EUROPE_SHIPPING_COUNTRIES = ["CH", "FR", "BE", "DE", "IT", "ES", "NL", "AT", "PT", "LU"];
export const NORTH_AMERICA_COUNTRIES = ["US", "CA"];

/**
 * Livraison aux Etats-Unis et au Canada. Par prudence, un produit n'y est propose que s'il n'a AUCUNE
 * categorie de conformite en attente (electrique, bebe, animaux : `compliance` dans products.ts), car ces
 * produits demandent des normes propres (tension, prises, FCC/UL, securite des jouets...).
 *
 * Pour autoriser un produit apres verification : retirer/valider sa fiche `compliance`, ou l'ajouter ici.
 * Pour au contraire l'exclure : l'ajouter a NORTH_AMERICA_EXCLUDED_SLUGS.
 */
const NORTH_AMERICA_EXCLUDED_SLUGS = new Set<string>();
const NORTH_AMERICA_ALLOWED_SLUGS = new Set<string>();

export function isShippableToNorthAmerica(product: Product): boolean {
  if (NORTH_AMERICA_EXCLUDED_SLUGS.has(product.slug)) return false;
  if (NORTH_AMERICA_ALLOWED_SLUGS.has(product.slug)) return true;
  return !product.compliance;
}

/** Pays proposes a la page de paiement pour ce panier : l'Amerique du Nord seulement si tous les articles le permettent. */
export function allowedCountriesFor(products: Product[]): string[] {
  return products.every(isShippableToNorthAmerica)
    ? [...EUROPE_SHIPPING_COUNTRIES, ...NORTH_AMERICA_COUNTRIES]
    : EUROPE_SHIPPING_COUNTRIES;
}
