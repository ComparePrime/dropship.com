import { IconName } from "@/components/icons";

/**
 * Les 4 univers éditoriaux de Maison Loravie. Ce sont des rayons d'une même
 * marque, pas des sous-marques : la ligne éditoriale et l'identité visuelle
 * restent celles de Maison Loravie sur chaque page.
 *
 * Un produit peut appartenir à plusieurs univers (`product.collections`).
 */
export interface Subcategory {
  label: string;
  /** Renseigné uniquement pour les sous-catégories ayant leur propre page. */
  href?: string;
}

export interface Category {
  slug: string;
  title: string;
  /** Résumé court utilisé sur la carte d'accueil. */
  cardDescription: string;
  /** Introduction plus longue affichée en tête de page catégorie. */
  intro: string;
  subcategories: Subcategory[];
  icon: IconName;
  seo: {
    title: string;
    metaDescription: string;
  };
  /** Texte editorial affiche sous les produits (SEO) : sections avec titre et paragraphes. */
  seoSections: { heading: string; paragraphs: string[] }[];
  /** Questions frequentes de la categorie, rendues en texte sur la page. */
  faq: { question: string; answer: string }[];
}

export const categories: Category[] = [
  {
    slug: "maison-decoration",
    title: "Maison & décoration",
    cardDescription:
      "Des objets qui apportent du caractère à chaque pièce, sans jamais surcharger.",
    intro:
      "Vases, bougeoirs, lampes, plateaux et petits objets : une sélection de décoration d'intérieur pensée pour habiller un salon, une chambre ou une entrée avec des pièces sobres et soignées.",
    subcategories: [
      { label: "Décoration intérieure" },
      { label: "Art de la table", href: "/collections/maison-decoration/art-de-la-table" },
      { label: "Accessoires pour la maison" },
      { label: "Rangement et organisation" },
      { label: "Éclairage et ambiance", href: "/collections/maison-decoration/eclairage-et-ambiance" },
      { label: "Objets pratiques du quotidien" },
    ],
    icon: "home",
    seo: {
      title: "Décoration d'intérieur : vases, lampes, bougeoirs | Maison Loravie",
      metaDescription:
        "Décoration d'intérieur à prix doux : vases, bougeoirs, lampe de table, plateau décoratif, ventilateur plafonnier. Livraison offerte, retours 30 jours.",
    },
    seoSections: [
      {
        heading: "Une décoration d'intérieur simple et soignée",
        paragraphs: [
          "Une pièce se transforme souvent avec deux ou trois objets bien choisis. Cette sélection réunit des vases, des bougeoirs, un plateau décoratif, une lampe de table et d'autres pièces pour la maison, dans des teintes neutres qui s'accordent avec la plupart des intérieurs.",
          "Chaque fiche indique les dimensions, la matière et l'usage prévu : vous savez ce que vous recevez avant de commander.",
        ],
      },
      {
        heading: "Comment composer un coin décoré",
        paragraphs: [
          "Pour une table basse ou une console, commencez par un plateau, puis ajoutez un vase et un bougeoir de hauteurs différentes. Une lampe de table apporte la lumière douce du soir. Trois éléments suffisent, l'important est de laisser de la place autour.",
          "Retrouvez aussi notre sélection d'éclairage et d'ambiance pour choisir une lampe ou un ventilateur plafonnier lumineux.",
        ],
      },
    ],
    faq: [
      {
        question: "Quels objets de décoration proposez-vous ?",
        answer:
          "Des vases, des bougeoirs, un plateau décoratif, une pendule, une lampe de table à facettes, un ventilateur plafonnier avec éclairage et d'autres objets pour la maison. La sélection évolue au fil des arrivages.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer:
          "Votre commande est expédiée sous 24 h et arrive en général en 4 à 8 jours ouvrables. La livraison est offerte, sans minimum d'achat.",
      },
      {
        question: "Puis-je retourner un article ?",
        answer:
          "Oui. Vous disposez de 30 jours après réception pour changer d'avis et retourner votre commande gratuitement.",
      },
    ],
  },
  {
    slug: "bebe-famille",
    title: "Bébé & famille",
    cardDescription:
      "De petites attentions pensées pour les moments partagés avec ceux que vous aimez.",
    intro:
      "Des accessoires pratiques pour le quotidien des parents : coussin de soutien pour le bras pendant l'allaitement ou le biberon, jouet interactif et idées pour les petits moments en famille.",
    subcategories: [
      { label: "Accessoires pour bébé" },
      { label: "Vie quotidienne des parents" },
      { label: "Organisation familiale" },
      { label: "Accessoires pratiques pour les enfants" },
    ],
    icon: "gift",
    seo: {
      title: "Bébé et famille : accessoires pratiques pour parents | Maison Loravie",
      metaDescription:
        "Coussin de soutien pour le bras pendant l'allaitement ou le biberon, jouet interactif et accessoires pratiques pour la vie de famille. Livraison offerte.",
    },
    seoSections: [
      {
        heading: "Des accessoires pensés pour le quotidien",
        paragraphs: [
          "Donner le biberon ou allaiter demande de rester immobile longtemps. Le coussin de soutien pour le bras aide à se détendre pendant ces moments, et chaque fiche détaille ses dimensions et son usage.",
          "Cet univers rassemble des objets utiles pour les parents, choisis pour leur simplicité plutôt que pour leur nombre.",
        ],
      },
      {
        heading: "Un choix qui reste raisonnable",
        paragraphs: [
          "Nous ajoutons de nouveaux articles au fil des mois, après les avoir sélectionnés un par un. Les produits destinés aux bébés restent présentés avec prudence : consultez toujours les informations de la fiche avant de commander.",
        ],
      },
    ],
    faq: [
      {
        question: "Les produits sont-ils adaptés aux bébés ?",
        answer:
          "Chaque fiche précise l'usage prévu et les consignes. En cas de doute sur un article, écrivez-nous avant de commander à info@maisonloravie.com.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer:
          "Votre commande est expédiée sous 24 h et arrive en général en 4 à 8 jours ouvrables. La livraison est offerte, sans minimum d'achat.",
      },
      {
        question: "Puis-je retourner un article ?",
        answer:
          "Oui. Vous disposez de 30 jours après réception pour changer d'avis et retourner votre commande gratuitement.",
      },
    ],
  },
  {
    slug: "nos-compagnons",
    title: "Nos compagnons",
    cardDescription: "Des objets inspirés de nos animaux, pour sourire un peu chaque jour.",
    intro:
      "Vestes pour chiens, objets inspirés des chats et accessoires pour les propriétaires d'animaux : une sélection pour les promenades d'hiver et le quotidien à la maison.",
    subcategories: [
      { label: "Accessoires pour chats" },
      { label: "Accessoires pour chiens" },
      { label: "Confort et accessoires du quotidien pour les animaux" },
      { label: "Objets utiles pour les propriétaires d'animaux" },
    ],
    icon: "cat",
    seo: {
      title: "Veste pour chien et accessoires pour animaux | Maison Loravie",
      metaDescription:
        "Veste imperméable pour chien du XS au 6XL en 6 coloris, objets inspirés des chats et accessoires pour animaux. Livraison offerte, retours 30 jours.",
    },
    seoSections: [
      {
        heading: "Pour les promenades d'hiver",
        paragraphs: [
          "La Veste Montagne protège les chiens du vent et de la pluie pendant les promenades d'automne et d'hiver. Elle existe du XS au 6XL, en six coloris, avec un guide des tailles détaillé en centimètres pour choisir la bonne taille.",
          "Dès la deuxième veste dans votre panier, une remise de 15 % est appliquée automatiquement.",
        ],
      },
      {
        heading: "Des objets pour les amoureux des chats",
        paragraphs: [
          "Un griffoir accordéon avec balle à grelot pour offrir un coin à griffer aux chats, une lanterne à la silhouette de chat et d'autres objets inspirés de nos compagnons : de petites attentions pour la maison, à offrir ou à s'offrir.",
        ],
      },
    ],
    faq: [
      {
        question: "Comment choisir la taille de la veste de mon chien ?",
        answer:
          "Mesurez la longueur du dos, le tour de poitrail et le tour de cou, puis comparez avec le guide des tailles de la fiche. Si votre chien se situe entre deux tailles, choisissez la plus grande.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer:
          "Votre commande est expédiée sous 24 h et arrive en général en 4 à 8 jours ouvrables. La livraison est offerte, sans minimum d'achat.",
      },
      {
        question: "Puis-je retourner un article ?",
        answer:
          "Oui. Vous disposez de 30 jours après réception pour changer d'avis et retourner votre commande gratuitement.",
      },
    ],
  },
  {
    slug: "idees-cadeaux",
    title: "Idées cadeaux",
    cardDescription: "Des attentions originales, choisies pour faire plaisir sans se tromper.",
    intro:
      "Des idées cadeaux originales à moins de 40 francs : vases, bougeoir, plateau décoratif, lampe de table et petits objets pour la maison, à offrir pour une crémaillère ou une fête.",
    subcategories: [
      { label: "Cadeaux originaux" },
      { label: "Petites attentions" },
      { label: "Objets décoratifs à offrir" },
      { label: "Idées cadeaux pour différentes occasions" },
    ],
    icon: "gift",
    seo: {
      title: "Idées cadeaux déco et maison, petits prix | Maison Loravie",
      metaDescription:
        "Idées cadeaux originales pour la maison : vases, bougeoir, plateau décoratif, lampe de table, pendule. Livraison offerte, retours gratuits sous 30 jours.",
    },
    seoSections: [
      {
        heading: "Offrir un objet qui trouve sa place",
        paragraphs: [
          "Un bougeoir en céramique, un vase sculptural, un plateau décoratif ou une lampe de table : ce sont des cadeaux qui ont leur place dans presque tous les intérieurs, sans demander de connaître les goûts exacts de la personne.",
          "La livraison est offerte et vous disposez de 30 jours pour retourner un article qui ne conviendrait pas.",
        ],
      },
      {
        heading: "Quelle occasion ?",
        paragraphs: [
          "Pendaison de crémaillère, fête des mères, Noël ou simple attention : choisissez un objet décoratif sobre, dans des teintes neutres, qui se combine facilement avec ce que la personne possède déjà.",
        ],
      },
    ],
    faq: [
      {
        question: "Y a-t-il un budget minimum pour la livraison gratuite ?",
        answer:
          "Non, la livraison est offerte pour toutes les commandes, sans minimum d'achat.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer:
          "Votre commande est expédiée sous 24 h et arrive en général en 4 à 8 jours ouvrables. La livraison est offerte, sans minimum d'achat.",
      },
      {
        question: "Puis-je retourner un article ?",
        answer:
          "Oui. Vous disposez de 30 jours après réception pour changer d'avis et retourner votre commande gratuitement.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
