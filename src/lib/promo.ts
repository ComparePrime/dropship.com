/**
 * Codes promotionnels. Source de verite UNIQUE, utilisee par le serveur
 * (validation + paiement) ; le navigateur n'en retient que le pourcentage
 * renvoye par /api/promo, pour l'affichage. Le montant paye est toujours
 * recalcule cote serveur.
 *
 * Pour ajouter un code : ajouter une entree ci-dessous. Un seul code peut etre
 * applique a la fois (pas de cumul). `percent` s'applique a tous les produits
 * du panier (livraison offerte, donc aucun frais n'est reduit).
 */
export interface PromoDefinition {
  code: string;
  percent: number;
}

const PROMO_CODES: Record<string, PromoDefinition> = {
  WELCOME10: { code: "WELCOME10", percent: 10 },
};

/** Majuscules, espaces de debut et de fin supprimes : "  welcome10 " => "WELCOME10". */
export function normalizePromoCode(input: string): string {
  return input.trim().toUpperCase();
}

export function findPromo(input: unknown): PromoDefinition | null {
  if (typeof input !== "string") return null;
  return PROMO_CODES[normalizePromoCode(input)] ?? null;
}

/** Remise en centimes, arrondie au centime le plus proche. */
export function computeDiscountCents(subtotalCents: number, percent: number): number {
  return Math.round((subtotalCents * percent) / 100);
}
