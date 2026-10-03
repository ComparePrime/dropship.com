export type Currency = "CHF" | "EUR";

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductBenefit {
  icon: string;
  title: string;
  description: string;
}

/**
 * Variante réelle d'un produit (coloris, motif...). Toujours au même prix et
 * sans gestion de stock séparée pour l'instant : un produit avec variantes
 * garde un seul `stock` global tant qu'aucun suivi par variante n'existe.
 */
export interface ProductVariant {
  id: string;
  label: string;
  image: ProductImage;
}

export interface UseCase {
  title: string;
  description: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  /** true uniquement si l'achat a réellement pu être vérifié. */
  verified: boolean;
  /** true = exemple de mise en page (marque DEMO a l'affichage), false = avis réel. */
  demo: boolean;
}

export interface PromotionConfig {
  active: boolean;
  label: string;
  /** ISO date string. Only shown when a real end date is configured. */
  endsAt?: string;
}

export interface ShippingConfig {
  freeShipping: boolean;
  dispatchWithinHours: number;
  minDays: number;
  maxDays: number;
  returnDays: number;
}

export interface ProductSeo {
  title: string;
  metaDescription: string;
  keywords: string[];
}

export interface StorytellingContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface Objection {
  /** Le doute exprime par la cliente, formule à la première personne. */
  doubt: string;
  response: string;
}

export interface DemoStep {
  title: string;
  description: string;
}

export type ProductStatus = "draft" | "published";

/**
 * Categories qui exigent une verification de securite/conformite/tracabilite
 * avant publication (section 9 du brief marque). La presence d'une categorie
 * ici ne dit pas que le produit est conforme : `verified` seul en fait foi.
 */
export type ComplianceCategory = "baby" | "electrical" | "pet";

export interface ComplianceCheck {
  categories: ComplianceCategory[];
  /** true uniquement si la verification a reellement ete effectuee et documentee. */
  verified: boolean;
  /** Ce qui reste a verifier/obtenir (ex: marquage CE, fiche de securite batterie). */
  notes?: string;
}

/**
 * Evaluation interne du produit (jamais affichee au client). Sert a decider
 * s'il merite d'etre publie/pousse en publicite. Notes de 1 (faible) a 5 (fort),
 * sauf `estimatedMarginAfterCosts` qui est une fraction (0.45 = 45%).
 */
export interface ProductEvaluation {
  demandScore: number;
  differentiationScore: number;
  supplierQualityScore: number;
  competitionScore: number;
  priceScore: number;
  returnRiskScore: number;
  /** Marge estimee une fois publicite, livraison et frais de transaction deduits. */
  estimatedMarginAfterCosts: number;
  notes?: string;
}

/**
 * Chaque section est optionnelle et l'ordre est défini par produit (champ `layout`).
 * Cela permet à un produit différent d'avoir une structure de page totalement differente
 * (ex: "avant/après" pour un produit demonstratif, "problème/solution" pour un autre),
 * sans jamais forcer le même gabarit pour tous les produits.
 */
export type ProductSectionKey =
  | "storytelling"
  | "benefits"
  | "cta-1"
  | "demo"
  | "editorial"
  | "useCases"
  | "objections"
  | "offer"
  | "value"
  | "cta-2"
  | "gift"
  | "reviews"
  | "shipping-returns"
  | "faq"
  | "related"
  | "final-cta";

export interface Product {
  id: string;
  slug: string;
  /** "draft" = jamais dans le sitemap, les listings ou la home ; accessible seulement par URL directe, en noindex. */
  status: ProductStatus;
  /** Renseigne uniquement lorsqu'une verification reelle a ete faite (jamais fabrique). */
  compliance?: ComplianceCheck;
  /** Evaluation interne (section 9) : outil de decision, jamais rendu cote client. */
  evaluation?: ProductEvaluation;
  name: string;
  brandLine: string;
  badge: string;
  /** Headline orienté bénéfice affiché en H1 dans le hero (pas le titre fournisseur). */
  headline: string;
  subtitle: string;
  /** 3-4 promesses courtes affichées en liste à puces dans le hero, sous le sous-titre. */
  heroBullets: string[];
  /** Variante du H1 utilisée pour le SEO/le maillage (title de page, ancres de blog). */
  h1: string;
  shortDescription: string;
  description: string[];
  storytelling: StorytellingContent;
  objections: Objection[];
  /** Ce que la cliente obtient réellement pour ce prix (justification de valeur, pas de faux prix barre). */
  valueStack: string[];
  /** Textes des CTA intermédiaires (cta-1, cta-2), chacun formule une nouvelle raison d'acheter. */
  midCtaTexts: string[];
  /** Étapes numérotées pour la section "Comment ça fonctionne" (optionnelle). */
  demoSteps?: DemoStep[];
  /** Nombre d'unités incluses dans un seul article (ex: un lot de 2). Omis si vendu à l'unité. */
  packSize?: number;
  /** Libellé affiché près du prix, ex: "2 pièces incluses". */
  packLabel?: string;
  costPriceUSD: number;
  priceCHF: number;
  priceEUR: number;
  compareAtPriceCHF?: number;
  compareAtPriceEUR?: number;
  images: ProductImage[];
  benefits: ProductBenefit[];
  useCases: UseCase[];
  faq: FaqItem[];
  seo: ProductSeo;
  promotion: PromotionConfig;
  shipping: ShippingConfig;
  reviews: Review[];
  /** Calculés à partir de `reviews` quand des avis réels existent (demo: false). 0 sinon. */
  ratingAverage: number;
  ratingCount: number;
  collections: string[];
  /** Ordre des sections éditoriales pour ce produit spécifiquement. */
  layout: ProductSectionKey[];
  /** Absent tant qu'aucune source de stock fiable n'existe pour ce produit. */
  stock?: StockInfo;
  /** Absent si le produit n'a pas de variantes réelles (coloris/motifs). */
  variants?: ProductVariant[];
}

/**
 * Origine de la donnée de stock, par ordre de fiabilité decroissante (voir
 * `docs/product-import-workflow.md`). Determine si une alerte de stock peut
 * etre affichee : `none` = aucune donnee fiable, rien n'est affiche.
 */
export type StockSource = "supplier-sync" | "backoffice" | "manual" | "none";

export interface StockInfo {
  source: StockSource;
  /** Unites reellement disponibles. Absent/0 si source = "none". */
  quantity: number;
  /**
   * Capacite de reference utilisee pour la barre visuelle (ex: taille de
   * reappro habituelle). Ne represente jamais un "stock total" invente.
   */
  referenceCapacity: number;
  /** Date ISO de derniere mise a jour de cette donnee. */
  updatedAt: string;
  /** Pour une source "manual" : rappel de qui doit la tenir a jour et comment. */
  notes?: string;
}

export interface CartLine {
  productId: string;
  slug: string;
  name: string;
  image: string;
  priceCHF: number;
  priceEUR: number;
  quantity: number;
  packLabel?: string;
  /** Libellé de la variante choisie (ex: motif), si le produit en propose. */
  variantLabel?: string;
}

export type SceneStatus = "draft" | "published";

/**
 * Un point interactif ("hotspot") sur la photo d'une mise en scène, relié à
 * un produit existant du catalogue. `x`/`y` sont des pourcentages (0-100)
 * de la largeur/hauteur de l'image, pas des pixels : le point reste donc au
 * bon endroit quelle que soit la taille d'affichage (mobile, tablette,
 * desktop). Ne jamais inventer un `productId` qui n'existe pas dans
 * `products.ts`.
 */
export interface SceneHotspot {
  productId: string;
  x: number;
  y: number;
}

/**
 * Une "mise en scène" (shop the look) : une photographie lifestyle réelle
 * associée à un ou plusieurs produits réellement vendus. Sert la
 * fonctionnalité "Recréez cette ambiance" de l'accueil et des pages
 * catégorie.
 */
export interface Scene {
  id: string;
  slug: string;
  status: SceneStatus;
  title: string;
  description: string;
  image: ProductImage;
  /** Doit correspondre à un slug existant dans `categories.ts`. */
  category: string;
  hotspots: SceneHotspot[];
  order: number;
  /** Occasion ou saison optionnelle, uniquement si réellement pertinente. */
  occasion?: string;
}
