import { Product } from "./types";
import { ventilateurAntiMouchesReviews } from "./reviews-ventilateur-anti-mouches";

/**
 * Catalogue produits.
 * Chaque produit génère automatiquement /produit/[slug].
 * Pour ajouter un produit : dupliquer un objet et l'ajouter au tableau `products`.
 */
export const products: Product[] = [
  {
    id: "petite-lanterne-feline",
    slug: "crochet-chat-lanterne",
    name: "La Petite Lanterne Féline",
    brandLine: "Maison Loravie",
    badge: "NOUVEAUTÉ",
    // Headline retenue parmi 3 propositions :
    // A) "Une petite touche féline qui illumine votre intérieur." (retenue)
    // B) "Le petit détail qui change tout dans une pièce."
    // C) "Une présence féline pleine de douceur, où que vous la posiez."
    headline: "Une petite touche féline qui illumine votre intérieur.",
    subtitle:
      "Un crochet décoratif en forme de chat, avec une petite lanterne intégrée — à poser sur une étagère, un bureau ou une table de nuit.",
    heroBullets: [
      "Une silhouette de chat pleine de douceur, sans surcharger l'espace",
      "Une petite lanterne qui apporte une lumière chaleureuse le soir",
      "Se pose ou se fixe simplement, sans outillage complexe",
      "Livré prêt à trouver sa place : étagère, bureau ou chambre",
    ],
    h1: "Crochet mural pour chat avec lanterne décorative",
    shortDescription:
      "Un crochet décoratif en forme de chat, associé à une petite lanterne lumineuse, pour habiller une étagère, une chambre ou un bureau.",
    description: [
      "La Petite Lanterne Féline est un petit objet décoratif pensé pour les amoureux des chats qui aiment soigner les détails de leur intérieur. Il associe une silhouette de chat, un crochet fonctionnel et une petite lanterne lumineuse, dans un seul objet compact.",
      "Posé sur une étagère, un rebord ou un meuble, il ajoute immédiatement du caractère à une pièce, tout en offrant un petit point d'accroche pratique pour un bijou, une clé ou une petite plante.",
      "Une fois la nuit tombée, sa lanterne intégrée diffuse une lumière douce, idéale pour créer une ambiance chaleureuse dans une chambre ou un coin lecture, sans avoir besoin d'allumer une lumière principale.",
    ],
    storytelling: {
      eyebrow: "Les petits détails comptent",
      title: "Les petits détails font souvent toute la différence.",
      paragraphs: [
        "Un intérieur chaleureux ne tient pas toujours à de grands changements. Parfois, c'est un seul objet bien choisi qui donne du caractère à une pièce entière.",
        "La Petite Lanterne Féline a été pensée pour ça : une silhouette de chat pleine de douceur, une lumière qui s'allume doucement le soir, et un petit crochet qui rend service au quotidien.",
      ],
    },
    objections: [
      {
        doubt: "Est-ce que ce sera vraiment joli chez moi, et pas juste sur une photo ?",
        response:
          "Pensé comme un objet de décoration à part entière : sa silhouette sobre et ses tons naturels s'intègrent facilement à un intérieur déjà existant.",
      },
      {
        doubt: "Est-ce que c'est vraiment utile, ou juste un joli gadget ?",
        response:
          "C'est avant tout un objet décoratif : le crochet et la lanterne ajoutent une fonction pratique, mais son rôle premier est d'apporter du caractère à une étagère ou un coin de pièce.",
      },
      {
        doubt: "Est-ce que ce sera facile à installer ?",
        response:
          "Il se pose ou se fixe simplement sur une étagère, un rebord ou une surface plane, sans outillage complexe.",
      },
      {
        doubt: "Combien de temps vais-je attendre ma commande ?",
        response:
          "Votre commande est expédiée sous 24h, pour une réception estimée entre 4 et 8 jours ouvrables.",
      },
      {
        doubt: "Et si le produit ne me convient pas une fois reçu ?",
        response:
          "Vous disposez de 30 jours après réception pour changer d'avis et le retourner gratuitement.",
      },
    ],
    valueStack: [
      "Un objet décoratif original : silhouette de chat, crochet et lanterne réunis",
      "Une ambiance lumineuse douce pour vos soirées",
      "Livraison offerte, expédition sous 24h",
      "Retours gratuits sous 30 jours",
      "Paiement à 100% sécurisé",
    ],
    midCtaTexts: [
      "Convaincue par ces quelques détails ?",
      "Prête à lui trouver sa place chez vous ?",
    ],
    costPriceUSD: 8.49,
    priceCHF: 21.9,
    priceEUR: 22.9,
    // Pas de compareAtPrice tant qu'aucun prix de référence réel n'existe.
    images: [
      {
        src: "/images/products/lumiere-feline/principal.svg",
        alt: "Crochet décoratif en forme de chat avec élément lumineux posé sur une étagère",
        caption: "La Petite Lanterne Féline sur une étagère de chambre",
      },
      {
        src: "/images/products/lumiere-feline/detail-figurine.svg",
        alt: "Détail de la figurine de chat du crochet décoratif La Petite Lanterne Féline",
        caption: "Le détail de la silhouette du chat",
      },
      {
        src: "/images/products/lumiere-feline/lanterne-allumee.svg",
        alt: "Élément lumineux allumé du crochet mural pour chat",
        caption: "La lanterne diffuse une lumière douce le soir",
      },
      {
        src: "/images/products/lumiere-feline/ambiance-bureau.svg",
        alt: "Crochet chat lanterne installé sur un bureau à côté d'un ordinateur",
        caption: "Une touche féline sur un bureau",
      },
    ],
    benefits: [
      {
        icon: "cat",
        title: "Une présence féline originale",
        description:
          "Un détail décoratif qui attire naturellement le regard, sans surcharger l'espace.",
      },
      {
        icon: "lamp",
        title: "Une touche lumineuse",
        description:
          "Une petite lanterne qui apporte une ambiance chaleureuse à la tombée de la nuit.",
      },
      {
        icon: "home",
        title: "Pensé pour la décoration",
        description:
          "Idéal pour une chambre, un bureau ou une étagère, où il sert aussi de petit crochet pratique.",
      },
      {
        icon: "gift",
        title: "Une idée cadeau originale",
        description:
          "Un objet différent des cadeaux classiques, parfait pour les amoureux des chats.",
      },
    ],
    useCases: [
      {
        title: "Chambre",
        description: "Sur une table de nuit ou une étagère murale, pour une ambiance douce le soir.",
      },
      {
        title: "Bureau",
        description: "À côté d'un écran ou d'une lampe, pour une touche de caractère au quotidien.",
      },
      {
        title: "Salon",
        description: "Sur un meuble bas ou une console, en complément d'autres objets décoratifs.",
      },
      {
        title: "Bibliothèque",
        description: "Entre deux piles de livres, comme un petit signe distinctif.",
      },
      {
        title: "Étagère",
        description: "Utilisé comme crochet pour suspendre un petit objet, en plus de son rôle décoratif.",
      },
      {
        title: "Coin lecture",
        description: "Près d'un fauteuil, pour une lumière d'appoint discrète pendant la lecture.",
      },
    ],
    faq: [
      {
        question: "Le crochet est-il facile à installer ?",
        answer:
          "Oui. Il est conçu pour être posé ou fixé simplement sur une étagère, un rebord ou une surface plane, sans outillage complexe.",
      },
      {
        question: "Où puis-je utiliser ce crochet décoratif ?",
        answer:
          "Il trouve sa place dans une chambre, un bureau, un salon, une bibliothèque ou tout autre espace où vous souhaitez ajouter une touche décorative féline.",
      },
      {
        question: "La lanterne est-elle lumineuse ?",
        answer:
          "La lanterne intégrée diffuse une lumière douce et décorative, pensée pour l'ambiance plutôt que pour un éclairage principal.",
      },
      {
        question: "Le produit est-il adapté à une chambre ?",
        answer:
          "Oui, c'est l'un de ses usages principaux : une lumière d'ambiance douce, associée à un objet décoratif discret.",
      },
      {
        question: "Quelle est la taille du produit ?",
        answer:
          "Les dimensions précises seront communiquées prochainement par notre équipe. Elles restent compactes, pensées pour une étagère ou un petit espace.",
      },
      {
        question: "La lanterne fonctionne-t-elle avec des piles ou une batterie ?",
        answer:
          "Information à confirmer par notre équipe dès que la fiche technique du fournisseur sera disponible.",
      },
      {
        question: "Comment entretenir le produit ?",
        answer:
          "Un simple dépoussiérage avec un chiffon sec ou légèrement humide suffit à l'entretien courant.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer:
          "Votre commande est expédiée sous 24h. Le délai de livraison estimé est de 4 à 8 jours ouvrables.",
      },
      {
        question: "La livraison est-elle gratuite ?",
        answer: "Oui, la livraison est offerte pour toutes les commandes, sans minimum d'achat.",
      },
      {
        question: "Puis-je retourner le produit ?",
        answer:
          "Oui, vous disposez de 30 jours après réception pour changer d'avis et retourner votre commande gratuitement.",
      },
      {
        question: "Comment fonctionne le retour sous 30 jours ?",
        answer:
          "Il vous suffit de nous contacter par email dans les 30 jours suivant la réception. Nous vous indiquons alors la marche à suivre pour le retour.",
      },
    ],
    seo: {
      title: "Crochet mural pour chat avec lanterne décorative | Maison Loravie",
      metaDescription:
        "Découvrez La Petite Lanterne Féline, un crochet décoratif en forme de chat avec élément lumineux. Idéal pour la chambre ou le bureau. Livraison offerte, retours gratuits 30 jours.",
      keywords: [
        "crochet chat décoration",
        "crochet mural chat",
        "décoration chat",
        "objet déco chat",
        "décoration chambre chat",
        "veilleuse chat",
        "lampe chat décorative",
        "cadeau amoureux des chats",
        "décoration originale chat",
      ],
    },
    promotion: {
      active: true,
      label: "Offre de lancement",
      // Configurer une vraie date de fin ici quand elle existe réellement, ex: "2026-09-30T22:00:00.000Z"
      endsAt: undefined,
    },
    shipping: {
      freeShipping: true,
      dispatchWithinHours: 24,
      minDays: 4,
      maxDays: 8,
      returnDays: 30,
    },
    reviews: [
      {
        id: "demo-1",
        author: "Camille R.",
        rating: 5,
        date: "2026-08-14",
        title: "Très joli sur mon étagère",
        body: "Exactement ce que je cherchais pour ma chambre, la petite lumière est douce le soir.",
        verified: false,
        demo: true,
      },
      {
        id: "demo-2",
        author: "Julien M.",
        rating: 4,
        date: "2026-08-02",
        title: "Bel objet, livraison rapide",
        body: "Reçu en une semaine, bien emballé. Un joli détail sur mon bureau.",
        verified: false,
        demo: true,
      },
    ],
    ratingAverage: 0,
    ratingCount: 0,
    collections: ["chats", "decoration", "maison", "cadeaux"],
    // Structure editoriale propre à ce produit (chaque produit peut avoir un ordre different).
    layout: [
      "storytelling",
      "benefits",
      "cta-1",
      "editorial",
      "useCases",
      "objections",
      "value",
      "cta-2",
      "gift",
      "reviews",
      "shipping-returns",
      "faq",
      "related",
      "final-cta",
    ],
  },
  {
    id: "ventilateur-anti-mouches",
    slug: "ventilateur-anti-mouches-table",
    name: "Le Ventilateur Anti-Mouches",
    brandLine: "Maison Loravie",
    badge: "OFFRE DU MOMENT",
    // Headline retenue parmi 3 propositions :
    // A) "Enfin des repas en terrasse sans mouches." (retenue)
    // B) "Le petit ventilateur qui garde la table tranquille."
    // C) "Une brise d'air qui change tout, repas après repas."
    headline: "Enfin des repas en terrasse sans mouches.",
    subtitle:
      "Un ventilateur de table compact qui crée un flux d'air continu pour éloigner les mouches (et les moustiques), sans insecticide.",
    heroBullets: [
      "Un flux d'air continu qui éloigne les mouches du repas",
      "Autonomie annoncée jusqu'à 48h par le fabricant",
      "Format compact et léger, facile à emporter",
      "Matériau présenté comme sans danger pour les enfants",
    ],
    h1: "Ventilateur de table anti-mouches",
    shortDescription:
      "Un ventilateur de table compact qui repousse les mouches par un flux d'air continu, sans insecticide. Vendu par lot de 2.",
    description: [
      "Le Ventilateur Anti-Mouches est un ventilateur de table pensé pour un problème très concret : les mouches qui gâchent un repas en terrasse, un pique-nique ou une soirée d'été.",
      "Son fonctionnement repose sur un flux d'air continu généré par une pale multifonctionnelle, qui perturbe naturellement le vol des mouches (et des moustiques) autour de la table, sans diffusion de produit ni insecticide.",
      "Compact et léger, il se transporte facilement d'une pièce à l'autre ou en extérieur, et fonctionne au choix sur câble USB ou avec des piles sèches standard (non fournies dans l'emballage).",
    ],
    storytelling: {
      eyebrow: "Le repas sans y penser",
      title: "Les mouches gâchent souvent les meilleurs moments à table.",
      paragraphs: [
        "Un déjeuner en terrasse, un pique-nique, un dîner d'été... et une mouche qui tourne autour de l'assiette. Un détail, mais qui suffit à casser l'ambiance.",
        "Le Ventilateur Anti-Mouches a été pensé pour ça : un léger courant d'air, discret et continu, qui garde la table tranquille du début à la fin du repas.",
      ],
    },
    demoSteps: [
      {
        title: "Allumez l'appareil",
        description: "Un seul bouton suffit pour le mettre en marche, sans réglage complexe.",
      },
      {
        title: "Placez-le sur la table",
        description:
          "Son format compact permet de le poser facilement près du repas, en intérieur comme en extérieur.",
      },
      {
        title: "Profitez du flux d'air continu",
        description:
          "Le courant d'air généré éloigne naturellement les mouches, pour une autonomie annoncée jusqu'à 48h.",
      },
    ],
    objections: [
      {
        doubt: "Est-ce que ça marche vraiment sans produit chimique ?",
        response:
          "Le ventilateur agit par un flux d'air continu qui perturbe le vol des mouches, sans diffusion de produit ni insecticide.",
      },
      {
        doubt: "Est-ce adapté si j'ai des enfants à la maison ?",
        response:
          "Il est fabriqué avec un matériau présenté par le fournisseur comme sans danger pour les enfants.",
      },
      {
        doubt: "Dois-je acheter des piles en plus ?",
        response:
          "Oui : pour des raisons logistiques, les piles ne sont pas fournies dans le colis. L'appareil fonctionne au choix sur câble USB ou piles sèches standard.",
      },
      {
        doubt: "Est-ce facile à utiliser ?",
        response: "Il suffit de l'allumer : aucun réglage complexe n'est nécessaire.",
      },
      {
        doubt: "Puis-je l'emporter en pique-nique ou en camping ?",
        response: "Sa conception compacte et légère est pensée pour être transportée facilement.",
      },
    ],
    valueStack: [
      "2 ventilateurs anti-mouches de table (le lot complet)",
      "Un fonctionnement sans insecticide, par flux d'air continu",
      "Une autonomie annoncée jusqu'à 48h par unité",
      "Livraison offerte, expédition sous 24h",
      "Retours gratuits sous 30 jours",
    ],
    midCtaTexts: [
      "Convaincue par cette tranquillité retrouvée à table ?",
      "Prête à profiter de vos repas sans mouches ?",
    ],
    packSize: 2,
    packLabel: "2 pièces incluses",
    // Coût fournisseur non communiqué sur la fiche source : à corriger dès que la facture est disponible.
    costPriceUSD: 0,
    priceCHF: 19.99,
    priceEUR: 19.99,
    compareAtPriceCHF: 29.99,
    compareAtPriceEUR: 29.99,
    images: [
      {
        src: "/images/products/brise-anti-moustiques/lifestyle-table.jpg",
        alt: "Ventilateur anti-mouches posé sur une table de petit-déjeuner en extérieur",
        caption: "Sur la table, pendant le repas",
      },
      {
        src: "/images/products/brise-anti-moustiques/lot-de-deux.jpg",
        alt: "Lot de deux ventilateurs anti-mouches de table Maison Loravie",
        caption: "Vendu par lot de 2",
      },
    ],
    benefits: [
      {
        icon: "wind",
        title: "Un courant d'air qui protège la table",
        description:
          "Le ventilateur crée un flux d'air continu qui éloigne naturellement les mouches du repas.",
      },
      {
        icon: "bug",
        title: "Sans insecticide, sans prise de tête",
        description:
          "Pas de spray, pas d'odeur : juste un mouvement d'air qui fait le travail, en continu.",
      },
      {
        icon: "battery",
        title: "Jusqu'à 48h d'autonomie annoncée",
        description:
          "Pensé pour suivre un repas, un après-midi au jardin ou un week-end, sans être branché en permanence.",
      },
      {
        icon: "baby",
        title: "Un matériau pensé pour la maison",
        description:
          "Conçu avec un matériau présenté par le fournisseur comme sans danger pour les enfants.",
      },
    ],
    useCases: [
      {
        title: "Terrasse",
        description: "Pour des repas en extérieur sans avoir à chasser les mouches en permanence.",
      },
      {
        title: "Pique-nique",
        description: "Un format compact qui se glisse facilement dans un sac ou un panier.",
      },
      {
        title: "Camping",
        description: "Fonctionne sur piles sèches, pratique loin d'une prise électrique.",
      },
      {
        title: "Balcon",
        description: "Une protection discrète pour les dîners d'été en hauteur.",
      },
      {
        title: "Cuisine d'été",
        description: "Utile près du plan de travail lorsque les fenêtres restent ouvertes.",
      },
      {
        title: "Repas en famille",
        description: "Pour profiter du repas sans interruption, du début à la fin.",
      },
    ],
    faq: [
      {
        question: "Combien de pièces sont incluses ?",
        answer: "Ce produit est vendu par lot de 2 ventilateurs anti-mouches.",
      },
      {
        question: "Les piles sont-elles fournies ?",
        answer:
          "Non. Pour des raisons logistiques et de transport, les piles ne sont pas incluses dans l'emballage.",
      },
      {
        question: "Comment l'alimenter ?",
        answer:
          "Le modèle fonctionne au choix sur câble USB ou avec des piles sèches standard (non fournies).",
      },
      {
        question: "Est-ce efficace contre les mouches ?",
        answer:
          "Le ventilateur crée un flux d'air continu qui éloigne naturellement les mouches (et les moustiques), sans insecticide.",
      },
      {
        question: "Quelle est l'autonomie annoncée ?",
        answer: "Jusqu'à 48 heures, selon les informations communiquées par le fabricant.",
      },
      {
        question: "Est-ce adapté à un usage extérieur (terrasse, pique-nique) ?",
        answer:
          "Oui, sa conception compacte et légère est pensée pour un usage à l'extérieur comme à l'intérieur.",
      },
      {
        question: "Le matériau est-il sans danger pour les enfants ?",
        answer:
          "Il est fabriqué avec un matériau présenté par le fabricant comme sans danger pour les enfants.",
      },
      {
        question: "Est-ce facile à utiliser ?",
        answer: "Oui : un seul bouton pour l'allumer, sans réglage complexe.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer:
          "Votre commande est expédiée sous 24h. Le délai de livraison estimé est de 4 à 8 jours ouvrables.",
      },
      {
        question: "La livraison est-elle gratuite ?",
        answer: "Oui, la livraison est offerte pour toutes les commandes, sans minimum d'achat.",
      },
      {
        question: "Puis-je retourner le produit ?",
        answer:
          "Oui, vous disposez de 30 jours après réception pour changer d'avis et retourner votre commande gratuitement.",
      },
    ],
    seo: {
      title: "Ventilateur de table anti-mouches (lot de 2) | Maison Loravie",
      metaDescription:
        "Éloignez les mouches de vos repas avec ce ventilateur de table compact, sans insecticide. Lot de 2, autonomie annoncée jusqu'à 48h. Livraison offerte.",
      keywords: [
        "ventilateur anti-mouches",
        "chasse mouches table",
        "repulsif mouches sans produit chimique",
        "ventilateur anti-mouches terrasse",
        "anti-mouches pique-nique",
        "ventilateur anti-insectes portable",
        "anti-moustique table",
      ],
    },
    promotion: {
      active: true,
      label: "Offre du moment",
      // Pas de vraie date de fin configuree : le badge et le prix barre restent affiches
      // sans compte a rebours tant qu'aucune echeance réelle n'est définie.
      endsAt: undefined,
    },
    shipping: {
      freeShipping: true,
      dispatchWithinHours: 24,
      minDays: 4,
      maxDays: 8,
      returnDays: 30,
    },
    // Avis réels, vérifiés par Maison Loravie (import du système d'avis).
    reviews: ventilateurAntiMouchesReviews,
    ratingAverage: 4.8,
    ratingCount: ventilateurAntiMouchesReviews.length,
    collections: ["maison"],
    layout: [
      "storytelling",
      "benefits",
      "cta-1",
      "demo",
      "editorial",
      "useCases",
      "objections",
      "offer",
      "cta-2",
      "reviews",
      "shipping-returns",
      "faq",
      "related",
      "final-cta",
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Max 1-2 produits complementaires : le produit principal doit rester dominant. */
export function getRelatedProducts(currentSlug: string, limit = 2): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
