import { ProductImage } from "./types";

/**
 * Point interactif sur la photo de la section "Decouvrez la collection".
 *
 * Deux modes, au choix selon ce qui est reellement confirme :
 * - `productSlug` renseigne : le point est relie a un vrai produit du
 *   catalogue (`products.ts`). Nom, prix et lien sont alors TOUJOURS lus en
 *   direct depuis ce produit (jamais dupliques en dur ici), pour ne jamais
 *   afficher un prix perime.
 * - `productSlug` absent : le produit n'est pas encore confirme/publie pour
 *   cette photo. Le point reste visible mais s'affiche en etat "Bientot
 *   disponible", non cliquable — jamais de lien invente en solution
 *   definitive. Renseigner `productSlug` des qu'il est identifie/publie
 *   fait apparaitre le vrai lien automatiquement.
 *
 * `x`/`y` sont des pourcentages (0-100) de la largeur/hauteur de l'image,
 * jamais des pixels, pour rester corrects quelle que soit la taille d'écran.
 */
export interface CollectionHotspot {
  id: string;
  x: number;
  y: number;
  /** Renseigner avec le vrai `slug` du produit (voir products.ts) pour activer le lien. */
  productSlug?: string;
  /** Libelle affiche tant que productSlug n'est pas renseigne. */
  placeholderLabel?: string;
}

export interface CollectionShowcaseConfig {
  title: string;
  tagline: string;
  image: ProductImage;
  hotspots: CollectionHotspot[];
}

/**
 * Pour deplacer un point : ajuster x/y (pourcentages, 0 = bord gauche/haut,
 * 100 = bord droit/bas). Pour ajouter un point : dupliquer un objet avec un
 * nouvel `id`. Pour retirer un point : supprimer son objet du tableau.
 */
export const collectionShowcase: CollectionShowcaseConfig = {
  title: "Découvrez la collection",
  tagline: "Chaque pièce a été sélectionnée pour créer une atmosphère élégante et intemporelle.",
  image: {
    src: "/images/scenes/table-collection.png",
    alt: "Table basse en bois mise en scène avec vases en céramique, pendule de Newton, bougeoirs chromés et bougies, sous un ventilateur de plafond lumineux",
  },
  hotspots: [
    {
      id: "vase-arche",
      x: 27,
      y: 55,
      productSlug: "vase-sculpture-fleurs-sechees",
    },
    {
      id: "trio-vases",
      x: 56,
      y: 55,
      productSlug: "trio-vases-porcelaine-wabi-sabi",
    },
    {
      id: "pendule-newton",
      x: 65,
      y: 80,
      productSlug: "pendule-newton-metal-bureau",
    },
    {
      id: "bougeoir-droit",
      x: 84,
      y: 82,
      productSlug: "bougeoir-ceramique-argente-reflet",
    },
    {
      id: "ventilateur-plafond",
      x: 68,
      y: 10,
      // Ressemble au Ventilateur Plafonnier Lumineux, mais aucune photo du
      // catalogue ne correspond exactement a cette scene : non confirme.
      placeholderLabel: "Bientôt disponible",
    },
    {
      id: "lampe-gauche",
      x: 9,
      y: 55,
      // Correspond a la description de "La Lampe Diamant" (brouillon, sans
      // photo confirmee a ce jour) : laisse en placeholder.
      placeholderLabel: "Bientôt disponible",
    },
  ],
};
