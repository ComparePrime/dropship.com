import { Scene } from "./types";

/**
 * Mises en scène "shop the look". Chaque `hotspots[].productId` doit exister
 * dans `products.ts` — aucun produit n'est dupliqué ni inventé pour une
 * mise en scène. Tant qu'aucune autre photographie lifestyle réelle n'est
 * disponible, une seule mise en scène est publiée : elle réutilise la vraie
 * photo fournie pour Le Ventilateur Anti-Mouches (produit posé sur une
 * table de petit-déjeuner en extérieur), et non une image générique.
 */
export const scenes: Scene[] = [
  {
    id: "repas-terrasse-sans-mouches",
    slug: "repas-en-terrasse",
    status: "published",
    title: "Un repas en terrasse, sans y penser",
    description:
      "Une table de petit-déjeuner dressée en extérieur, avec Le Ventilateur Anti-Mouches posé discrètement à côté des assiettes.",
    image: {
      src: "/images/products/brise-anti-moustiques/lifestyle-table.jpg",
      alt: "Table de petit-déjeuner en extérieur avec le ventilateur anti-mouches Maison Loravie posé à côté des assiettes",
    },
    category: "maison-decoration",
    hotspots: [{ productId: "ventilateur-anti-mouches", x: 34, y: 58 }],
    order: 1,
  },
];

export function getPublishedScenes(): Scene[] {
  return scenes.filter((s) => s.status === "published").sort((a, b) => a.order - b.order);
}

export function getSceneBySlug(slug: string): Scene | undefined {
  return scenes.find((s) => s.slug === slug);
}
