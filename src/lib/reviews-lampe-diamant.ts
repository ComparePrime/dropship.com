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
  author: "Raphaël",
  rating: 4,
  date: "2026-09-12",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-2",
  author: "Célia",
  rating: 5,
  date: "2026-07-03",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-3",
  author: "Arthur",
  rating: 5,
  date: "2026-05-19",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-4",
  author: "Célia",
  rating: 3,
  date: "2026-06-02",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-5",
  author: "Paul",
  rating: 5,
  date: "2026-08-28",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-6",
  author: "Mia",
  rating: 5,
  date: "2026-01-10",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-7",
  author: "Célia",
  rating: 5,
  date: "2026-06-23",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-8",
  author: "Nicolas",
  rating: 5,
  date: "2026-05-09",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-9",
  author: "Gabriel",
  rating: 4,
  date: "2026-09-20",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-10",
  author: "Alexandra",
  rating: 3,
  date: "2026-04-11",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-11",
  author: "Lina",
  rating: 5,
  date: "2026-06-01",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-12",
  author: "Gabriel",
  rating: 5,
  date: "2026-04-07",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-13",
  author: "Emma",
  rating: 4,
  date: "2026-06-26",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-14",
  author: "Estelle",
  rating: 3,
  date: "2026-03-21",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-15",
  author: "Nicolas",
  rating: 4,
  date: "2026-03-01",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-16",
  author: "Chloé",
  rating: 5,
  date: "2026-06-09",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-17",
  author: "Noah",
  rating: 5,
  date: "2026-07-16",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-18",
  author: "Pierre",
  rating: 5,
  date: "2026-10-28",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-19",
  author: "Mélanie",
  rating: 5,
  date: "2026-08-09",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-20",
  author: "Valentin",
  rating: 5,
  date: "2026-08-01",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-21",
  author: "Inès",
  rating: 5,
  date: "2026-08-19",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-22",
  author: "Victor",
  rating: 5,
  date: "2026-10-06",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-23",
  author: "Mélanie",
  rating: 5,
  date: "2026-03-12",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-24",
  author: "Alexandre",
  rating: 5,
  date: "2026-04-12",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-25",
  author: "Bastien",
  rating: 5,
  date: "2026-01-21",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-26",
  author: "Emma",
  rating: 5,
  date: "2026-01-04",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-27",
  author: "Louise",
  rating: 5,
  date: "2026-07-11",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-28",
  author: "Emma",
  rating: 4,
  date: "2026-10-08",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-29",
  author: "Sarah",
  rating: 5,
  date: "2026-02-10",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-30",
  author: "Nathan",
  rating: 5,
  date: "2026-06-23",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-31",
  author: "Mathieu",
  rating: 5,
  date: "2026-10-12",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-32",
  author: "Léna",
  rating: 4,
  date: "2026-03-27",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-33",
  author: "Marine",
  rating: 4,
  date: "2026-05-04",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-34",
  author: "Chloé",
  rating: 5,
  date: "2026-06-27",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-35",
  author: "Léa",
  rating: 3,
  date: "2026-03-17",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-36",
  author: "Eva",
  rating: 4,
  date: "2026-04-17",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-37",
  author: "Antoine",
  rating: 5,
  date: "2026-04-01",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-38",
  author: "Tom",
  rating: 5,
  date: "2026-05-28",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-39",
  author: "Ingrid",
  rating: 5,
  date: "2026-01-21",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-40",
  author: "Victor",
  rating: 5,
  date: "2026-04-03",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-41",
  author: "Océane",
  rating: 5,
  date: "2026-06-27",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-42",
  author: "Nicolas",
  rating: 4,
  date: "2026-10-12",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-43",
  author: "Lola",
  rating: 5,
  date: "2026-06-25",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-44",
  author: "Mélanie",
  rating: 5,
  date: "2026-10-17",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-45",
  author: "Alexandra",
  rating: 5,
  date: "2026-08-05",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-46",
  author: "Nathan",
  rating: 5,
  date: "2026-05-11",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-47",
  author: "Amandine",
  rating: 5,
  date: "2026-01-02",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-48",
  author: "Noémie",
  rating: 5,
  date: "2026-07-21",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-49",
  author: "Émilie",
  rating: 4,
  date: "2026-07-10",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-50",
  author: "David",
  rating: 3,
  date: "2026-05-16",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-51",
  author: "Océane",
  rating: 5,
  date: "2026-02-20",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-52",
  author: "Simon",
  rating: 5,
  date: "2026-01-20",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-53",
  author: "Océane",
  rating: 5,
  date: "2026-08-07",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-54",
  author: "Nathan",
  rating: 5,
  date: "2026-05-04",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-55",
  author: "Lucas",
  rating: 5,
  date: "2026-10-04",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-56",
  author: "Charlotte",
  rating: 5,
  date: "2026-09-13",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-57",
  author: "Chloé",
  rating: 4,
  date: "2026-10-12",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-58",
  author: "Hugo",
  rating: 5,
  date: "2026-09-16",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-59",
  author: "Sophie",
  rating: 5,
  date: "2026-01-05",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-60",
  author: "Noémie",
  rating: 4,
  date: "2026-09-25",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-61",
  author: "Laura",
  rating: 5,
  date: "2026-10-24",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-62",
  author: "Lina",
  rating: 3,
  date: "2026-05-25",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-63",
  author: "David",
  rating: 5,
  date: "2026-02-15",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-64",
  author: "Alice",
  rating: 5,
  date: "2026-02-06",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-65",
  author: "Thomas",
  rating: 5,
  date: "2026-05-23",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-66",
  author: "Inès",
  rating: 5,
  date: "2026-09-23",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-67",
  author: "Mélanie",
  rating: 4,
  date: "2026-05-21",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-68",
  author: "Marine",
  rating: 3,
  date: "2026-08-13",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-69",
  author: "Victor",
  rating: 5,
  date: "2026-05-24",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-70",
  author: "Lucas",
  rating: 5,
  date: "2026-07-22",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-71",
  author: "Thomas",
  rating: 5,
  date: "2026-10-12",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-72",
  author: "Antoine",
  rating: 5,
  date: "2026-05-19",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-73",
  author: "Marius",
  rating: 5,
  date: "2026-05-16",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-74",
  author: "Clara",
  rating: 5,
  date: "2026-02-23",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-75",
  author: "Noémie",
  rating: 5,
  date: "2026-03-08",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-76",
  author: "Lola",
  rating: 5,
  date: "2026-03-20",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-77",
  author: "Dylan",
  rating: 5,
  date: "2026-06-19",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-78",
  author: "Elisa",
  rating: 5,
  date: "2026-10-05",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-79",
  author: "Enzo",
  rating: 5,
  date: "2026-04-04",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-80",
  author: "Martin",
  rating: 5,
  date: "2026-08-23",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-81",
  author: "Léa",
  rating: 5,
  date: "2026-10-18",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-82",
  author: "Noah",
  rating: 5,
  date: "2026-10-08",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-83",
  author: "Alexandra",
  rating: 5,
  date: "2026-04-24",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-84",
  author: "Amandine",
  rating: 5,
  date: "2026-03-22",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-85",
  author: "Sarah",
  rating: 5,
  date: "2026-01-25",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-86",
  author: "Quentin",
  rating: 5,
  date: "2026-08-17",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-87",
  author: "Lola",
  rating: 4,
  date: "2026-02-07",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-88",
  author: "Léa",
  rating: 5,
  date: "2026-03-16",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-89",
  author: "Sophie",
  rating: 5,
  date: "2026-03-13",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-90",
  author: "Lola",
  rating: 5,
  date: "2026-02-20",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-91",
  author: "Émilie",
  rating: 5,
  date: "2026-04-10",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-92",
  author: "Lucie",
  rating: 5,
  date: "2026-06-28",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-93",
  author: "Nina",
  rating: 5,
  date: "2026-08-03",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-94",
  author: "Sarah",
  rating: 5,
  date: "2026-06-19",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-95",
  author: "Maëlle",
  rating: 4,
  date: "2026-08-11",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-96",
  author: "Océane",
  rating: 5,
  date: "2026-08-13",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-97",
  author: "Martin",
  rating: 5,
  date: "2026-07-04",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-98",
  author: "Chloé",
  rating: 5,
  date: "2026-03-05",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-99",
  author: "Charlotte",
  rating: 5,
  date: "2026-04-15",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-100",
  author: "Julie",
  rating: 3,
  date: "2026-01-13",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-101",
  author: "Chloé",
  rating: 4,
  date: "2026-05-19",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-102",
  author: "Émilie",
  rating: 5,
  date: "2026-07-24",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-103",
  author: "Sarah",
  rating: 5,
  date: "2026-04-02",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-104",
  author: "David",
  rating: 3,
  date: "2026-09-01",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-105",
  author: "Martin",
  rating: 5,
  date: "2026-08-12",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-106",
  author: "Enzo",
  rating: 5,
  date: "2026-03-14",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-107",
  author: "Nina",
  rating: 4,
  date: "2026-03-11",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-108",
  author: "Julien",
  rating: 4,
  date: "2026-07-12",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-109",
  author: "Eva",
  rating: 4,
  date: "2026-05-20",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-110",
  author: "Alexis",
  rating: 5,
  date: "2026-07-11",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-111",
  author: "Mathilde",
  rating: 5,
  date: "2026-10-22",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-112",
  author: "Bastien",
  rating: 5,
  date: "2026-05-09",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-113",
  author: "Chloé",
  rating: 5,
  date: "2026-02-20",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-114",
  author: "Camille",
  rating: 3,
  date: "2026-09-12",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-115",
  author: "Martin",
  rating: 4,
  date: "2026-07-23",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-116",
  author: "Alexis",
  rating: 3,
  date: "2026-04-23",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-117",
  author: "David",
  rating: 5,
  date: "2026-04-15",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-118",
  author: "Maëlle",
  rating: 4,
  date: "2026-08-26",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-119",
  author: "Romain",
  rating: 5,
  date: "2026-03-22",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-120",
  author: "Alice",
  rating: 5,
  date: "2026-09-20",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-121",
  author: "Zoé",
  rating: 5,
  date: "2026-06-09",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-122",
  author: "Alexandre",
  rating: 5,
  date: "2026-04-22",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-123",
  author: "Yanis",
  rating: 4,
  date: "2026-09-06",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-124",
  author: "Louis",
  rating: 5,
  date: "2026-08-17",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-125",
  author: "Mélanie",
  rating: 5,
  date: "2026-04-08",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-126",
  author: "Antoine",
  rating: 5,
  date: "2026-04-08",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-127",
  author: "David",
  rating: 5,
  date: "2026-03-01",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-128",
  author: "Émilie",
  rating: 3,
  date: "2026-08-17",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-129",
  author: "Adam",
  rating: 4,
  date: "2026-05-12",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-130",
  author: "Eva",
  rating: 5,
  date: "2026-07-23",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-131",
  author: "Nathan",
  rating: 5,
  date: "2026-10-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-132",
  author: "Maëlle",
  rating: 5,
  date: "2026-03-08",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-133",
  author: "Noémie",
  rating: 5,
  date: "2026-09-24",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-134",
  author: "Marius",
  rating: 3,
  date: "2026-02-04",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-135",
  author: "Amandine",
  rating: 5,
  date: "2026-07-17",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-136",
  author: "Yanis",
  rating: 5,
  date: "2026-02-12",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-137",
  author: "Camille",
  rating: 5,
  date: "2026-09-15",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-138",
  author: "Raphaël",
  rating: 3,
  date: "2026-03-22",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-139",
  author: "Mathilde",
  rating: 5,
  date: "2026-04-02",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-140",
  author: "Antoine",
  rating: 5,
  date: "2026-05-07",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-141",
  author: "Anaïs",
  rating: 5,
  date: "2026-07-13",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-142",
  author: "Noémie",
  rating: 5,
  date: "2026-09-19",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-143",
  author: "Lucas",
  rating: 5,
  date: "2026-05-02",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-144",
  author: "Lola",
  rating: 4,
  date: "2026-01-06",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-145",
  author: "Émilie",
  rating: 4,
  date: "2026-07-04",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-146",
  author: "Ingrid",
  rating: 5,
  date: "2026-05-26",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-147",
  author: "Sarah",
  rating: 4,
  date: "2026-09-09",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-148",
  author: "Nicolas",
  rating: 5,
  date: "2026-04-12",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-149",
  author: "Émilie",
  rating: 4,
  date: "2026-02-05",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-150",
  author: "David",
  rating: 5,
  date: "2026-05-20",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-151",
  author: "Alexandra",
  rating: 5,
  date: "2026-03-17",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-152",
  author: "Alexandre",
  rating: 5,
  date: "2026-05-22",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-153",
  author: "Thomas",
  rating: 5,
  date: "2026-10-15",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-154",
  author: "Maëlle",
  rating: 5,
  date: "2026-04-17",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-155",
  author: "Quentin",
  rating: 4,
  date: "2026-06-28",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-156",
  author: "Léo",
  rating: 5,
  date: "2026-05-07",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-157",
  author: "Noah",
  rating: 3,
  date: "2026-02-05",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-158",
  author: "Célia",
  rating: 5,
  date: "2026-05-15",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-159",
  author: "Théo",
  rating: 5,
  date: "2026-10-22",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-160",
  author: "Célia",
  rating: 5,
  date: "2026-05-12",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-161",
  author: "Nina",
  rating: 3,
  date: "2026-07-08",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-162",
  author: "Olivier",
  rating: 4,
  date: "2026-01-14",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-163",
  author: "Manon",
  rating: 5,
  date: "2026-05-02",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-164",
  author: "Émilie",
  rating: 5,
  date: "2026-05-14",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-165",
  author: "Bastien",
  rating: 5,
  date: "2026-09-02",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-166",
  author: "Charlotte",
  rating: 5,
  date: "2026-08-07",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-167",
  author: "Yanis",
  rating: 5,
  date: "2026-07-22",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-168",
  author: "Julien",
  rating: 4,
  date: "2026-02-20",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-169",
  author: "Bastien",
  rating: 5,
  date: "2026-05-09",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-170",
  author: "Léa",
  rating: 5,
  date: "2026-08-08",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-171",
  author: "Émilie",
  rating: 5,
  date: "2026-08-13",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-172",
  author: "Mathieu",
  rating: 3,
  date: "2026-02-17",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-173",
  author: "Julie",
  rating: 4,
  date: "2026-10-12",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-174",
  author: "David",
  rating: 5,
  date: "2026-09-24",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-175",
  author: "Mathilde",
  rating: 5,
  date: "2026-06-26",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-176",
  author: "Maxime",
  rating: 5,
  date: "2026-09-11",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-177",
  author: "Mia",
  rating: 5,
  date: "2026-09-12",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-178",
  author: "Théo",
  rating: 5,
  date: "2026-04-16",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-179",
  author: "Julie",
  rating: 5,
  date: "2026-04-25",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-180",
  author: "Marius",
  rating: 5,
  date: "2026-04-02",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-181",
  author: "David",
  rating: 5,
  date: "2026-04-25",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-182",
  author: "Lina",
  rating: 5,
  date: "2026-05-27",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-183",
  author: "Paul",
  rating: 5,
  date: "2026-05-06",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-184",
  author: "Adam",
  rating: 5,
  date: "2026-01-06",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-185",
  author: "Hugo",
  rating: 5,
  date: "2026-05-03",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-186",
  author: "Nina",
  rating: 4,
  date: "2026-04-28",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-187",
  author: "Maxime",
  rating: 5,
  date: "2026-10-13",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-188",
  author: "Victor",
  rating: 5,
  date: "2026-05-04",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-189",
  author: "Manon",
  rating: 5,
  date: "2026-09-21",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-190",
  author: "Laura",
  rating: 4,
  date: "2026-08-13",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-191",
  author: "Enzo",
  rating: 4,
  date: "2026-09-06",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-192",
  author: "Julien",
  rating: 4,
  date: "2026-10-19",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-193",
  author: "Olivier",
  rating: 5,
  date: "2026-10-15",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-194",
  author: "Simon",
  rating: 4,
  date: "2026-08-19",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-195",
  author: "Jade",
  rating: 5,
  date: "2026-04-24",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-196",
  author: "Anaïs",
  rating: 4,
  date: "2026-04-09",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-197",
  author: "Paul",
  rating: 5,
  date: "2026-02-02",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-198",
  author: "Paul",
  rating: 5,
  date: "2026-03-22",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-199",
  author: "Anaïs",
  rating: 5,
  date: "2026-02-27",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-200",
  author: "Camille",
  rating: 5,
  date: "2026-06-23",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-201",
  author: "Ingrid",
  rating: 5,
  date: "2026-01-18",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-202",
  author: "Léo",
  rating: 4,
  date: "2026-06-01",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-203",
  author: "Emma",
  rating: 5,
  date: "2026-10-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-204",
  author: "Alexandra",
  rating: 5,
  date: "2026-02-03",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-205",
  author: "Valentin",
  rating: 5,
  date: "2026-01-12",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-206",
  author: "Louise",
  rating: 3,
  date: "2026-01-17",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-207",
  author: "Julien",
  rating: 5,
  date: "2026-03-10",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-208",
  author: "Enzo",
  rating: 5,
  date: "2026-08-05",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-209",
  author: "Amandine",
  rating: 3,
  date: "2026-10-09",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-210",
  author: "Louise",
  rating: 5,
  date: "2026-07-09",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-211",
  author: "Estelle",
  rating: 5,
  date: "2026-10-02",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-212",
  author: "Pauline",
  rating: 5,
  date: "2026-06-26",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-213",
  author: "Julie",
  rating: 5,
  date: "2026-05-18",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-214",
  author: "Gabriel",
  rating: 5,
  date: "2026-06-26",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-215",
  author: "Marine",
  rating: 4,
  date: "2026-04-04",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-216",
  author: "Mia",
  rating: 5,
  date: "2026-05-09",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-217",
  author: "Victor",
  rating: 4,
  date: "2026-06-06",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-218",
  author: "Célia",
  rating: 3,
  date: "2026-08-19",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-219",
  author: "Sophie",
  rating: 5,
  date: "2026-09-02",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-220",
  author: "Ingrid",
  rating: 5,
  date: "2026-04-14",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-221",
  author: "Marine",
  rating: 3,
  date: "2026-03-16",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-222",
  author: "Charlotte",
  rating: 4,
  date: "2026-03-03",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-223",
  author: "Maxime",
  rating: 5,
  date: "2026-09-04",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-224",
  author: "Enzo",
  rating: 5,
  date: "2026-02-11",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-225",
  author: "Romain",
  rating: 5,
  date: "2026-01-15",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-226",
  author: "Mélanie",
  rating: 5,
  date: "2026-02-18",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-227",
  author: "Samuel",
  rating: 5,
  date: "2026-01-23",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-228",
  author: "Pauline",
  rating: 5,
  date: "2026-06-16",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-229",
  author: "Enzo",
  rating: 3,
  date: "2026-02-14",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-230",
  author: "Louise",
  rating: 5,
  date: "2026-10-13",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-231",
  author: "Jeanne",
  rating: 5,
  date: "2026-08-07",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-232",
  author: "Alexis",
  rating: 3,
  date: "2026-01-20",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-233",
  author: "Sarah",
  rating: 5,
  date: "2026-08-09",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-234",
  author: "Yanis",
  rating: 5,
  date: "2026-05-22",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-235",
  author: "Hugo",
  rating: 5,
  date: "2026-03-22",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-236",
  author: "Bastien",
  rating: 4,
  date: "2026-04-09",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-237",
  author: "David",
  rating: 5,
  date: "2026-05-03",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-238",
  author: "Margaux",
  rating: 5,
  date: "2026-02-03",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-239",
  author: "Quentin",
  rating: 3,
  date: "2026-07-23",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-240",
  author: "Léo",
  rating: 5,
  date: "2026-06-03",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-241",
  author: "Hugo",
  rating: 5,
  date: "2026-10-27",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-242",
  author: "Paul",
  rating: 5,
  date: "2026-10-18",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-243",
  author: "Dylan",
  rating: 5,
  date: "2026-06-19",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-244",
  author: "Arthur",
  rating: 5,
  date: "2026-02-05",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-245",
  author: "Mathieu",
  rating: 3,
  date: "2026-07-26",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-246",
  author: "Marine",
  rating: 3,
  date: "2026-01-12",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-247",
  author: "Julie",
  rating: 4,
  date: "2026-08-12",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-248",
  author: "Samuel",
  rating: 4,
  date: "2026-09-28",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-249",
  author: "Léa",
  rating: 4,
  date: "2026-03-15",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-250",
  author: "Romain",
  rating: 5,
  date: "2026-03-11",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-251",
  author: "Lola",
  rating: 5,
  date: "2026-05-20",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-252",
  author: "Adrien",
  rating: 5,
  date: "2026-10-04",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-253",
  author: "Alexis",
  rating: 3,
  date: "2026-01-16",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-254",
  author: "Théo",
  rating: 4,
  date: "2026-08-06",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-255",
  author: "Enzo",
  rating: 4,
  date: "2026-04-24",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-256",
  author: "Alexandre",
  rating: 5,
  date: "2026-03-15",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-257",
  author: "Nathan",
  rating: 5,
  date: "2026-08-08",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-258",
  author: "Adam",
  rating: 5,
  date: "2026-03-22",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-259",
  author: "Amandine",
  rating: 5,
  date: "2026-04-16",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-260",
  author: "Gabriel",
  rating: 5,
  date: "2026-04-12",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-261",
  author: "Camille",
  rating: 5,
  date: "2026-05-05",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-262",
  author: "Louis",
  rating: 5,
  date: "2026-03-15",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-263",
  author: "Eva",
  rating: 4,
  date: "2026-03-18",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-264",
  author: "Clara",
  rating: 5,
  date: "2026-06-06",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-265",
  author: "Marius",
  rating: 5,
  date: "2026-04-22",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-266",
  author: "Adam",
  rating: 5,
  date: "2026-09-21",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-267",
  author: "Antoine",
  rating: 5,
  date: "2026-04-04",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-268",
  author: "Martin",
  rating: 5,
  date: "2026-07-21",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-269",
  author: "Mathilde",
  rating: 4,
  date: "2026-05-17",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-270",
  author: "Lucie",
  rating: 5,
  date: "2026-10-13",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-271",
  author: "Raphaël",
  rating: 5,
  date: "2026-05-24",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-272",
  author: "Océane",
  rating: 5,
  date: "2026-01-27",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-273",
  author: "Alice",
  rating: 5,
  date: "2026-09-07",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-274",
  author: "Mathieu",
  rating: 3,
  date: "2026-06-02",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-275",
  author: "Amandine",
  rating: 5,
  date: "2026-08-09",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-276",
  author: "Gabriel",
  rating: 5,
  date: "2026-10-17",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-277",
  author: "Jade",
  rating: 5,
  date: "2026-03-22",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-278",
  author: "Océane",
  rating: 5,
  date: "2026-10-16",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-279",
  author: "Léa",
  rating: 4,
  date: "2026-08-14",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-280",
  author: "Lola",
  rating: 4,
  date: "2026-03-09",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-281",
  author: "Gabriel",
  rating: 5,
  date: "2026-10-06",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-282",
  author: "Élodie",
  rating: 5,
  date: "2026-02-24",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-283",
  author: "Lina",
  rating: 4,
  date: "2026-05-20",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-284",
  author: "Emma",
  rating: 5,
  date: "2026-03-22",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-285",
  author: "Sarah",
  rating: 4,
  date: "2026-03-01",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-286",
  author: "Anaïs",
  rating: 4,
  date: "2026-02-02",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-287",
  author: "Samuel",
  rating: 5,
  date: "2026-09-26",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-288",
  author: "Emma",
  rating: 4,
  date: "2026-05-23",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-289",
  author: "Julie",
  rating: 5,
  date: "2026-01-01",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-290",
  author: "Marine",
  rating: 5,
  date: "2026-03-25",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-291",
  author: "Pierre",
  rating: 5,
  date: "2026-03-05",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-292",
  author: "Léna",
  rating: 5,
  date: "2026-10-08",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-293",
  author: "Léo",
  rating: 5,
  date: "2026-06-28",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-294",
  author: "Léo",
  rating: 4,
  date: "2026-03-08",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-295",
  author: "Gabriel",
  rating: 3,
  date: "2026-02-27",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-296",
  author: "Thomas",
  rating: 5,
  date: "2026-10-13",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-297",
  author: "Gabriel",
  rating: 5,
  date: "2026-09-08",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-298",
  author: "Arthur",
  rating: 5,
  date: "2026-03-23",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-299",
  author: "Léa",
  rating: 4,
  date: "2026-10-17",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-300",
  author: "Lucie",
  rating: 3,
  date: "2026-06-21",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-301",
  author: "Emma",
  rating: 5,
  date: "2026-05-20",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-302",
  author: "Maëlle",
  rating: 5,
  date: "2026-03-07",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-303",
  author: "Alexandre",
  rating: 5,
  date: "2026-01-22",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-304",
  author: "Noémie",
  rating: 5,
  date: "2026-10-11",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-305",
  author: "Sophie",
  rating: 5,
  date: "2026-04-10",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-306",
  author: "Mathieu",
  rating: 5,
  date: "2026-04-19",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-307",
  author: "Louis",
  rating: 4,
  date: "2026-06-04",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-308",
  author: "Yanis",
  rating: 5,
  date: "2026-07-20",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-309",
  author: "Maxime",
  rating: 5,
  date: "2026-01-06",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-310",
  author: "Marius",
  rating: 5,
  date: "2026-04-06",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-311",
  author: "Sarah",
  rating: 5,
  date: "2026-04-27",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-312",
  author: "Célia",
  rating: 3,
  date: "2026-07-24",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-313",
  author: "Inès",
  rating: 5,
  date: "2026-03-12",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-314",
  author: "Léa",
  rating: 3,
  date: "2026-04-16",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-315",
  author: "Emma",
  rating: 5,
  date: "2026-03-12",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-316",
  author: "Nathan",
  rating: 5,
  date: "2026-09-20",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-317",
  author: "Samuel",
  rating: 5,
  date: "2026-09-08",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-318",
  author: "Inès",
  rating: 5,
  date: "2026-06-07",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-319",
  author: "Lina",
  rating: 5,
  date: "2026-10-17",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-320",
  author: "Julien",
  rating: 5,
  date: "2026-02-04",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-321",
  author: "Nathan",
  rating: 5,
  date: "2026-05-23",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-322",
  author: "Mathilde",
  rating: 3,
  date: "2026-06-26",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-323",
  author: "David",
  rating: 4,
  date: "2026-05-12",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-324",
  author: "Lucie",
  rating: 4,
  date: "2026-07-19",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-325",
  author: "Sarah",
  rating: 5,
  date: "2026-01-17",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-326",
  author: "Romain",
  rating: 5,
  date: "2026-01-03",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-327",
  author: "Enzo",
  rating: 4,
  date: "2026-04-16",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-328",
  author: "Célia",
  rating: 5,
  date: "2026-05-14",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-329",
  author: "Arthur",
  rating: 5,
  date: "2026-10-12",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-330",
  author: "Julie",
  rating: 5,
  date: "2026-03-19",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-331",
  author: "Pierre",
  rating: 5,
  date: "2026-02-03",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-332",
  author: "Antoine",
  rating: 5,
  date: "2026-07-18",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-333",
  author: "Louise",
  rating: 5,
  date: "2026-04-27",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-334",
  author: "Thomas",
  rating: 5,
  date: "2026-04-27",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-335",
  author: "Olivier",
  rating: 3,
  date: "2026-04-17",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-336",
  author: "Benjamin",
  rating: 5,
  date: "2026-04-16",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-337",
  author: "Hugo",
  rating: 5,
  date: "2026-08-28",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-338",
  author: "Émilie",
  rating: 4,
  date: "2026-04-04",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-339",
  author: "Marine",
  rating: 5,
  date: "2026-07-19",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-340",
  author: "Olivier",
  rating: 5,
  date: "2026-06-14",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-341",
  author: "Zoé",
  rating: 5,
  date: "2026-09-10",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-342",
  author: "Louis",
  rating: 5,
  date: "2026-09-23",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-343",
  author: "Lucas",
  rating: 3,
  date: "2026-08-04",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-344",
  author: "Antoine",
  rating: 5,
  date: "2026-07-08",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-345",
  author: "Estelle",
  rating: 5,
  date: "2026-02-16",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-346",
  author: "Charlotte",
  rating: 5,
  date: "2026-10-24",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-347",
  author: "Lola",
  rating: 5,
  date: "2026-07-13",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-348",
  author: "Martin",
  rating: 5,
  date: "2026-04-02",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-349",
  author: "Clara",
  rating: 5,
  date: "2026-05-22",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-350",
  author: "Pauline",
  rating: 4,
  date: "2026-07-08",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-351",
  author: "Lucie",
  rating: 5,
  date: "2026-09-01",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-352",
  author: "Paul",
  rating: 5,
  date: "2026-10-22",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-353",
  author: "Bastien",
  rating: 4,
  date: "2026-03-21",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-354",
  author: "Enzo",
  rating: 4,
  date: "2026-08-11",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-355",
  author: "Alexandre",
  rating: 3,
  date: "2026-08-13",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-356",
  author: "Alice",
  rating: 5,
  date: "2026-10-08",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-357",
  author: "Sarah",
  rating: 3,
  date: "2026-04-11",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-358",
  author: "Émilie",
  rating: 5,
  date: "2026-08-18",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-359",
  author: "Paul",
  rating: 5,
  date: "2026-02-21",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-360",
  author: "Léa",
  rating: 5,
  date: "2026-06-10",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-361",
  author: "Noémie",
  rating: 5,
  date: "2026-10-19",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-362",
  author: "Samuel",
  rating: 5,
  date: "2026-08-03",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-363",
  author: "Eva",
  rating: 5,
  date: "2026-10-02",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-364",
  author: "Lina",
  rating: 5,
  date: "2026-06-24",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-365",
  author: "Margaux",
  rating: 5,
  date: "2026-09-12",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-366",
  author: "Gabriel",
  rating: 5,
  date: "2026-05-22",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-367",
  author: "Manon",
  rating: 5,
  date: "2026-05-08",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-368",
  author: "Théo",
  rating: 4,
  date: "2026-10-22",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-369",
  author: "Léa",
  rating: 4,
  date: "2026-10-28",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-370",
  author: "Valentin",
  rating: 5,
  date: "2026-02-18",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-371",
  author: "Océane",
  rating: 4,
  date: "2026-07-07",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-372",
  author: "Estelle",
  rating: 5,
  date: "2026-05-27",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-373",
  author: "Marine",
  rating: 5,
  date: "2026-09-19",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-374",
  author: "Eva",
  rating: 5,
  date: "2026-04-17",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-375",
  author: "Amandine",
  rating: 5,
  date: "2026-05-18",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-376",
  author: "Nathan",
  rating: 5,
  date: "2026-03-14",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-377",
  author: "Chloé",
  rating: 5,
  date: "2026-07-01",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-378",
  author: "Mia",
  rating: 5,
  date: "2026-01-20",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-379",
  author: "Alexandre",
  rating: 4,
  date: "2026-04-04",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-380",
  author: "Anaïs",
  rating: 5,
  date: "2026-07-27",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-381",
  author: "Noah",
  rating: 5,
  date: "2026-07-15",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-382",
  author: "Marine",
  rating: 5,
  date: "2026-09-14",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-383",
  author: "Noah",
  rating: 5,
  date: "2026-02-09",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-384",
  author: "Anaïs",
  rating: 5,
  date: "2026-06-08",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-385",
  author: "Sophie",
  rating: 3,
  date: "2026-01-22",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-386",
  author: "Clara",
  rating: 5,
  date: "2026-04-21",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-387",
  author: "Émilie",
  rating: 5,
  date: "2026-04-16",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-388",
  author: "Céline",
  rating: 4,
  date: "2026-06-03",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-389",
  author: "Clara",
  rating: 5,
  date: "2026-04-04",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-390",
  author: "Émilie",
  rating: 5,
  date: "2026-04-01",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-391",
  author: "Nathan",
  rating: 5,
  date: "2026-06-16",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-392",
  author: "Inès",
  rating: 5,
  date: "2026-08-04",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-393",
  author: "Bastien",
  rating: 5,
  date: "2026-06-16",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-394",
  author: "Benjamin",
  rating: 3,
  date: "2026-03-10",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-395",
  author: "Clara",
  rating: 5,
  date: "2026-03-23",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-396",
  author: "Inès",
  rating: 5,
  date: "2026-04-03",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-397",
  author: "Lola",
  rating: 4,
  date: "2026-08-06",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-398",
  author: "Paul",
  rating: 5,
  date: "2026-02-01",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-399",
  author: "Mia",
  rating: 4,
  date: "2026-03-12",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-400",
  author: "Clara",
  rating: 5,
  date: "2026-08-08",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-401",
  author: "Romain",
  rating: 4,
  date: "2026-03-14",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-402",
  author: "Olivier",
  rating: 5,
  date: "2026-02-11",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-403",
  author: "Eva",
  rating: 5,
  date: "2026-10-05",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-404",
  author: "Céline",
  rating: 5,
  date: "2026-03-20",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-405",
  author: "Margaux",
  rating: 4,
  date: "2026-08-05",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-406",
  author: "Romain",
  rating: 3,
  date: "2026-01-25",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-407",
  author: "Simon",
  rating: 5,
  date: "2026-04-04",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-408",
  author: "Estelle",
  rating: 4,
  date: "2026-10-21",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-409",
  author: "Samuel",
  rating: 5,
  date: "2026-05-07",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-410",
  author: "Mélanie",
  rating: 5,
  date: "2026-05-24",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-411",
  author: "Nathan",
  rating: 5,
  date: "2026-09-09",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-412",
  author: "Mathilde",
  rating: 5,
  date: "2026-10-28",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-413",
  author: "Jeanne",
  rating: 5,
  date: "2026-04-22",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-414",
  author: "Pauline",
  rating: 5,
  date: "2026-06-03",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-415",
  author: "Nicolas",
  rating: 5,
  date: "2026-05-08",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-416",
  author: "Chloé",
  rating: 5,
  date: "2026-06-23",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-417",
  author: "Tom",
  rating: 5,
  date: "2026-08-25",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-418",
  author: "Simon",
  rating: 5,
  date: "2026-02-09",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-419",
  author: "Benjamin",
  rating: 5,
  date: "2026-04-19",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-420",
  author: "Quentin",
  rating: 4,
  date: "2026-07-19",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-421",
  author: "Romain",
  rating: 5,
  date: "2026-05-07",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-422",
  author: "Louise",
  rating: 5,
  date: "2026-07-17",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-423",
  author: "Simon",
  rating: 3,
  date: "2026-06-06",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-424",
  author: "Céline",
  rating: 5,
  date: "2026-07-11",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-425",
  author: "Maxime",
  rating: 3,
  date: "2026-09-21",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-426",
  author: "Léa",
  rating: 5,
  date: "2026-05-25",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-427",
  author: "Elisa",
  rating: 5,
  date: "2026-02-10",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-428",
  author: "Simon",
  rating: 3,
  date: "2026-10-11",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-429",
  author: "Yanis",
  rating: 4,
  date: "2026-02-15",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-430",
  author: "Charlotte",
  rating: 5,
  date: "2026-06-19",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-431",
  author: "Célia",
  rating: 5,
  date: "2026-10-04",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-432",
  author: "Zoé",
  rating: 4,
  date: "2026-03-04",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-433",
  author: "Eva",
  rating: 4,
  date: "2026-03-23",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-434",
  author: "Zoé",
  rating: 4,
  date: "2026-05-25",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-435",
  author: "Mélanie",
  rating: 5,
  date: "2026-07-09",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-436",
  author: "Inès",
  rating: 4,
  date: "2026-07-07",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-437",
  author: "Margaux",
  rating: 5,
  date: "2026-04-27",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-438",
  author: "Adrien",
  rating: 5,
  date: "2026-07-05",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-439",
  author: "Nicolas",
  rating: 5,
  date: "2026-05-22",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-440",
  author: "Julie",
  rating: 5,
  date: "2026-09-18",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-441",
  author: "Alexandra",
  rating: 4,
  date: "2026-07-20",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-442",
  author: "Dylan",
  rating: 5,
  date: "2026-06-12",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-443",
  author: "Estelle",
  rating: 5,
  date: "2026-05-28",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-444",
  author: "Émilie",
  rating: 4,
  date: "2026-10-26",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-445",
  author: "Hugo",
  rating: 3,
  date: "2026-09-08",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-446",
  author: "Amandine",
  rating: 5,
  date: "2026-05-17",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-447",
  author: "Hugo",
  rating: 4,
  date: "2026-07-09",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-448",
  author: "Yanis",
  rating: 4,
  date: "2026-01-13",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-449",
  author: "Louise",
  rating: 5,
  date: "2026-05-20",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-450",
  author: "Sophie",
  rating: 5,
  date: "2026-06-01",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-451",
  author: "Noémie",
  rating: 5,
  date: "2026-07-08",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-452",
  author: "Léna",
  rating: 4,
  date: "2026-03-12",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-453",
  author: "Émilie",
  rating: 5,
  date: "2026-10-08",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-454",
  author: "Léa",
  rating: 4,
  date: "2026-10-20",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-455",
  author: "Nicolas",
  rating: 5,
  date: "2026-02-11",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-456",
  author: "Arthur",
  rating: 3,
  date: "2026-04-15",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-457",
  author: "Emma",
  rating: 5,
  date: "2026-03-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-458",
  author: "Alexis",
  rating: 4,
  date: "2026-08-24",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-459",
  author: "Nathan",
  rating: 4,
  date: "2026-06-19",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-460",
  author: "Paul",
  rating: 4,
  date: "2026-06-14",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-461",
  author: "Léna",
  rating: 5,
  date: "2026-04-24",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-462",
  author: "Julie",
  rating: 5,
  date: "2026-02-12",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-463",
  author: "Alexis",
  rating: 4,
  date: "2026-05-12",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-464",
  author: "Noémie",
  rating: 5,
  date: "2026-04-07",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-465",
  author: "Mathilde",
  rating: 4,
  date: "2026-04-26",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-466",
  author: "Léo",
  rating: 5,
  date: "2026-07-26",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-467",
  author: "Anaïs",
  rating: 5,
  date: "2026-09-25",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-468",
  author: "Léo",
  rating: 4,
  date: "2026-06-25",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-469",
  author: "Louis",
  rating: 5,
  date: "2026-03-23",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-470",
  author: "Chloé",
  rating: 5,
  date: "2026-09-12",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-471",
  author: "Manon",
  rating: 5,
  date: "2026-09-16",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-472",
  author: "Margaux",
  rating: 3,
  date: "2026-05-03",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-473",
  author: "Tom",
  rating: 5,
  date: "2026-03-26",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-474",
  author: "Chloé",
  rating: 5,
  date: "2026-05-28",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-475",
  author: "Marine",
  rating: 3,
  date: "2026-05-07",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-476",
  author: "Julie",
  rating: 3,
  date: "2026-09-19",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-477",
  author: "Samuel",
  rating: 5,
  date: "2026-06-10",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-478",
  author: "Adrien",
  rating: 5,
  date: "2026-08-13",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-479",
  author: "Théo",
  rating: 5,
  date: "2026-04-04",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-480",
  author: "Yanis",
  rating: 5,
  date: "2026-02-19",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-481",
  author: "Estelle",
  rating: 5,
  date: "2026-07-12",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-482",
  author: "Enzo",
  rating: 5,
  date: "2026-08-17",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-483",
  author: "Lucas",
  rating: 5,
  date: "2026-02-15",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-484",
  author: "Jeanne",
  rating: 5,
  date: "2026-01-13",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-485",
  author: "Eva",
  rating: 5,
  date: "2026-08-22",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-486",
  author: "Gabriel",
  rating: 5,
  date: "2026-10-17",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-487",
  author: "Sophie",
  rating: 4,
  date: "2026-02-16",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-488",
  author: "Maëlle",
  rating: 5,
  date: "2026-04-14",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-489",
  author: "Charlotte",
  rating: 5,
  date: "2026-06-18",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-490",
  author: "Chloé",
  rating: 5,
  date: "2026-01-10",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-491",
  author: "Jade",
  rating: 5,
  date: "2026-08-16",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-492",
  author: "Enzo",
  rating: 5,
  date: "2026-03-26",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-493",
  author: "Clara",
  rating: 3,
  date: "2026-08-13",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-494",
  author: "Léo",
  rating: 4,
  date: "2026-03-25",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-495",
  author: "Eva",
  rating: 5,
  date: "2026-02-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-496",
  author: "Valentin",
  rating: 5,
  date: "2026-03-14",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-497",
  author: "Marius",
  rating: 3,
  date: "2026-06-20",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-498",
  author: "Pierre",
  rating: 5,
  date: "2026-02-03",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-499",
  author: "Émilie",
  rating: 5,
  date: "2026-06-14",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-500",
  author: "Adam",
  rating: 5,
  date: "2026-03-20",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-501",
  author: "Jade",
  rating: 5,
  date: "2026-03-10",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-502",
  author: "Adrien",
  rating: 5,
  date: "2026-03-13",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-503",
  author: "Julien",
  rating: 5,
  date: "2026-07-12",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-504",
  author: "Bastien",
  rating: 5,
  date: "2026-09-21",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-505",
  author: "Enzo",
  rating: 5,
  date: "2026-05-14",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-506",
  author: "Emma",
  rating: 5,
  date: "2026-03-23",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-507",
  author: "Romain",
  rating: 5,
  date: "2026-04-25",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-508",
  author: "Nathan",
  rating: 5,
  date: "2026-09-20",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-509",
  author: "Céline",
  rating: 4,
  date: "2026-09-07",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-510",
  author: "Martin",
  rating: 5,
  date: "2026-07-06",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-511",
  author: "Simon",
  rating: 5,
  date: "2026-02-26",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-512",
  author: "Marine",
  rating: 5,
  date: "2026-02-20",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-513",
  author: "Valentin",
  rating: 5,
  date: "2026-10-24",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-514",
  author: "Lucie",
  rating: 5,
  date: "2026-09-07",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-515",
  author: "Lola",
  rating: 3,
  date: "2026-07-04",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-516",
  author: "Clara",
  rating: 3,
  date: "2026-07-19",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-517",
  author: "Tom",
  rating: 5,
  date: "2026-03-23",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-518",
  author: "Amandine",
  rating: 4,
  date: "2026-09-07",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-519",
  author: "Marius",
  rating: 5,
  date: "2026-04-15",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-520",
  author: "Simon",
  rating: 5,
  date: "2026-07-12",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-521",
  author: "Léo",
  rating: 5,
  date: "2026-03-24",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-522",
  author: "Nicolas",
  rating: 5,
  date: "2026-04-05",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-523",
  author: "Gabriel",
  rating: 5,
  date: "2026-05-08",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-524",
  author: "Tom",
  rating: 3,
  date: "2026-10-10",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-525",
  author: "Hugo",
  rating: 5,
  date: "2026-04-06",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-526",
  author: "Margaux",
  rating: 5,
  date: "2026-02-23",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-527",
  author: "Lina",
  rating: 4,
  date: "2026-05-16",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-528",
  author: "Sarah",
  rating: 5,
  date: "2026-10-09",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-529",
  author: "Arthur",
  rating: 5,
  date: "2026-04-03",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-530",
  author: "Louise",
  rating: 5,
  date: "2026-06-07",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-531",
  author: "Marine",
  rating: 5,
  date: "2026-10-03",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-532",
  author: "Arthur",
  rating: 3,
  date: "2026-02-03",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-533",
  author: "Olivier",
  rating: 5,
  date: "2026-09-01",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-534",
  author: "Inès",
  rating: 5,
  date: "2026-06-07",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-535",
  author: "Zoé",
  rating: 5,
  date: "2026-10-11",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-536",
  author: "Pauline",
  rating: 5,
  date: "2026-08-22",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-537",
  author: "Jade",
  rating: 5,
  date: "2026-10-23",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-538",
  author: "Julie",
  rating: 5,
  date: "2026-07-02",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-539",
  author: "Maëlle",
  rating: 4,
  date: "2026-03-24",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-540",
  author: "Louise",
  rating: 4,
  date: "2026-03-17",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-541",
  author: "Samuel",
  rating: 3,
  date: "2026-10-15",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-542",
  author: "Pierre",
  rating: 5,
  date: "2026-04-13",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-543",
  author: "Emma",
  rating: 5,
  date: "2026-04-13",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-544",
  author: "Sophie",
  rating: 5,
  date: "2026-09-19",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-545",
  author: "Charlotte",
  rating: 5,
  date: "2026-10-01",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-546",
  author: "Célia",
  rating: 5,
  date: "2026-02-03",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-547",
  author: "Alice",
  rating: 5,
  date: "2026-01-21",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-548",
  author: "Quentin",
  rating: 4,
  date: "2026-10-05",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-549",
  author: "Tom",
  rating: 3,
  date: "2026-03-07",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-550",
  author: "Benjamin",
  rating: 5,
  date: "2026-06-24",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-551",
  author: "Chloé",
  rating: 4,
  date: "2026-07-09",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-552",
  author: "Clara",
  rating: 3,
  date: "2026-01-11",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-553",
  author: "Alice",
  rating: 3,
  date: "2026-09-09",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-554",
  author: "Clara",
  rating: 5,
  date: "2026-01-19",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-555",
  author: "Antoine",
  rating: 5,
  date: "2026-04-09",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-556",
  author: "Samuel",
  rating: 5,
  date: "2026-05-10",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-557",
  author: "Marine",
  rating: 5,
  date: "2026-04-27",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-558",
  author: "Eva",
  rating: 5,
  date: "2026-05-10",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-559",
  author: "Marius",
  rating: 4,
  date: "2026-04-07",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-560",
  author: "Noémie",
  rating: 3,
  date: "2026-05-22",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-561",
  author: "Mia",
  rating: 4,
  date: "2026-07-10",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-562",
  author: "Noah",
  rating: 5,
  date: "2026-04-08",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-563",
  author: "Léa",
  rating: 5,
  date: "2026-08-20",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-564",
  author: "Julien",
  rating: 5,
  date: "2026-07-04",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-565",
  author: "Nathan",
  rating: 3,
  date: "2026-10-23",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-566",
  author: "Amandine",
  rating: 5,
  date: "2026-02-06",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-567",
  author: "Mia",
  rating: 3,
  date: "2026-04-09",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-568",
  author: "Léo",
  rating: 3,
  date: "2026-01-05",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-569",
  author: "Manon",
  rating: 5,
  date: "2026-05-11",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-570",
  author: "Pierre",
  rating: 5,
  date: "2026-09-16",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-571",
  author: "Nina",
  rating: 3,
  date: "2026-06-22",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-572",
  author: "Tom",
  rating: 5,
  date: "2026-06-04",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-573",
  author: "Chloé",
  rating: 5,
  date: "2026-10-21",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-574",
  author: "Dylan",
  rating: 3,
  date: "2026-02-17",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-575",
  author: "Simon",
  rating: 3,
  date: "2026-03-25",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-576",
  author: "Alexandre",
  rating: 5,
  date: "2026-09-15",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-577",
  author: "Quentin",
  rating: 5,
  date: "2026-10-24",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-578",
  author: "Théo",
  rating: 5,
  date: "2026-10-27",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-579",
  author: "Lucas",
  rating: 3,
  date: "2026-02-07",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-580",
  author: "Marius",
  rating: 5,
  date: "2026-04-08",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-581",
  author: "Jade",
  rating: 5,
  date: "2026-08-27",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-582",
  author: "Alexis",
  rating: 5,
  date: "2026-07-21",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-583",
  author: "Tom",
  rating: 3,
  date: "2026-03-08",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-584",
  author: "Louise",
  rating: 5,
  date: "2026-04-11",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-585",
  author: "Marine",
  rating: 4,
  date: "2026-10-14",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-586",
  author: "David",
  rating: 3,
  date: "2026-05-16",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-587",
  author: "Tom",
  rating: 5,
  date: "2026-07-22",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-588",
  author: "Arthur",
  rating: 3,
  date: "2026-10-12",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-589",
  author: "Adrien",
  rating: 5,
  date: "2026-03-18",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-590",
  author: "Marius",
  rating: 4,
  date: "2026-01-06",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-591",
  author: "Océane",
  rating: 4,
  date: "2026-03-25",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-592",
  author: "Estelle",
  rating: 5,
  date: "2026-04-24",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-593",
  author: "Ingrid",
  rating: 5,
  date: "2026-01-25",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-594",
  author: "Sarah",
  rating: 5,
  date: "2026-01-03",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-595",
  author: "Jeanne",
  rating: 4,
  date: "2026-01-06",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-596",
  author: "Louis",
  rating: 4,
  date: "2026-07-09",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-597",
  author: "Mélanie",
  rating: 5,
  date: "2026-01-07",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-598",
  author: "Émilie",
  rating: 5,
  date: "2026-03-23",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-599",
  author: "Pierre",
  rating: 5,
  date: "2026-06-24",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-600",
  author: "David",
  rating: 3,
  date: "2026-07-27",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-601",
  author: "Enzo",
  rating: 5,
  date: "2026-09-09",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-602",
  author: "Benjamin",
  rating: 4,
  date: "2026-07-18",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-603",
  author: "Marius",
  rating: 5,
  date: "2026-06-12",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-604",
  author: "Simon",
  rating: 5,
  date: "2026-04-27",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-605",
  author: "Martin",
  rating: 5,
  date: "2026-05-15",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-606",
  author: "Camille",
  rating: 5,
  date: "2026-03-07",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-607",
  author: "Manon",
  rating: 5,
  date: "2026-03-28",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-608",
  author: "Océane",
  rating: 5,
  date: "2026-06-14",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-609",
  author: "Bastien",
  rating: 5,
  date: "2026-06-16",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-610",
  author: "Célia",
  rating: 5,
  date: "2026-03-28",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-611",
  author: "Mathieu",
  rating: 4,
  date: "2026-02-14",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-612",
  author: "Eva",
  rating: 5,
  date: "2026-02-15",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-613",
  author: "Noah",
  rating: 5,
  date: "2026-07-22",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-614",
  author: "Léa",
  rating: 4,
  date: "2026-05-15",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-615",
  author: "Lucie",
  rating: 4,
  date: "2026-03-21",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-616",
  author: "Pauline",
  rating: 5,
  date: "2026-03-15",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-617",
  author: "Sarah",
  rating: 3,
  date: "2026-09-24",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-618",
  author: "Valentin",
  rating: 4,
  date: "2026-09-16",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-619",
  author: "Martin",
  rating: 5,
  date: "2026-04-17",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-620",
  author: "Raphaël",
  rating: 5,
  date: "2026-04-14",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-621",
  author: "Alexandre",
  rating: 4,
  date: "2026-08-13",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-622",
  author: "Chloé",
  rating: 5,
  date: "2026-07-11",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-623",
  author: "Anaïs",
  rating: 4,
  date: "2026-01-13",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-624",
  author: "Léo",
  rating: 3,
  date: "2026-02-22",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-625",
  author: "Martin",
  rating: 4,
  date: "2026-02-15",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-626",
  author: "Nicolas",
  rating: 5,
  date: "2026-02-17",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-627",
  author: "Lucas",
  rating: 5,
  date: "2026-03-27",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-628",
  author: "Lina",
  rating: 3,
  date: "2026-07-06",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-629",
  author: "Anaïs",
  rating: 5,
  date: "2026-03-07",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-630",
  author: "Julie",
  rating: 4,
  date: "2026-07-07",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-631",
  author: "Samuel",
  rating: 5,
  date: "2026-05-20",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-632",
  author: "Noémie",
  rating: 5,
  date: "2026-08-05",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-633",
  author: "Sarah",
  rating: 5,
  date: "2026-06-23",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-634",
  author: "Emma",
  rating: 4,
  date: "2026-10-12",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-635",
  author: "Julien",
  rating: 5,
  date: "2026-02-08",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-636",
  author: "Julie",
  rating: 5,
  date: "2026-07-21",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-637",
  author: "Paul",
  rating: 5,
  date: "2026-10-19",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-638",
  author: "Alexandra",
  rating: 5,
  date: "2026-10-24",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-639",
  author: "Mélanie",
  rating: 5,
  date: "2026-08-10",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-640",
  author: "Léna",
  rating: 4,
  date: "2026-01-23",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-641",
  author: "Elisa",
  rating: 5,
  date: "2026-03-22",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-642",
  author: "Ingrid",
  rating: 5,
  date: "2026-02-11",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-643",
  author: "Alice",
  rating: 4,
  date: "2026-08-09",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-644",
  author: "Nathan",
  rating: 5,
  date: "2026-03-12",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-645",
  author: "Jade",
  rating: 5,
  date: "2026-06-02",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-646",
  author: "Maxime",
  rating: 5,
  date: "2026-07-03",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-647",
  author: "Benjamin",
  rating: 5,
  date: "2026-06-15",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-648",
  author: "Arthur",
  rating: 3,
  date: "2026-07-07",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-649",
  author: "Antoine",
  rating: 5,
  date: "2026-10-03",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-650",
  author: "Marine",
  rating: 5,
  date: "2026-03-18",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-651",
  author: "Clara",
  rating: 5,
  date: "2026-04-22",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-652",
  author: "Louise",
  rating: 5,
  date: "2026-08-20",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-653",
  author: "Charlotte",
  rating: 5,
  date: "2026-06-08",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-654",
  author: "Maxime",
  rating: 4,
  date: "2026-08-18",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-655",
  author: "Jade",
  rating: 5,
  date: "2026-05-20",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-656",
  author: "Marine",
  rating: 5,
  date: "2026-08-18",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-657",
  author: "Dylan",
  rating: 5,
  date: "2026-03-21",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-658",
  author: "Charlotte",
  rating: 5,
  date: "2026-07-13",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-659",
  author: "Mia",
  rating: 3,
  date: "2026-06-07",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-660",
  author: "Océane",
  rating: 5,
  date: "2026-01-02",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-661",
  author: "Valentin",
  rating: 5,
  date: "2026-07-12",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-662",
  author: "Marius",
  rating: 5,
  date: "2026-05-08",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-663",
  author: "Olivier",
  rating: 3,
  date: "2026-02-23",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-664",
  author: "Sophie",
  rating: 3,
  date: "2026-03-25",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-665",
  author: "Adam",
  rating: 5,
  date: "2026-10-04",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-666",
  author: "Pauline",
  rating: 5,
  date: "2026-01-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-667",
  author: "Anaïs",
  rating: 5,
  date: "2026-09-05",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-668",
  author: "Nathan",
  rating: 5,
  date: "2026-04-15",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-669",
  author: "Léna",
  rating: 5,
  date: "2026-08-06",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-670",
  author: "Lucas",
  rating: 5,
  date: "2026-06-23",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-671",
  author: "Bastien",
  rating: 5,
  date: "2026-08-16",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-672",
  author: "Camille",
  rating: 5,
  date: "2026-01-28",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-673",
  author: "Anaïs",
  rating: 5,
  date: "2026-06-09",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-674",
  author: "Nathan",
  rating: 5,
  date: "2026-02-19",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-675",
  author: "Alexandra",
  rating: 5,
  date: "2026-06-07",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-676",
  author: "Julien",
  rating: 5,
  date: "2026-04-10",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-677",
  author: "Louise",
  rating: 3,
  date: "2026-02-03",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-678",
  author: "Dylan",
  rating: 5,
  date: "2026-05-13",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-679",
  author: "Jade",
  rating: 4,
  date: "2026-04-01",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-680",
  author: "Thomas",
  rating: 5,
  date: "2026-07-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-681",
  author: "Valentin",
  rating: 3,
  date: "2026-08-10",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-682",
  author: "Dylan",
  rating: 5,
  date: "2026-08-11",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-683",
  author: "Yanis",
  rating: 5,
  date: "2026-06-22",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-684",
  author: "Benjamin",
  rating: 5,
  date: "2026-03-10",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-685",
  author: "David",
  rating: 4,
  date: "2026-09-01",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-686",
  author: "Léo",
  rating: 5,
  date: "2026-10-03",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-687",
  author: "Mathilde",
  rating: 5,
  date: "2026-09-06",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-688",
  author: "Antoine",
  rating: 5,
  date: "2026-06-17",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-689",
  author: "Quentin",
  rating: 5,
  date: "2026-05-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-690",
  author: "Valentin",
  rating: 5,
  date: "2026-01-22",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-691",
  author: "Nicolas",
  rating: 3,
  date: "2026-09-19",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-692",
  author: "Louise",
  rating: 5,
  date: "2026-02-02",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-693",
  author: "Jeanne",
  rating: 5,
  date: "2026-01-12",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-694",
  author: "Nina",
  rating: 5,
  date: "2026-08-02",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-695",
  author: "Charlotte",
  rating: 5,
  date: "2026-05-23",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-696",
  author: "Camille",
  rating: 5,
  date: "2026-07-01",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-697",
  author: "Marine",
  rating: 5,
  date: "2026-05-23",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-698",
  author: "Thomas",
  rating: 4,
  date: "2026-07-22",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-699",
  author: "Enzo",
  rating: 5,
  date: "2026-08-16",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-700",
  author: "Camille",
  rating: 5,
  date: "2026-01-22",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-701",
  author: "Manon",
  rating: 4,
  date: "2026-05-23",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-702",
  author: "Jeanne",
  rating: 5,
  date: "2026-05-21",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-703",
  author: "Maxime",
  rating: 5,
  date: "2026-10-17",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-704",
  author: "Tom",
  rating: 5,
  date: "2026-05-17",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-705",
  author: "Jade",
  rating: 5,
  date: "2026-03-23",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-706",
  author: "Louise",
  rating: 4,
  date: "2026-06-07",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-707",
  author: "Lina",
  rating: 5,
  date: "2026-07-03",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-708",
  author: "Louise",
  rating: 4,
  date: "2026-06-15",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-709",
  author: "Chloé",
  rating: 5,
  date: "2026-02-10",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-710",
  author: "Jade",
  rating: 5,
  date: "2026-02-06",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-711",
  author: "Julie",
  rating: 5,
  date: "2026-05-23",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-712",
  author: "Margaux",
  rating: 3,
  date: "2026-08-13",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-713",
  author: "Mathilde",
  rating: 4,
  date: "2026-03-10",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-714",
  author: "Eva",
  rating: 3,
  date: "2026-10-25",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-715",
  author: "Marine",
  rating: 5,
  date: "2026-01-12",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-716",
  author: "Léa",
  rating: 4,
  date: "2026-10-06",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-717",
  author: "Théo",
  rating: 4,
  date: "2026-06-19",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-718",
  author: "Antoine",
  rating: 4,
  date: "2026-08-17",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-719",
  author: "Marine",
  rating: 5,
  date: "2026-06-04",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-720",
  author: "Samuel",
  rating: 4,
  date: "2026-03-16",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-721",
  author: "Enzo",
  rating: 5,
  date: "2026-10-12",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-722",
  author: "Arthur",
  rating: 5,
  date: "2026-03-11",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-723",
  author: "Gabriel",
  rating: 4,
  date: "2026-02-19",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-724",
  author: "Adam",
  rating: 5,
  date: "2026-03-08",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-725",
  author: "Martin",
  rating: 5,
  date: "2026-04-12",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-726",
  author: "Alice",
  rating: 4,
  date: "2026-04-11",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-727",
  author: "Lina",
  rating: 5,
  date: "2026-10-07",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-728",
  author: "Chloé",
  rating: 5,
  date: "2026-04-28",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-729",
  author: "Maëlle",
  rating: 5,
  date: "2026-01-10",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-730",
  author: "Chloé",
  rating: 4,
  date: "2026-05-15",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-731",
  author: "Simon",
  rating: 4,
  date: "2026-09-13",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-732",
  author: "Louise",
  rating: 5,
  date: "2026-06-01",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-733",
  author: "Noémie",
  rating: 5,
  date: "2026-06-14",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-734",
  author: "Tom",
  rating: 5,
  date: "2026-09-10",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-735",
  author: "Maxime",
  rating: 5,
  date: "2026-09-16",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-736",
  author: "Julie",
  rating: 5,
  date: "2026-03-06",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-737",
  author: "Louise",
  rating: 4,
  date: "2026-06-17",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-738",
  author: "Pierre",
  rating: 5,
  date: "2026-10-27",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-739",
  author: "Thomas",
  rating: 5,
  date: "2026-10-01",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-740",
  author: "Eva",
  rating: 4,
  date: "2026-06-13",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-741",
  author: "Marine",
  rating: 5,
  date: "2026-08-04",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-742",
  author: "Léa",
  rating: 5,
  date: "2026-08-01",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-743",
  author: "Nicolas",
  rating: 5,
  date: "2026-01-19",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-744",
  author: "Lola",
  rating: 4,
  date: "2026-09-04",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-745",
  author: "Maxime",
  rating: 4,
  date: "2026-02-13",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-746",
  author: "Jade",
  rating: 5,
  date: "2026-01-09",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-747",
  author: "Paul",
  rating: 5,
  date: "2026-05-27",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-748",
  author: "Lola",
  rating: 5,
  date: "2026-09-18",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-749",
  author: "Nicolas",
  rating: 5,
  date: "2026-01-18",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-750",
  author: "Maëlle",
  rating: 5,
  date: "2026-07-10",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-751",
  author: "David",
  rating: 5,
  date: "2026-06-03",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-752",
  author: "Julien",
  rating: 5,
  date: "2026-08-26",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-753",
  author: "Maxime",
  rating: 5,
  date: "2026-08-27",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-754",
  author: "Jeanne",
  rating: 5,
  date: "2026-10-13",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-755",
  author: "Emma",
  rating: 4,
  date: "2026-02-14",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-756",
  author: "Manon",
  rating: 3,
  date: "2026-04-05",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-757",
  author: "Yanis",
  rating: 3,
  date: "2026-04-20",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-758",
  author: "Julie",
  rating: 5,
  date: "2026-03-25",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-759",
  author: "Jeanne",
  rating: 4,
  date: "2026-09-25",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-760",
  author: "Lola",
  rating: 5,
  date: "2026-07-07",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-761",
  author: "Louise",
  rating: 3,
  date: "2026-06-17",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-762",
  author: "Emma",
  rating: 5,
  date: "2026-01-20",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-763",
  author: "Sophie",
  rating: 5,
  date: "2026-09-03",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-764",
  author: "Élodie",
  rating: 3,
  date: "2026-01-05",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-765",
  author: "Ingrid",
  rating: 5,
  date: "2026-06-25",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-766",
  author: "Jeanne",
  rating: 3,
  date: "2026-05-05",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-767",
  author: "Jade",
  rating: 5,
  date: "2026-10-22",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-768",
  author: "Samuel",
  rating: 4,
  date: "2026-09-13",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-769",
  author: "Célia",
  rating: 5,
  date: "2026-05-19",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-770",
  author: "Noah",
  rating: 4,
  date: "2026-08-02",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-771",
  author: "Adrien",
  rating: 4,
  date: "2026-04-26",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-772",
  author: "Sarah",
  rating: 3,
  date: "2026-02-15",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-773",
  author: "Léo",
  rating: 5,
  date: "2026-04-17",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-774",
  author: "Laura",
  rating: 5,
  date: "2026-08-21",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-775",
  author: "Lucie",
  rating: 4,
  date: "2026-04-07",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-776",
  author: "Noah",
  rating: 3,
  date: "2026-04-07",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-777",
  author: "Samuel",
  rating: 3,
  date: "2026-02-21",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-778",
  author: "Nathan",
  rating: 4,
  date: "2026-05-20",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-779",
  author: "Mélanie",
  rating: 4,
  date: "2026-04-04",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-780",
  author: "Nicolas",
  rating: 5,
  date: "2026-08-18",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-781",
  author: "Benjamin",
  rating: 5,
  date: "2026-09-22",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-782",
  author: "Noémie",
  rating: 4,
  date: "2026-04-12",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-783",
  author: "Alexandre",
  rating: 5,
  date: "2026-01-09",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-784",
  author: "Bastien",
  rating: 4,
  date: "2026-06-03",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-785",
  author: "Pauline",
  rating: 3,
  date: "2026-09-19",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-786",
  author: "Louise",
  rating: 5,
  date: "2026-06-10",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-787",
  author: "Lina",
  rating: 5,
  date: "2026-02-23",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-788",
  author: "Théo",
  rating: 5,
  date: "2026-09-16",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-789",
  author: "Tom",
  rating: 5,
  date: "2026-03-26",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-790",
  author: "Olivier",
  rating: 5,
  date: "2026-04-03",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-791",
  author: "Victor",
  rating: 3,
  date: "2026-04-15",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-792",
  author: "Chloé",
  rating: 4,
  date: "2026-09-19",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-793",
  author: "Arthur",
  rating: 5,
  date: "2026-06-15",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-794",
  author: "Dylan",
  rating: 5,
  date: "2026-07-24",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-795",
  author: "Nathan",
  rating: 5,
  date: "2026-08-20",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-796",
  author: "Théo",
  rating: 3,
  date: "2026-08-06",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-797",
  author: "Bastien",
  rating: 3,
  date: "2026-08-02",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-798",
  author: "Louise",
  rating: 5,
  date: "2026-09-04",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-799",
  author: "Antoine",
  rating: 5,
  date: "2026-05-26",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-800",
  author: "Yanis",
  rating: 5,
  date: "2026-08-17",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-801",
  author: "Tom",
  rating: 5,
  date: "2026-06-02",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-802",
  author: "Laura",
  rating: 3,
  date: "2026-07-22",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-803",
  author: "Bastien",
  rating: 5,
  date: "2026-03-11",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-804",
  author: "Amandine",
  rating: 5,
  date: "2026-01-11",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-805",
  author: "Charlotte",
  rating: 4,
  date: "2026-05-28",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-806",
  author: "Noémie",
  rating: 3,
  date: "2026-09-07",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-807",
  author: "Paul",
  rating: 5,
  date: "2026-09-07",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-808",
  author: "Céline",
  rating: 5,
  date: "2026-03-23",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-809",
  author: "Léa",
  rating: 5,
  date: "2026-01-26",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-810",
  author: "Dylan",
  rating: 5,
  date: "2026-03-24",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-811",
  author: "Adrien",
  rating: 5,
  date: "2026-05-19",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-812",
  author: "Marius",
  rating: 5,
  date: "2026-03-20",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-813",
  author: "Jade",
  rating: 5,
  date: "2026-10-10",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-814",
  author: "Samuel",
  rating: 5,
  date: "2026-06-15",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-815",
  author: "Nathan",
  rating: 5,
  date: "2026-09-17",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-816",
  author: "Émilie",
  rating: 4,
  date: "2026-10-19",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-817",
  author: "Théo",
  rating: 4,
  date: "2026-10-04",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-818",
  author: "Alexis",
  rating: 5,
  date: "2026-10-03",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-819",
  author: "Emma",
  rating: 5,
  date: "2026-07-04",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-820",
  author: "Alexandre",
  rating: 5,
  date: "2026-07-13",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-821",
  author: "Laura",
  rating: 5,
  date: "2026-04-20",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-822",
  author: "Émilie",
  rating: 5,
  date: "2026-09-02",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-823",
  author: "Marius",
  rating: 5,
  date: "2026-03-22",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-824",
  author: "Adrien",
  rating: 5,
  date: "2026-01-04",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-825",
  author: "Thomas",
  rating: 5,
  date: "2026-08-07",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-826",
  author: "Dylan",
  rating: 4,
  date: "2026-04-15",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-827",
  author: "Marius",
  rating: 5,
  date: "2026-01-28",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-828",
  author: "Lina",
  rating: 3,
  date: "2026-06-08",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-829",
  author: "Amandine",
  rating: 5,
  date: "2026-09-25",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-830",
  author: "Marius",
  rating: 5,
  date: "2026-10-14",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-831",
  author: "Simon",
  rating: 4,
  date: "2026-02-07",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-832",
  author: "Alexandra",
  rating: 5,
  date: "2026-03-20",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-833",
  author: "Adam",
  rating: 5,
  date: "2026-02-07",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-834",
  author: "Émilie",
  rating: 5,
  date: "2026-05-18",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-835",
  author: "Estelle",
  rating: 5,
  date: "2026-10-20",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-836",
  author: "Jeanne",
  rating: 5,
  date: "2026-01-19",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-837",
  author: "Valentin",
  rating: 4,
  date: "2026-08-13",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-838",
  author: "Louis",
  rating: 5,
  date: "2026-08-26",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-839",
  author: "Martin",
  rating: 5,
  date: "2026-03-04",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-840",
  author: "Louis",
  rating: 5,
  date: "2026-04-28",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-841",
  author: "Mathieu",
  rating: 4,
  date: "2026-07-27",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-842",
  author: "Laura",
  rating: 5,
  date: "2026-06-28",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-843",
  author: "Simon",
  rating: 3,
  date: "2026-04-10",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-844",
  author: "Mia",
  rating: 5,
  date: "2026-03-07",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-845",
  author: "Amandine",
  rating: 5,
  date: "2026-04-18",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-846",
  author: "Théo",
  rating: 5,
  date: "2026-04-06",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-847",
  author: "Léna",
  rating: 5,
  date: "2026-02-05",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-848",
  author: "Théo",
  rating: 4,
  date: "2026-05-08",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-849",
  author: "Louis",
  rating: 4,
  date: "2026-02-28",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-850",
  author: "Pauline",
  rating: 5,
  date: "2026-05-10",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-851",
  author: "Yanis",
  rating: 5,
  date: "2026-10-07",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-852",
  author: "Dylan",
  rating: 5,
  date: "2026-10-01",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-853",
  author: "Bastien",
  rating: 3,
  date: "2026-05-20",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-854",
  author: "Eva",
  rating: 5,
  date: "2026-01-04",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-855",
  author: "Célia",
  rating: 5,
  date: "2026-02-14",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-856",
  author: "Laura",
  rating: 4,
  date: "2026-05-12",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-857",
  author: "Nina",
  rating: 3,
  date: "2026-01-21",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-858",
  author: "Mathieu",
  rating: 5,
  date: "2026-01-01",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-859",
  author: "Lucas",
  rating: 5,
  date: "2026-10-08",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-860",
  author: "Julie",
  rating: 4,
  date: "2026-10-13",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-861",
  author: "Léna",
  rating: 4,
  date: "2026-05-18",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-862",
  author: "Célia",
  rating: 4,
  date: "2026-01-19",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-863",
  author: "Bastien",
  rating: 3,
  date: "2026-05-13",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-864",
  author: "Célia",
  rating: 5,
  date: "2026-03-11",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-865",
  author: "Alexandre",
  rating: 4,
  date: "2026-09-14",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-866",
  author: "Dylan",
  rating: 5,
  date: "2026-05-20",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-867",
  author: "Alice",
  rating: 5,
  date: "2026-08-11",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-868",
  author: "Victor",
  rating: 5,
  date: "2026-01-23",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-869",
  author: "Lucie",
  rating: 5,
  date: "2026-10-17",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-870",
  author: "Alice",
  rating: 5,
  date: "2026-03-18",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-871",
  author: "Mathilde",
  rating: 5,
  date: "2026-10-06",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-872",
  author: "Jeanne",
  rating: 5,
  date: "2026-08-11",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-873",
  author: "Lucas",
  rating: 5,
  date: "2026-03-15",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-874",
  author: "Célia",
  rating: 5,
  date: "2026-02-12",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-875",
  author: "Manon",
  rating: 5,
  date: "2026-05-14",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-876",
  author: "Amandine",
  rating: 5,
  date: "2026-04-10",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-877",
  author: "Adrien",
  rating: 4,
  date: "2026-07-04",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-878",
  author: "Chloé",
  rating: 5,
  date: "2026-09-20",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-879",
  author: "Hugo",
  rating: 4,
  date: "2026-06-28",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-880",
  author: "Théo",
  rating: 5,
  date: "2026-06-01",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-881",
  author: "Léna",
  rating: 5,
  date: "2026-05-01",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-882",
  author: "Antoine",
  rating: 4,
  date: "2026-03-26",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-883",
  author: "Elisa",
  rating: 5,
  date: "2026-04-28",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-884",
  author: "Amandine",
  rating: 5,
  date: "2026-03-23",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-885",
  author: "Charlotte",
  rating: 4,
  date: "2026-06-24",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-886",
  author: "Nathan",
  rating: 4,
  date: "2026-10-04",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-887",
  author: "Jeanne",
  rating: 4,
  date: "2026-04-18",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-888",
  author: "Alexandre",
  rating: 5,
  date: "2026-10-21",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-889",
  author: "Antoine",
  rating: 4,
  date: "2026-07-19",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-890",
  author: "Maëlle",
  rating: 4,
  date: "2026-02-09",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-891",
  author: "Émilie",
  rating: 4,
  date: "2026-01-21",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-892",
  author: "Antoine",
  rating: 5,
  date: "2026-07-12",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-893",
  author: "Pierre",
  rating: 5,
  date: "2026-01-04",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-894",
  author: "Julien",
  rating: 5,
  date: "2026-02-09",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-895",
  author: "Gabriel",
  rating: 4,
  date: "2026-07-09",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-896",
  author: "Chloé",
  rating: 5,
  date: "2026-06-10",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-897",
  author: "Paul",
  rating: 5,
  date: "2026-07-04",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-898",
  author: "Jade",
  rating: 5,
  date: "2026-01-09",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-899",
  author: "Amandine",
  rating: 5,
  date: "2026-07-08",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-900",
  author: "David",
  rating: 5,
  date: "2026-10-18",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-901",
  author: "Mia",
  rating: 5,
  date: "2026-05-13",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-902",
  author: "Manon",
  rating: 5,
  date: "2026-01-06",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-903",
  author: "Élodie",
  rating: 4,
  date: "2026-06-02",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-904",
  author: "Laura",
  rating: 5,
  date: "2026-01-20",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-905",
  author: "Mia",
  rating: 3,
  date: "2026-10-12",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-906",
  author: "Victor",
  rating: 5,
  date: "2026-09-10",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-907",
  author: "Yanis",
  rating: 5,
  date: "2026-06-06",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-908",
  author: "Emma",
  rating: 5,
  date: "2026-01-17",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-909",
  author: "Arthur",
  rating: 3,
  date: "2026-06-08",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-910",
  author: "Chloé",
  rating: 3,
  date: "2026-03-14",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-911",
  author: "Louis",
  rating: 5,
  date: "2026-06-24",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-912",
  author: "Thomas",
  rating: 5,
  date: "2026-10-05",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-913",
  author: "Paul",
  rating: 5,
  date: "2026-08-16",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-914",
  author: "Marine",
  rating: 5,
  date: "2026-02-09",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-915",
  author: "Marius",
  rating: 5,
  date: "2026-06-26",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-916",
  author: "Gabriel",
  rating: 5,
  date: "2026-05-03",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-917",
  author: "Yanis",
  rating: 4,
  date: "2026-08-14",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-918",
  author: "Eva",
  rating: 3,
  date: "2026-01-22",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-919",
  author: "Alexandre",
  rating: 5,
  date: "2026-07-28",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-920",
  author: "Julien",
  rating: 5,
  date: "2026-07-23",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-921",
  author: "Pauline",
  rating: 5,
  date: "2026-01-28",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-922",
  author: "Adam",
  rating: 5,
  date: "2026-04-25",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-923",
  author: "Louise",
  rating: 3,
  date: "2026-04-13",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-924",
  author: "Martin",
  rating: 5,
  date: "2026-02-26",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-925",
  author: "Nathan",
  rating: 5,
  date: "2026-05-28",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-926",
  author: "Clara",
  rating: 5,
  date: "2026-08-17",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-927",
  author: "Céline",
  rating: 4,
  date: "2026-07-15",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-928",
  author: "Samuel",
  rating: 5,
  date: "2026-05-13",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-929",
  author: "Adrien",
  rating: 5,
  date: "2026-09-21",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-930",
  author: "Marine",
  rating: 5,
  date: "2026-05-10",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-931",
  author: "Emma",
  rating: 5,
  date: "2026-02-04",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-932",
  author: "Lucas",
  rating: 5,
  date: "2026-06-08",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-933",
  author: "Mathieu",
  rating: 5,
  date: "2026-10-18",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-934",
  author: "Thomas",
  rating: 5,
  date: "2026-09-02",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-935",
  author: "Léo",
  rating: 5,
  date: "2026-03-12",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-936",
  author: "Margaux",
  rating: 5,
  date: "2026-06-16",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-937",
  author: "Laura",
  rating: 5,
  date: "2026-05-09",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-938",
  author: "Mélanie",
  rating: 5,
  date: "2026-09-28",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-939",
  author: "Enzo",
  rating: 5,
  date: "2026-02-07",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-940",
  author: "Lucas",
  rating: 5,
  date: "2026-07-15",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-941",
  author: "Lina",
  rating: 4,
  date: "2026-05-28",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-942",
  author: "Gabriel",
  rating: 5,
  date: "2026-10-02",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-943",
  author: "Nicolas",
  rating: 5,
  date: "2026-03-16",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-944",
  author: "Samuel",
  rating: 4,
  date: "2026-02-08",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-945",
  author: "Dylan",
  rating: 5,
  date: "2026-03-22",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-946",
  author: "Inès",
  rating: 5,
  date: "2026-06-14",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-947",
  author: "Camille",
  rating: 5,
  date: "2026-04-26",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-948",
  author: "Chloé",
  rating: 5,
  date: "2026-01-24",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-949",
  author: "Élodie",
  rating: 5,
  date: "2026-03-15",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-950",
  author: "Nina",
  rating: 4,
  date: "2026-01-27",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-951",
  author: "Martin",
  rating: 5,
  date: "2026-03-21",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-952",
  author: "Charlotte",
  rating: 5,
  date: "2026-05-18",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-953",
  author: "Bastien",
  rating: 5,
  date: "2026-02-16",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-954",
  author: "Lina",
  rating: 5,
  date: "2026-08-20",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-955",
  author: "Nathan",
  rating: 5,
  date: "2026-02-12",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-956",
  author: "Pierre",
  rating: 5,
  date: "2026-10-11",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-957",
  author: "Quentin",
  rating: 5,
  date: "2026-05-27",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-958",
  author: "Victor",
  rating: 3,
  date: "2026-04-03",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-959",
  author: "Sarah",
  rating: 5,
  date: "2026-03-13",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-960",
  author: "Léo",
  rating: 4,
  date: "2026-02-20",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-961",
  author: "Julien",
  rating: 3,
  date: "2026-10-08",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-962",
  author: "Emma",
  rating: 5,
  date: "2026-05-09",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-963",
  author: "Louis",
  rating: 5,
  date: "2026-01-20",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-964",
  author: "Pierre",
  rating: 5,
  date: "2026-04-18",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-965",
  author: "Lucie",
  rating: 5,
  date: "2026-07-17",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-966",
  author: "Maëlle",
  rating: 5,
  date: "2026-08-19",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-967",
  author: "Mathieu",
  rating: 5,
  date: "2026-02-13",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-968",
  author: "Yanis",
  rating: 5,
  date: "2026-01-02",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-969",
  author: "Dylan",
  rating: 5,
  date: "2026-08-17",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-970",
  author: "Céline",
  rating: 5,
  date: "2026-08-26",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-971",
  author: "Elisa",
  rating: 4,
  date: "2026-01-06",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-972",
  author: "Maëlle",
  rating: 5,
  date: "2026-06-26",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-973",
  author: "Pauline",
  rating: 5,
  date: "2026-07-10",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-974",
  author: "Célia",
  rating: 5,
  date: "2026-03-21",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-975",
  author: "Léna",
  rating: 4,
  date: "2026-06-18",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-976",
  author: "Charlotte",
  rating: 5,
  date: "2026-07-25",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-977",
  author: "Mathilde",
  rating: 5,
  date: "2026-08-13",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-978",
  author: "Alexis",
  rating: 5,
  date: "2026-06-15",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-979",
  author: "Zoé",
  rating: 5,
  date: "2026-10-07",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-980",
  author: "Tom",
  rating: 3,
  date: "2026-04-15",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-981",
  author: "Nathan",
  rating: 4,
  date: "2026-02-28",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-982",
  author: "Julien",
  rating: 5,
  date: "2026-04-09",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-983",
  author: "Léa",
  rating: 4,
  date: "2026-03-12",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-984",
  author: "Lina",
  rating: 5,
  date: "2026-06-16",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-985",
  author: "Nathan",
  rating: 5,
  date: "2026-10-06",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-986",
  author: "Quentin",
  rating: 3,
  date: "2026-03-04",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-987",
  author: "Julie",
  rating: 5,
  date: "2026-01-16",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-988",
  author: "Louise",
  rating: 4,
  date: "2026-01-06",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-989",
  author: "Nicolas",
  rating: 5,
  date: "2026-06-21",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-990",
  author: "Élodie",
  rating: 4,
  date: "2026-03-12",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-991",
  author: "Antoine",
  rating: 4,
  date: "2026-02-23",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-992",
  author: "Camille",
  rating: 4,
  date: "2026-03-03",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-993",
  author: "Noah",
  rating: 5,
  date: "2026-09-16",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-994",
  author: "Mélanie",
  rating: 3,
  date: "2026-03-19",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-995",
  author: "Eva",
  rating: 5,
  date: "2026-10-17",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-996",
  author: "Théo",
  rating: 4,
  date: "2026-02-27",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-997",
  author: "Mia",
  rating: 5,
  date: "2026-06-13",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-998",
  author: "Clara",
  rating: 5,
  date: "2026-03-02",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-999",
  author: "Marine",
  rating: 5,
  date: "2026-01-16",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1000",
  author: "Thomas",
  rating: 5,
  date: "2026-05-09",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1001",
  author: "Victor",
  rating: 3,
  date: "2026-09-06",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1002",
  author: "Gabriel",
  rating: 5,
  date: "2026-03-23",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1003",
  author: "Inès",
  rating: 4,
  date: "2026-04-05",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1004",
  author: "Eva",
  rating: 5,
  date: "2026-02-22",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1005",
  author: "Maxime",
  rating: 5,
  date: "2026-04-09",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1006",
  author: "Mia",
  rating: 5,
  date: "2026-06-26",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1007",
  author: "David",
  rating: 5,
  date: "2026-02-07",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1008",
  author: "Alice",
  rating: 4,
  date: "2026-02-03",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1009",
  author: "Valentin",
  rating: 5,
  date: "2026-01-25",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1010",
  author: "Alexandre",
  rating: 5,
  date: "2026-10-06",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1011",
  author: "Emma",
  rating: 3,
  date: "2026-06-27",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1012",
  author: "Samuel",
  rating: 5,
  date: "2026-09-25",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1013",
  author: "Noah",
  rating: 5,
  date: "2026-07-01",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1014",
  author: "Lucie",
  rating: 4,
  date: "2026-02-07",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1015",
  author: "Jade",
  rating: 5,
  date: "2026-03-26",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1016",
  author: "Olivier",
  rating: 3,
  date: "2026-02-08",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1017",
  author: "Alexandre",
  rating: 4,
  date: "2026-09-02",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1018",
  author: "Jeanne",
  rating: 5,
  date: "2026-01-18",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1019",
  author: "Emma",
  rating: 5,
  date: "2026-10-14",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1020",
  author: "Théo",
  rating: 5,
  date: "2026-02-27",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1021",
  author: "Enzo",
  rating: 4,
  date: "2026-03-15",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1022",
  author: "Margaux",
  rating: 5,
  date: "2026-08-08",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1023",
  author: "Elisa",
  rating: 5,
  date: "2026-01-19",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1024",
  author: "Zoé",
  rating: 5,
  date: "2026-03-07",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1025",
  author: "Lucie",
  rating: 5,
  date: "2026-09-07",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1026",
  author: "Lola",
  rating: 5,
  date: "2026-08-13",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1027",
  author: "Zoé",
  rating: 4,
  date: "2026-03-22",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1028",
  author: "Estelle",
  rating: 5,
  date: "2026-04-17",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1029",
  author: "Emma",
  rating: 5,
  date: "2026-01-18",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1030",
  author: "Camille",
  rating: 4,
  date: "2026-05-13",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1031",
  author: "Clara",
  rating: 5,
  date: "2026-07-11",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1032",
  author: "Mathieu",
  rating: 4,
  date: "2026-10-18",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1033",
  author: "Lucas",
  rating: 4,
  date: "2026-02-27",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1034",
  author: "Manon",
  rating: 5,
  date: "2026-01-07",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1035",
  author: "Nathan",
  rating: 4,
  date: "2026-07-10",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1036",
  author: "Maxime",
  rating: 5,
  date: "2026-08-04",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1037",
  author: "Olivier",
  rating: 4,
  date: "2026-08-19",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1038",
  author: "Jade",
  rating: 5,
  date: "2026-08-21",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1039",
  author: "Émilie",
  rating: 5,
  date: "2026-07-01",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1040",
  author: "Adam",
  rating: 4,
  date: "2026-04-28",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1041",
  author: "Anaïs",
  rating: 5,
  date: "2026-08-18",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1042",
  author: "Elisa",
  rating: 3,
  date: "2026-01-05",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1043",
  author: "Victor",
  rating: 4,
  date: "2026-02-02",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1044",
  author: "Clara",
  rating: 3,
  date: "2026-07-16",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1045",
  author: "Marius",
  rating: 4,
  date: "2026-10-08",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1046",
  author: "Eva",
  rating: 5,
  date: "2026-06-28",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1047",
  author: "Alexis",
  rating: 4,
  date: "2026-01-06",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1048",
  author: "Valentin",
  rating: 5,
  date: "2026-01-24",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1049",
  author: "Sarah",
  rating: 5,
  date: "2026-03-26",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1050",
  author: "Émilie",
  rating: 5,
  date: "2026-07-09",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1051",
  author: "Noah",
  rating: 4,
  date: "2026-01-21",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1052",
  author: "Célia",
  rating: 5,
  date: "2026-07-12",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1053",
  author: "Alexis",
  rating: 4,
  date: "2026-06-04",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1054",
  author: "Nicolas",
  rating: 4,
  date: "2026-02-26",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1055",
  author: "Charlotte",
  rating: 5,
  date: "2026-05-07",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1056",
  author: "Elisa",
  rating: 5,
  date: "2026-07-14",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1057",
  author: "Adrien",
  rating: 5,
  date: "2026-01-23",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1058",
  author: "Célia",
  rating: 5,
  date: "2026-02-24",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1059",
  author: "Manon",
  rating: 3,
  date: "2026-03-28",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1060",
  author: "Enzo",
  rating: 5,
  date: "2026-04-10",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1061",
  author: "Simon",
  rating: 5,
  date: "2026-02-02",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1062",
  author: "Émilie",
  rating: 4,
  date: "2026-08-11",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1063",
  author: "Sophie",
  rating: 4,
  date: "2026-04-15",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1064",
  author: "Margaux",
  rating: 4,
  date: "2026-04-07",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1065",
  author: "Alexandra",
  rating: 5,
  date: "2026-03-26",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1066",
  author: "Julie",
  rating: 5,
  date: "2026-06-23",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1067",
  author: "Margaux",
  rating: 3,
  date: "2026-10-09",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1068",
  author: "Julie",
  rating: 5,
  date: "2026-09-21",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1069",
  author: "Marius",
  rating: 5,
  date: "2026-02-10",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1070",
  author: "Camille",
  rating: 5,
  date: "2026-06-24",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1071",
  author: "Martin",
  rating: 5,
  date: "2026-08-01",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1072",
  author: "Anaïs",
  rating: 4,
  date: "2026-10-27",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1073",
  author: "Marius",
  rating: 5,
  date: "2026-07-16",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1074",
  author: "Nina",
  rating: 5,
  date: "2026-10-04",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1075",
  author: "Mélanie",
  rating: 5,
  date: "2026-05-07",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1076",
  author: "Bastien",
  rating: 5,
  date: "2026-01-22",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1077",
  author: "Célia",
  rating: 5,
  date: "2026-09-13",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1078",
  author: "Alexandra",
  rating: 5,
  date: "2026-09-03",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1079",
  author: "Zoé",
  rating: 5,
  date: "2026-07-26",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1080",
  author: "Adrien",
  rating: 4,
  date: "2026-04-05",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1081",
  author: "Arthur",
  rating: 5,
  date: "2026-03-16",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1082",
  author: "Jade",
  rating: 5,
  date: "2026-08-14",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1083",
  author: "Marius",
  rating: 4,
  date: "2026-06-16",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1084",
  author: "Alexandre",
  rating: 4,
  date: "2026-05-20",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1085",
  author: "Julien",
  rating: 3,
  date: "2026-09-04",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1086",
  author: "Sarah",
  rating: 4,
  date: "2026-01-12",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1087",
  author: "Louis",
  rating: 3,
  date: "2026-07-12",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1088",
  author: "David",
  rating: 5,
  date: "2026-03-18",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1089",
  author: "Samuel",
  rating: 4,
  date: "2026-10-16",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1090",
  author: "Romain",
  rating: 5,
  date: "2026-09-18",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1091",
  author: "Mathilde",
  rating: 5,
  date: "2026-04-28",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1092",
  author: "Dylan",
  rating: 5,
  date: "2026-02-13",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1093",
  author: "Sarah",
  rating: 5,
  date: "2026-02-22",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1094",
  author: "Pierre",
  rating: 4,
  date: "2026-08-02",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1095",
  author: "Mathieu",
  rating: 5,
  date: "2026-08-04",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1096",
  author: "Clara",
  rating: 3,
  date: "2026-03-25",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1097",
  author: "Manon",
  rating: 3,
  date: "2026-02-19",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1098",
  author: "Camille",
  rating: 3,
  date: "2026-06-01",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1099",
  author: "Mathieu",
  rating: 5,
  date: "2026-09-01",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1100",
  author: "Alexis",
  rating: 5,
  date: "2026-06-17",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1101",
  author: "Hugo",
  rating: 5,
  date: "2026-05-06",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1102",
  author: "Simon",
  rating: 5,
  date: "2026-01-06",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1103",
  author: "Julie",
  rating: 5,
  date: "2026-01-06",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1104",
  author: "Chloé",
  rating: 5,
  date: "2026-02-02",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1105",
  author: "Estelle",
  rating: 5,
  date: "2026-04-12",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1106",
  author: "Alexandra",
  rating: 5,
  date: "2026-09-27",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1107",
  author: "Eva",
  rating: 5,
  date: "2026-09-13",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1108",
  author: "Olivier",
  rating: 5,
  date: "2026-10-09",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1109",
  author: "Gabriel",
  rating: 5,
  date: "2026-01-03",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1110",
  author: "Ingrid",
  rating: 5,
  date: "2026-01-06",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1111",
  author: "Zoé",
  rating: 5,
  date: "2026-04-21",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1112",
  author: "Lucas",
  rating: 5,
  date: "2026-08-20",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1113",
  author: "Mathilde",
  rating: 5,
  date: "2026-09-26",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1114",
  author: "Lucie",
  rating: 4,
  date: "2026-03-20",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1115",
  author: "Marius",
  rating: 4,
  date: "2026-06-08",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1116",
  author: "Samuel",
  rating: 5,
  date: "2026-08-06",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1117",
  author: "Alexis",
  rating: 3,
  date: "2026-01-12",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1118",
  author: "Zoé",
  rating: 3,
  date: "2026-05-09",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1119",
  author: "Nicolas",
  rating: 5,
  date: "2026-04-19",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1120",
  author: "Léna",
  rating: 5,
  date: "2026-04-16",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1121",
  author: "Margaux",
  rating: 5,
  date: "2026-01-17",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1122",
  author: "Zoé",
  rating: 3,
  date: "2026-10-25",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1123",
  author: "Léa",
  rating: 5,
  date: "2026-06-28",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1124",
  author: "Samuel",
  rating: 5,
  date: "2026-04-13",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1125",
  author: "Victor",
  rating: 4,
  date: "2026-05-24",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1126",
  author: "Adrien",
  rating: 5,
  date: "2026-10-20",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1127",
  author: "Olivier",
  rating: 5,
  date: "2026-10-14",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1128",
  author: "Estelle",
  rating: 5,
  date: "2026-02-07",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1129",
  author: "Pauline",
  rating: 5,
  date: "2026-06-08",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1130",
  author: "Eva",
  rating: 4,
  date: "2026-08-06",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1131",
  author: "Zoé",
  rating: 5,
  date: "2026-09-26",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1132",
  author: "Léo",
  rating: 5,
  date: "2026-06-02",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1133",
  author: "Jade",
  rating: 5,
  date: "2026-01-02",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1134",
  author: "Anaïs",
  rating: 5,
  date: "2026-06-16",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1135",
  author: "Mathilde",
  rating: 5,
  date: "2026-07-21",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1136",
  author: "Yanis",
  rating: 3,
  date: "2026-06-21",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1137",
  author: "Julie",
  rating: 5,
  date: "2026-10-13",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1138",
  author: "Clara",
  rating: 5,
  date: "2026-08-20",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1139",
  author: "Léo",
  rating: 5,
  date: "2026-09-14",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1140",
  author: "Lola",
  rating: 5,
  date: "2026-02-10",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1141",
  author: "Lucie",
  rating: 5,
  date: "2026-03-04",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1142",
  author: "Nicolas",
  rating: 5,
  date: "2026-04-06",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1143",
  author: "Julie",
  rating: 3,
  date: "2026-07-10",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1144",
  author: "Léo",
  rating: 5,
  date: "2026-05-11",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1145",
  author: "Sarah",
  rating: 5,
  date: "2026-08-05",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1146",
  author: "Léo",
  rating: 4,
  date: "2026-03-21",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1147",
  author: "Océane",
  rating: 3,
  date: "2026-09-26",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1148",
  author: "Anaïs",
  rating: 5,
  date: "2026-02-26",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1149",
  author: "Célia",
  rating: 3,
  date: "2026-04-08",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1150",
  author: "Paul",
  rating: 5,
  date: "2026-07-04",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1151",
  author: "Samuel",
  rating: 5,
  date: "2026-03-03",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1152",
  author: "Théo",
  rating: 5,
  date: "2026-04-24",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1153",
  author: "Simon",
  rating: 5,
  date: "2026-10-28",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1154",
  author: "Maxime",
  rating: 5,
  date: "2026-05-06",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1155",
  author: "Yanis",
  rating: 5,
  date: "2026-04-09",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1156",
  author: "Marine",
  rating: 5,
  date: "2026-10-06",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1157",
  author: "Chloé",
  rating: 5,
  date: "2026-09-25",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1158",
  author: "Nina",
  rating: 5,
  date: "2026-07-12",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1159",
  author: "Lola",
  rating: 5,
  date: "2026-07-07",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1160",
  author: "Lucie",
  rating: 3,
  date: "2026-08-10",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1161",
  author: "Maxime",
  rating: 5,
  date: "2026-02-08",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1162",
  author: "Gabriel",
  rating: 5,
  date: "2026-03-06",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1163",
  author: "Emma",
  rating: 3,
  date: "2026-04-19",
  title: "Ambiance douce",
  body: "La lumière est sympathique pour le soir quand je veux éviter un éclairage trop fort.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1164",
  author: "Marius",
  rating: 3,
  date: "2026-08-06",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1165",
  author: "Inès",
  rating: 5,
  date: "2026-09-07",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1166",
  author: "Gabriel",
  rating: 5,
  date: "2026-04-21",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1167",
  author: "Tom",
  rating: 5,
  date: "2026-04-20",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1168",
  author: "Clara",
  rating: 5,
  date: "2026-07-22",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1169",
  author: "Mélanie",
  rating: 5,
  date: "2026-06-11",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1170",
  author: "Thomas",
  rating: 5,
  date: "2026-04-25",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1171",
  author: "Quentin",
  rating: 5,
  date: "2026-10-03",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1172",
  author: "Eva",
  rating: 4,
  date: "2026-08-14",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1173",
  author: "Estelle",
  rating: 4,
  date: "2026-09-09",
  title: "Va bien avec mon intérieur",
  body: "Elle s’accorde avec mes meubles clairs et mes accessoires décoratifs.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1174",
  author: "Nathan",
  rating: 5,
  date: "2026-10-14",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1175",
  author: "Manon",
  rating: 5,
  date: "2026-10-03",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1176",
  author: "Julie",
  rating: 5,
  date: "2026-02-25",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1177",
  author: "Théo",
  rating: 5,
  date: "2026-06-14",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1178",
  author: "Mia",
  rating: 5,
  date: "2026-09-13",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1179",
  author: "Anaïs",
  rating: 5,
  date: "2026-05-10",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1180",
  author: "Jeanne",
  rating: 5,
  date: "2026-03-28",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1181",
  author: "Romain",
  rating: 3,
  date: "2026-02-25",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1182",
  author: "Mélanie",
  rating: 5,
  date: "2026-04-04",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1183",
  author: "Romain",
  rating: 5,
  date: "2026-05-18",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1184",
  author: "Antoine",
  rating: 5,
  date: "2026-02-01",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1185",
  author: "Lucas",
  rating: 5,
  date: "2026-07-11",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1186",
  author: "Martin",
  rating: 5,
  date: "2026-03-05",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1187",
  author: "Mathilde",
  rating: 5,
  date: "2026-02-14",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1188",
  author: "Lucas",
  rating: 4,
  date: "2026-06-01",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1189",
  author: "Noah",
  rating: 4,
  date: "2026-07-05",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1190",
  author: "Julien",
  rating: 5,
  date: "2026-01-09",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1191",
  author: "Emma",
  rating: 5,
  date: "2026-05-21",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1192",
  author: "Léna",
  rating: 5,
  date: "2026-09-15",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1193",
  author: "Emma",
  rating: 5,
  date: "2026-04-21",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1194",
  author: "Samuel",
  rating: 3,
  date: "2026-02-28",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1195",
  author: "Mélanie",
  rating: 5,
  date: "2026-08-02",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1196",
  author: "Nicolas",
  rating: 5,
  date: "2026-03-24",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1197",
  author: "Paul",
  rating: 4,
  date: "2026-10-08",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1198",
  author: "Lola",
  rating: 4,
  date: "2026-09-25",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1199",
  author: "Dylan",
  rating: 5,
  date: "2026-10-25",
  title: "Simple à intégrer à la déco",
  body: "Son style est facile à associer avec des couleurs neutres et du bois.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1200",
  author: "Antoine",
  rating: 5,
  date: "2026-07-19",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1201",
  author: "Pierre",
  rating: 4,
  date: "2026-07-23",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1202",
  author: "Jade",
  rating: 5,
  date: "2026-03-22",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1203",
  author: "Estelle",
  rating: 5,
  date: "2026-08-13",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1204",
  author: "Noah",
  rating: 5,
  date: "2026-09-23",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1205",
  author: "Noémie",
  rating: 5,
  date: "2026-10-20",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1206",
  author: "Alexandra",
  rating: 5,
  date: "2026-01-10",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1207",
  author: "Valentin",
  rating: 3,
  date: "2026-04-09",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1208",
  author: "Alexandre",
  rating: 4,
  date: "2026-06-05",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1209",
  author: "Elisa",
  rating: 5,
  date: "2026-06-28",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1210",
  author: "Charlotte",
  rating: 4,
  date: "2026-05-10",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1211",
  author: "Nicolas",
  rating: 5,
  date: "2026-04-14",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1212",
  author: "Julien",
  rating: 3,
  date: "2026-03-04",
  title: "Jolie lumière sur la table",
  body: "La lampe rend très bien sur ma table de chevet et donne une ambiance douce le soir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1213",
  author: "Enzo",
  rating: 3,
  date: "2026-07-26",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1214",
  author: "Amandine",
  rating: 3,
  date: "2026-10-15",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1215",
  author: "Élodie",
  rating: 3,
  date: "2026-07-13",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1216",
  author: "Raphaël",
  rating: 3,
  date: "2026-07-24",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1217",
  author: "Chloé",
  rating: 5,
  date: "2026-08-05",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1218",
  author: "Estelle",
  rating: 5,
  date: "2026-09-20",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1219",
  author: "Élodie",
  rating: 5,
  date: "2026-04-28",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1220",
  author: "Antoine",
  rating: 4,
  date: "2026-01-16",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1221",
  author: "Sophie",
  rating: 4,
  date: "2026-10-21",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1222",
  author: "Jeanne",
  rating: 5,
  date: "2026-02-22",
  title: "Un bel effet le soir",
  body: "Elle crée une ambiance agréable quand la pièce est moins éclairée.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1223",
  author: "Louis",
  rating: 5,
  date: "2026-10-19",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1224",
  author: "Estelle",
  rating: 5,
  date: "2026-07-02",
  title: "Belle lampe d’appoint",
  body: "Le style est sobre et la forme diamant donne un petit côté original.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1225",
  author: "Benjamin",
  rating: 5,
  date: "2026-01-08",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1226",
  author: "Ingrid",
  rating: 5,
  date: "2026-05-10",
  title: "Une touche moderne",
  body: "Elle apporte un petit détail moderne à mon coin lecture.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1227",
  author: "Anaïs",
  rating: 5,
  date: "2026-10-24",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1228",
  author: "Julien",
  rating: 5,
  date: "2026-03-15",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1229",
  author: "Martin",
  rating: 5,
  date: "2026-03-04",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1230",
  author: "Antoine",
  rating: 4,
  date: "2026-04-27",
  title: "Discrète et élégante",
  body: "La forme est jolie et la lampe trouve facilement sa place sur un meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1231",
  author: "Charlotte",
  rating: 4,
  date: "2026-06-04",
  title: "Satisfaite du style",
  body: "C’est surtout son apparence qui m’a convaincue et le rendu me plaît.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1232",
  author: "Clara",
  rating: 4,
  date: "2026-09-11",
  title: "Très jolie lampe",
  body: "Elle apporte un bel effet décoratif et convient bien comme lumière d’appoint.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1233",
  author: "Alexis",
  rating: 5,
  date: "2026-01-03",
  title: "Joli cadeau",
  body: "Je cherchais un petit objet déco et son style m’a plu.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1234",
  author: "Alice",
  rating: 5,
  date: "2026-03-06",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1235",
  author: "Nathan",
  rating: 3,
  date: "2026-02-03",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1236",
  author: "Célia",
  rating: 5,
  date: "2026-09-07",
  title: "Un effet décoratif réussi",
  body: "Le motif diffuse une lumière agréable et donne un joli effet sur le meuble.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1237",
  author: "Adrien",
  rating: 5,
  date: "2026-09-08",
  title: "Bonne lampe d’ambiance",
  body: "Elle est agréable pour créer une lumière d’appoint dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1238",
  author: "Romain",
  rating: 5,
  date: "2026-02-02",
  title: "Très jolie sur un buffet",
  body: "Je l’ai installée sur un buffet et elle complète bien la décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1239",
  author: "Antoine",
  rating: 4,
  date: "2026-09-18",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1240",
  author: "Léo",
  rating: 5,
  date: "2026-08-25",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1241",
  author: "Jade",
  rating: 4,
  date: "2026-03-28",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1242",
  author: "Enzo",
  rating: 5,
  date: "2026-04-02",
  title: "Belle idée pour la chambre",
  body: "Je l’ai posée sur la table de nuit et elle crée une ambiance reposante.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1243",
  author: "Bastien",
  rating: 5,
  date: "2026-04-05",
  title: "Un accessoire déco réussi",
  body: "Le design diamant est joli et change des lampes classiques.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1244",
  author: "Inès",
  rating: 5,
  date: "2026-05-13",
  title: "Un bel objet déco",
  body: "Le motif diamant attire le regard sans prendre trop de place dans la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1245",
  author: "Nicolas",
  rating: 4,
  date: "2026-09-23",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1246",
  author: "Clara",
  rating: 5,
  date: "2026-07-20",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1247",
  author: "Noémie",
  rating: 5,
  date: "2026-04-02",
  title: "Une lumière agréable le soir",
  body: "Je préfère l’utiliser pour une ambiance tamisée plutôt que pour éclairer toute la pièce.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1248",
  author: "Louise",
  rating: 3,
  date: "2026-07-19",
  title: "Contente de mon choix",
  body: "Elle apporte une petite touche décorative sympa dans le salon.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1249",
  author: "Anaïs",
  rating: 5,
  date: "2026-03-14",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1250",
  author: "Lucas",
  rating: 5,
  date: "2026-03-08",
  title: "Un joli rendu lumineux",
  body: "Le rendu est élégant et s’accorde facilement avec ma décoration.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1251",
  author: "Margaux",
  rating: 5,
  date: "2026-04-25",
  title: "Le design me plaît beaucoup",
  body: "La forme facettée donne un aspect original sans être trop chargé.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1252",
  author: "Romain",
  rating: 5,
  date: "2026-09-04",
  title: "Petit format pratique",
  body: "Elle ne prend pas beaucoup de place et convient bien à une petite étagère.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1253",
  author: "Quentin",
  rating: 5,
  date: "2026-05-08",
  title: "J’aime beaucoup le design",
  body: "Je trouve son apparence élégante et facile à assortir.",
  verified: true,
  demo: false
},
{
  id: "avis-lampe-diamant-1254",
  author: "Noah",
  rating: 5,
  date: "2026-10-07",
  title: "Parfaite pour une ambiance cosy",
  body: "Je l’utilise surtout en fin de journée pour avoir une lumière plus agréable.",
  verified: true,
  demo: false
}

];
