import { IconName } from "@/components/icons";

/**
 * Les 4 univers éditoriaux de Maison Loravie. Ce sont des rayons d'une même
 * marque, pas des sous-marques : la ligne éditoriale et l'identité visuelle
 * restent celles de Maison Loravie sur chaque page.
 *
 * Un produit peut appartenir à plusieurs univers (`product.collections`).
 */
export interface Category {
  slug: string;
  title: string;
  /** Résumé court utilisé sur la carte d'accueil. */
  cardDescription: string;
  /** Introduction plus longue affichée en tête de page catégorie. */
  intro: string;
  subcategories: string[];
  icon: IconName;
  seo: {
    title: string;
    metaDescription: string;
  };
}

export const categories: Category[] = [
  {
    slug: "maison-decoration",
    title: "Maison & décoration",
    cardDescription:
      "Des objets qui apportent du caractère à chaque pièce, sans jamais surcharger.",
    intro:
      "Une sélection pensée pour habiller un intérieur avec soin : décoration, accessoires utiles et petits objets du quotidien, choisis pour leur qualité et leur allure discrète plutôt que pour l'effet.",
    subcategories: [
      "Décoration intérieure",
      "Accessoires pour la maison",
      "Rangement et organisation",
      "Éclairage et ambiance",
      "Objets pratiques du quotidien",
    ],
    icon: "home",
    seo: {
      title: "Maison & décoration | Maison Loravie",
      metaDescription:
        "Décoration intérieure, accessoires pratiques et éclairage d'ambiance : découvrez la sélection Maison & décoration de Maison Loravie.",
    },
  },
  {
    slug: "bebe-famille",
    title: "Bébé & famille",
    cardDescription:
      "De petites attentions pensées pour les moments partagés avec ceux que vous aimez.",
    intro:
      "Des objets pensés pour simplifier le quotidien des parents et accompagner les petits moments en famille, avec la même exigence de qualité que le reste de notre sélection.",
    subcategories: [
      "Accessoires pour bébé",
      "Vie quotidienne des parents",
      "Organisation familiale",
      "Accessoires pratiques pour les enfants",
    ],
    icon: "gift",
    seo: {
      title: "Bébé & famille | Maison Loravie",
      metaDescription:
        "Accessoires pour bébé et objets pratiques pour la vie de famille : découvrez l'univers Bébé & famille de Maison Loravie.",
    },
  },
  {
    slug: "nos-compagnons",
    title: "Nos compagnons",
    cardDescription: "Des objets inspirés de nos animaux, pour sourire un peu chaque jour.",
    intro:
      "Une sélection dédiée aux propriétaires de chats et de chiens : des objets décoratifs et pratiques inspirés de nos compagnons, pensés pour la maison autant que pour eux.",
    subcategories: [
      "Accessoires pour chats",
      "Accessoires pour chiens",
      "Confort et accessoires du quotidien pour les animaux",
      "Objets utiles pour les propriétaires d'animaux",
    ],
    icon: "cat",
    seo: {
      title: "Nos compagnons | Maison Loravie",
      metaDescription:
        "Objets et accessoires inspirés des chats et des chiens : découvrez l'univers Nos compagnons de Maison Loravie.",
    },
  },
  {
    slug: "idees-cadeaux",
    title: "Idées cadeaux",
    cardDescription: "Des attentions originales, choisies pour faire plaisir sans se tromper.",
    intro:
      "Des idées cadeaux originales, sélectionnées pour leur qualité et leur allure, pour offrir une petite attention qui sort de l'ordinaire à toutes les occasions.",
    subcategories: [
      "Cadeaux originaux",
      "Petites attentions",
      "Objets décoratifs à offrir",
      "Idées cadeaux pour différentes occasions",
    ],
    icon: "gift",
    seo: {
      title: "Idées cadeaux | Maison Loravie",
      metaDescription:
        "Des idées cadeaux originales et élégantes pour toutes les occasions : découvrez la sélection Idées cadeaux de Maison Loravie.",
    },
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
