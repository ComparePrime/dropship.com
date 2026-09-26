import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { Product, ProductSectionKey } from "@/lib/types";
import { ProductGallery } from "@/components/product/gallery";
import { BuyBox } from "@/components/product/buy-box";
import { StickyBar } from "@/components/product/sticky-bar";
import { StorytellingSection } from "@/components/product/storytelling-section";
import { BenefitsSection } from "@/components/product/benefits-section";
import { InlineCta } from "@/components/product/inline-cta";
import { EditorialSection } from "@/components/product/editorial-section";
import { UseCasesSection } from "@/components/product/use-cases-section";
import { ObjectionsSection } from "@/components/product/objections-section";
import { ValueStackSection } from "@/components/product/value-stack-section";
import { GiftSection } from "@/components/product/gift-section";
import { ReviewsSection } from "@/components/product/reviews-section";
import { ShippingReturnsSection } from "@/components/product/shipping-returns-section";
import { FaqSection } from "@/components/product/faq-section";
import { RelatedProducts } from "@/components/product/related-products";
import { FinalCtaSection } from "@/components/product/final-cta-section";
import { ProductJsonLd } from "@/components/product/product-jsonld";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const url = `${siteConfig.domain}/produit/${product.slug}`;

  return {
    title: product.seo.title,
    description: product.seo.metaDescription,
    keywords: product.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: product.seo.title,
      description: product.seo.metaDescription,
      url,
      images: product.images[0] ? [{ url: product.images[0].src }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.metaDescription,
    },
  };
}

/**
 * Registre des sections editoriales. Chaque produit choisit son propre `layout`
 * (voir lib/products.ts) : la page n'impose donc pas le meme gabarit a tous les
 * produits, seul le hero (galerie + BuyBox) et le pied de page restent fixes.
 */
function renderSection(key: ProductSectionKey, product: Product) {
  switch (key) {
    case "storytelling":
      return <StorytellingSection key={key} content={product.storytelling} />;
    case "benefits":
      return <BenefitsSection key={key} benefits={product.benefits} />;
    case "cta-1":
      return <InlineCta key={key} product={product} text={product.midCtaTexts[0]} />;
    case "editorial":
      return <EditorialSection key={key} product={product} />;
    case "useCases":
      return <UseCasesSection key={key} useCases={product.useCases} />;
    case "objections":
      return <ObjectionsSection key={key} objections={product.objections} />;
    case "value":
      return <ValueStackSection key={key} product={product} />;
    case "cta-2":
      return <InlineCta key={key} product={product} text={product.midCtaTexts[1]} />;
    case "gift":
      return <GiftSection key={key} product={product} />;
    case "reviews":
      return <ReviewsSection key={key} product={product} />;
    case "shipping-returns":
      return <ShippingReturnsSection key={key} shipping={product.shipping} />;
    case "faq":
      return <FaqSection key={key} faq={product.faq} />;
    case "related":
      return <RelatedProducts key={key} products={getRelatedProducts(product.slug)} />;
    case "final-cta":
      return <FinalCtaSection key={key} product={product} />;
    default:
      return null;
  }
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <>
      <ProductJsonLd product={product} />
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: product.name }]} />

      <section className="container-content grid grid-cols-1 gap-10 py-8 md:grid-cols-2 md:gap-16 md:py-14">
        <ProductGallery images={product.images} />
        <BuyBox product={product} />
      </section>

      {product.layout.map((key) => renderSection(key, product))}

      <StickyBar product={product} />
    </>
  );
}
