export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "decorer-chambre-objets-inspires-chats",
    title: "Comment décorer une chambre avec des objets inspirés des chats ?",
    excerpt:
      "Quelques idées simples pour ajouter une touche féline à votre chambre, sans surcharger l'espace.",
    publishedAt: "2026-09-01",
    content: [
      "Ajouter une touche féline à une chambre ne demande pas de tout transformer. Quelques objets bien choisis suffisent à créer une ambiance chaleureuse et personnelle.",
      "Un objet décoratif comme La Petite Lanterne Féline, avec sa silhouette de chat et sa petite lanterne, s'intègre facilement sur une étagère ou une table de nuit, tout en apportant une lumière douce le soir.",
      "L'idée est de miser sur un ou deux détails marquants plutôt que de multiplier les objets, pour garder une décoration équilibrée et raffinée.",
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
