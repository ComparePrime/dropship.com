import { CartLine } from "./types";

/**
 * Remise automatique "plusieurs articles" : source UNIQUE pour le panier
 * (affichage) et le paiement (montant reellement facture, recalcule cote
 * serveur). Elle s'applique des que le panier contient `minUnits` articles
 * des produits listes, quelle que soit leur taille ou leur coloris, et porte
 * sur l'ensemble du panier (`scope: "cart"`).
 *
 * Non cumulable avec un code promo : la remise la plus avantageuse est
 * appliquee, jamais les deux.
 */
export const MULTI_BUY = {
  label: "Remise 2 vestes",
  slugs: ["veste-chien-hiver-impermeable"],
  minUnits: 2,
  percent: 15,
};

export function countMultiBuyUnits(lines: Pick<CartLine, "slug" | "quantity">[]): number {
  return lines.reduce((sum, l) => (MULTI_BUY.slugs.includes(l.slug) ? sum + l.quantity : sum), 0);
}

/** Pourcentage de remise applicable a ce panier (0 si la condition n'est pas remplie). */
export function getMultiBuyPercent(lines: Pick<CartLine, "slug" | "quantity">[]): number {
  return countMultiBuyUnits(lines) >= MULTI_BUY.minUnits ? MULTI_BUY.percent : 0;
}
