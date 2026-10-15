import { StockInfo } from "./types";

/**
 * Stock DECLARE par produit, a renseigner a la main (aucune synchronisation
 * avec les fournisseurs). Cle = `slug` du produit (voir products.ts).
 *
 * Pour activer l'indicateur de stock sur un produit, ajouter une entree :
 *
 *   "pendule-newton-metal-bureau": declare(24, 40),
 *
 *   - premier nombre : pieces reellement disponibles aujourd'hui ;
 *   - second nombre : capacite de reference de la barre (ex: taille d'un
 *     reapprovisionnement habituel). Plus la quantite est basse par rapport
 *     a ce nombre, plus la barre est courte.
 *
 * Regles d'affichage (voir stock-indicator.tsx) :
 *   - plus de LOW_STOCK_THRESHOLD pieces : "En stock" ;
 *   - LOW_STOCK_THRESHOLD pieces ou moins : "Plus que N pieces en stock" ;
 *   - URGENT_STOCK_THRESHOLD pieces ou moins : message d'urgence renforce ;
 *   - 0 : "Temporairement indisponible", achat desactive.
 *
 * Attention : cette quantite est aussi un plafond d'achat (panier et
 * paiement). Elle doit donc refleter ce que vous pouvez reellement livrer ;
 * la mettre a jour apres chaque reapprovisionnement ou vente importante.
 * Un produit absent de cette liste n'affiche aucune information de stock.
 */
export const LOW_STOCK_THRESHOLD = 12;
export const URGENT_STOCK_THRESHOLD = 5;

export function declare(quantity: number, referenceCapacity: number): StockInfo {
  return {
    source: "manual",
    quantity,
    referenceCapacity,
    updatedAt: "2026-10-15",
    notes: "Stock declare a la main dans src/lib/stock-config.ts, non synchronise avec les fournisseurs.",
  };
}

export const declaredStock: Record<string, StockInfo> = {
  // Exemple (a decommenter avec une vraie quantite, sans oublier l'import
  // de `declare` ci-dessus : il est deja dans ce fichier) :
  // "pendule-newton-metal-bureau": declare(24, 40),
};
