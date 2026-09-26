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
    title: "Comment decorer une chambre avec des objets inspires des chats ?",
    excerpt:
      "Quelques idees simples pour ajouter une touche feline a votre chambre, sans surcharger l'espace.",
    publishedAt: "2026-09-01",
    content: [
      "Ajouter une touche feline a une chambre ne demande pas de tout transformer. Quelques objets bien choisis suffisent a creer une ambiance chaleureuse et personnelle.",
      "Un objet decoratif comme La Petite Lanterne Feline, avec sa silhouette de chat et sa petite lanterne, s'integre facilement sur une etagere ou une table de nuit, tout en apportant une lumiere douce le soir.",
      "L'idee est de miser sur un ou deux details marquants plutot que de multiplier les objets, pour garder une decoration equilibree et raffinee.",
    ],
  },
];

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
