import { Review } from "./types";
import { vesteChienReviews } from "./reviews-veste-chien";

/**
 * Avis de demonstration par produit (slug), lus uniquement par la section avis de la fiche.
 * Gardes hors du catalogue pour ne pas alourdir les pages ni polluer la note moyenne.
 */
export const demoReviewsBySlug: Record<string, Review[]> = {
  "veste-chien-hiver-impermeable": vesteChienReviews,
};
