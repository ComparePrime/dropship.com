import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedProducts } from "@/lib/products";
import { getSubcategory, subcategories } from "@/lib/subcategories";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCardPrice, CampaignCardBadge } from "@/components/product-card-price";
import { getCardImage } from "@/lib/product-images";

interface Props {
  params: { sub: string };
}

export function generateStaticParams() {
  return subcategories.map((s) => ({ sub: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sub = getSubcategory(params.sub);
  if (!sub) return {};
  const url = `${siteConfig.domain}/collections/maison-decoration/${sub.slug}`;
  return {
    title: { absolute: sub.seoTitle },
    description: sub.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: sub.seoTitle, description: sub.metaDescription, url, type: "website" },
  };
}

export default function SubcategoryPage({ params }: Props) {
  const sub = getSubcategory(params.sub);
  if (!sub) notFound();

  const published = getPublishedProducts();
  const products = sub.productSlugs
    .map((slug) => published.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => !!p);

  return (
    <section className="pb-16 pt-8 md:pb-24">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Maison & décoration", href: "/collections/maison-decoration" },
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
            Voir toute la sélection Maison &amp; décoration
          </Link>
        </p>
      </div>
    </section>
  );
}
