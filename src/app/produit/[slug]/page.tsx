import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { ProductGallery } from "@/components/product/gallery";
import { BuyBox } from "@/components/product/buy-box";
import { StickyBar } from "@/components/product/sticky-bar";
import { BenefitsSection } from "@/components/product/benefits-section";
import { EditorialSection } from "@/components/product/editorial-section";
import { UseCasesSection } from "@/components/product/use-cases-section";
import { GiftSection } from "@/components/product/gift-section";
import { ReviewsSection } from "@/components/product/reviews-section";
import { ShippingReturnsSection } from "@/components/product/shipping-returns-section";
import { FaqSection } from "@/components/product/faq-section";
import { RelatedProducts } from "@/components/product/related-products";
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

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <ProductJsonLd product={product} />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: product.name },
        ]}
      />

      <section className="container-content grid grid-cols-1 gap-10 py-8 md:grid-cols-2 md:gap-16 md:py-14">
        <ProductGallery images={product.images} />
        <BuyBox product={product} />
      </section>

      <BenefitsSection benefits={product.benefits} />
      <EditorialSection product={product} />
      <UseCasesSection useCases={product.useCases} />
      <GiftSection product={product} />
      <ReviewsSection product={product} />
      <ShippingReturnsSection shipping={product.shipping} />
      <FaqSection faq={product.faq} />
      <RelatedProducts products={related} />

      <StickyBar product={product} />
    </>
  );
}
