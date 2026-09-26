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

export interface Product {
  id: string;
  slug: string;
  name: string;
  brandLine: string;
  badge: string;
  subtitle: string;
  h1: string;
  shortDescription: string;
  description: string[];
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
}

export interface CartLine {
  productId: string;
  slug: string;
  name: string;
  image: string;
  priceCHF: number;
  priceEUR: number;
  quantity: number;
}
