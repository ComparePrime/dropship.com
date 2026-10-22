import Image from "next/image";
import Link from "@/i18n/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedProducts } from "@/lib/products";
import { getSubcategory, subcategories } from "@/lib/subcategories";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCardPrice, CampaignCardBadge } from "@/components/product-card-price";
import { getCardImage } from "@/lib/product-images";

interface Props {
  params: { locale: string; sub: string };
}

import { locales } from "@/i18n/config";
import { alternatesFor, asLocale, pageSetup } from "@/i18n/page";
import { localizeSubcategory } from "@/i18n/data";
import { localizeProducts } from "@/i18n/product-translation";

export function generateStaticParams() {
  return locales.flatMap((locale) => subcategories.map((s) => ({ locale, sub: s.slug })));
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = asLocale(params.locale);
  const base = getSubcategory(params.sub);
  if (!base) return {};
  const sub = localizeSubcategory(base, locale);
  const alternates = alternatesFor(locale, `/collections/maison-decoration/${sub.slug}`);
  const url = alternates.canonical;
  return {
    title: { absolute: sub.seoTitle },
    description: sub.metaDescription,
    alternates,
    openGraph: { title: sub.seoTitle, description: sub.metaDescription, url, type: "website" },
  };
}

export default function SubcategoryPage({ params }: Props) {
  const { t, locale } = pageSetup(params);
  const base = getSubcategory(params.sub);
  if (!base) notFound();
  const sub = localizeSubcategory(base, locale);

  const published = localizeProducts(getPublishedProducts(), locale);
  const products = sub.productSlugs
    .map((slug) => published.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <section className="pb-16 pt-8 md:pb-24">
      <Breadcrumbs
        items={[
          { label: t("Accueil"), href: "/" },
          { label: t("Maison & décoration"), href: "/collections/maison-decoration" },
          { label: sub.title },
        ]}
      />

      <div className="container-content mt-6">
        <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">{sub.title}</h1>
        <p className="mt-4 max-w-2xl text-ink/70">{sub.intro}</p>
      </div>

      <div className="container-content mt-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/produit/${product.slug}`} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
                <CampaignCardBadge product={product} />
                {getCardImage(product) && (
                  <Image
                    src={getCardImage(product)!.src}
                    alt={getCardImage(product)!.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-ink">{product.name}</p>
              <ProductCardPrice product={product} />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink/60">
          <Link href="/collections/maison-decoration" className="underline underline-offset-2">
            {t("Voir toute la sélection Maison & décoration")}</Link>
        </p>
      </div>
    </section>
  );
}
