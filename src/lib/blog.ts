export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  /** Produits cites dans l'article (slugs) : seuls ceux-ci sont proposes en fin d'article. */
  productSlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "decorer-chambre-objets-inspires-chats",
    title: "Comment décorer une chambre avec des objets inspirés des chats ?",
    excerpt:
      "Quelques idées simples pour ajouter une touche féline à votre chambre, sans surcharger l'espace.",
    publishedAt: "2026-09-01",
    productSlugs: ["crochet-chat-lanterne"],
    content: [
      "Ajouter une touche féline à une chambre ne demande pas de tout transformer. Quelques objets bien choisis suffisent à créer une ambiance chaleureuse et personnelle.",
      "Un objet décoratif comme La Petite Lanterne Féline, avec sa silhouette de chat et sa petite lanterne, s'intègre facilement sur une étagère ou une table de nuit, tout en apportant une lumière douce le soir.",
      "L'idée est de miser sur un ou deux détails marquants plutôt que de multiplier les objets, pour garder une décoration équilibrée et raffinée.",
    ],
  },
  {
    slug: "choisir-taille-veste-chien",
    title: "Comment choisir la taille de la veste de son chien ?",
    excerpt:
      "Longueur du dos, tour de poitrail, tour de cou : comment mesurer son chien et choisir sa veste d'hiver, du XS au 6XL.",
    publishedAt: "2026-10-21",
    productSlugs: ["veste-chien-hiver-impermeable"],
    content: [
      "Une veste trop petite gêne les mouvements, une veste trop grande glisse et laisse passer le froid. Bonne nouvelle : trois mesures suffisent pour choisir la bonne taille, et il ne faut que quelques minutes pour les prendre.",
      "Première mesure, la longueur du dos : elle va de la base du cou à la base de la queue. Faites-la avec votre chien debout, à l'aide d'un mètre de couturière.",
      "Deuxième mesure, le tour de poitrail : placez le mètre à l'endroit le plus large du thorax, juste derrière les pattes avant. C'est souvent la mesure qui décide de la taille, car c'est elle qui conditionne le confort.",
      "Troisième mesure, le tour de cou : à la base du cou, là où se pose le collier. Pour une veste à col montant, elle compte pour que le col ne serre pas.",
      "Comparez ensuite vos trois mesures avec le tableau des tailles de la fiche produit. Les mesures sont prises à la main : un écart de 1 à 2 cm est normal. Si votre chien se situe entre deux tailles, choisissez la plus grande.",
      "La Veste Montagne existe en dix tailles, du XS (dos de 25 cm, poitrail de 34 cm) au 6XL (dos de 73 cm, poitrail de 96 cm), ce qui permet d'équiper aussi bien un petit gabarit comme un Chihuahua qu'un grand chien comme un Labrador.",
      "Enfin, un conseil simple : mesurez deux fois, surtout si votre chien a beaucoup de poil. Un pelage épais donne l'impression d'un tour de poitrail plus large : tenez le mètre à plat contre le corps, sans trop serrer.",
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
