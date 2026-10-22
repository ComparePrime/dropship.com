import type { Product } from "@/lib/types";
import type { Locale } from "./config";
import en from "./products/en";
import de from "./products/de";
import it from "./products/it";
import es from "./products/es";
import pt from "./products/pt";

/**
 * Traductions des fiches produit (SERVEUR uniquement : ces textes longs ne doivent pas etre envoyes au navigateur).
 * Le catalogue (lib/products.ts) reste la source en francais ; une traduction remplace seulement les TEXTES,
 * champ par champ, dans l'ordre des tableaux. Elle ne touche jamais aux identifiants (slug, id, libelles de lots
 * ou de variantes utilises par le panier et le paiement) : leurs traductions d'affichage passent par t().
 */
export interface ProductTranslation {
  name?: string;
  badge?: string;
  headline?: string;
  subtitle?: string;
  heroBullets?: string[];
  h1?: string;
  shortDescription?: string;
  description?: string[];
  storytelling?: { eyebrow: string; title: string; paragraphs: string[] };
  objections?: { doubt: string; response: string }[];
  valueStack?: string[];
  midCtaTexts?: string[];
  benefits?: { title: string; description: string }[];
  useCases?: { title: string; description: string }[];
  faq?: { question: string; answer: string }[];
  seo?: { title: string; metaDescription: string; keywords: string[] };
  promotionLabel?: string;
  /** Textes des photos, dans l'ordre de `product.images`. */
  images?: { alt: string; caption?: string }[];
  demoSteps?: { title: string; description: string }[];
  sizeGuide?: {
    title: string;
    intro: string;
    columns: string[];
    /** Une entree par ligne du tableau : seulement les colonnes texte (ex. races), dans l'ordre des cellules. */
    cells: string[][];
    notes: string[];
    imageAlt?: string;
  };
  /** Questions fréquentes supplémentaires, etc. : voir les fichiers de langue. */
}

export type ProductTranslations = Record<string, ProductTranslation>;

const translations: Record<Exclude<Locale, "fr">, ProductTranslations> = { en, de, it, es, pt };

/** Fiche produit dans la langue demandee (le francais est renvoye tel quel). */
export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "fr") return product;
  const tr = translations[locale][product.slug];
  if (!tr) return product;
  const mapArray = <A, B>(base: A[] | undefined, over: B[] | undefined, merge: (a: A, b: B) => A): A[] | undefined =>
    base && over ? base.map((item, i) => (over[i] ? merge(item, over[i]) : item)) : base;
  return {
    ...product,
    name: tr.name ?? product.name,
    badge: tr.badge ?? product.badge,
    headline: tr.headline ?? product.headline,
    subtitle: tr.subtitle ?? product.subtitle,
    h1: tr.h1 ?? product.h1,
    shortDescription: tr.shortDescription ?? product.shortDescription,
    heroBullets: tr.heroBullets ?? product.heroBullets,
    description: tr.description ?? product.description,
    storytelling: tr.storytelling ?? product.storytelling,
    objections: tr.objections ?? product.objections,
    valueStack: tr.valueStack ?? product.valueStack,
    midCtaTexts: tr.midCtaTexts ?? product.midCtaTexts,
    benefits: mapArray(product.benefits, tr.benefits, (b, o) => ({ ...b, title: o.title, description: o.description })) ?? product.benefits,
    useCases: mapArray(product.useCases, tr.useCases, (u, o) => ({ ...u, title: o.title, description: o.description })) ?? product.useCases,
    faq: tr.faq ?? product.faq,
    seo: tr.seo ?? product.seo,
    promotion: { ...product.promotion, label: tr.promotionLabel ?? product.promotion.label },
    images: mapArray(product.images, tr.images, (img, o) => ({ ...img, alt: o.alt, caption: o.caption ?? img.caption })) ?? product.images,
    demoSteps: mapArray(product.demoSteps, tr.demoSteps, (s, o) => ({ ...s, ...o })),
    variants: product.variants?.map((v) => ({ ...v })),
    sizeGuide:
      product.sizeGuide && tr.sizeGuide
        ? {
            ...product.sizeGuide,
            title: tr.sizeGuide.title,
            intro: tr.sizeGuide.intro,
            columns: tr.sizeGuide.columns,
            notes: tr.sizeGuide.notes,
            image: product.sizeGuide.image && tr.sizeGuide.imageAlt ? { ...product.sizeGuide.image, alt: tr.sizeGuide.imageAlt } : product.sizeGuide.image,
            rows: product.sizeGuide.rows.map((row, i) => ({
              ...row,
              cells: row.cells.map((cell, j) => tr.sizeGuide?.cells[i]?.[j] ?? cell),
            })),
          }
        : product.sizeGuide,
  };
}

export function localizeProducts(products: Product[], locale: Locale): Product[] {
  return products.map((p) => localizeProduct(p, locale));
}
