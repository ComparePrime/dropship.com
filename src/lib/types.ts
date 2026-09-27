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

export interface UseCase {
  title: string;
  description: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ReviewDemo {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
  demo: true;
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
  /** Le doute exprime par la cliente, formule a la premiere personne. */
  doubt: string;
  response: string;
}

export interface DemoStep {
  title: string;
  description: string;
}

/**
 * Chaque section est optionnelle et l'ordre est defini par produit (champ `layout`).
 * Cela permet a un produit different d'avoir une structure de page totalement differente
 * (ex: "avant/apres" pour un produit demonstratif, "probleme/solution" pour un autre),
 * sans jamais forcer le meme gabarit pour tous les produits.
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
  name: string;
  brandLine: string;
  badge: string;
  /** Headline oriente benefice affiche en H1 dans le hero (pas le titre fournisseur). */
  headline: string;
  subtitle: string;
  /** 3-4 promesses courtes affichees en liste a puces dans le hero, sous le sous-titre. */
  heroBullets: string[];
  /** Variante du H1 utilisee pour le SEO/le maillage (title de page, ancres de blog). */
  h1: string;
  shortDescription: string;
  description: string[];
  storytelling: StorytellingContent;
  objections: Objection[];
  /** Ce que la cliente obtient reellement pour ce prix (justification de valeur, pas de faux prix barre). */
  valueStack: string[];
  /** Textes des CTA intermediaires (cta-1, cta-2), chacun formule une nouvelle raison d'acheter. */
  midCtaTexts: string[];
  /** Etapes numerotees pour la section "Comment ca fonctionne" (optionnelle). */
  demoSteps?: DemoStep[];
  /** Nombre d'unites incluses dans un seul article (ex: un lot de 2). Omis si vendu a l'unite. */
  packSize?: number;
  /** Libelle affiche pres du prix, ex: "2 pieces incluses". */
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
  reviewsDemo: ReviewDemo[];
  ratingAverageDemo: number;
  ratingCountDemo: number;
  collections: string[];
  /** Ordre des sections editoriales pour ce produit specifiquement. */
  layout: ProductSectionKey[];
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
}
