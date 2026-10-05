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
    status: "published",
    // Objet decoratif simple, pas de categorie a conformite renforcee (pas de pile/batterie,
    // pas d'usage bebe/animal direct) : aucune verification specifique requise.
    evaluation: {
      demandScore: 3,
      differentiationScore: 4,
      supplierQualityScore: 3,
      competitionScore: 3,
      priceScore: 4,
      returnRiskScore: 4,
      estimatedMarginAfterCosts: 0.45,
      notes:
        "Premier produit de lancement. Pas encore de donnees de vente reelles : score de demande a reevaluer apres les premieres campagnes.",
    },
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
        src: "/images/products/lumiere-feline/principal.jpg",
        alt: "Crochet décoratif en forme de chat avec élément lumineux posé sur une étagère",
        caption: "La Petite Lanterne Féline sur une étagère de chambre",
      },
      {
        src: "/images/products/lumiere-feline/detail-figurine.jpg",
        alt: "Détail de la figurine de chat du crochet décoratif La Petite Lanterne Féline",
        caption: "Le détail de la silhouette du chat",
      },
      {
        src: "/images/products/lumiere-feline/lanterne-allumee.jpg",
        alt: "Élément lumineux allumé du crochet mural pour chat",
        caption: "La lanterne diffuse une lumière douce le soir",
      },
      {
        src: "/images/products/lumiere-feline/ambiance-bureau.jpg",
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
    // Pas de donnee de stock fiable disponible pour ce produit : `stock` reste
    // volontairement absent, donc aucun indicateur/barre de stock ne s'affiche
    // (voir StockIndicator). A renseigner des qu'une source reelle existe.
    collections: ["maison-decoration", "nos-compagnons", "idees-cadeaux"],
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
    status: "published",
    // Produit electrique (USB/piles) : verification de securite/conformite/tracabilite
    // requise avant toute nouvelle campagne d'envergure. Pas encore realisee formellement
    // (pas de certificat CE ni de fiche de securite batterie recus du fournisseur) :
    // verified reste false tant que ces documents ne sont pas obtenus et verifies.
    compliance: {
      categories: ["electrical"],
      verified: false,
      notes:
        "A obtenir du fournisseur avant scale : attestation de conformite (CE ou equivalent), fiche de securite batterie/chargeur, et confirmation que le colis n'inclut reellement pas de batterie (coherent avec la fiche produit).",
    },
    evaluation: {
      demandScore: 4,
      differentiationScore: 3,
      supplierQualityScore: 3,
      competitionScore: 2,
      priceScore: 4,
      returnRiskScore: 3,
      estimatedMarginAfterCosts: 0.4,
      notes:
        "123 avis verifies importes (note 4.8/5) : bon signal de satisfaction produit. Marge a reconfirmer une fois le cout fournisseur reel communique (costPriceUSD non renseigne).",
    },
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
    // Idem : aucune synchronisation fournisseur ni suivi back-office n'existe
    // encore pour ce produit, donc `stock` reste absent plutot que d'afficher
    // un chiffre invente.
    collections: ["maison-decoration"],
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
  {
    id: "coussin-bras-allaitement",
    slug: "coussin-bras-allaitement-biberon",
    status: "published",
    // Categorie "bebe" : verification requise avant publication/campagne.
    // Page fournisseur AliExpress inaccessible depuis cet environnement
    // (domaine bloque par la politique reseau) : composition exacte du
    // tissu/rembourrage et instructions de lavage non confirmees, donc
    // absentes de la fiche (voir FAQ) plutot que devinees. Dimensions et
    // poids ont pu etre confirmes via l'apercu IA AliExpress (25x23cm,
    // ~180g, coherent avec les photos) ; cet apercu porte lui-meme la
    // mention "genere par IA, ne reflete pas l'opinion du vendeur", donc
    // seuls les faits physiques verifiables sur les photos ont ete retenus
    // (la mention produit "12 ans et plus" qu'il contenait est ignoree,
    // visiblement une erreur de classification fournisseur).
    compliance: {
      categories: ["baby"],
      verified: false,
      notes:
        "A obtenir du fournisseur avant publication/campagne : composition exacte du tissu et du rembourrage, conformite REACH/substances reglementees, instructions de lavage et d'entretien. La page produit AliExpress etant bloquee par la politique reseau de cet environnement, ces informations n'ont pas pu etre extraites et ne sont donc pas affichees.",
    },
    evaluation: {
      demandScore: 4,
      differentiationScore: 3,
      supplierQualityScore: 3,
      competitionScore: 2,
      priceScore: 4,
      returnRiskScore: 3,
      estimatedMarginAfterCosts: 0,
      notes:
        "Cout fournisseur non communique (page source inaccessible) : costPriceUSD et la marge estimee sont a renseigner des que la facture/fiche fournisseur est disponible. 8 motifs reels disponibles (voir variants) : bon potentiel de reassort sans nouveau produit.",
    },
    name: "Le Coussin Tendresse",
    brandLine: "Maison Loravie",
    badge: "NOUVEAUTÉ",
    headline: "Un appui tout doux pour le bras, tétée après tétée.",
    subtitle:
      "Un coussin de bras pensé pour soutenir bébé pendant l'allaitement ou le biberon, et soulager l'épaule et le bras qui fatiguent vite.",
    heroBullets: [
      "Un soutien moelleux qui soulage le bras pendant la tétée",
      "Se glisse facilement sous bébé, dans le canapé comme au lit",
      "Format compact, facile à emporter d'une pièce à l'autre",
      "Disponible en 8 motifs",
    ],
    h1: "Coussin de bras pour allaitement et biberon",
    shortDescription:
      "Un coussin de bras moelleux qui soutient bébé et soulage le bras pendant l'allaitement ou le biberon, disponible en 8 motifs.",
    description: [
      "Le Coussin Tendresse est un petit coussin de bras pensé pour les longues séances d'allaitement ou de biberon, lorsque le bras et l'épaule commencent à fatiguer bien avant que bébé ait fini.",
      "Glissé sous le bras, il surélève et soutient doucement la tête et le corps de bébé, pour une position plus stable et plus confortable, aussi bien assise dans le canapé qu'installée au lit.",
      "Son format compact et léger permet de le transporter facilement d'une pièce à l'autre, et ses 8 motifs permettent de choisir celui qui correspond le mieux à votre intérieur ou à vos goûts.",
    ],
    storytelling: {
      eyebrow: "Les petits détails comptent",
      title: "Un bras qui ne fatigue plus avant la fin de la tétée.",
      paragraphs: [
        "Les premières semaines avec bébé sont faites de petits moments répétés, tétée après tétée, biberon après biberon — et d'un bras qui finit toujours par fatiguer avant que bébé ait terminé.",
        "Le Coussin Tendresse a été pensé pour ce moment précis : un appui doux et stable qui soulage le bras et l'épaule, pour profiter pleinement de ces instants avec bébé plutôt que de guetter la fin.",
      ],
    },
    objections: [
      {
        doubt: "Est-ce que ce sera vraiment confortable, pour bébé comme pour moi ?",
        response:
          "Le coussin est pensé pour épouser la forme du bras et soutenir doucement bébé, afin de soulager la tenue prolongée sans la rendre instable.",
      },
      {
        doubt: "Est-ce que c'est facile à utiliser dès la première fois ?",
        response:
          "Il suffit de le glisser sous le bras qui porte bébé : aucun réglage ni accessoire complexe n'est nécessaire.",
      },
      {
        doubt: "Est-ce adapté à un usage quotidien, plusieurs fois par jour ?",
        response:
          "Son format compact et léger est pensé pour suivre le rythme des tétées et des biberons, dans toutes les pièces de la maison.",
      },
      {
        doubt: "Combien de temps vais-je attendre ma commande ?",
        response:
          "Votre commande est expédiée sous 24h, pour une réception estimée entre 4 et 8 jours ouvrables.",
      },
      {
        doubt: "Et si le coussin ne convient pas une fois reçu ?",
        response:
          "Vous disposez de 30 jours après réception pour changer d'avis et le retourner gratuitement.",
      },
    ],
    valueStack: [
      "Un coussin de bras pensé pour l'allaitement et le biberon",
      "8 motifs au choix",
      "Livraison offerte, expédition sous 24h",
      "Retours gratuits sous 30 jours",
      "Paiement à 100% sécurisé",
    ],
    midCtaTexts: [
      "Convaincue par ce petit soutien du quotidien ?",
      "Prête à soulager votre bras dès la prochaine tétée ?",
    ],
    // Cout fournisseur non communique (page source bloquee) : a corriger des que la facture est disponible.
    costPriceUSD: 0,
    priceCHF: 19.9,
    priceEUR: 19.9,
    compareAtPriceCHF: 29.9,
    compareAtPriceEUR: 29.9,
    images: [
      {
        src: "/images/products/coussin-allaitement/main_images/main-image-1.jpeg",
        alt: "Coussin de bras motif savane soutenant un bébé pendant le biberon",
        caption: "Le Coussin Tendresse pendant le biberon",
      },
      {
        src: "/images/products/coussin-allaitement/main_images/main-image-6.jpeg",
        alt: "Coussin de bras motif chevron gris utilisé pendant l'allaitement",
        caption: "Un appui doux pendant l'allaitement",
      },
      {
        src: "/images/products/coussin-allaitement/main_images/main-image-7.jpeg",
        alt: "Dimensions du coussin de bras : 23 cm par 25 cm",
        caption: "Dimensions : environ 23 × 25 cm",
      },
      {
        src: "/images/products/coussin-allaitement/main_images/main-image-3.jpeg",
        alt: "Les 8 motifs disponibles du Coussin Tendresse",
        caption: "8 motifs disponibles",
      },
    ],
    variants: [
      {
        id: "chevron-gris",
        label: "Chevron gris",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-14.jpeg",
          alt: "Coussin de bras motif chevron gris et blanc",
        },
      },
      {
        id: "savane",
        label: "Savane",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-9.jpeg",
          alt: "Coussin de bras motif savane avec girafe, lion et éléphant",
        },
      },
      {
        id: "etoiles-roses",
        label: "Étoiles roses",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-8.jpeg",
          alt: "Coussin de bras rose à motif étoiles blanches",
        },
      },
      {
        id: "poissons",
        label: "Poissons",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-10.jpeg",
          alt: "Coussin de bras gris foncé à motif poissons",
        },
      },
      {
        id: "couronnes",
        label: "Couronnes",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-11.jpeg",
          alt: "Coussin de bras gris à motif couronnes",
        },
      },
      {
        id: "etoiles-mauve",
        label: "Étoiles mauve",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-13.jpeg",
          alt: "Coussin de bras mauve à motif étoiles",
        },
      },
      {
        id: "arc-en-ciel",
        label: "Arc-en-ciel",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-12.jpeg",
          alt: "Coussin de bras blanc à motif arc-en-ciel multicolore",
        },
      },
      {
        id: "foret-nuit",
        label: "Forêt nuit",
        image: {
          src: "/images/products/coussin-allaitement/main_images/main-image-15.jpeg",
          alt: "Coussin de bras bleu nuit à motif floral et lapin",
        },
      },
    ],
    benefits: [
      {
        icon: "baby",
        title: "Un appui qui soulage le bras",
        description:
          "Le coussin soutient doucement bébé pendant la tétée ou le biberon, pour un bras et une épaule moins sollicités.",
      },
      {
        icon: "shield-check",
        title: "Pensé pour le confort de bébé",
        description:
          "Une forme moelleuse et stable, pensée pour accompagner bébé en douceur pendant le repas.",
      },
      {
        icon: "home",
        title: "Partout dans la maison",
        description:
          "Compact et léger, il se glisse facilement du canapé à la chambre, selon l'endroit choisi pour le repas.",
      },
      {
        icon: "gift",
        title: "Une attention idéale pour une naissance",
        description:
          "Un accessoire pratique et discret, parfait pour accompagner un cadeau de naissance.",
      },
    ],
    useCases: [
      {
        title: "Salon",
        description: "Installée dans le canapé, pour un appui stable pendant la tétée ou le biberon.",
      },
      {
        title: "Chambre",
        description: "Pour les tétées du soir ou de nuit, installée confortablement au lit.",
      },
      {
        title: "Allaitement",
        description: "Un soutien doux sous le bras, pour soulager l'épaule pendant les longues séances.",
      },
      {
        title: "Biberon",
        description: "Une position plus stable pour bébé, et un bras moins sollicité pour le parent.",
      },
      {
        title: "Chez les grands-parents",
        description: "Facile à transporter, pour retrouver le même confort en dehors de la maison.",
      },
      {
        title: "Cadeau de naissance",
        description: "Un accessoire pratique et original à offrir, disponible en plusieurs motifs.",
      },
    ],
    faq: [
      {
        question: "Quelles sont les dimensions du coussin ?",
        answer: "Le coussin mesure environ 25 cm de large sur 23 cm de haut.",
      },
      {
        question: "Quel est le poids du coussin ?",
        answer: "Environ 180 g : léger et facile à transporter d'une pièce à l'autre ou en déplacement.",
      },
      {
        question: "Quels motifs sont disponibles ?",
        answer:
          "Le coussin est disponible en 8 motifs : chevron gris, savane, étoiles roses, poissons, couronnes, étoiles mauve, arc-en-ciel et forêt nuit.",
      },
      {
        question: "En quelle matière est la housse ?",
        answer:
          "Information à confirmer par notre équipe dès que la fiche technique du fournisseur sera disponible.",
      },
      {
        question: "La housse est-elle lavable ?",
        answer:
          "Instructions d'entretien à confirmer par notre équipe dès que la fiche technique du fournisseur sera disponible.",
      },
      {
        question: "Convient-il à l'allaitement et au biberon ?",
        answer:
          "Oui, il est pensé pour soutenir bébé dans les deux cas, en soulageant le bras et l'épaule pendant le repas.",
      },
      {
        question: "Est-ce facile à transporter ?",
        answer: "Oui, son format compact et léger permet de le déplacer facilement d'une pièce à l'autre.",
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
      title: "Coussin de bras pour allaitement et biberon | Maison Loravie",
      metaDescription:
        "Découvrez Le Coussin Tendresse, un coussin de bras moelleux pour soulager le bras pendant l'allaitement ou le biberon. 8 motifs au choix, livraison offerte.",
      keywords: [
        "coussin allaitement",
        "coussin bras bébé",
        "coussin biberon",
        "accessoire allaitement",
        "coussin soutien bras bébé",
        "cadeau naissance",
      ],
    },
    promotion: {
      active: true,
      label: "Offre de lancement",
      endsAt: undefined,
    },
    shipping: {
      freeShipping: true,
      dispatchWithinHours: 24,
      minDays: 4,
      maxDays: 8,
      returnDays: 30,
    },
    // IMPORTANT : deux fichiers ont ete fournis pour ce produit (le second
    // cense remplacer le premier par de "vrais avis verifies"). Verification
    // faite : l'onglet s'appelle toujours litteralement "145 avis fictifs",
    // et les 145 lignes (noms, dates, textes) sont identiques au premier
    // fichier — seules la mention "(fictif)" dans les en-tetes et l'onglet
    // d'avertissement ont ete retirees. Ce ne sont donc PAS des avis reels :
    // ils restent `demo: true` et n'alimentent ni ratingAverage ni
    // ratingCount, exactement comme les avis demo de La Petite Lanterne
    // Feline. A remplacer des qu'un vrai export d'avis clients existe.
    reviews: [
      {
        id: "demo-1",
        author: "Camille X.",
        rating: 4,
        date: "2026-04-27",
        title: "Satisfaite dans l'ensemble",
        body: "Bonne taille pour mon usage et facile à ranger après la tétée.",
        verified: false,
        demo: true,
      },
      {
        id: "demo-2",
        author: "Emma V.",
        rating: 5,
        date: "2026-07-30",
        title: "Très pratique au quotidien",
        body: "Simple à utiliser et peu encombrant. C'est ce que je recherchais.",
        verified: false,
        demo: true,
      },
      {
        id: "demo-3",
        author: "Camille C.",
        rating: 5,
        date: "2026-07-08",
        title: "Un vrai petit soutien",
        body: "Petit accessoire pratique, facile à prendre avec moi d'une pièce à l'autre.",
        verified: false,
        demo: true,
      },
    ],
    ratingAverage: 0,
    ratingCount: 0,
    // Pas de donnee de stock fiable disponible : `stock` reste absent.
    collections: ["bebe-famille", "idees-cadeaux"],
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
    id: "ventilateur-plafond-led",
    slug: "ventilateur-plafond-invisible-led",
    status: "published",
    // Categorie "electrical" + fixation plafond (installation electrique,
    // potentiellement cablee en dur) : risque plus eleve qu'un simple
    // appareil USB/piles. Verification renforcee requise avant publication.
    // 2026-10-05 : l'operateur a change de fournisseur pour celui-ci
    // precisement parce que le premier (CCC uniquement) ne convenait pas.
    // Le nouveau fournisseur declare "Certifie CE, CCC" dans sa description
    // produit. C'est un progres reel (le premier fournisseur n'affichait
    // meme pas CE), mais ca reste du texte de fiche produit, pas un
    // certificat/numero document fourni : verified reste donc false tant
    // qu'on n'a pas le document ou numero de certificat lui-meme.
    // Alimentation 220V AC, plage 90-260V (couvre le 230V suisse/europeen).
    // Luminosite "2000 a 82000 lumens" annoncee : 82 000 lumens est
    // physiquement aberrant pour un plafonnier domestique (equivalent a un
    // projecteur de stade) — tres probablement une erreur de saisie sur la
    // fiche fournisseur. Non repris tel quel sur la page, a faire corriger
    // aupres du fournisseur avant publication.
    compliance: {
      categories: ["electrical"],
      verified: false,
      notes:
        "Nouveau fournisseur (change le 2026-10-05) : declare 'Certifie CE, CCC' dans sa description produit, alimentation 220V AC / plage 90-260V, garantie 1 an. Notice d'utilisation (Use and Care Guide) fournie par l'operateur le 2026-10-05 : identifie un fabricant (Zhongshanshengxi Lighting Co., Ltd, Zhongshan, Chine) et surtout un REPRESENTANT UE AGREE nomme (VAT SPEED SL, Calle Antonio Salvador N99.1, 28026 Madrid, Espagne, services@vatspeed-eu.com) — c'est un vrai signal positif, une structure de mise en conformite UE existe reellement, pas juste une mention CE en texte libre. La notice installation exige explicitement un electricien qualifie/agree, coherent avec la recommandation deja affichee sur la page. Reste malgre tout a obtenir avant publication/campagne : la Declaration UE de Conformite elle-meme (document avec numero de reference et normes testees, ex. EN 60598), pas seulement la presence d'un REP UE. verified reste donc false, mais le dossier est nettement plus credible qu'au depart.",
    },
    evaluation: {
      demandScore: 3,
      differentiationScore: 3,
      supplierQualityScore: 2,
      competitionScore: 3,
      priceScore: 3,
      returnRiskScore: 2,
      estimatedMarginAfterCosts: 0,
      notes:
        "Produit a risque de retour plus eleve qu'un petit accessoire (prix unitaire important, installation electrique, casse possible au transport). Cout fournisseur et marge non communiques (aucune fiche source fournie). A reevaluer une fois la fiche technique et le cout reel obtenus.",
    },
    name: "Le Ventilateur Plafonnier Lumineux",
    brandLine: "Maison Loravie",
    badge: "OFFRE DU MOMENT",
    headline: "Un souffle d'air frais, une lumière douce, sans l'ajouter au décor.",
    subtitle:
      "Un ventilateur de plafond au design épuré avec éclairage LED intégré, fonctionnement silencieux et télécommande, pensé pour la chambre comme pour la salle à manger.",
    heroBullets: [
      "Pales discrètes qui se fondent dans un plafond déjà soigné",
      "Éclairage LED intégré pour une lumière d'ambiance ou principale",
      "Fonctionnement silencieux annoncé par le fournisseur",
      "Télécommande incluse pour piloter vitesse et lumière sans se lever",
    ],
    h1: "Ventilateur de plafond invisible avec éclairage LED",
    shortDescription:
      "Un ventilateur de plafond au design épuré, avec éclairage LED intégré, fonctionnement silencieux et télécommande, pour la chambre ou la salle à manger.",
    description: [
      "Le Ventilateur Plafonnier Lumineux associe deux fonctions en un seul objet discret : un ventilateur de plafond à pales rétractables et un plafonnier LED, pensés pour s'intégrer à un intérieur déjà soigné plutôt que pour s'y imposer.",
      "Le fournisseur annonce un fonctionnement silencieux ainsi qu'un grand volume d'air brassé. Une télécommande est fournie pour régler la vitesse de ventilation et l'intensité de l'éclairage à distance, sans pile à installer dans l'appareil lui-même.",
      "Son format pensé pour la chambre et la salle à manger en fait une solution double usage : un point lumineux principal le soir, un peu de fraîcheur en plus dès que la pièce en a besoin.",
    ],
    storytelling: {
      eyebrow: "Un objet, deux usages",
      title: "Un plafond soigné n'a pas à choisir entre lumière et fraîcheur.",
      paragraphs: [
        "Entre un plafonnier et un ventilateur, il faut souvent choisir — ou superposer deux objets qui ne se répondent pas vraiment.",
        "Le Ventilateur Plafonnier Lumineux a été pensé pour éviter ce compromis : un éclairage LED intégré et des pales qui se fondent dans le plafond, pilotés d'un seul geste depuis le canapé ou le lit.",
      ],
    },
    objections: [
      {
        doubt: "Est-ce que l'installation est compliquée ?",
        response:
          "Un assemblage est nécessaire à la réception, puis une fixation au plafond sur platine de montage. Nous recommandons de faire réaliser le raccordement électrique par un professionnel.",
      },
      {
        doubt: "Est-ce que ça fait du bruit la nuit ?",
        response:
          "Le fournisseur annonce un fonctionnement silencieux, mais nous n'avons pas encore de mesure en décibels à communiquer.",
      },
      {
        doubt: "Est-ce que la lumière suffit comme éclairage principal ?",
        response:
          "L'éclairage LED intégré est pensé pour servir à la fois de lumière d'ambiance et d'éclairage principal, selon le réglage choisi à la télécommande.",
      },
      {
        doubt: "Combien de temps vais-je attendre ma commande ?",
        response:
          "Votre commande est expédiée sous 24h, pour une réception estimée entre 4 et 8 jours ouvrables.",
      },
      {
        doubt: "Et si le produit ne convient pas une fois reçu ?",
        response:
          "Vous disposez de 30 jours après réception pour changer d'avis et le retourner gratuitement.",
      },
    ],
    valueStack: [
      "Un ventilateur de plafond et un plafonnier LED réunis en un seul objet",
      "Moteur DC et télécommande incluse",
      "Livraison offerte, expédition sous 24h",
      "Retours gratuits sous 30 jours",
      "Paiement à 100% sécurisé",
    ],
    midCtaTexts: [
      "Convaincue par ce double usage lumière et fraîcheur ?",
      "Prête à moderniser votre plafond ?",
    ],
    costPriceUSD: 0,
    priceCHF: 149.99,
    priceEUR: 149.99,
    compareAtPriceCHF: 199.99,
    compareAtPriceEUR: 199.99,
    images: [
      {
        src: "/images/products/ventilateur-plafond-led/salle-a-manger.jpg",
        alt: "Ventilateur de plafond invisible blanc avec éclairage LED allumé au-dessus d'une salle à manger",
        caption: "Finition blanche, au-dessus de la table à manger",
      },
      {
        src: "/images/products/ventilateur-plafond-led/main-image-3.jpeg",
        alt: "Ventilateur de plafond invisible blanc avec éclairage LED, vue rapprochée en salle à manger",
        caption: "Vue rapprochée, finition blanche",
      },
      {
        src: "/images/products/ventilateur-plafond-led/main-image-4.jpeg",
        alt: "Ventilateur de plafond invisible blanc avec éclairage LED dans un salon",
        caption: "Finition blanche, dans un salon",
      },
      {
        src: "/images/products/ventilateur-plafond-led/main-image-5.jpeg",
        alt: "Ventilateur de plafond invisible noir avec éclairage LED face à un meuble TV",
        caption: "Finition noire, dans un salon",
      },
    ],
    variants: [
      {
        id: "blanc",
        label: "Blanc",
        image: {
          src: "/images/products/ventilateur-plafond-led/salle-a-manger.jpg",
          alt: "Ventilateur de plafond finition blanche",
        },
      },
      {
        id: "noir",
        label: "Noir",
        image: {
          src: "/images/products/ventilateur-plafond-led/main-image-5.jpeg",
          alt: "Ventilateur de plafond finition noire",
        },
      },
    ],
    benefits: [
      {
        icon: "fan",
        title: "Un grand volume d'air, en discret",
        description:
          "Des pales rétractables qui se fondent dans le plafond à l'arrêt, pour un design épuré même en marche.",
      },
      {
        icon: "lightbulb",
        title: "Un éclairage LED intégré",
        description:
          "Une seule installation pour la lumière et la ventilation, réglable depuis la télécommande fournie.",
      },
      {
        icon: "check",
        title: "Télécommande incluse",
        description: "Vitesse de ventilation et intensité lumineuse se règlent sans se lever.",
      },
      {
        icon: "home",
        title: "Pensé pour la chambre et la salle à manger",
        description:
          "Un format et un design pensés pour s'intégrer aux pièces à vivre comme aux chambres.",
      },
    ],
    useCases: [
      {
        title: "Chambre",
        description: "Une lumière douce le soir et un peu de fraîcheur pour mieux dormir l'été.",
      },
      {
        title: "Salle à manger",
        description: "Un plafonnier élégant au-dessus de la table, qui rafraîchit la pièce aux beaux jours.",
      },
      {
        title: "Salon",
        description: "Un point lumineux central qui remplace un plafonnier classique.",
      },
      {
        title: "Bureau à domicile",
        description: "Un peu d'air en plus pendant les journées chaudes, sans ventilateur au sol.",
      },
    ],
    faq: [
      {
        question: "Comment s'installe ce ventilateur plafonnier ?",
        answer:
          "Il se fixe au plafond sur une platine de montage, comme la plupart des ventilateurs plafonniers de ce type, et se raccorde au réseau électrique du logement. Nous recommandons de faire réaliser l'installation par un électricien qualifié. Assemblage requis à la réception.",
      },
      {
        question: "Est-il compatible avec le réseau électrique suisse (230V) ?",
        answer:
          "Oui, l'appareil fonctionne en 220V AC avec une plage de tension de 90 à 260V, ce qui couvre le réseau électrique suisse et européen (230V).",
      },
      {
        question: "Quel est le niveau sonore du moteur ?",
        answer:
          "Le fournisseur annonce un fonctionnement silencieux. Nous ne disposons pas encore d'une mesure précise en décibels.",
      },
      {
        question: "La télécommande est-elle fournie ?",
        answer:
          "Oui, une télécommande est incluse pour régler la vitesse de ventilation et l'intensité lumineuse (éclairage dimmable). Les piles de la télécommande ne sont pas fournies.",
      },
      {
        question: "Quelles sont les dimensions et l'envergure des pales ?",
        answer:
          "Dimensions exactes et envergure des pales à confirmer auprès du fournisseur actuel avant la mise en vente définitive. L'appareil intègre une source lumineuse LED dimmable à distance.",
      },
      {
        question: "L'ampoule est-elle fournie ?",
        answer:
          "L'éclairage LED est intégré à l'appareil (non remplaçable séparément), selon la fiche fournisseur.",
      },
      {
        question: "Quels coloris sont disponibles ?",
        answer: "Le ventilateur est disponible en deux finitions : blanc et noir.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer: "Votre commande est expédiée sous 24h. Le délai de livraison estimé est de 4 à 8 jours ouvrables.",
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
      title: "Ventilateur de plafond invisible avec éclairage LED | Maison Loravie",
      metaDescription:
        "Découvrez Le Ventilateur Plafonnier Lumineux : pales rétractables, éclairage LED intégré, fonctionnement silencieux et télécommande. Pour chambre et salle à manger.",
      keywords: [
        "ventilateur de plafond led",
        "ventilateur plafonnier invisible",
        "ventilateur plafond silencieux",
        "plafonnier ventilateur chambre",
        "ventilateur plafond télécommande",
      ],
    },
    promotion: {
      active: true,
      label: "Offre du moment",
      endsAt: undefined,
    },
    shipping: {
      freeShipping: true,
      dispatchWithinHours: 24,
      minDays: 4,
      maxDays: 8,
      returnDays: 30,
    },
    // Aucun avis fourni pour ce produit : pas de bloc demo invente, la
    // section Avis affichera simplement "les avis arriveront apres les
    // premieres commandes" tant qu'aucun avis (demo ou reel) n'existe.
    reviews: [],
    ratingAverage: 0,
    ratingCount: 0,
    collections: ["maison-decoration"],
    layout: [
      "storytelling",
      "benefits",
      "cta-1",
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
  {
    id: "meduse-dansante",
    slug: "meduse-dansante-jouet-interactif",
    status: "published",
    // Jouet pour enfant + electronique/piles : double vigilance. En Suisse/UE,
    // un jouet vendu doit porter le marquage CE et, le cas echeant, un
    // avertissement d'age et de petites pieces (directive jouets 2009/48/CE).
    // Fiche technique fournisseur recue le 2026-10-05 (reference modele
    // HX178) : CE declare par le fournisseur, "pas de batterie" (pile non
    // fournie/non necessaire selon la fiche), age recommande 3 ans et plus,
    // materiau plastique, categorie "animaux electroniques", avertissement
    // standard "ne pas exposer au feu". verified reste false : ce sont des
    // champs d'une fiche produit, pas la Declaration UE de Conformite
    // elle-meme — le document n'a pas ete transmis. Statut publie malgre
    // tout (regle de workflow du 2026-10-05) : rien n'indique que le
    // produit soit non conforme, seule la documentation reste a obtenir.
    compliance: {
      categories: ["baby", "electrical"],
      verified: false,
      notes:
        "Fiche fournisseur recue : CE declare (modele HX178), age recommande 3 ans et plus, materiau plastique. Alimentation confirmee par l'operateur le 2026-10-05 : fonctionne avec 3 piles AA, non fournies. A obtenir avant publication/campagne : le document de conformite CE lui-meme (pas seulement la mention sur la fiche produit).",
    },
    evaluation: {
      demandScore: 4,
      differentiationScore: 3,
      supplierQualityScore: 2,
      competitionScore: 3,
      priceScore: 4,
      returnRiskScore: 3,
      estimatedMarginAfterCosts: 0,
      notes:
        "Cout fournisseur non communique : costPriceUSD et marge a renseigner des que disponibles. Categorie jouet enfant : ne pas pousser en publicite avant d'avoir le marquage CE et l'age recommande reels (risque reglementaire sinon, pas seulement commercial).",
    },
    name: "La Méduse Dansante",
    brandLine: "Maison Loravie",
    badge: "OFFRE DU MOMENT",
    headline: "Elle tourne, elle danse, elle illumine la pièce.",
    subtitle:
      "Un jouet méduse interactif qui danse en musique, s'illumine de couleurs et évite les obstacles grâce à son capteur intégré.",
    heroBullets: [
      "Musique entraînante et lumières LED colorées",
      "Tourne à 360° et se déplace dans tous les sens",
      "Détection d'obstacles annoncée par le fabricant",
      "Disponible en vert menthe ou rose",
    ],
    h1: "Jouet méduse dansante avec lumières LED et détection d'obstacles",
    shortDescription:
      "Un jouet méduse interactif qui danse en musique, s'illumine de couleurs LED et évite les obstacles. Disponible en 2 couleurs.",
    description: [
      "La Méduse Dansante est un jouet interactif pensé pour animer une chambre d'enfant : elle tourne sur elle-même, se déplace dans toutes les directions et danse en musique dès qu'on l'allume.",
      "Ses lumières LED colorées s'activent avec le mouvement, et le fabricant annonce un capteur qui lui permet de détecter les obstacles et d'ajuster sa trajectoire plutôt que de rester bloquée contre un meuble.",
      "Disponible en vert menthe ou en rose, elle est pensée comme un petit compagnon ludique autant qu'une idée cadeau facile à offrir.",
    ],
    storytelling: {
      eyebrow: "Un peu de danse dans la journée",
      title: "Un jouet qui capte l'attention sans se contenter de clignoter.",
      paragraphs: [
        "Entre les jouets qui s'allument et ceux qui bougent vraiment, il y a souvent un monde. La Méduse Dansante a été pensée pour réunir les deux : du mouvement, de la musique, de la couleur.",
        "Son capteur d'obstacles annoncé par le fabricant lui permet de se déplacer sans rester coincée au premier pied de chaise venu, pour un jouet qu'on peut regarder évoluer plutôt que remettre en place sans arrêt.",
      ],
    },
    objections: [
      {
        doubt: "À partir de quel âge est-il adapté ?",
        response:
          "Le fournisseur recommande cet article à partir de 3 ans.",
      },
      {
        doubt: "Les piles sont-elles fournies ?",
        response: "Le jouet fonctionne avec 3 piles AA, non fournies dans l'emballage.",
      },
      {
        doubt: "Est-ce que ça fonctionne vraiment, la détection d'obstacles ?",
        response:
          "C'est une fonctionnalité annoncée par le fabricant ; nous n'avons pas encore pu la tester nous-mêmes de façon indépendante.",
      },
      {
        doubt: "Combien de temps vais-je attendre ma commande ?",
        response:
          "Votre commande est expédiée sous 24h, pour une réception estimée entre 4 et 8 jours ouvrables.",
      },
      {
        doubt: "Et si le produit ne convient pas une fois reçu ?",
        response:
          "Vous disposez de 30 jours après réception pour changer d'avis et le retourner gratuitement.",
      },
    ],
    valueStack: [
      "Un jouet interactif : musique, lumières LED et mouvement à 360°",
      "Détection d'obstacles annoncée par le fabricant",
      "Disponible en 2 coloris",
      "Livraison offerte, expédition sous 24h",
      "Retours gratuits sous 30 jours",
    ],
    midCtaTexts: [
      "Convaincue par ce petit compagnon dansant ?",
      "Prête à voir la méduse en action ?",
    ],
    costPriceUSD: 0,
    priceCHF: 29.99,
    priceEUR: 29.99,
    compareAtPriceCHF: 39.99,
    compareAtPriceEUR: 39.99,
    images: [
      {
        src: "/images/products/meduse-dansante/vert-menthe.png",
        alt: "Jouet méduse dansante vert menthe avec lumières LED, packaging Méduse Dansante",
        caption: "La Méduse Dansante en vert menthe",
      },
      {
        src: "/images/products/meduse-dansante/rose.png",
        alt: "Jouet méduse dansante rose avec lumières LED, packaging Méduse Dansante",
        caption: "La Méduse Dansante en rose",
      },
    ],
    variants: [
      {
        id: "vert-menthe",
        label: "Vert menthe",
        image: {
          src: "/images/products/meduse-dansante/vert-menthe.png",
          alt: "Méduse Dansante coloris vert menthe",
        },
      },
      {
        id: "rose",
        label: "Rose",
        image: {
          src: "/images/products/meduse-dansante/rose.png",
          alt: "Méduse Dansante coloris rose",
        },
      },
    ],
    benefits: [
      {
        icon: "music",
        title: "Musique et lumières LED",
        description:
          "Une musique entraînante accompagnée de lumières colorées qui s'activent avec le mouvement.",
      },
      {
        icon: "rotate-ccw",
        title: "Tourne à 360° et danse",
        description: "Une rotation complète et des mouvements qui donnent vie au jouet dès l'allumage.",
      },
      {
        icon: "shield-check",
        title: "Détection d'obstacles",
        description:
          "Un capteur annoncé par le fabricant pour ajuster la trajectoire plutôt que rester bloquée.",
      },
      {
        icon: "move",
        title: "Se déplace dans tous les sens",
        description: "Un jouet qui explore la pièce plutôt que de rester sur place.",
      },
    ],
    useCases: [
      {
        title: "Chambre d'enfant",
        description: "Un compagnon coloré et musical qui anime la pièce.",
      },
      {
        title: "Salon",
        description: "De quoi occuper quelques minutes pendant que le repas finit de cuire.",
      },
      {
        title: "Idée cadeau",
        description: "Un jouet original à offrir, disponible en deux coloris.",
      },
      {
        title: "Jeux en famille",
        description: "Un moment à partager en regardant la méduse se déplacer et éviter les obstacles.",
      },
    ],
    faq: [
      {
        question: "À partir de quel âge ce jouet est-il recommandé ?",
        answer:
          "Le fournisseur recommande cet article à partir de 3 ans.",
      },
      {
        question: "Les piles sont-elles incluses ?",
        answer: "Non. Le jouet fonctionne avec 3 piles AA, qui ne sont pas fournies dans l'emballage.",
      },
      {
        question: "De quoi est fait ce jouet ?",
        answer: "Il est en plastique, selon la fiche fournisseur.",
      },
      {
        question: "Quels coloris sont disponibles ?",
        answer: "Le jouet est disponible en deux coloris : vert menthe et rose.",
      },
      {
        question: "Comment fonctionne la détection d'obstacles ?",
        answer:
          "Le fabricant annonce un capteur qui permet au jouet d'ajuster sa trajectoire face à un obstacle. Nous n'avons pas encore pu tester cette fonction nous-mêmes de façon indépendante.",
      },
      {
        question: "Le jouet est-il bruyant ?",
        answer: "Information à confirmer par notre équipe dès que la fiche technique du fournisseur sera disponible.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer: "Votre commande est expédiée sous 24h. Le délai de livraison estimé est de 4 à 8 jours ouvrables.",
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
      title: "Jouet méduse dansante avec lumières LED | Maison Loravie",
      metaDescription:
        "Découvrez La Méduse Dansante : un jouet interactif qui tourne, danse en musique et s'illumine de couleurs LED. Disponible en vert menthe ou rose.",
      keywords: [
        "jouet méduse dansante",
        "jouet interactif enfant",
        "jouet led musical",
        "jouet qui danse et tourne",
        "cadeau jouet enfant",
      ],
    },
    promotion: {
      active: true,
      label: "Offre du moment",
      endsAt: undefined,
    },
    shipping: {
      freeShipping: true,
      dispatchWithinHours: 24,
      minDays: 4,
      maxDays: 8,
      returnDays: 30,
    },
    // Aucun avis fourni pour ce produit : pas de bloc demo invente.
    reviews: [],
    ratingAverage: 0,
    ratingCount: 0,
    collections: ["bebe-famille", "idees-cadeaux"],
    layout: [
      "storytelling",
      "benefits",
      "cta-1",
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
  {
    id: "bougeoir-reflet",
    slug: "bougeoir-ceramique-argente-reflet",
    status: "published",
    // Objet decoratif simple (ceramique/finition chromee, pas d'electronique,
    // pas de categorie sensible) : pas de ComplianceCheck necessaire, comme
    // pour la Petite Lanterne Feline.
    evaluation: {
      demandScore: 3,
      differentiationScore: 3,
      supplierQualityScore: 3,
      competitionScore: 3,
      priceScore: 4,
      returnRiskScore: 4,
      estimatedMarginAfterCosts: 0,
      notes:
        "Cout fournisseur non communique : costPriceUSD et marge a renseigner des que disponibles. Objet simple, faible risque de retour.",
    },
    name: "Le Bougeoir Reflet",
    brandLine: "Maison Loravie",
    badge: "OFFRE DU MOMENT",
    headline: "Un reflet chromé qui change tout sur une table.",
    subtitle:
      "Un bougeoir en céramique à finition argentée miroir, au design rond et minimaliste, pensé pour une table basse, un bureau ou une table de fêtes.",
    heroBullets: [
      "Finition chromée miroir qui capte la lumière",
      "Forme ronde et épurée, esprit scandinave",
      "S'adapte à une bougie fine ou à une bougie chauffe-plat",
      "Vendu à l'unité",
    ],
    h1: "Bougeoir en céramique finition argentée",
    shortDescription:
      "Un bougeoir rond en céramique à finition argentée miroir, au design minimaliste. Vendu à l'unité.",
    description: [
      "Le Bougeoir Reflet est un petit objet décoratif pensé pour les intérieurs qui aiment les détails soignés : une forme ronde et douce, une finition chromée qui reflète la lumière ambiante plutôt que de l'absorber.",
      "Son ouverture centrale accueille aussi bien une bougie fine qu'une bougie chauffe-plat, pour s'adapter à l'ambiance recherchée : une haute flamme élégante pour un dîner, une lumière douce et discrète pour une soirée tranquille.",
      "Posé seul sur un bureau ou associé à d'autres pièces de la collection pour une mise en scène de table, il apporte une touche de caractère sans surcharger l'espace.",
    ],
    storytelling: {
      eyebrow: "Les petits détails comptent",
      title: "Un seul objet suffit parfois à changer une table.",
      paragraphs: [
        "Pas besoin de tout changer dans une pièce pour lui donner du caractère : parfois, un seul objet bien choisi suffit à transformer un coin de table ou un bureau.",
        "Le Bougeoir Reflet a été pensé pour ça : une forme simple, une finition qui attrape la lumière, et une flamme qui fait le reste.",
      ],
    },
    objections: [
      {
        doubt: "Est-ce que la finition va vraiment ressembler aux photos ?",
        response:
          "Sa finition chromée miroir est la caractéristique centrale de l'objet : un fini brillant et réfléchissant, pensé pour capter la lumière environnante.",
      },
      {
        doubt: "Quel type de bougie dois-je utiliser ?",
        response:
          "L'ouverture centrale accueille aussi bien une bougie fine (conique) qu'une bougie chauffe-plat, selon l'ambiance recherchée.",
      },
      {
        doubt: "Est-ce que je reçois un ou plusieurs bougeoirs ?",
        response:
          "Ce produit est vendu à l'unité. Les photos de mise en scène peuvent présenter plusieurs tailles ensemble pour illustrer l'esthétique.",
      },
      {
        doubt: "Combien de temps vais-je attendre ma commande ?",
        response:
          "Votre commande est expédiée sous 24h, pour une réception estimée entre 4 et 8 jours ouvrables.",
      },
      {
        doubt: "Et si le produit ne convient pas une fois reçu ?",
        response:
          "Vous disposez de 30 jours après réception pour changer d'avis et le retourner gratuitement.",
      },
    ],
    valueStack: [
      "Un bougeoir en céramique à finition argentée miroir",
      "Compatible bougie fine ou bougie chauffe-plat",
      "Livraison offerte, expédition sous 24h",
      "Retours gratuits sous 30 jours",
      "Paiement à 100% sécurisé",
    ],
    midCtaTexts: [
      "Convaincue par ce petit reflet de lumière ?",
      "Prête à lui trouver sa place chez vous ?",
    ],
    costPriceUSD: 0,
    priceCHF: 12.99,
    priceEUR: 12.99,
    compareAtPriceCHF: 19.99,
    compareAtPriceEUR: 19.99,
    images: [
      {
        src: "/images/products/bougeoir-reflet/duo-livres.jpg",
        alt: "Bougeoir en céramique finition argentée posé sur une pile de livres, avec une bougie fine allumée",
        caption: "Posé sur une pile de livres",
      },
      {
        src: "/images/products/bougeoir-reflet/detail-marbre.jpg",
        alt: "Bougeoir en céramique finition argentée avec une bougie chauffe-plat, sur un plan en marbre",
        caption: "Avec une bougie chauffe-plat",
      },
    ],
    benefits: [
      {
        icon: "star",
        title: "Finition chromée miroir",
        description: "Une surface brillante et réfléchissante qui capte la lumière ambiante.",
      },
      {
        icon: "flame",
        title: "S'adapte à votre bougie",
        description: "Une ouverture centrale pensée pour une bougie fine ou une bougie chauffe-plat.",
      },
      {
        icon: "home",
        title: "Pensé pour la décoration",
        description: "Un format compact, à poser sur un bureau, une table basse ou une table de fêtes.",
      },
      {
        icon: "gift",
        title: "Une idée cadeau soignée",
        description: "Un objet simple et élégant, facile à offrir pour toutes les occasions.",
      },
    ],
    useCases: [
      {
        title: "Bureau",
        description: "Une touche de lumière discrète pendant les soirées de travail.",
      },
      {
        title: "Table basse",
        description: "Associé à quelques livres ou objets décoratifs, pour une composition soignée.",
      },
      {
        title: "Table de fêtes",
        description: "Une ambiance chaleureuse pour un dîner de Noël ou une occasion spéciale.",
      },
      {
        title: "Étagère",
        description: "Un petit point de lumière au milieu d'autres objets décoratifs.",
      },
    ],
    faq: [
      {
        question: "Quelles sont les dimensions du bougeoir ?",
        answer:
          "Le bougeoir mesure environ 7,5 cm de diamètre pour 4,1 cm de hauteur, avec une ouverture centrale d'environ 2,2 cm.",
      },
      {
        question: "En quelle matière est ce bougeoir ?",
        answer: "Il est en céramique, avec une finition argentée à l'aspect chromé et miroir.",
      },
      {
        question: "Quel type de bougie utiliser ?",
        answer:
          "L'ouverture centrale accueille une bougie fine (conique) ou une bougie chauffe-plat, selon l'ambiance recherchée.",
      },
      {
        question: "Est-il vendu à l'unité ou en lot ?",
        answer:
          "Ce bougeoir est vendu à l'unité. Les visuels présentant deux tailles ensemble illustrent une mise en scène possible.",
      },
      {
        question: "Comment l'entretenir ?",
        answer: "Un simple chiffon doux suffit pour préserver l'éclat de la finition.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer: "Votre commande est expédiée sous 24h. Le délai de livraison estimé est de 4 à 8 jours ouvrables.",
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
      title: "Bougeoir en céramique finition argentée | Maison Loravie",
      metaDescription:
        "Découvrez Le Bougeoir Reflet, un bougeoir rond en céramique à finition argentée miroir, au design minimaliste. Livraison offerte, retours gratuits 30 jours.",
      keywords: [
        "bougeoir céramique",
        "bougeoir argenté",
        "bougeoir chromé",
        "bougeoir rond minimaliste",
        "décoration de table bougeoir",
        "bougeoir style scandinave",
      ],
    },
    promotion: {
      active: true,
      label: "Offre du moment",
      endsAt: undefined,
    },
    shipping: {
      freeShipping: true,
      dispatchWithinHours: 24,
      minDays: 4,
      maxDays: 8,
      returnDays: 30,
    },
    // Aucun avis fourni pour ce produit : pas de bloc demo invente.
    reviews: [],
    ratingAverage: 0,
    ratingCount: 0,
    collections: ["maison-decoration", "idees-cadeaux"],
    layout: [
      "storytelling",
      "benefits",
      "cta-1",
      "editorial",
      "useCases",
      "objections",
      "value",
      "cta-2",
      "reviews",
      "shipping-returns",
      "faq",
      "related",
      "final-cta",
    ],
  },
];

/** Tous les produits, y compris les brouillons (usage interne/administratif uniquement). */
export function getAllProducts(): Product[] {
  return products;
}

/** Produits visibles cote client : home, listings, sitemap, suggestions. Jamais les brouillons. */
export function getPublishedProducts(): Product[] {
  return products.filter((p) => p.status === "published");
}

/**
 * Resout un produit par son slug, brouillon inclus : une page /produit/[slug] doit rester
 * accessible par URL directe pour relecture avant publication (mais en noindex, voir la page).
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Max 1-2 produits complementaires, publies uniquement : le produit principal doit rester dominant. */
export function getRelatedProducts(currentSlug: string, limit = 2): Product[] {
  return products
    .filter((p) => p.slug !== currentSlug && p.status === "published")
    .slice(0, limit);
}
