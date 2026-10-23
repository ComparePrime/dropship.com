import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { SizeGuideSection } from "@/components/product/size-guide-section";
import { hasSizes } from "@/lib/sku";
import { getRecommendations } from "@/lib/recommendations";
import { siteConfig } from "@/lib/site-config";
import { Product, ProductSectionKey } from "@/lib/types";
import { ProductHero } from "@/components/product/product-hero";
import { StickyBar } from "@/components/product/sticky-bar";
import { StorytellingSection } from "@/components/product/storytelling-section";
import { BenefitsSection } from "@/components/product/benefits-section";
import { InlineCta } from "@/components/product/inline-cta";
import { DemoSection } from "@/components/product/demo-section";
import { InspirationSection } from "@/components/product/inspiration-section";
import { EditorialSection } from "@/components/product/editorial-section";
import { UseCasesSection } from "@/components/product/use-cases-section";
import { ObjectionsSection } from "@/components/product/objections-section";
import { OfferSection } from "@/components/product/offer-section";
import { ValueStackSection } from "@/components/product/value-stack-section";
import { GiftSection } from "@/components/product/gift-section";
import { ReviewsSection } from "@/components/product/reviews-section";
import { ShippingReturnsSection } from "@/components/product/shipping-returns-section";
import { FaqSection } from "@/components/product/faq-section";
import { RelatedProducts } from "@/components/product/related-products";
import { FinalCtaSection } from "@/components/product/final-cta-section";
import { ProductJsonLd } from "@/components/product/product-jsonld";
import { MetaViewContent } from "@/components/meta-pixel-tracker";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Props {
  params: { locale: string; slug: string };
}

import { locales } from "@/i18n/config";
import { alternatesFor, asLocale, pageSetup } from "@/i18n/page";
import { localizeProduct, localizeProducts } from "@/i18n/product-translation";
import type { Locale } from "@/i18n/config";

export async function generateStaticParams() {
  return locales.flatMap((locale) => getAllProducts().map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asLocale(params.locale);
  const base = getProductBySlug(params.slug);
  if (!base) return {};
  const product = localizeProduct(base, locale);

  const alternates = alternatesFor(locale, `/produit/${product.slug}`);
  const url = alternates.canonical;

  return {
    // `absolute` : seo.title contient deja la marque, le gabarit du layout ne doit pas la rajouter.
    title: { absolute: product.status === "draft" ? `[Brouillon] ${product.seo.title}` : product.seo.title },
    description: product.seo.metaDescription,
    keywords: product.seo.keywords,
    alternates,
    // Un brouillon reste accessible par lien direct pour relecture, mais ne doit jamais
    // etre indexe ni apparaitre dans le sitemap (voir getPublishedProducts).
    robots: product.status === "draft" ? { index: false, follow: false } : undefined,
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
 * Registre des sections éditoriales. Chaque produit choisit son propre `layout`
 * (voir lib/products.ts) : la page n'impose donc pas le même gabarit à tous les
 * produits, seul le hero (galerie + BuyBox) et le pied de page restent fixes.
 */
function renderSection(key: ProductSectionKey, product: Product, locale: Locale, t: (text: string) => string) {
  switch (key) {
    case "storytelling":
      return <StorytellingSection key={key} content={product.storytelling} />;
    case "benefits":
      return <BenefitsSection key={key} benefits={product.benefits} />;
    case "cta-1":
      return <InlineCta key={key} product={product} text={product.midCtaTexts[0]} />;
    case "demo":
      return product.demoSteps ? (
        <DemoSection key={key} steps={product.demoSteps} />
      ) : null;
    case "inspiration":
      return <InspirationSection key={key} product={product} />;
    case "editorial":
      return <EditorialSection key={key} product={product} />;
    case "useCases":
      return hasSizes(product) ? (
        <UseCasesSection
          key={key}
          useCases={product.useCases}
          title={t("Pour quelles sorties ?")}
          intro={t("Des promenades du quotidien aux week-ends à la neige, voici où la veste se révèle la plus utile.")}
        />
      ) : (
        <UseCasesSection key={key} useCases={product.useCases} />
      );
    case "sizeGuide":
      return product.sizeGuide ? <SizeGuideSection key={key} guide={product.sizeGuide} /> : null;
    case "objections":
      return <ObjectionsSection key={key} objections={product.objections} />;
    case "offer":
      return <OfferSection key={key} product={product} />;
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
      return <RelatedProducts key={key} products={localizeProducts(getRecommendations(product.slug, { limit: 3 }), locale)} />;
    case "final-cta":
      return <FinalCtaSection key={key} product={product} />;
    default:
      return null;
  }
}

export default function ProductPage({ params }: Props) {
  const { t, locale } = pageSetup(params);
  const base = getProductBySlug(params.slug);
  if (!base) notFound();
  const product = localizeProduct(base, locale);

  return (
    <>
      <ProductJsonLd product={product} locale={locale} />
      <MetaViewContent id={product.slug} name={product.name} value={product.priceEUR} />
      {product.status === "draft" && (
        <div className="bg-terracotta py-2 text-center text-xs font-medium uppercase tracking-wide text-white">
          {t("Brouillon — non publie, non indexe, visible uniquement par ce lien direct")}</div>
      )}
      <Breadcrumbs items={[{ label: t("Accueil"), href: "/" }, { label: product.name }]} />

      <section className="container-content grid grid-cols-1 gap-10 py-8 md:grid-cols-2 md:gap-16 md:py-14">
        <ProductHero product={product} />
      </section>

      {product.layout.map((key) => renderSection(key, product, locale, t))}

      <StickyBar product={product} />
    </>
  );
}
