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
export const LOW_STOCK_THRESHOLD = 15;
export const URGENT_STOCK_THRESHOLD = 5;

export function declare(quantity: number, referenceCapacity: number): StockInfo {
  return {
    source: "manual",
    quantity,
    referenceCapacity,
    updatedAt: "2026-10-16",
    notes: "Stock declare a la main dans src/lib/stock-config.ts, non synchronise avec les fournisseurs.",
  };
}

export const declaredStock: Record<string, StockInfo> = {
  // Exemple (a decommenter avec une vraie quantite, sans oublier l'import
  // de `declare` ci-dessus : il est deja dans ce fichier) :
  // "pendule-newton-metal-bureau": declare(24, 40),
  "lampe-table-led-diamant-usb": declare(18, 40),
  "trio-vases-porcelaine-wabi-sabi": declare(12, 40),
  "meduse-dansante-jouet-interactif": declare(23, 40),
  "ventilateur-plafond-invisible-led": declare(9, 40),
  "ventilateur-anti-mouches-table": declare(16, 40),
  "crochet-chat-lanterne": declare(14, 40),
  "coussin-bras-allaitement-biberon": declare(21, 40),
  "bougeoir-ceramique-argente-reflet": declare(11, 40),
  "griffoir-chat-accordeon-balle": declare(14, 40),
  "jouet-chat-arcade-souris-fromage": declare(10, 40),
  "lampe-chevet-rechargeable-cristal-doree": declare(14, 40),
  "lampe-de-table-rechargeable-doree-cannelee": declare(12, 40),
  "lampe-lanterne-rechargeable-tactile-cristal": declare(11, 40),
};

/**
 * Stock DECLARE par couple coloris x taille, pour les produits decline en tailles
 * (cle = slug ; sous-cle = `<id coloris>:<id taille>`, voir lib/sku.ts). Un couple
 * absent compte pour 0 (indisponible). Ce stock est aussi le plafond d'achat du
 * couple, au panier comme au paiement.
 */
function uniformSkuStock(colors: string[], sizes: string[], quantity: number, overrides: Record<string, number> = {}) {
  const stock: Record<string, number> = {};
  for (const color of colors) for (const size of sizes) stock[`${color}:${size}`] = quantity;
  return { ...stock, ...overrides };
}

export const declaredSkuStock: Record<string, Record<string, number>> = {
  // 15 pieces par coloris et par taille ; le vert-jaune en 3XL est en rupture.
  "veste-chien-hiver-impermeable": uniformSkuStock(
    ["vert-jaune", "bleu", "rose", "rouge", "violet", "orange"],
    ["xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    15,
    { "vert-jaune:3xl": 0 }
  ),
};
