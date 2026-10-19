/**
 * Sous-categories de "Maison & decoration" ayant leur propre page
 * (/collections/maison-decoration/<slug>). Les produits sont listes par slug :
 * ils restent dans leurs univers habituels, cette liste ne fait que les regrouper.
 * ("Art de la table" a sa propre page statique.)
 */
export interface Subcategory {
  slug: string;
  title: string;
  intro: string;
  seoTitle: string;
  metaDescription: string;
  productSlugs: string[];
}

export const subcategories: Subcategory[] = [
  {
    slug: "eclairage-et-ambiance",
    title: "Lampes & éclairage",
    intro:
      "Une lumière douce change l'allure d'une pièce. Lampe à poser aux facettes de cristal, ventilateur plafonnier avec éclairage intégré : des pièces choisies pour leur silhouette autant que pour leur lumière.",
    seoTitle: "Lampes de table et éclairage d'ambiance | Maison Loravie",
    metaDescription:
      "Lampe de table à facettes, rechargeable et tactile, ventilateur plafonnier lumineux : découvrez la sélection éclairage et ambiance de Maison Loravie.",
    productSlugs: ["lampe-table-led-diamant-usb", "ventilateur-plafond-invisible-led"],
  },
  {
    slug: "maison-et-confort",
    title: "Maison & confort",
    intro:
      "Des objets qui rendent la maison plus agréable à vivre : un ventilateur plafonnier discret et lumineux, un coussin de soutien pensé pour les moments partagés avec bébé.",
    seoTitle: "Confort de la maison : ventilateur plafonnier, coussin | Maison Loravie",
    metaDescription:
      "Ventilateur plafonnier lumineux et coussin de soutien pour le bras : découvrez la sélection Maison & confort de Maison Loravie.",
    productSlugs: ["ventilateur-plafond-invisible-led", "coussin-bras-allaitement-biberon"],
  },
];

export function getSubcategory(slug: string) {
  return subcategories.find((s) => s.slug === slug);
}
