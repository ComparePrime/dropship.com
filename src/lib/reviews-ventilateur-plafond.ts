import { Review } from "./types";

/**
 * Avis de "Le Ventilateur Plafonnier" : UNIQUEMENT des avis de demonstration (demo: true, verified: false).
 * Marque DEMO a l'affichage, exclus de la note moyenne et des donnees structurees Google.
 * Lu uniquement par la section avis de la fiche (lib/reviews-demo.ts) : pas charge dans le catalogue.
 *
 * Pour de vrais avis de clients : les ajouter dans `reviews` du produit (products.ts) avec
 * demo: false ; les avis de demonstration disparaissent alors de la fiche.
 */
export const ventilateurPlafondReviews: Review[] = [
  { id: "demo-ventilateur-plafond-1", author: "Exemple d'avis", rating: 5, date: "2026-10-22", title: "Exemple d'avis 1", body: "Commentaire fictif destiné uniquement à tester la mise en page.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-2", author: "Exemple d'avis", rating: 4, date: "2026-10-22", title: "Exemple d'avis 2", body: "Texte de démonstration pour prévisualiser les étoiles, le titre et la date.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-3", author: "Exemple d'avis", rating: 5, date: "2026-10-22", title: "Exemple d'avis 3", body: "Exemple d'avis de démonstration pour tester l'affichage de la fiche produit.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-4", author: "Exemple d'avis", rating: 4, date: "2026-10-22", title: "Exemple d'avis 4", body: "Texte de test pour vérifier le fonctionnement du système d'avis.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-5", author: "Exemple d'avis", rating: 5, date: "2026-10-22", title: "Exemple d'avis 5", body: "Contenu fictif, à remplacer par un véritable avis client.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-6", author: "Exemple d'avis", rating: 3, date: "2026-10-22", title: "Exemple d'avis 6", body: "Commentaire fictif destiné uniquement à tester la mise en page.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-7", author: "Exemple d'avis", rating: 5, date: "2026-10-22", title: "Exemple d'avis 7", body: "Texte de démonstration pour prévisualiser les étoiles, le titre et la date.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-8", author: "Exemple d'avis", rating: 4, date: "2026-10-22", title: "Exemple d'avis 8", body: "Exemple de commentaire pour tester l'affichage sur mobile et ordinateur.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-9", author: "Exemple d'avis", rating: 4, date: "2026-10-22", title: "Exemple d'avis 9", body: "Contenu fictif, à remplacer par un véritable avis client.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-10", author: "Exemple d'avis", rating: 5, date: "2026-10-22", title: "Exemple d'avis 10", body: "Texte de test pour vérifier le fonctionnement du système d'avis.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-11", author: "Exemple d'avis", rating: 3, date: "2026-10-22", title: "Exemple d'avis 11", body: "Exemple d'avis de démonstration pour tester l'affichage de la fiche produit.", verified: false, demo: true },
  { id: "demo-ventilateur-plafond-12", author: "Exemple d'avis", rating: 5, date: "2026-10-22", title: "Exemple d'avis 12", body: "Commentaire fictif destiné uniquement à tester la mise en page.", verified: false, demo: true },
];
