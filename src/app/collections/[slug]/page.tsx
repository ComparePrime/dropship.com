import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedProducts } from "@/lib/products";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";
import { Icon } from "@/components/icons";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};
  const url = `${siteConfig.domain}/collections/${category.slug}`;
  return {
    title: category.seo.title,
    description: category.seo.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: category.seo.title,
      description: category.seo.metaDescription,
      url,
      type: "website",
    },
  };
}

export default function CollectionPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const products = getPublishedProducts().filter((p) => p.collections.includes(category.slug));
  const CategoryIcon = Icon[category.icon];

  return (
    <section className="pb-16 pt-8 md:pb-24">
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Univers", href: "/collections" },
          { label: category.title },
        ]}
      />

      <div className="container-content mt-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/10 text-sage">
            <CategoryIcon className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <h1 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            {category.title}
          </h1>
        </div>
        <p className="mt-4 max-w-2xl text-ink/70">{category.intro}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {category.subcategories.map((sub) => (
            <li
              key={sub}
              className="rounded-full border border-ink/10 bg-white/50 px-3.5 py-1.5 text-xs font-medium text-ink/70"
            >
              {sub}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-content mt-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/produit/${product.slug}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
                  {product.images[0] && (
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{product.name}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center rounded-xl2 border border-ink/10 bg-white/40 px-8 py-14 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/10 text-sage">
              <CategoryIcon className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h2 className="mt-5 font-display text-xl text-ink">
              Cet univers se prépare avec soin
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Nous sélectionnons actuellement les prochains objets de la catégorie{" "}
              {category.title.toLowerCase()}. Revenez bientôt les découvrir.
            </p>
            <Link href="/collections" className="btn-secondary mt-6">
              Découvrir nos autres univers
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
