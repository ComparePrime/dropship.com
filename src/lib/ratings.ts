import { Product } from "./types";

/**
 * Note et nombre d'avis REELS d'un produit, calcules a partir des avis non demo.
 * Retourne null s'il n'y en a aucun : aucune etoile n'est alors affichee nulle part.
 */
export function getRealRating(product: Product): { average: number; count: number } | null {
  const real = product.reviews.filter((r) => !r.demo);
  if (real.length === 0) return null;
  const average = real.reduce((sum, r) => sum + r.rating, 0) / real.length;
  return { average: Math.round(average * 10) / 10, count: real.length };
}
