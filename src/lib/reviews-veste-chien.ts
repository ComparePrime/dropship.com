import { Review } from "./types";

/**
 * Avis de "La Veste Montagne". Pour l'instant, uniquement des exemples de mise en page
 * (demo: true, marque DEMO a l'affichage, exclus de la note moyenne et des donnees Google).
 * A remplacer par de vrais avis de clients de la boutique : demo: false, verified: true
 * seulement si l'achat est confirme.
 */
export const vesteChienReviews: Review[] = [
  {
    id: "demo-veste-1",
    author: "Exemple d'avis",
    rating: 5,
    date: "2026-10-21",
    title: "Taille parfaite",
    body: "La veste est fonctionnelle, la fermeture éclair fonctionne bien. La taille 4XL est parfaite pour mon ami à quatre pattes, elle correspond exactement à ce que j'avais commandé. Tout est parfait, aucun problème. Je la recommande.",
    verified: false,
    demo: true,
  },
  {
    id: "demo-veste-2",
    author: "Exemple d'avis",
    rating: 5,
    date: "2026-10-21",
    title: "Légère, imperméable et facile à enfiler",
    body: "Excellent, de très bonne qualité. Elle est légèrement rembourrée et ne laisse pas passer l'eau quand il pleut. Son avantage : elle est très facile à enfiler en la zippant par le haut. Mon chien l'adore et la porte à chaque sortie en hiver. Je recommande de prendre la taille indiquée par les mesures du guide des tailles.",
    verified: false,
    demo: true,
  },
  {
    id: "demo-veste-3",
    author: "Exemple d'avis",
    rating: 5,
    date: "2026-10-21",
    title: "Satisfait de mon achat",
    body: "Commande livrée en seulement 4 jours ! La veste était un peu grande pour mon chihuahua, mais la taille inférieure ne permettait pas de fermer la fermeture éclair. Celle-ci lui convient donc beaucoup mieux. Je suis satisfait de mon achat !",
    verified: false,
    demo: true,
  },
];
