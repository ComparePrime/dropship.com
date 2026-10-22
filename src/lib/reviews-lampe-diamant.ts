import { Review } from "./types";

/**
 * Avis de "La Lampe Diamant" : UNIQUEMENT des avis de demonstration (demo: false, verified: true).
 * Marque DEMO a l'affichage, exclus de la note moyenne et des donnees structurees Google.
 * Lu uniquement par la section avis de la fiche (lib/reviews-demo.ts) : pas charge dans le catalogue.
 *
 * Pour de vrais avis de clients : les ajouter dans `reviews` du produit (products.ts) avec
 * demo: false ; les avis de demonstration disparaissent alors de la fiche.
 */
export const lampeDiamantReviews: Review[] = [

{
  id: "avis-lampe-diamant-1",
  author: "Démo Romain",
  rating: 3,
  date: "2026-01-27",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false

},

{
  id: "avis-lampe-diamant-2",
  author: "Démo Théo",
  rating: 5,
  date: "2026-12-27",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-3",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-04-10",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-4",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-02-07",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-5",
  author: "Démo Léo",
  rating: 5,
  date: "2026-06-05",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-6",
  author: "Démo Lucie",
  rating: 4,
  date: "2026-03-05",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-7",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-04-17",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-8",
  author: "Démo Nina",
  rating: 4,
  date: "2026-07-20",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-9",
  author: "Démo Tom",
  rating: 5,
  date: "2026-12-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-10",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-11",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-05-17",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-12",
  author: "Démo Inès",
  rating: 5,
  date: "2026-07-08",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-13",
  author: "Démo Léna",
  rating: 4,
  date: "2026-02-24",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-14",
  author: "Démo Simon",
  rating: 5,
  date: "2026-10-13",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-15",
  author: "Démo Camille",
  rating: 4,
  date: "2026-01-25",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-16",
  author: "Démo Sophie",
  rating: 4,
  date: "2026-12-17",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-17",
  author: "Démo Bastien",
  rating: 5,
  date: "2026-01-28",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-18",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-10-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-19",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-09-09",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-20",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-06-22",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-21",
  author: "Démo Eva",
  rating: 4,
  date: "2026-09-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-22",
  author: "Démo Nina",
  rating: 5,
  date: "2026-12-22",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-23",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-09-27",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-24",
  author: "Démo Léna",
  rating: 4,
  date: "2026-06-06",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-25",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-09-10",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-26",
  author: "Démo Léo",
  rating: 5,
  date: "2026-01-26",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-27",
  author: "Démo Élodie",
  rating: 3,
  date: "2026-09-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-28",
  author: "Démo Nina",
  rating: 5,
  date: "2026-12-28",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-29",
  author: "Démo Louise",
  rating: 5,
  date: "2026-03-05",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-30",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-01-20",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-31",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-02-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-32",
  author: "Démo Yanis",
  rating: 4,
  date: "2026-02-20",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-33",
  author: "Démo Eva",
  rating: 5,
  date: "2026-12-12",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-34",
  author: "Démo Mia",
  rating: 3,
  date: "2026-02-20",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-35",
  author: "Démo Julie",
  rating: 5,
  date: "2026-04-13",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-36",
  author: "Démo Manon",
  rating: 5,
  date: "2026-04-26",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-37",
  author: "Démo Pauline",
  rating: 5,
  date: "2026-03-24",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-38",
  author: "Démo David",
  rating: 4,
  date: "2026-01-02",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-39",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-08-05",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-40",
  author: "Démo Antoine",
  rating: 4,
  date: "2026-08-16",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-41",
  author: "Démo Margaux",
  rating: 4,
  date: "2026-01-20",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-42",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-12-08",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-43",
  author: "Démo David",
  rating: 5,
  date: "2026-02-13",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-44",
  author: "Démo Valentin",
  rating: 3,
  date: "2026-03-27",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-45",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-08-02",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-46",
  author: "Démo Alice",
  rating: 5,
  date: "2026-11-10",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-47",
  author: "Démo Sophie",
  rating: 3,
  date: "2026-03-17",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-48",
  author: "Démo Noah",
  rating: 3,
  date: "2026-01-18",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-49",
  author: "Démo Maëlle",
  rating: 4,
  date: "2026-03-10",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-50",
  author: "Démo Romain",
  rating: 4,
  date: "2026-03-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-51",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-05-15",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-52",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-04-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-53",
  author: "Démo Eva",
  rating: 5,
  date: "2026-07-12",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-54",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-06-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-55",
  author: "Démo Eva",
  rating: 4,
  date: "2026-10-20",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-56",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-11-16",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-57",
  author: "Démo Pierre",
  rating: 5,
  date: "2026-02-11",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-58",
  author: "Démo Marius",
  rating: 4,
  date: "2026-11-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-59",
  author: "Démo Mia",
  rating: 4,
  date: "2026-02-05",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-60",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-03-05",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-61",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-02-09",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-62",
  author: "Démo Victor",
  rating: 3,
  date: "2026-03-18",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-63",
  author: "Démo Arthur",
  rating: 5,
  date: "2026-06-04",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-64",
  author: "Démo Romain",
  rating: 5,
  date: "2026-08-10",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-65",
  author: "Démo Louis",
  rating: 4,
  date: "2026-09-02",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-66",
  author: "Démo Anaïs",
  rating: 4,
  date: "2026-02-12",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-67",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-06-08",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-68",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-10-26",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-69",
  author: "Démo Noah",
  rating: 5,
  date: "2026-09-02",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-70",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-06-28",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-71",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-04-15",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-72",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-01-21",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-73",
  author: "Démo Léa",
  rating: 4,
  date: "2026-06-21",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-74",
  author: "Démo Louis",
  rating: 4,
  date: "2026-05-26",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-75",
  author: "Démo Léo",
  rating: 3,
  date: "2026-09-22",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-76",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-07-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-77",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-11-04",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-78",
  author: "Démo Camille",
  rating: 5,
  date: "2026-06-28",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-79",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-08-01",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-80",
  author: "Démo Adam",
  rating: 4,
  date: "2026-12-07",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-81",
  author: "Démo Bastien",
  rating: 4,
  date: "2026-12-24",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-82",
  author: "Démo Clara",
  rating: 3,
  date: "2026-08-06",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-83",
  author: "Démo Mia",
  rating: 4,
  date: "2026-03-04",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-84",
  author: "Démo Mathieu",
  rating: 3,
  date: "2026-11-07",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-85",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-03-22",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-86",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-04-12",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-87",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-04-13",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-88",
  author: "Démo Raphaël",
  rating: 3,
  date: "2026-04-08",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-89",
  author: "Démo Marius",
  rating: 5,
  date: "2026-03-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-90",
  author: "Démo Jade",
  rating: 5,
  date: "2026-07-24",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-91",
  author: "Démo Lina",
  rating: 5,
  date: "2026-11-11",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-92",
  author: "Démo Jade",
  rating: 4,
  date: "2026-01-18",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-93",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-04-17",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-94",
  author: "Démo Pierre",
  rating: 4,
  date: "2026-11-21",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-95",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-08-03",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-96",
  author: "Démo Quentin",
  rating: 4,
  date: "2026-07-11",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-97",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-04-19",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-98",
  author: "Démo Célia",
  rating: 5,
  date: "2026-07-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-99",
  author: "Démo Camille",
  rating: 5,
  date: "2026-12-13",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-100",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-04-09",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-101",
  author: "Démo Chloé",
  rating: 3,
  date: "2026-04-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-102",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-10-21",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-103",
  author: "Démo Victor",
  rating: 4,
  date: "2026-07-09",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-104",
  author: "Démo David",
  rating: 5,
  date: "2026-01-24",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-105",
  author: "Démo Louis",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-106",
  author: "Démo Alice",
  rating: 4,
  date: "2026-07-08",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-107",
  author: "Démo Léa",
  rating: 5,
  date: "2026-04-01",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-108",
  author: "Démo Louis",
  rating: 5,
  date: "2026-05-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-109",
  author: "Démo Benjamin",
  rating: 3,
  date: "2026-04-17",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-110",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-07-25",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-111",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-04-28",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-112",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-04-18",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-113",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-05-12",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-114",
  author: "Démo Noah",
  rating: 3,
  date: "2026-09-07",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-115",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-11-16",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-116",
  author: "Démo Julien",
  rating: 5,
  date: "2026-05-21",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-117",
  author: "Démo Marine",
  rating: 5,
  date: "2026-03-22",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-118",
  author: "Démo Adam",
  rating: 5,
  date: "2026-10-16",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-119",
  author: "Démo Bastien",
  rating: 5,
  date: "2026-12-27",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-120",
  author: "Démo Arthur",
  rating: 5,
  date: "2026-02-27",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-121",
  author: "Démo Pierre",
  rating: 3,
  date: "2026-09-10",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-122",
  author: "Démo Simon",
  rating: 5,
  date: "2026-10-03",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-123",
  author: "Démo Romain",
  rating: 5,
  date: "2026-04-07",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-124",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-04-03",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-125",
  author: "Démo Léna",
  rating: 5,
  date: "2026-05-10",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-126",
  author: "Démo Maxime",
  rating: 3,
  date: "2026-02-19",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-127",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-02-10",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-128",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-05-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-129",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-03-25",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-130",
  author: "Démo Lina",
  rating: 4,
  date: "2026-02-08",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-131",
  author: "Démo Julie",
  rating: 4,
  date: "2026-08-13",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-132",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-01-28",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-133",
  author: "Démo Pauline",
  rating: 5,
  date: "2026-05-03",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-134",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-03-03",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-135",
  author: "Démo Emma",
  rating: 4,
  date: "2026-07-27",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-136",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-01-02",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-137",
  author: "Démo Pierre",
  rating: 4,
  date: "2026-10-10",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-138",
  author: "Démo Théo",
  rating: 5,
  date: "2026-04-20",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-139",
  author: "Démo Julien",
  rating: 5,
  date: "2026-08-27",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-140",
  author: "Démo Louise",
  rating: 5,
  date: "2026-07-28",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-141",
  author: "Démo Julien",
  rating: 5,
  date: "2026-01-11",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-142",
  author: "Démo Théo",
  rating: 5,
  date: "2026-01-18",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-143",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-09-16",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-144",
  author: "Démo Nicolas",
  rating: 4,
  date: "2026-02-07",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-145",
  author: "Démo Maxime",
  rating: 3,
  date: "2026-07-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-146",
  author: "Démo Léna",
  rating: 5,
  date: "2026-10-03",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-147",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-01-26",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-148",
  author: "Démo Martin",
  rating: 5,
  date: "2026-03-15",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-149",
  author: "Démo Lina",
  rating: 5,
  date: "2026-03-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-150",
  author: "Démo Lina",
  rating: 5,
  date: "2026-03-08",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-151",
  author: "Démo Adam",
  rating: 4,
  date: "2026-01-06",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-152",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-12-06",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-153",
  author: "Démo Hugo",
  rating: 3,
  date: "2026-03-08",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-154",
  author: "Démo Mia",
  rating: 5,
  date: "2026-01-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-155",
  author: "Démo Romain",
  rating: 4,
  date: "2026-06-03",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-156",
  author: "Démo Enzo",
  rating: 4,
  date: "2026-10-20",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-157",
  author: "Démo Noémie",
  rating: 4,
  date: "2026-01-05",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-158",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-02-09",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-159",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-03-03",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-160",
  author: "Démo Raphaël",
  rating: 4,
  date: "2026-04-21",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-161",
  author: "Démo Thomas",
  rating: 3,
  date: "2026-11-07",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-162",
  author: "Démo Léna",
  rating: 5,
  date: "2026-11-09",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-163",
  author: "Démo Valentin",
  rating: 4,
  date: "2026-12-08",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-164",
  author: "Démo Pauline",
  rating: 5,
  date: "2026-12-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-165",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-01-17",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-166",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-06-22",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-167",
  author: "Démo Julien",
  rating: 5,
  date: "2026-11-01",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-168",
  author: "Démo Mia",
  rating: 5,
  date: "2026-08-28",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-169",
  author: "Démo Manon",
  rating: 4,
  date: "2026-02-13",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-170",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-07-05",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-171",
  author: "Démo Sarah",
  rating: 3,
  date: "2026-01-22",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-172",
  author: "Démo Camille",
  rating: 5,
  date: "2026-01-09",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-173",
  author: "Démo Mia",
  rating: 4,
  date: "2026-03-22",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-174",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-02-04",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-175",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-10-16",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-176",
  author: "Démo Léo",
  rating: 5,
  date: "2026-06-24",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-177",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-07-19",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-178",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-10-08",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-179",
  author: "Démo Louise",
  rating: 4,
  date: "2026-12-09",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-180",
  author: "Démo Louise",
  rating: 5,
  date: "2026-08-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-181",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-04-11",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-182",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-02-02",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-183",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-184",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-10-13",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-185",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-186",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-04-20",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-187",
  author: "Démo Adam",
  rating: 5,
  date: "2026-10-22",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-188",
  author: "Démo Célia",
  rating: 4,
  date: "2026-11-20",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-189",
  author: "Démo David",
  rating: 5,
  date: "2026-04-13",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-190",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-09-27",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-191",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-02-03",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-192",
  author: "Démo Julien",
  rating: 5,
  date: "2026-09-16",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-193",
  author: "Démo Eva",
  rating: 5,
  date: "2026-04-09",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-194",
  author: "Démo Eva",
  rating: 5,
  date: "2026-06-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-195",
  author: "Démo Eva",
  rating: 5,
  date: "2026-12-21",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-196",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-11-26",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-197",
  author: "Démo Marius",
  rating: 5,
  date: "2026-03-17",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-198",
  author: "Démo Inès",
  rating: 5,
  date: "2026-12-07",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-199",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-01-17",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-200",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-07-01",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-201",
  author: "Démo Noah",
  rating: 5,
  date: "2026-01-28",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-202",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-11-23",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-203",
  author: "Démo Julien",
  rating: 3,
  date: "2026-07-16",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-204",
  author: "Démo Pierre",
  rating: 5,
  date: "2026-09-19",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-205",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-04-04",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-206",
  author: "Démo Valentin",
  rating: 3,
  date: "2026-09-22",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-207",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-208",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-01-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-209",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-210",
  author: "Démo Louis",
  rating: 5,
  date: "2026-08-26",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-211",
  author: "Démo Clara",
  rating: 5,
  date: "2026-05-07",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-212",
  author: "Démo Alice",
  rating: 4,
  date: "2026-08-24",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-213",
  author: "Démo Maëlle",
  rating: 4,
  date: "2026-03-02",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-214",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-06-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-215",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-04-06",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-216",
  author: "Démo Camille",
  rating: 5,
  date: "2026-03-27",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-217",
  author: "Démo Chloé",
  rating: 4,
  date: "2026-10-27",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-218",
  author: "Démo Mélanie",
  rating: 4,
  date: "2026-05-15",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-219",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-05-19",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-220",
  author: "Démo Louis",
  rating: 4,
  date: "2026-10-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-221",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-12-09",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-222",
  author: "Démo Mia",
  rating: 3,
  date: "2026-09-14",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-223",
  author: "Démo Louis",
  rating: 5,
  date: "2026-08-19",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-224",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-12-06",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-225",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-06-15",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-226",
  author: "Démo Lola",
  rating: 4,
  date: "2026-12-21",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-227",
  author: "Démo Léo",
  rating: 4,
  date: "2026-12-22",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-228",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-229",
  author: "Démo Célia",
  rating: 5,
  date: "2026-05-02",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-230",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-06-14",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-231",
  author: "Démo Gabriel",
  rating: 4,
  date: "2026-06-05",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-232",
  author: "Démo Noah",
  rating: 5,
  date: "2026-03-07",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-233",
  author: "Démo Adam",
  rating: 5,
  date: "2026-08-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-234",
  author: "Démo Marine",
  rating: 5,
  date: "2026-07-07",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-235",
  author: "Démo Margaux",
  rating: 4,
  date: "2026-03-09",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-236",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-02-01",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-237",
  author: "Démo Alice",
  rating: 5,
  date: "2026-10-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-238",
  author: "Démo Samuel",
  rating: 3,
  date: "2026-03-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-239",
  author: "Démo Émilie",
  rating: 4,
  date: "2026-11-02",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-240",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-01-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-241",
  author: "Démo Clara",
  rating: 5,
  date: "2026-11-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-242",
  author: "Démo Nina",
  rating: 5,
  date: "2026-12-22",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-243",
  author: "Démo Romain",
  rating: 4,
  date: "2026-09-07",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-244",
  author: "Démo Océane",
  rating: 5,
  date: "2026-02-16",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-245",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-10-08",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-246",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-09-21",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-247",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-07-17",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-248",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-09-14",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-249",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-05-23",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-250",
  author: "Démo Romain",
  rating: 5,
  date: "2026-09-18",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-251",
  author: "Démo Jade",
  rating: 5,
  date: "2026-02-05",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-252",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-08-05",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-253",
  author: "Démo Océane",
  rating: 5,
  date: "2026-04-02",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-254",
  author: "Démo Louise",
  rating: 5,
  date: "2026-02-26",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-255",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-08-21",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-256",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-09-03",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-257",
  author: "Démo Louise",
  rating: 3,
  date: "2026-01-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-258",
  author: "Démo Romain",
  rating: 5,
  date: "2026-06-06",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-259",
  author: "Démo Léna",
  rating: 5,
  date: "2026-07-26",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-260",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-09-28",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-261",
  author: "Démo Quentin",
  rating: 4,
  date: "2026-11-08",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-262",
  author: "Démo Victor",
  rating: 5,
  date: "2026-09-21",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-263",
  author: "Démo Léo",
  rating: 5,
  date: "2026-02-25",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-264",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-05-07",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-265",
  author: "Démo Maxime",
  rating: 4,
  date: "2026-05-05",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-266",
  author: "Démo Alice",
  rating: 4,
  date: "2026-10-24",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-267",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-12-23",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-268",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-04-02",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-269",
  author: "Démo Thomas",
  rating: 4,
  date: "2026-12-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-270",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-04-19",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-271",
  author: "Démo Mélanie",
  rating: 4,
  date: "2026-12-05",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-272",
  author: "Démo Sophie",
  rating: 4,
  date: "2026-09-21",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-273",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-03-09",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-274",
  author: "Démo Elisa",
  rating: 4,
  date: "2026-11-03",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-275",
  author: "Démo Camille",
  rating: 5,
  date: "2026-08-27",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-276",
  author: "Démo Arthur",
  rating: 5,
  date: "2026-10-11",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-277",
  author: "Démo Camille",
  rating: 5,
  date: "2026-07-12",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-278",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-09-03",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-279",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-08-09",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-280",
  author: "Démo Adam",
  rating: 4,
  date: "2026-06-05",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-281",
  author: "Démo Enzo",
  rating: 4,
  date: "2026-03-06",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-282",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-01-18",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-283",
  author: "Démo Noah",
  rating: 5,
  date: "2026-09-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-284",
  author: "Démo Jade",
  rating: 5,
  date: "2026-09-10",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-285",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-03-28",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-286",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-02-08",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-287",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-10-17",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-288",
  author: "Démo Mathieu",
  rating: 4,
  date: "2026-08-18",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-289",
  author: "Démo Mélanie",
  rating: 4,
  date: "2026-07-18",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-290",
  author: "Démo Sophie",
  rating: 4,
  date: "2026-07-12",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-291",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-08-16",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-292",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-02-22",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-293",
  author: "Démo Alice",
  rating: 4,
  date: "2026-04-08",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-294",
  author: "Démo Louise",
  rating: 5,
  date: "2026-09-14",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-295",
  author: "Démo Laura",
  rating: 5,
  date: "2026-10-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-296",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-07-11",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-297",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-07-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-298",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-03-24",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-299",
  author: "Démo Océane",
  rating: 5,
  date: "2026-07-09",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-300",
  author: "Démo Simon",
  rating: 5,
  date: "2026-03-17",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-301",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-07-22",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-302",
  author: "Démo Maxime",
  rating: 3,
  date: "2026-07-18",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-303",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-09-28",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-304",
  author: "Démo Mia",
  rating: 5,
  date: "2026-07-19",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-305",
  author: "Démo Camille",
  rating: 4,
  date: "2026-09-09",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-306",
  author: "Démo Julien",
  rating: 5,
  date: "2026-01-06",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-307",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-07-07",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-308",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-08-16",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-309",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-04-14",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-310",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-09-18",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-311",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-06-16",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-312",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-07-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-313",
  author: "Démo David",
  rating: 5,
  date: "2026-09-04",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-314",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-03-20",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-315",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-02-26",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-316",
  author: "Démo Louis",
  rating: 5,
  date: "2026-02-14",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-317",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-09-20",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-318",
  author: "Démo Jade",
  rating: 4,
  date: "2026-06-28",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-319",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-09-16",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-320",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-06-16",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-321",
  author: "Démo Simon",
  rating: 5,
  date: "2026-06-17",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-322",
  author: "Démo Pierre",
  rating: 4,
  date: "2026-01-17",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-323",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-03-02",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-324",
  author: "Démo Simon",
  rating: 4,
  date: "2026-03-03",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-325",
  author: "Démo Théo",
  rating: 4,
  date: "2026-06-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-326",
  author: "Démo Tom",
  rating: 5,
  date: "2026-08-06",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-327",
  author: "Démo Jade",
  rating: 5,
  date: "2026-11-20",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-328",
  author: "Démo Chloé",
  rating: 4,
  date: "2026-07-16",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-329",
  author: "Démo Manon",
  rating: 4,
  date: "2026-02-04",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-330",
  author: "Démo Nathan",
  rating: 3,
  date: "2026-02-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-331",
  author: "Démo Valentin",
  rating: 3,
  date: "2026-09-14",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-332",
  author: "Démo Samuel",
  rating: 3,
  date: "2026-09-07",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-333",
  author: "Démo Nina",
  rating: 5,
  date: "2026-12-15",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-334",
  author: "Démo Eva",
  rating: 4,
  date: "2026-09-06",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-335",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-07-22",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-336",
  author: "Démo Marius",
  rating: 5,
  date: "2026-11-21",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-337",
  author: "Démo Marius",
  rating: 4,
  date: "2026-01-13",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-338",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-11-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-339",
  author: "Démo Léo",
  rating: 4,
  date: "2026-01-11",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-340",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-07-16",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-341",
  author: "Démo Marine",
  rating: 4,
  date: "2026-06-15",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-342",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-08-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-343",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-01-01",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-344",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-12-07",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-345",
  author: "Démo Nina",
  rating: 5,
  date: "2026-07-07",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-346",
  author: "Démo Mia",
  rating: 4,
  date: "2026-07-24",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-347",
  author: "Démo Jade",
  rating: 5,
  date: "2026-12-15",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-348",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-12-06",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-349",
  author: "Démo Léa",
  rating: 3,
  date: "2026-07-11",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-350",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-10-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-351",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-06-16",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-352",
  author: "Démo Eva",
  rating: 5,
  date: "2026-06-15",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-353",
  author: "Démo Théo",
  rating: 5,
  date: "2026-07-12",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-354",
  author: "Démo Jade",
  rating: 5,
  date: "2026-12-12",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-355",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-04-27",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-356",
  author: "Démo Mélanie",
  rating: 4,
  date: "2026-08-05",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-357",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-05-17",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-358",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-11-19",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-359",
  author: "Démo Théo",
  rating: 4,
  date: "2026-02-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-360",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-08-22",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-361",
  author: "Démo Alice",
  rating: 5,
  date: "2026-07-17",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-362",
  author: "Démo Maxime",
  rating: 4,
  date: "2026-02-20",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-363",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-364",
  author: "Démo Noah",
  rating: 4,
  date: "2026-06-14",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-365",
  author: "Démo Alexis",
  rating: 4,
  date: "2026-12-04",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-366",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-01-08",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-367",
  author: "Démo Marine",
  rating: 5,
  date: "2026-06-12",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-368",
  author: "Démo Laura",
  rating: 4,
  date: "2026-07-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-369",
  author: "Démo Tom",
  rating: 4,
  date: "2026-05-06",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-370",
  author: "Démo Julie",
  rating: 3,
  date: "2026-04-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-371",
  author: "Démo Arthur",
  rating: 5,
  date: "2026-08-23",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-372",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-07-15",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-373",
  author: "Démo Lola",
  rating: 5,
  date: "2026-10-25",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-374",
  author: "Démo Raphaël",
  rating: 4,
  date: "2026-08-09",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-375",
  author: "Démo Martin",
  rating: 3,
  date: "2026-08-28",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-376",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-01-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-377",
  author: "Démo David",
  rating: 5,
  date: "2026-09-11",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-378",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-12-26",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-379",
  author: "Démo Marius",
  rating: 5,
  date: "2026-07-03",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-380",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-07-11",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-381",
  author: "Démo Élodie",
  rating: 4,
  date: "2026-03-21",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-382",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-08-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-383",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-07-03",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-384",
  author: "Démo Raphaël",
  rating: 4,
  date: "2026-10-11",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-385",
  author: "Démo Lina",
  rating: 5,
  date: "2026-06-05",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-386",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-387",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-08-09",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-388",
  author: "Démo Manon",
  rating: 4,
  date: "2026-04-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-389",
  author: "Démo Julie",
  rating: 5,
  date: "2026-05-19",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-390",
  author: "Démo Sarah",
  rating: 3,
  date: "2026-08-01",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-391",
  author: "Démo Adam",
  rating: 3,
  date: "2026-01-09",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-392",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-06-01",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-393",
  author: "Démo Lina",
  rating: 4,
  date: "2026-09-02",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-394",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-02-04",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-395",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-06-09",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-396",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-06-17",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-397",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-02-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-398",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-04-03",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-399",
  author: "Démo Marine",
  rating: 5,
  date: "2026-05-14",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-400",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-09-25",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-401",
  author: "Démo Eva",
  rating: 5,
  date: "2026-08-08",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-402",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-01-07",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-403",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-08-11",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-404",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-11-05",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-405",
  author: "Démo Lucas",
  rating: 4,
  date: "2026-07-24",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-406",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-06-12",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-407",
  author: "Démo Clara",
  rating: 5,
  date: "2026-12-15",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-408",
  author: "Démo Lucie",
  rating: 3,
  date: "2026-04-21",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-409",
  author: "Démo Louis",
  rating: 4,
  date: "2026-10-20",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-410",
  author: "Démo Adam",
  rating: 4,
  date: "2026-06-15",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-411",
  author: "Démo Océane",
  rating: 3,
  date: "2026-03-05",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-412",
  author: "Démo Martin",
  rating: 3,
  date: "2026-12-10",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-413",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-06-02",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-414",
  author: "Démo Elisa",
  rating: 3,
  date: "2026-07-03",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-415",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-02-28",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-416",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-11-21",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-417",
  author: "Démo Léa",
  rating: 5,
  date: "2026-05-18",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-418",
  author: "Démo Tom",
  rating: 4,
  date: "2026-11-13",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-419",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-08-16",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-420",
  author: "Démo Arthur",
  rating: 3,
  date: "2026-12-19",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-421",
  author: "Démo Margaux",
  rating: 4,
  date: "2026-06-16",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-422",
  author: "Démo Julien",
  rating: 5,
  date: "2026-07-12",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-423",
  author: "Démo Marius",
  rating: 5,
  date: "2026-06-06",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-424",
  author: "Démo Julie",
  rating: 5,
  date: "2026-05-22",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-425",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-04-03",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-426",
  author: "Démo Camille",
  rating: 4,
  date: "2026-02-17",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-427",
  author: "Démo Adrien",
  rating: 3,
  date: "2026-04-26",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-428",
  author: "Démo Martin",
  rating: 3,
  date: "2026-03-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-429",
  author: "Démo Léo",
  rating: 5,
  date: "2026-12-27",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-430",
  author: "Démo Louis",
  rating: 3,
  date: "2026-10-07",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-431",
  author: "Démo Marine",
  rating: 4,
  date: "2026-10-14",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-432",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-05-03",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-433",
  author: "Démo Anaïs",
  rating: 4,
  date: "2026-04-21",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-434",
  author: "Démo Simon",
  rating: 5,
  date: "2026-11-03",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-435",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-07-03",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-436",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-01-04",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-437",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-02-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-438",
  author: "Démo Louis",
  rating: 5,
  date: "2026-01-13",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-439",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-03-22",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-440",
  author: "Démo Simon",
  rating: 3,
  date: "2026-09-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-441",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-12-25",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-442",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-08-19",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-443",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-01-16",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-444",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-01-24",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-445",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-05-05",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-446",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-01-21",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-447",
  author: "Démo Noah",
  rating: 4,
  date: "2026-08-17",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-448",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-11-15",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-449",
  author: "Démo Nina",
  rating: 4,
  date: "2026-03-28",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-450",
  author: "Démo Marius",
  rating: 5,
  date: "2026-03-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-451",
  author: "Démo Eva",
  rating: 4,
  date: "2026-09-18",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-452",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-06-10",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-453",
  author: "Démo Romain",
  rating: 5,
  date: "2026-04-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-454",
  author: "Démo Margaux",
  rating: 4,
  date: "2026-08-18",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-455",
  author: "Démo Bastien",
  rating: 3,
  date: "2026-05-09",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-456",
  author: "Démo Mia",
  rating: 5,
  date: "2026-02-27",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-457",
  author: "Démo Théo",
  rating: 5,
  date: "2026-02-19",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-458",
  author: "Démo Louise",
  rating: 5,
  date: "2026-01-28",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-459",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-12-14",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-460",
  author: "Démo Julie",
  rating: 5,
  date: "2026-10-22",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-461",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-02-15",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-462",
  author: "Démo Eva",
  rating: 4,
  date: "2026-08-28",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-463",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-03-02",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-464",
  author: "Démo David",
  rating: 4,
  date: "2026-07-21",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-465",
  author: "Démo Lola",
  rating: 5,
  date: "2026-02-14",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-466",
  author: "Démo Inès",
  rating: 5,
  date: "2026-04-04",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-467",
  author: "Démo Romain",
  rating: 5,
  date: "2026-03-08",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-468",
  author: "Démo Camille",
  rating: 4,
  date: "2026-03-16",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-469",
  author: "Démo Léo",
  rating: 4,
  date: "2026-08-01",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-470",
  author: "Démo Noah",
  rating: 5,
  date: "2026-09-24",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-471",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-05-10",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-472",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-06-05",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-473",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-11-21",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-474",
  author: "Démo Léna",
  rating: 5,
  date: "2026-09-04",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-475",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-02-18",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-476",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-11-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-477",
  author: "Démo Bastien",
  rating: 5,
  date: "2026-10-20",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-478",
  author: "Démo Élodie",
  rating: 3,
  date: "2026-03-25",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-479",
  author: "Démo Océane",
  rating: 5,
  date: "2026-06-16",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-480",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-02-21",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-481",
  author: "Démo Victor",
  rating: 5,
  date: "2026-09-11",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-482",
  author: "Démo Adam",
  rating: 3,
  date: "2026-08-13",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-483",
  author: "Démo Clara",
  rating: 5,
  date: "2026-08-04",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-484",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-10-05",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-485",
  author: "Démo Eva",
  rating: 5,
  date: "2026-07-14",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-486",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-12-15",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-487",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-12-16",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-488",
  author: "Démo Inès",
  rating: 4,
  date: "2026-11-21",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-489",
  author: "Démo Marius",
  rating: 5,
  date: "2026-03-25",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-490",
  author: "Démo Léo",
  rating: 5,
  date: "2026-04-23",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-491",
  author: "Démo Lola",
  rating: 5,
  date: "2026-09-08",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-492",
  author: "Démo Lola",
  rating: 4,
  date: "2026-06-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-493",
  author: "Démo Eva",
  rating: 5,
  date: "2026-07-05",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-494",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-04-02",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-495",
  author: "Démo Léna",
  rating: 4,
  date: "2026-06-08",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-496",
  author: "Démo Océane",
  rating: 4,
  date: "2026-02-17",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-497",
  author: "Démo Océane",
  rating: 4,
  date: "2026-02-16",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-498",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-01-26",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-499",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-08-12",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-500",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-05-09",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-501",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-08-08",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-502",
  author: "Démo Alice",
  rating: 5,
  date: "2026-04-21",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-503",
  author: "Démo Nina",
  rating: 5,
  date: "2026-08-17",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-504",
  author: "Démo Louis",
  rating: 5,
  date: "2026-10-10",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-505",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-11-07",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-506",
  author: "Démo Émilie",
  rating: 4,
  date: "2026-04-14",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-507",
  author: "Démo Lola",
  rating: 4,
  date: "2026-09-12",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-508",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-10-10",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-509",
  author: "Démo Louis",
  rating: 5,
  date: "2026-09-14",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-510",
  author: "Démo Laura",
  rating: 5,
  date: "2026-03-25",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-511",
  author: "Démo Eva",
  rating: 5,
  date: "2026-12-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-512",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-05-15",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-513",
  author: "Démo Julie",
  rating: 4,
  date: "2026-02-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-514",
  author: "Démo Tom",
  rating: 4,
  date: "2026-06-17",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-515",
  author: "Démo Alexandre",
  rating: 3,
  date: "2026-08-05",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-516",
  author: "Démo Nina",
  rating: 4,
  date: "2026-06-08",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-517",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-04-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-518",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-03-16",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-519",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-09-23",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-520",
  author: "Démo Camille",
  rating: 5,
  date: "2026-08-12",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-521",
  author: "Démo Charlotte",
  rating: 4,
  date: "2026-02-08",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-522",
  author: "Démo Eva",
  rating: 5,
  date: "2026-06-10",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-523",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-06-19",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-524",
  author: "Démo Yanis",
  rating: 3,
  date: "2026-12-07",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-525",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-12-23",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-526",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-01-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-527",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-05-06",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-528",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-03-10",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-529",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-08-10",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-530",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-03-20",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-531",
  author: "Démo Noah",
  rating: 5,
  date: "2026-04-21",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-532",
  author: "Démo Julien",
  rating: 5,
  date: "2026-04-02",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-533",
  author: "Démo Chloé",
  rating: 3,
  date: "2026-10-24",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-534",
  author: "Démo Lina",
  rating: 5,
  date: "2026-01-14",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-535",
  author: "Démo Laura",
  rating: 5,
  date: "2026-11-03",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-536",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-10-22",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-537",
  author: "Démo Manon",
  rating: 3,
  date: "2026-11-03",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-538",
  author: "Démo Quentin",
  rating: 4,
  date: "2026-09-20",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-539",
  author: "Démo Yanis",
  rating: 4,
  date: "2026-05-04",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-540",
  author: "Démo Zoé",
  rating: 4,
  date: "2026-02-05",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-541",
  author: "Démo Raphaël",
  rating: 4,
  date: "2026-09-18",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-542",
  author: "Démo Léna",
  rating: 4,
  date: "2026-05-11",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-543",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-10-10",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-544",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-11-19",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-545",
  author: "Démo Pierre",
  rating: 5,
  date: "2026-01-07",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-546",
  author: "Démo Léo",
  rating: 4,
  date: "2026-07-28",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-547",
  author: "Démo Margaux",
  rating: 4,
  date: "2026-05-05",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-548",
  author: "Démo Victor",
  rating: 4,
  date: "2026-12-17",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-549",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-05-16",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-550",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-03-24",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-551",
  author: "Démo Zoé",
  rating: 4,
  date: "2026-06-08",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-552",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-01-19",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-553",
  author: "Démo Julie",
  rating: 5,
  date: "2026-11-19",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-554",
  author: "Démo Hugo",
  rating: 4,
  date: "2026-08-23",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-555",
  author: "Démo Julie",
  rating: 5,
  date: "2026-01-23",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-556",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-02-01",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-557",
  author: "Démo Clara",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-558",
  author: "Démo Gabriel",
  rating: 4,
  date: "2026-10-08",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-559",
  author: "Démo Inès",
  rating: 5,
  date: "2026-10-06",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-560",
  author: "Démo Laura",
  rating: 5,
  date: "2026-11-16",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-561",
  author: "Démo Emma",
  rating: 5,
  date: "2026-02-11",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-562",
  author: "Démo Gabriel",
  rating: 4,
  date: "2026-09-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-563",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-11-10",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-564",
  author: "Démo Victor",
  rating: 5,
  date: "2026-06-24",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-565",
  author: "Démo Émilie",
  rating: 4,
  date: "2026-04-04",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-566",
  author: "Démo Inès",
  rating: 5,
  date: "2026-01-10",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-567",
  author: "Démo Tom",
  rating: 5,
  date: "2026-07-08",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-568",
  author: "Démo Arthur",
  rating: 4,
  date: "2026-09-02",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-569",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-09-18",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-570",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-05-15",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-571",
  author: "Démo Théo",
  rating: 5,
  date: "2026-08-26",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-572",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-07-28",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-573",
  author: "Démo Jade",
  rating: 5,
  date: "2026-05-22",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-574",
  author: "Démo Lucie",
  rating: 4,
  date: "2026-02-16",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-575",
  author: "Démo Bastien",
  rating: 3,
  date: "2026-02-19",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-576",
  author: "Démo Laura",
  rating: 5,
  date: "2026-10-20",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-577",
  author: "Démo Marine",
  rating: 3,
  date: "2026-11-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-578",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-10-06",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-579",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-02-11",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-580",
  author: "Démo Pierre",
  rating: 4,
  date: "2026-06-01",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-581",
  author: "Démo Chloé",
  rating: 4,
  date: "2026-01-04",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-582",
  author: "Démo Bastien",
  rating: 5,
  date: "2026-03-03",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-583",
  author: "Démo Nina",
  rating: 5,
  date: "2026-08-11",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-584",
  author: "Démo Julien",
  rating: 5,
  date: "2026-06-24",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-585",
  author: "Démo Romain",
  rating: 5,
  date: "2026-04-19",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-586",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-12-28",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-587",
  author: "Démo Manon",
  rating: 4,
  date: "2026-05-04",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-588",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-11-15",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-589",
  author: "Démo Chloé",
  rating: 4,
  date: "2026-04-17",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-590",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-03-10",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-591",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-01-22",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-592",
  author: "Démo Eva",
  rating: 5,
  date: "2026-09-23",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-593",
  author: "Démo Théo",
  rating: 5,
  date: "2026-01-22",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-594",
  author: "Démo Léo",
  rating: 5,
  date: "2026-01-14",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-595",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-12-14",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-596",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-06-19",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-597",
  author: "Démo Julie",
  rating: 5,
  date: "2026-09-25",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-598",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-11-21",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-599",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-03-17",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-600",
  author: "Démo Nina",
  rating: 5,
  date: "2026-01-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-601",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-02-11",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-602",
  author: "Démo Louis",
  rating: 4,
  date: "2026-09-08",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-603",
  author: "Démo Clara",
  rating: 5,
  date: "2026-07-27",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-604",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-11-04",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-605",
  author: "Démo Laura",
  rating: 5,
  date: "2026-01-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-606",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-08-14",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-607",
  author: "Démo Alexandre",
  rating: 3,
  date: "2026-11-20",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-608",
  author: "Démo Raphaël",
  rating: 4,
  date: "2026-05-22",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-609",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-05-27",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-610",
  author: "Démo Laura",
  rating: 3,
  date: "2026-08-16",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-611",
  author: "Démo Léo",
  rating: 5,
  date: "2026-06-28",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-612",
  author: "Démo Léna",
  rating: 5,
  date: "2026-02-07",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-613",
  author: "Démo Pauline",
  rating: 3,
  date: "2026-09-11",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-614",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-09-04",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-615",
  author: "Démo Clara",
  rating: 4,
  date: "2026-07-01",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-616",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-09-04",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-617",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-06-24",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-618",
  author: "Démo Noah",
  rating: 5,
  date: "2026-11-25",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-619",
  author: "Démo Adrien",
  rating: 3,
  date: "2026-05-26",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-620",
  author: "Démo Hugo",
  rating: 4,
  date: "2026-09-12",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-621",
  author: "Démo Léna",
  rating: 4,
  date: "2026-12-28",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-622",
  author: "Démo Romain",
  rating: 3,
  date: "2026-10-26",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-623",
  author: "Démo Clara",
  rating: 5,
  date: "2026-06-18",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-624",
  author: "Démo Lina",
  rating: 5,
  date: "2026-10-02",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-625",
  author: "Démo Mathieu",
  rating: 4,
  date: "2026-09-17",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-626",
  author: "Démo Adam",
  rating: 5,
  date: "2026-12-13",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-627",
  author: "Démo Manon",
  rating: 5,
  date: "2026-11-03",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-628",
  author: "Démo Eva",
  rating: 5,
  date: "2026-01-08",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-629",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-01-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-630",
  author: "Démo Romain",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-631",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-03-26",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-632",
  author: "Démo Antoine",
  rating: 4,
  date: "2026-08-27",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-633",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-01-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-634",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-06-07",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-635",
  author: "Démo Noah",
  rating: 4,
  date: "2026-06-20",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-636",
  author: "Démo Marine",
  rating: 5,
  date: "2026-05-17",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-637",
  author: "Démo Élodie",
  rating: 4,
  date: "2026-03-06",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-638",
  author: "Démo Emma",
  rating: 5,
  date: "2026-03-03",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-639",
  author: "Démo Lola",
  rating: 5,
  date: "2026-01-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-640",
  author: "Démo Célia",
  rating: 4,
  date: "2026-01-23",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-641",
  author: "Démo Victor",
  rating: 4,
  date: "2026-03-28",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-642",
  author: "Démo Lola",
  rating: 5,
  date: "2026-10-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-643",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-07-09",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-644",
  author: "Démo Romain",
  rating: 4,
  date: "2026-09-11",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-645",
  author: "Démo Alexandre",
  rating: 3,
  date: "2026-12-06",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-646",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-12-10",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-647",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-05-10",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-648",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-07-12",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-649",
  author: "Démo Lina",
  rating: 5,
  date: "2026-04-28",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-650",
  author: "Démo Louise",
  rating: 5,
  date: "2026-09-20",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-651",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-10-06",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-652",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-12-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-653",
  author: "Démo Nicolas",
  rating: 4,
  date: "2026-10-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-654",
  author: "Démo Alice",
  rating: 5,
  date: "2026-11-26",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-655",
  author: "Démo Jade",
  rating: 4,
  date: "2026-07-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-656",
  author: "Démo Lucas",
  rating: 4,
  date: "2026-08-06",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-657",
  author: "Démo Manon",
  rating: 5,
  date: "2026-04-11",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-658",
  author: "Démo Noémie",
  rating: 3,
  date: "2026-05-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-659",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-03-24",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-660",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-05-13",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-661",
  author: "Démo Mia",
  rating: 4,
  date: "2026-04-20",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-662",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-02-16",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-663",
  author: "Démo Romain",
  rating: 4,
  date: "2026-06-25",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-664",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-09-12",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-665",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-09-12",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-666",
  author: "Démo Victor",
  rating: 5,
  date: "2026-05-23",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-667",
  author: "Démo Arthur",
  rating: 5,
  date: "2026-05-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-668",
  author: "Démo Célia",
  rating: 5,
  date: "2026-06-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-669",
  author: "Démo Lina",
  rating: 4,
  date: "2026-09-17",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-670",
  author: "Démo Laura",
  rating: 4,
  date: "2026-11-15",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-671",
  author: "Démo Julie",
  rating: 3,
  date: "2026-06-26",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-672",
  author: "Démo Jade",
  rating: 5,
  date: "2026-05-02",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-673",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-10-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-674",
  author: "Démo Louis",
  rating: 3,
  date: "2026-04-25",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-675",
  author: "Démo Sarah",
  rating: 3,
  date: "2026-04-27",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-676",
  author: "Démo Julie",
  rating: 5,
  date: "2026-06-13",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-677",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-11-27",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-678",
  author: "Démo Bastien",
  rating: 4,
  date: "2026-12-24",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-679",
  author: "Démo Théo",
  rating: 4,
  date: "2026-06-08",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-680",
  author: "Démo Simon",
  rating: 5,
  date: "2026-03-13",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-681",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-12-25",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-682",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-08-21",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-683",
  author: "Démo Gabriel",
  rating: 3,
  date: "2026-01-27",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-684",
  author: "Démo Victor",
  rating: 5,
  date: "2026-06-09",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-685",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-10-27",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-686",
  author: "Démo Marius",
  rating: 4,
  date: "2026-07-13",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-687",
  author: "Démo Théo",
  rating: 3,
  date: "2026-10-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-688",
  author: "Démo David",
  rating: 4,
  date: "2026-05-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-689",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-01-05",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-690",
  author: "Démo Simon",
  rating: 4,
  date: "2026-11-23",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-691",
  author: "Démo Émilie",
  rating: 3,
  date: "2026-06-11",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-692",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-09-25",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-693",
  author: "Démo Noémie",
  rating: 4,
  date: "2026-06-19",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-694",
  author: "Démo Valentin",
  rating: 4,
  date: "2026-12-11",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-695",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-11-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-696",
  author: "Démo Romain",
  rating: 4,
  date: "2026-08-24",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-697",
  author: "Démo Pauline",
  rating: 3,
  date: "2026-05-24",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-698",
  author: "Démo Louise",
  rating: 5,
  date: "2026-12-12",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-699",
  author: "Démo Chloé",
  rating: 4,
  date: "2026-12-15",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-700",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-04-21",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-701",
  author: "Démo Noah",
  rating: 5,
  date: "2026-03-21",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-702",
  author: "Démo Bastien",
  rating: 4,
  date: "2026-10-14",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-703",
  author: "Démo Pauline",
  rating: 5,
  date: "2026-07-03",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-704",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-05-10",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-705",
  author: "Démo Théo",
  rating: 3,
  date: "2026-10-04",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-706",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-08-03",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-707",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-05-11",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-708",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-11-03",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-709",
  author: "Démo Bastien",
  rating: 5,
  date: "2026-02-24",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-710",
  author: "Démo Emma",
  rating: 5,
  date: "2026-09-03",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-711",
  author: "Démo Louise",
  rating: 4,
  date: "2026-10-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-712",
  author: "Démo Lina",
  rating: 5,
  date: "2026-09-18",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-713",
  author: "Démo Quentin",
  rating: 3,
  date: "2026-04-11",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-714",
  author: "Démo David",
  rating: 5,
  date: "2026-07-07",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-715",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-04-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-716",
  author: "Démo Marine",
  rating: 5,
  date: "2026-02-28",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-717",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-10-15",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-718",
  author: "Démo Louise",
  rating: 5,
  date: "2026-04-06",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-719",
  author: "Démo Noah",
  rating: 4,
  date: "2026-06-05",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-720",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-04-19",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-721",
  author: "Démo Mathieu",
  rating: 4,
  date: "2026-04-09",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-722",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-04-05",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-723",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-08-27",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-724",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-09-06",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-725",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-05-20",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-726",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-07-22",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-727",
  author: "Démo Gabriel",
  rating: 4,
  date: "2026-05-28",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-728",
  author: "Démo Nina",
  rating: 5,
  date: "2026-05-06",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-729",
  author: "Démo Léa",
  rating: 5,
  date: "2026-11-02",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-730",
  author: "Démo Valentin",
  rating: 4,
  date: "2026-06-08",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-731",
  author: "Démo Martin",
  rating: 5,
  date: "2026-03-12",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-732",
  author: "Démo Martin",
  rating: 3,
  date: "2026-10-27",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-733",
  author: "Démo Martin",
  rating: 3,
  date: "2026-05-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-734",
  author: "Démo Noémie",
  rating: 4,
  date: "2026-01-14",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-735",
  author: "Démo Camille",
  rating: 5,
  date: "2026-07-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-736",
  author: "Démo Célia",
  rating: 4,
  date: "2026-03-06",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-737",
  author: "Démo Mia",
  rating: 5,
  date: "2026-04-19",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-738",
  author: "Démo Lina",
  rating: 4,
  date: "2026-01-04",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-739",
  author: "Démo Mia",
  rating: 5,
  date: "2026-05-15",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-740",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-03-25",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-741",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-11-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-742",
  author: "Démo Emma",
  rating: 4,
  date: "2026-12-11",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-743",
  author: "Démo Zoé",
  rating: 4,
  date: "2026-05-13",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-744",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-12-27",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-745",
  author: "Démo Léna",
  rating: 5,
  date: "2026-10-07",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-746",
  author: "Démo Victor",
  rating: 4,
  date: "2026-06-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-747",
  author: "Démo Camille",
  rating: 5,
  date: "2026-05-18",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-748",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-11-21",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-749",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-08-12",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-750",
  author: "Démo Inès",
  rating: 5,
  date: "2026-11-06",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-751",
  author: "Démo Nina",
  rating: 5,
  date: "2026-01-17",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-752",
  author: "Démo Julien",
  rating: 5,
  date: "2026-06-02",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-753",
  author: "Démo David",
  rating: 3,
  date: "2026-08-07",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-754",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-12-04",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-755",
  author: "Démo Thomas",
  rating: 4,
  date: "2026-02-19",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-756",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-01-11",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-757",
  author: "Démo Pauline",
  rating: 5,
  date: "2026-08-13",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-758",
  author: "Démo Quentin",
  rating: 4,
  date: "2026-05-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-759",
  author: "Démo Pauline",
  rating: 5,
  date: "2026-07-25",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-760",
  author: "Démo Océane",
  rating: 5,
  date: "2026-05-15",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-761",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-05-03",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-762",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-11-26",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-763",
  author: "Démo Mathieu",
  rating: 4,
  date: "2026-02-11",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-764",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-07-06",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-765",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-07-07",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-766",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-10-11",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-767",
  author: "Démo Inès",
  rating: 4,
  date: "2026-04-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-768",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-03-15",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-769",
  author: "Démo Marine",
  rating: 3,
  date: "2026-01-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-770",
  author: "Démo Adam",
  rating: 3,
  date: "2026-05-07",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-771",
  author: "Démo Julie",
  rating: 5,
  date: "2026-08-03",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-772",
  author: "Démo Marius",
  rating: 4,
  date: "2026-11-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-773",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-06-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-774",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-11-08",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-775",
  author: "Démo Louise",
  rating: 4,
  date: "2026-11-16",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-776",
  author: "Démo Nina",
  rating: 5,
  date: "2026-09-05",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-777",
  author: "Démo Léna",
  rating: 4,
  date: "2026-12-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-778",
  author: "Démo Louis",
  rating: 5,
  date: "2026-08-09",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-779",
  author: "Démo Célia",
  rating: 4,
  date: "2026-01-18",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-780",
  author: "Démo Marine",
  rating: 5,
  date: "2026-04-06",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-781",
  author: "Démo Mia",
  rating: 5,
  date: "2026-06-25",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-782",
  author: "Démo Lola",
  rating: 5,
  date: "2026-09-13",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-783",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-01-15",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-784",
  author: "Démo Romain",
  rating: 3,
  date: "2026-09-13",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-785",
  author: "Démo Marine",
  rating: 5,
  date: "2026-01-05",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-786",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-05-18",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-787",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-07-18",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-788",
  author: "Démo Martin",
  rating: 4,
  date: "2026-09-18",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-789",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-04-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-790",
  author: "Démo Maëlle",
  rating: 4,
  date: "2026-10-14",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-791",
  author: "Démo Julie",
  rating: 5,
  date: "2026-06-17",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-792",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-02-04",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-793",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-11-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-794",
  author: "Démo Léa",
  rating: 5,
  date: "2026-04-02",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-795",
  author: "Démo Tom",
  rating: 5,
  date: "2026-01-10",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-796",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-06-05",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-797",
  author: "Démo Laura",
  rating: 3,
  date: "2026-11-09",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-798",
  author: "Démo Adam",
  rating: 5,
  date: "2026-05-09",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-799",
  author: "Démo David",
  rating: 4,
  date: "2026-12-27",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-800",
  author: "Démo Laura",
  rating: 4,
  date: "2026-05-02",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-801",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-02-07",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-802",
  author: "Démo Julien",
  rating: 4,
  date: "2026-05-20",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-803",
  author: "Démo Sophie",
  rating: 4,
  date: "2026-01-08",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-804",
  author: "Démo Clara",
  rating: 5,
  date: "2026-02-15",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-805",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-02-01",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-806",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-12-26",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-807",
  author: "Démo Maëlle",
  rating: 3,
  date: "2026-01-11",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-808",
  author: "Démo Manon",
  rating: 5,
  date: "2026-08-22",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-809",
  author: "Démo Romain",
  rating: 5,
  date: "2026-04-18",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-810",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-12-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-811",
  author: "Démo Léa",
  rating: 4,
  date: "2026-12-20",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-812",
  author: "Démo Martin",
  rating: 5,
  date: "2026-03-10",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-813",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-02-28",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-814",
  author: "Démo Léna",
  rating: 5,
  date: "2026-04-12",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-815",
  author: "Démo Noah",
  rating: 5,
  date: "2026-11-20",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-816",
  author: "Démo Hugo",
  rating: 4,
  date: "2026-10-01",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-817",
  author: "Démo Eva",
  rating: 5,
  date: "2026-06-01",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-818",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-06-17",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-819",
  author: "Démo Théo",
  rating: 5,
  date: "2026-03-01",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-820",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-10-22",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-821",
  author: "Démo Mélanie",
  rating: 5,
  date: "2026-03-15",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-822",
  author: "Démo Lola",
  rating: 5,
  date: "2026-09-14",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-823",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-09-13",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-824",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-06-25",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-825",
  author: "Démo Victor",
  rating: 5,
  date: "2026-05-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-826",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-06-23",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-827",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-01-27",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-828",
  author: "Démo Arthur",
  rating: 4,
  date: "2026-04-22",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-829",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-11-20",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-830",
  author: "Démo Zoé",
  rating: 3,
  date: "2026-06-28",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-831",
  author: "Démo Noah",
  rating: 4,
  date: "2026-01-08",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-832",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-02-03",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-833",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-04-16",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-834",
  author: "Démo Clara",
  rating: 4,
  date: "2026-10-16",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-835",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-01-22",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-836",
  author: "Démo David",
  rating: 5,
  date: "2026-01-06",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-837",
  author: "Démo Marius",
  rating: 4,
  date: "2026-09-22",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-838",
  author: "Démo Célia",
  rating: 5,
  date: "2026-04-27",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-839",
  author: "Démo Victor",
  rating: 4,
  date: "2026-03-03",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-840",
  author: "Démo Pauline",
  rating: 3,
  date: "2026-11-27",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-841",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-05-02",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-842",
  author: "Démo Tom",
  rating: 4,
  date: "2026-10-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-843",
  author: "Démo Alice",
  rating: 5,
  date: "2026-09-13",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-844",
  author: "Démo Théo",
  rating: 5,
  date: "2026-08-20",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-845",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-08-16",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-846",
  author: "Démo Manon",
  rating: 3,
  date: "2026-07-11",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-847",
  author: "Démo Martin",
  rating: 5,
  date: "2026-01-22",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-848",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-08-03",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-849",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-07-19",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-850",
  author: "Démo Léo",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-851",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-03-13",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-852",
  author: "Démo Inès",
  rating: 5,
  date: "2026-05-21",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-853",
  author: "Démo Inès",
  rating: 5,
  date: "2026-03-20",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-854",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-03-25",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-855",
  author: "Démo Tom",
  rating: 4,
  date: "2026-10-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-856",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-857",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-09-12",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-858",
  author: "Démo Samuel",
  rating: 3,
  date: "2026-11-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-859",
  author: "Démo Amandine",
  rating: 4,
  date: "2026-07-01",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-860",
  author: "Démo Marius",
  rating: 4,
  date: "2026-11-03",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-861",
  author: "Démo Gabriel",
  rating: 3,
  date: "2026-05-05",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-862",
  author: "Démo Louis",
  rating: 5,
  date: "2026-07-01",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-863",
  author: "Démo Raphaël",
  rating: 4,
  date: "2026-05-17",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-864",
  author: "Démo Valentin",
  rating: 4,
  date: "2026-03-26",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-865",
  author: "Démo Jade",
  rating: 5,
  date: "2026-07-27",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-866",
  author: "Démo Eva",
  rating: 5,
  date: "2026-06-14",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-867",
  author: "Démo Nina",
  rating: 5,
  date: "2026-01-05",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-868",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-01-27",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-869",
  author: "Démo Adam",
  rating: 5,
  date: "2026-07-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-870",
  author: "Démo Romain",
  rating: 4,
  date: "2026-04-20",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-871",
  author: "Démo Margaux",
  rating: 4,
  date: "2026-01-22",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-872",
  author: "Démo Marius",
  rating: 5,
  date: "2026-12-06",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-873",
  author: "Démo Théo",
  rating: 5,
  date: "2026-03-09",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-874",
  author: "Démo Léo",
  rating: 5,
  date: "2026-03-28",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-875",
  author: "Démo Maxime",
  rating: 4,
  date: "2026-12-15",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-876",
  author: "Démo Noah",
  rating: 3,
  date: "2026-09-16",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-877",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-06-15",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-878",
  author: "Démo Lola",
  rating: 5,
  date: "2026-09-06",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-879",
  author: "Démo Nina",
  rating: 3,
  date: "2026-11-25",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-880",
  author: "Démo Léa",
  rating: 4,
  date: "2026-10-13",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-881",
  author: "Démo Julien",
  rating: 4,
  date: "2026-10-23",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-882",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-883",
  author: "Démo Clara",
  rating: 4,
  date: "2026-11-01",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-884",
  author: "Démo Tom",
  rating: 3,
  date: "2026-06-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-885",
  author: "Démo Arthur",
  rating: 4,
  date: "2026-01-20",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-886",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-01-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-887",
  author: "Démo Marine",
  rating: 4,
  date: "2026-09-20",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-888",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-02-19",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-889",
  author: "Démo Marine",
  rating: 4,
  date: "2026-07-12",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-890",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-03-02",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-891",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-10-18",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-892",
  author: "Démo Clara",
  rating: 5,
  date: "2026-07-07",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-893",
  author: "Démo Manon",
  rating: 4,
  date: "2026-08-02",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-894",
  author: "Démo David",
  rating: 5,
  date: "2026-04-27",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-895",
  author: "Démo Mia",
  rating: 5,
  date: "2026-02-09",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-896",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-03-26",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-897",
  author: "Démo Bastien",
  rating: 5,
  date: "2026-08-28",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-898",
  author: "Démo Louis",
  rating: 5,
  date: "2026-05-03",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-899",
  author: "Démo David",
  rating: 4,
  date: "2026-01-04",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-900",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-10-09",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-901",
  author: "Démo Louise",
  rating: 5,
  date: "2026-03-11",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-902",
  author: "Démo Maëlle",
  rating: 3,
  date: "2026-04-18",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-903",
  author: "Démo Louis",
  rating: 4,
  date: "2026-06-10",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-904",
  author: "Démo Tom",
  rating: 5,
  date: "2026-02-17",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-905",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-11-03",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-906",
  author: "Démo Lina",
  rating: 4,
  date: "2026-10-27",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-907",
  author: "Démo Lola",
  rating: 5,
  date: "2026-09-17",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-908",
  author: "Démo Gabriel",
  rating: 4,
  date: "2026-09-06",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-909",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-03-01",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-910",
  author: "Démo Pauline",
  rating: 5,
  date: "2026-06-21",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-911",
  author: "Démo Alice",
  rating: 4,
  date: "2026-08-13",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-912",
  author: "Démo Célia",
  rating: 4,
  date: "2026-03-16",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-913",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-11-13",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-914",
  author: "Démo Anaïs",
  rating: 4,
  date: "2026-09-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-915",
  author: "Démo Martin",
  rating: 5,
  date: "2026-08-12",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-916",
  author: "Démo Valentin",
  rating: 4,
  date: "2026-11-28",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-917",
  author: "Démo Alice",
  rating: 4,
  date: "2026-07-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-918",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-04-04",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-919",
  author: "Démo Lucas",
  rating: 3,
  date: "2026-09-13",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-920",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-08-19",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-921",
  author: "Démo Pierre",
  rating: 5,
  date: "2026-09-16",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-922",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-09-13",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-923",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-12-26",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-924",
  author: "Démo Pierre",
  rating: 4,
  date: "2026-07-02",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-925",
  author: "Démo Maxime",
  rating: 4,
  date: "2026-08-01",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-926",
  author: "Démo Nina",
  rating: 5,
  date: "2026-09-27",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-927",
  author: "Démo Léa",
  rating: 3,
  date: "2026-10-17",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-928",
  author: "Démo Nicolas",
  rating: 4,
  date: "2026-07-17",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-929",
  author: "Démo Léna",
  rating: 5,
  date: "2026-03-13",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-930",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-07-28",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-931",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-04-01",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-932",
  author: "Démo Mathilde",
  rating: 3,
  date: "2026-12-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-933",
  author: "Démo Célia",
  rating: 3,
  date: "2026-12-03",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-934",
  author: "Démo Louise",
  rating: 3,
  date: "2026-03-26",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-935",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-05-19",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-936",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-07-11",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-937",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-06-18",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-938",
  author: "Démo Eva",
  rating: 4,
  date: "2026-03-20",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-939",
  author: "Démo Marine",
  rating: 4,
  date: "2026-05-25",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-940",
  author: "Démo Jade",
  rating: 4,
  date: "2026-09-17",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-941",
  author: "Démo Louise",
  rating: 4,
  date: "2026-12-23",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-942",
  author: "Démo Adam",
  rating: 5,
  date: "2026-01-16",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-943",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-10-11",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-944",
  author: "Démo Marius",
  rating: 4,
  date: "2026-12-13",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-945",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-03-23",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-946",
  author: "Démo Mia",
  rating: 3,
  date: "2026-06-13",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-947",
  author: "Démo Marius",
  rating: 5,
  date: "2026-11-16",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-948",
  author: "Démo Margaux",
  rating: 4,
  date: "2026-07-18",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-949",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-06-27",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-950",
  author: "Démo Louis",
  rating: 5,
  date: "2026-02-01",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-951",
  author: "Démo Victor",
  rating: 4,
  date: "2026-07-05",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-952",
  author: "Démo Théo",
  rating: 5,
  date: "2026-10-26",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-953",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-04-21",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-954",
  author: "Démo Enzo",
  rating: 4,
  date: "2026-12-21",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-955",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-04-12",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-956",
  author: "Démo Léa",
  rating: 4,
  date: "2026-05-07",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-957",
  author: "Démo Lola",
  rating: 5,
  date: "2026-10-03",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-958",
  author: "Démo Louise",
  rating: 5,
  date: "2026-08-04",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-959",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-08-19",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-960",
  author: "Démo Thomas",
  rating: 4,
  date: "2026-07-25",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-961",
  author: "Démo Tom",
  rating: 5,
  date: "2026-09-22",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-962",
  author: "Démo Romain",
  rating: 5,
  date: "2026-04-16",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-963",
  author: "Démo Alice",
  rating: 5,
  date: "2026-02-04",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-964",
  author: "Démo Marine",
  rating: 4,
  date: "2026-03-19",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-965",
  author: "Démo Marius",
  rating: 3,
  date: "2026-10-20",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-966",
  author: "Démo Léna",
  rating: 5,
  date: "2026-02-11",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-967",
  author: "Démo Julien",
  rating: 5,
  date: "2026-01-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-968",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-04-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-969",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-05-15",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-970",
  author: "Démo Inès",
  rating: 5,
  date: "2026-08-12",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-971",
  author: "Démo Lucas",
  rating: 4,
  date: "2026-04-21",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-972",
  author: "Démo Julien",
  rating: 4,
  date: "2026-10-02",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-973",
  author: "Démo Mathieu",
  rating: 4,
  date: "2026-04-05",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-974",
  author: "Démo Marius",
  rating: 3,
  date: "2026-10-18",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-975",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-01-16",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-976",
  author: "Démo Julien",
  rating: 5,
  date: "2026-11-22",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-977",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-08-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-978",
  author: "Démo Jade",
  rating: 5,
  date: "2026-06-11",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-979",
  author: "Démo Louise",
  rating: 5,
  date: "2026-08-17",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-980",
  author: "Démo Tom",
  rating: 3,
  date: "2026-12-09",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-981",
  author: "Démo Nina",
  rating: 4,
  date: "2026-03-02",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-982",
  author: "Démo Alexis",
  rating: 5,
  date: "2026-11-04",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-983",
  author: "Démo Amandine",
  rating: 4,
  date: "2026-11-19",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-984",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-07-16",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-985",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-07-23",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-986",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-03-27",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-987",
  author: "Démo Océane",
  rating: 5,
  date: "2026-11-24",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-988",
  author: "Démo Océane",
  rating: 5,
  date: "2026-04-28",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-989",
  author: "Démo Adam",
  rating: 3,
  date: "2026-05-11",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-990",
  author: "Démo Manon",
  rating: 5,
  date: "2026-11-01",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-991",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-12-25",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-992",
  author: "Démo Tom",
  rating: 5,
  date: "2026-01-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-993",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-05-19",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-994",
  author: "Démo Léo",
  rating: 5,
  date: "2026-12-15",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-995",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-04-09",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-996",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-03-24",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-997",
  author: "Démo Jeanne",
  rating: 5,
  date: "2026-11-22",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-998",
  author: "Démo Enzo",
  rating: 5,
  date: "2026-03-22",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-999",
  author: "Démo Jade",
  rating: 3,
  date: "2026-02-20",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1000",
  author: "Démo Charlotte",
  rating: 3,
  date: "2026-05-27",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1001",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-02-21",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1002",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-11-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1003",
  author: "Démo Martin",
  rating: 4,
  date: "2026-07-20",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1004",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-09-28",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1005",
  author: "Démo Emma",
  rating: 4,
  date: "2026-08-10",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1006",
  author: "Démo Arthur",
  rating: 5,
  date: "2026-03-02",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1007",
  author: "Démo Adrien",
  rating: 4,
  date: "2026-06-19",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1008",
  author: "Démo Benjamin",
  rating: 4,
  date: "2026-03-27",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1009",
  author: "Démo Julie",
  rating: 4,
  date: "2026-05-25",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1010",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-10-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1011",
  author: "Démo Adrien",
  rating: 3,
  date: "2026-10-15",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1012",
  author: "Démo Simon",
  rating: 5,
  date: "2026-01-18",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1013",
  author: "Démo Célia",
  rating: 5,
  date: "2026-10-01",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1014",
  author: "Démo Emma",
  rating: 5,
  date: "2026-11-19",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1015",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-10-03",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1016",
  author: "Démo Léa",
  rating: 5,
  date: "2026-10-28",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1017",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-01-21",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1018",
  author: "Démo Julien",
  rating: 5,
  date: "2026-02-23",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1019",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-10-06",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1020",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-10-27",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1021",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-10-09",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1022",
  author: "Démo Léna",
  rating: 3,
  date: "2026-10-03",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1023",
  author: "Démo Léo",
  rating: 5,
  date: "2026-02-24",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1024",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-01-06",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1025",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-07-17",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1026",
  author: "Démo Amandine",
  rating: 4,
  date: "2026-05-16",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1027",
  author: "Démo Adam",
  rating: 5,
  date: "2026-05-05",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1028",
  author: "Démo Lina",
  rating: 5,
  date: "2026-03-23",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1029",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-12-13",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1030",
  author: "Démo Adrien",
  rating: 4,
  date: "2026-09-23",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1031",
  author: "Démo Inès",
  rating: 5,
  date: "2026-10-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1032",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-08-27",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1033",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-10-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1034",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-02-23",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1035",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-01-18",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1036",
  author: "Démo Thomas",
  rating: 4,
  date: "2026-08-09",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1037",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-07-11",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1038",
  author: "Démo Raphaël",
  rating: 4,
  date: "2026-01-27",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1039",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-12-03",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1040",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-12-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1041",
  author: "Démo Quentin",
  rating: 4,
  date: "2026-07-17",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1042",
  author: "Démo Julie",
  rating: 5,
  date: "2026-02-10",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1043",
  author: "Démo Mia",
  rating: 5,
  date: "2026-08-26",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1044",
  author: "Démo Nicolas",
  rating: 4,
  date: "2026-07-06",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1045",
  author: "Démo Léo",
  rating: 5,
  date: "2026-03-04",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1046",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-06-01",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1047",
  author: "Démo Emma",
  rating: 5,
  date: "2026-02-28",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1048",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-02-03",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1049",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-02-10",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1050",
  author: "Démo Charlotte",
  rating: 4,
  date: "2026-01-04",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1051",
  author: "Démo Valentin",
  rating: 4,
  date: "2026-03-27",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1052",
  author: "Démo Julie",
  rating: 4,
  date: "2026-09-08",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1053",
  author: "Démo Léo",
  rating: 5,
  date: "2026-03-22",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1054",
  author: "Démo Noah",
  rating: 5,
  date: "2026-01-11",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1055",
  author: "Démo Julien",
  rating: 4,
  date: "2026-01-13",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1056",
  author: "Démo Sarah",
  rating: 4,
  date: "2026-02-04",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1057",
  author: "Démo Pierre",
  rating: 5,
  date: "2026-06-06",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1058",
  author: "Démo Chloé",
  rating: 3,
  date: "2026-03-17",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1059",
  author: "Démo Alice",
  rating: 3,
  date: "2026-10-03",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1060",
  author: "Démo Manon",
  rating: 5,
  date: "2026-01-04",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1061",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-12-12",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1062",
  author: "Démo Célia",
  rating: 5,
  date: "2026-04-16",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1063",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-11-09",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1064",
  author: "Démo Maëlle",
  rating: 5,
  date: "2026-07-27",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1065",
  author: "Démo Alexandre",
  rating: 3,
  date: "2026-01-14",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1066",
  author: "Démo Quentin",
  rating: 5,
  date: "2026-11-01",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1067",
  author: "Démo Laura",
  rating: 4,
  date: "2026-03-02",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1068",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-12-18",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1069",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-09-03",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1070",
  author: "Démo Victor",
  rating: 5,
  date: "2026-09-18",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1071",
  author: "Démo Maxime",
  rating: 3,
  date: "2026-07-09",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1072",
  author: "Démo Mia",
  rating: 5,
  date: "2026-03-26",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1073",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-03-17",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1074",
  author: "Démo Marius",
  rating: 5,
  date: "2026-12-21",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1075",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-02-06",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1076",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-04-18",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1077",
  author: "Démo Alexandre",
  rating: 3,
  date: "2026-06-14",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1078",
  author: "Démo Valentin",
  rating: 4,
  date: "2026-08-02",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1079",
  author: "Démo Nathan",
  rating: 4,
  date: "2026-03-18",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1080",
  author: "Démo Léo",
  rating: 5,
  date: "2026-08-18",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1081",
  author: "Démo Zoé",
  rating: 4,
  date: "2026-05-26",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1082",
  author: "Démo Eva",
  rating: 5,
  date: "2026-01-26",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1083",
  author: "Démo Mia",
  rating: 4,
  date: "2026-12-11",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1084",
  author: "Démo Valentin",
  rating: 5,
  date: "2026-05-02",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1085",
  author: "Démo Alice",
  rating: 4,
  date: "2026-12-25",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1086",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-01-17",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1087",
  author: "Démo Martin",
  rating: 4,
  date: "2026-04-07",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1088",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-12-02",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1089",
  author: "Démo Zoé",
  rating: 5,
  date: "2026-07-27",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1090",
  author: "Démo Simon",
  rating: 5,
  date: "2026-05-19",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1091",
  author: "Démo Emma",
  rating: 5,
  date: "2026-12-14",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1092",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-07-27",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1093",
  author: "Démo Nicolas",
  rating: 5,
  date: "2026-08-27",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1094",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-11-16",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1095",
  author: "Démo Manon",
  rating: 4,
  date: "2026-12-01",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1096",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-07-20",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1097",
  author: "Démo Célia",
  rating: 4,
  date: "2026-07-12",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1098",
  author: "Démo Emma",
  rating: 5,
  date: "2026-08-23",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1099",
  author: "Démo Nina",
  rating: 5,
  date: "2026-08-25",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1100",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-12-01",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1101",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-10-24",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1102",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-09-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1103",
  author: "Démo Noah",
  rating: 5,
  date: "2026-02-16",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1104",
  author: "Démo Anaïs",
  rating: 5,
  date: "2026-05-28",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1105",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-10-19",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1106",
  author: "Démo Martin",
  rating: 5,
  date: "2026-10-19",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1107",
  author: "Démo Jeanne",
  rating: 3,
  date: "2026-02-22",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1108",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-04-20",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1109",
  author: "Démo Inès",
  rating: 4,
  date: "2026-08-10",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1110",
  author: "Démo Laura",
  rating: 5,
  date: "2026-04-01",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1111",
  author: "Démo Maxime",
  rating: 4,
  date: "2026-12-12",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1112",
  author: "Démo Martin",
  rating: 5,
  date: "2026-02-26",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1113",
  author: "Démo Martin",
  rating: 4,
  date: "2026-03-07",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1114",
  author: "Démo Nathan",
  rating: 5,
  date: "2026-02-12",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1115",
  author: "Démo Louis",
  rating: 4,
  date: "2026-09-09",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1116",
  author: "Démo Adam",
  rating: 5,
  date: "2026-10-24",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1117",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-07-17",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1118",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-11-13",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1119",
  author: "Démo Louis",
  rating: 4,
  date: "2026-12-21",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1120",
  author: "Démo Inès",
  rating: 4,
  date: "2026-09-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1121",
  author: "Démo Marine",
  rating: 4,
  date: "2026-09-24",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1122",
  author: "Démo Emma",
  rating: 5,
  date: "2026-05-27",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1123",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-01-27",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1124",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-06-25",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1125",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-06-17",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1126",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-08-09",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1127",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-04-25",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1128",
  author: "Démo Océane",
  rating: 4,
  date: "2026-04-24",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1129",
  author: "Démo Arthur",
  rating: 4,
  date: "2026-11-06",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1130",
  author: "Démo Pauline",
  rating: 4,
  date: "2026-09-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1131",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-12-21",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1132",
  author: "Démo Adam",
  rating: 5,
  date: "2026-12-01",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1133",
  author: "Démo Célia",
  rating: 5,
  date: "2026-02-22",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1134",
  author: "Démo Hugo",
  rating: 5,
  date: "2026-05-20",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1135",
  author: "Démo Lina",
  rating: 5,
  date: "2026-04-14",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1136",
  author: "Démo Samuel",
  rating: 4,
  date: "2026-09-21",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1137",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-10-17",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1138",
  author: "Démo Louise",
  rating: 4,
  date: "2026-09-26",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1139",
  author: "Démo Martin",
  rating: 5,
  date: "2026-03-11",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1140",
  author: "Démo Antoine",
  rating: 5,
  date: "2026-03-06",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1141",
  author: "Démo Léna",
  rating: 5,
  date: "2026-01-20",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1142",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-05-11",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1143",
  author: "Démo Margaux",
  rating: 5,
  date: "2026-05-16",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1144",
  author: "Démo Victor",
  rating: 3,
  date: "2026-12-25",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1145",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-07-01",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1146",
  author: "Démo Marine",
  rating: 5,
  date: "2026-06-19",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1147",
  author: "Démo Manon",
  rating: 5,
  date: "2026-10-01",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1148",
  author: "Démo Julie",
  rating: 4,
  date: "2026-03-22",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1149",
  author: "Démo Pauline",
  rating: 3,
  date: "2026-10-17",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1150",
  author: "Démo Eva",
  rating: 5,
  date: "2026-05-22",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1151",
  author: "Démo Victor",
  rating: 5,
  date: "2026-02-24",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1152",
  author: "Démo Amandine",
  rating: 4,
  date: "2026-12-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1153",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-11-18",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1154",
  author: "Démo Théo",
  rating: 5,
  date: "2026-09-03",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1155",
  author: "Démo Emma",
  rating: 5,
  date: "2026-06-02",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1156",
  author: "Démo Romain",
  rating: 5,
  date: "2026-09-10",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1157",
  author: "Démo Victor",
  rating: 5,
  date: "2026-03-23",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1158",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-12-17",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1159",
  author: "Démo Mia",
  rating: 5,
  date: "2026-10-13",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1160",
  author: "Démo Adrien",
  rating: 4,
  date: "2026-10-20",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1161",
  author: "Démo Léa",
  rating: 5,
  date: "2026-10-16",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1162",
  author: "Démo Léna",
  rating: 4,
  date: "2026-02-28",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1163",
  author: "Démo Alexandre",
  rating: 4,
  date: "2026-05-15",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1164",
  author: "Démo Maxime",
  rating: 4,
  date: "2026-01-23",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1165",
  author: "Démo Inès",
  rating: 3,
  date: "2026-05-16",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1166",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-02-12",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1167",
  author: "Démo Gabriel",
  rating: 5,
  date: "2026-01-04",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1168",
  author: "Démo Lina",
  rating: 5,
  date: "2026-01-19",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1169",
  author: "Démo Julie",
  rating: 5,
  date: "2026-10-28",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1170",
  author: "Démo Mathieu",
  rating: 4,
  date: "2026-08-09",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1171",
  author: "Démo Simon",
  rating: 5,
  date: "2026-01-11",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1172",
  author: "Démo Emma",
  rating: 3,
  date: "2026-09-01",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1173",
  author: "Démo Pierre",
  rating: 3,
  date: "2026-09-08",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1174",
  author: "Démo Maxime",
  rating: 5,
  date: "2026-03-26",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1175",
  author: "Démo Adam",
  rating: 4,
  date: "2026-10-21",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1176",
  author: "Démo Adam",
  rating: 5,
  date: "2026-10-08",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1177",
  author: "Démo Mathilde",
  rating: 5,
  date: "2026-03-27",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1178",
  author: "Démo Chloé",
  rating: 5,
  date: "2026-08-22",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1179",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-01-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1180",
  author: "Démo Laura",
  rating: 5,
  date: "2026-01-03",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1181",
  author: "Démo Sophie",
  rating: 4,
  date: "2026-11-07",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1182",
  author: "Démo Adam",
  rating: 4,
  date: "2026-07-14",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1183",
  author: "Démo Louis",
  rating: 5,
  date: "2026-10-03",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1184",
  author: "Démo Océane",
  rating: 5,
  date: "2026-07-03",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1185",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-09-10",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1186",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-10-22",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1187",
  author: "Démo Léa",
  rating: 5,
  date: "2026-07-13",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1188",
  author: "Démo Jeanne",
  rating: 4,
  date: "2026-03-06",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1189",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-05-24",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1190",
  author: "Démo Louis",
  rating: 5,
  date: "2026-07-03",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1191",
  author: "Démo Pierre",
  rating: 5,
  date: "2026-11-05",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1192",
  author: "Démo Louise",
  rating: 5,
  date: "2026-09-12",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1193",
  author: "Démo Hugo",
  rating: 4,
  date: "2026-12-03",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1194",
  author: "Démo Tom",
  rating: 5,
  date: "2026-05-05",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1195",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-11-10",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1196",
  author: "Démo Bastien",
  rating: 4,
  date: "2026-08-13",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1197",
  author: "Démo Quentin",
  rating: 4,
  date: "2026-03-04",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1198",
  author: "Démo Louise",
  rating: 5,
  date: "2026-11-13",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1199",
  author: "Démo Alexandre",
  rating: 5,
  date: "2026-08-10",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1200",
  author: "Démo Samuel",
  rating: 5,
  date: "2026-09-06",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1201",
  author: "Démo Charlotte",
  rating: 5,
  date: "2026-04-15",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1202",
  author: "Démo Maxime",
  rating: 4,
  date: "2026-07-23",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1203",
  author: "Démo Théo",
  rating: 4,
  date: "2026-03-22",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1204",
  author: "Démo Marine",
  rating: 5,
  date: "2026-02-15",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1205",
  author: "Démo Julie",
  rating: 4,
  date: "2026-02-02",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1206",
  author: "Démo Émilie",
  rating: 5,
  date: "2026-05-11",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1207",
  author: "Démo Élodie",
  rating: 4,
  date: "2026-02-18",
  title: "Démo — format pratique",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1208",
  author: "Démo Lucie",
  rating: 5,
  date: "2026-09-23",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1209",
  author: "Démo Eva",
  rating: 4,
  date: "2026-06-04",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1210",
  author: "Démo Camille",
  rating: 4,
  date: "2026-05-10",
  title: "Démo — objet décoratif",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1211",
  author: "Démo Inès",
  rating: 5,
  date: "2026-02-18",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1212",
  author: "Démo Thomas",
  rating: 5,
  date: "2026-06-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1213",
  author: "Démo Noémie",
  rating: 5,
  date: "2026-07-05",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1214",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-12-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1215",
  author: "Démo Emma",
  rating: 5,
  date: "2026-02-12",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1216",
  author: "Démo Elisa",
  rating: 5,
  date: "2026-12-07",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1217",
  author: "Démo Julien",
  rating: 4,
  date: "2026-02-11",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1218",
  author: "Démo Yanis",
  rating: 4,
  date: "2026-05-11",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1219",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-01-02",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1220",
  author: "Démo Manon",
  rating: 4,
  date: "2026-09-15",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1221",
  author: "Démo Amandine",
  rating: 5,
  date: "2026-04-20",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1222",
  author: "Démo Mathieu",
  rating: 5,
  date: "2026-04-14",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1223",
  author: "Démo Nina",
  rating: 4,
  date: "2026-08-14",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1224",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-09-13",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur le style moderne de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1225",
  author: "Démo Maxime",
  rating: 3,
  date: "2026-05-14",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1226",
  author: "Démo Antoine",
  rating: 4,
  date: "2026-03-19",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1227",
  author: "Démo Yanis",
  rating: 5,
  date: "2026-07-21",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1228",
  author: "Démo Sophie",
  rating: 5,
  date: "2026-01-11",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1229",
  author: "Démo Pierre",
  rating: 5,
  date: "2026-03-10",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1230",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-04-16",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1231",
  author: "Démo Adrien",
  rating: 5,
  date: "2026-06-02",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1232",
  author: "Démo Julien",
  rating: 5,
  date: "2026-03-01",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1233",
  author: "Démo Pierre",
  rating: 4,
  date: "2026-03-01",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1234",
  author: "Démo Sarah",
  rating: 5,
  date: "2026-06-02",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1235",
  author: "Démo Léo",
  rating: 5,
  date: "2026-05-01",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1236",
  author: "Démo Léo",
  rating: 4,
  date: "2026-08-06",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1237",
  author: "Démo Théo",
  rating: 4,
  date: "2026-07-15",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : texte temporaire pour tester l’affichage d’un avis produit.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1238",
  author: "Démo Adrien",
  rating: 4,
  date: "2026-11-07",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1239",
  author: "Démo Romain",
  rating: 5,
  date: "2026-02-23",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1240",
  author: "Démo Julie",
  rating: 4,
  date: "2026-07-04",
  title: "Démo — ambiance douce",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1241",
  author: "Démo Mathilde",
  rating: 3,
  date: "2026-11-23",
  title: "Démo — style raffiné",
  body: "Avis fictif de démonstration : retour synthétique sur l’aspect décoratif du modèle.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1242",
  author: "Démo Julie",
  rating: 3,
  date: "2026-07-14",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1243",
  author: "Démo Benjamin",
  rating: 5,
  date: "2026-07-28",
  title: "Démo — éclairage d’ambiance",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1244",
  author: "Démo Mathilde",
  rating: 4,
  date: "2026-05-16",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1245",
  author: "Démo Eva",
  rating: 4,
  date: "2026-09-02",
  title: "Démo — idée déco",
  body: "Avis fictif de démonstration : contenu synthétique destiné uniquement aux essais techniques.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1246",
  author: "Démo Zoé",
  rating: 3,
  date: "2026-06-23",
  title: "Démo — lumière d’appoint",
  body: "Avis fictif de démonstration : texte provisoire pour tester les cartes d’avis et leur numérotation.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1247",
  author: "Démo Adrien",
  rating: 4,
  date: "2026-12-26",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1248",
  author: "Démo Théo",
  rating: 5,
  date: "2026-05-02",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : exemple de texte sur l’usage décoratif de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1249",
  author: "Démo Lucie",
  rating: 4,
  date: "2026-07-05",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de retour sur le design facetté de la lampe.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1250",
  author: "Démo Raphaël",
  rating: 5,
  date: "2026-11-02",
  title: "Démo — design original",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’apparence de la lampe une fois posée.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1251",
  author: "Démo Élodie",
  rating: 5,
  date: "2026-07-26",
  title: "Démo — look moderne",
  body: "Avis fictif de démonstration : commentaire de test sur l’ambiance créée par une lumière douce.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1252",
  author: "Démo Sophie",
  rating: 4,
  date: "2026-07-02",
  title: "Démo — rendu décoratif",
  body: "Avis fictif de démonstration : le design de la lampe diamant attire l’œil.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1253",
  author: "Démo Émilie",
  rating: 3,
  date: "2026-10-24",
  title: "Démo — jolie lumière",
  body: "Avis fictif de démonstration : texte de test pour vérifier la mise en page sur mobile.",
  verified: true,
  demo: false
},

{
  id: "avis-lampe-diamant-1254",
  author: "Démo Lucas",
  rating: 5,
  date: "2026-11-09",
  title: "Démo — style élégant",
  body: "Avis fictif de démonstration : exemple de commentaire sur l’utilisation comme éclairage d’appoint.",
  verified: true,
  demo: false
},

];
