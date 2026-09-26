import { Product } from "./types";

/**
 * Catalogue produits.
 * Chaque produit genere automatiquement /produit/[slug].
 * Pour ajouter un produit : dupliquer un objet et l'ajouter au tableau `products`.
 */
export const products: Product[] = [
  {
    id: "petite-lanterne-feline",
    slug: "crochet-chat-lanterne",
    name: "La Petite Lanterne Feline",
    brandLine: "Maison Loravie",
    badge: "NOUVEAUTE",
    // Headline retenue parmi 3 propositions :
    // A) "Une petite touche feline qui illumine votre interieur." (retenue)
    // B) "Le petit detail qui change tout dans une piece."
    // C) "Une presence feline pleine de douceur, ou que vous la posiez."
    headline: "Une petite touche féline qui illumine votre intérieur.",
    subtitle:
      "Un crochet décoratif en forme de chat, avec une petite lanterne intégrée — à poser sur une étagère, un bureau ou une table de nuit.",
    h1: "Crochet mural pour chat avec lanterne decorative",
    shortDescription:
      "Un crochet decoratif en forme de chat, associe a une petite lanterne lumineuse, pour habiller une etagere, une chambre ou un bureau.",
    description: [
      "La Petite Lanterne Feline est un petit objet decoratif pense pour les amoureux des chats qui aiment soigner les details de leur interieur. Il associe une silhouette de chat, un crochet fonctionnel et une petite lanterne lumineuse, dans un seul objet compact.",
      "Pose sur une etagere, un rebord ou un meuble, il ajoute immediatement du caractere a une piece, tout en offrant un petit point d'accroche pratique pour un bijou, une cle ou une petite plante.",
      "Une fois la nuit tombee, sa lanterne integree diffuse une lumiere douce, ideale pour creer une ambiance chaleureuse dans une chambre ou un coin lecture, sans avoir besoin d'allumer une lumiere principale.",
    ],
    storytelling: {
      eyebrow: "Les petits details comptent",
      title: "Les petits details font souvent toute la difference.",
      paragraphs: [
        "Un interieur chaleureux ne tient pas toujours a de grands changements. Parfois, c'est un seul objet bien choisi qui donne du caractere a une piece entiere.",
        "La Petite Lanterne Feline a ete pensee pour ca : une silhouette de chat pleine de douceur, une lumiere qui s'allume doucement le soir, et un petit crochet qui rend service au quotidien.",
      ],
    },
    objections: [
      {
        doubt: "Est-ce que ce sera vraiment joli chez moi, et pas juste sur une photo ?",
        response:
          "Pense comme un objet de decoration a part entiere : sa silhouette sobre et ses tons naturels s'integrent facilement a un interieur deja existant.",
      },
      {
        doubt: "Est-ce que c'est vraiment utile, ou juste un joli gadget ?",
        response:
          "C'est avant tout un objet decoratif : le crochet et la lanterne ajoutent une fonction pratique, mais son role premier est d'apporter du caractere a une etagere ou un coin de piece.",
      },
      {
        doubt: "Est-ce que ce sera facile a installer ?",
        response:
          "Il se pose ou se fixe simplement sur une etagere, un rebord ou une surface plane, sans outillage complexe.",
      },
      {
        doubt: "Combien de temps vais-je attendre ma commande ?",
        response:
          "Votre commande est expediee sous 24h, pour une reception estimee entre 4 et 8 jours ouvrables.",
      },
      {
        doubt: "Et si le produit ne me convient pas une fois recu ?",
        response:
          "Vous disposez de 30 jours apres reception pour changer d'avis et le retourner gratuitement.",
      },
    ],
    valueStack: [
      "Un objet decoratif original : silhouette de chat, crochet et lanterne reunis",
      "Une ambiance lumineuse douce pour vos soirees",
      "Livraison offerte, expedition sous 24h",
      "Retours gratuits sous 30 jours",
      "Paiement a 100% securise",
    ],
    midCtaTexts: [
      "Convaincue par ces quelques details ?",
      "Prete a lui trouver sa place chez vous ?",
    ],
    costPriceUSD: 8.49,
    priceCHF: 21.9,
    priceEUR: 22.9,
    // Pas de compareAtPrice tant qu'aucun prix de reference reel n'existe.
    images: [
      {
        src: "/images/products/lumiere-feline/principal.svg",
        alt: "Crochet decoratif en forme de chat avec element lumineux pose sur une etagere",
        caption: "La Petite Lanterne Feline sur une etagere de chambre",
      },
      {
        src: "/images/products/lumiere-feline/detail-figurine.svg",
        alt: "Detail de la figurine de chat du crochet decoratif La Petite Lanterne Feline",
        caption: "Le detail de la silhouette du chat",
      },
      {
        src: "/images/products/lumiere-feline/lanterne-allumee.svg",
        alt: "Element lumineux allume du crochet mural pour chat",
        caption: "La lanterne diffuse une lumiere douce le soir",
      },
      {
        src: "/images/products/lumiere-feline/ambiance-bureau.svg",
        alt: "Crochet chat lanterne installe sur un bureau a cote d'un ordinateur",
        caption: "Une touche feline sur un bureau",
      },
    ],
    benefits: [
      {
        icon: "cat",
        title: "Une presence feline originale",
        description:
          "Un detail decoratif qui attire naturellement le regard, sans surcharger l'espace.",
      },
      {
        icon: "lamp",
        title: "Une touche lumineuse",
        description:
          "Une petite lanterne qui apporte une ambiance chaleureuse a la tombee de la nuit.",
      },
      {
        icon: "home",
        title: "Pense pour la decoration",
        description:
          "Ideal pour une chambre, un bureau ou une etagere, ou il sert aussi de petit crochet pratique.",
      },
      {
        icon: "gift",
        title: "Une idee cadeau originale",
        description:
          "Un objet different des cadeaux classiques, parfait pour les amoureux des chats.",
      },
    ],
    useCases: [
      {
        title: "Chambre",
        description: "Sur une table de nuit ou une etagere murale, pour une ambiance douce le soir.",
      },
      {
        title: "Bureau",
        description: "A cote d'un ecran ou d'une lampe, pour une touche de caractere au quotidien.",
      },
      {
        title: "Salon",
        description: "Sur un meuble bas ou une console, en complement d'autres objets decoratifs.",
      },
      {
        title: "Bibliotheque",
        description: "Entre deux piles de livres, comme un petit signe distinctif.",
      },
      {
        title: "Etagere",
        description: "Utilise comme crochet pour suspendre un petit objet, en plus de son role decoratif.",
      },
      {
        title: "Coin lecture",
        description: "Pres d'un fauteuil, pour une lumiere d'appoint discrete pendant la lecture.",
      },
    ],
    faq: [
      {
        question: "Le crochet est-il facile a installer ?",
        answer:
          "Oui. Il est concu pour etre pose ou fixe simplement sur une etagere, un rebord ou une surface plane, sans outillage complexe.",
      },
      {
        question: "Ou puis-je utiliser ce crochet decoratif ?",
        answer:
          "Il trouve sa place dans une chambre, un bureau, un salon, une bibliotheque ou tout autre espace ou vous souhaitez ajouter une touche decorative feline.",
      },
      {
        question: "La lanterne est-elle lumineuse ?",
        answer:
          "La lanterne integree diffuse une lumiere douce et decorative, pensee pour l'ambiance plutot que pour un eclairage principal.",
      },
      {
        question: "Le produit est-il adapte a une chambre ?",
        answer:
          "Oui, c'est l'un de ses usages principaux : une lumiere d'ambiance douce, associee a un objet decoratif discret.",
      },
      {
        question: "Quelle est la taille du produit ?",
        answer:
          "Les dimensions precises seront communiquees prochainement par notre equipe. Elles restent compactes, pensees pour une etagere ou un petit espace.",
      },
      {
        question: "La lanterne fonctionne-t-elle avec des piles ou une batterie ?",
        answer:
          "Information a confirmer par notre equipe des que la fiche technique du fournisseur sera disponible.",
      },
      {
        question: "Comment entretenir le produit ?",
        answer:
          "Un simple depoussierage avec un chiffon sec ou legerement humide suffit a l'entretien courant.",
      },
      {
        question: "Combien de temps faut-il pour recevoir ma commande ?",
        answer:
          "Votre commande est expediee sous 24h. Le delai de livraison estime est de 4 a 8 jours ouvrables.",
      },
      {
        question: "La livraison est-elle gratuite ?",
        answer: "Oui, la livraison est offerte pour toutes les commandes, sans minimum d'achat.",
      },
      {
        question: "Puis-je retourner le produit ?",
        answer:
          "Oui, vous disposez de 30 jours apres reception pour changer d'avis et retourner votre commande gratuitement.",
      },
      {
        question: "Comment fonctionne le retour sous 30 jours ?",
        answer:
          "Il vous suffit de nous contacter par email dans les 30 jours suivant la reception. Nous vous indiquons alors la marche a suivre pour le retour.",
      },
    ],
    seo: {
      title: "Crochet mural pour chat avec lanterne decorative | Maison Loravie",
      metaDescription:
        "Decouvrez La Petite Lanterne Feline, un crochet decoratif en forme de chat avec element lumineux. Ideal pour la chambre ou le bureau. Livraison offerte, retours gratuits 30 jours.",
      keywords: [
        "crochet chat decoration",
        "crochet mural chat",
        "decoration chat",
        "objet deco chat",
        "decoration chambre chat",
        "veilleuse chat",
        "lampe chat decorative",
        "cadeau amoureux des chats",
        "decoration originale chat",
      ],
    },
    promotion: {
      active: true,
      label: "Offre de lancement",
      // Configurer une vraie date de fin ici quand elle existe reellement, ex: "2026-09-30T22:00:00.000Z"
      endsAt: undefined,
    },
    shipping: {
      freeShipping: true,
      dispatchWithinHours: 24,
      minDays: 4,
      maxDays: 8,
      returnDays: 30,
    },
    reviewsDemo: [
      {
        id: "demo-1",
        author: "Camille R.",
        rating: 5,
        date: "2026-08-14",
        title: "Tres joli sur mon etagere",
        body: "Exactement ce que je cherchais pour ma chambre, la petite lumiere est douce le soir.",
        verified: false,
        demo: true,
      },
      {
        id: "demo-2",
        author: "Julien M.",
        rating: 4,
        date: "2026-08-02",
        title: "Bel objet, livraison rapide",
        body: "Recu en une semaine, bien emballe. Un joli detail sur mon bureau.",
        verified: false,
        demo: true,
      },
    ],
    ratingAverageDemo: 4.7,
    ratingCountDemo: 1250,
    collections: ["chats", "decoration", "maison", "cadeaux"],
    // Structure editoriale propre a ce produit (chaque produit peut avoir un ordre different).
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
