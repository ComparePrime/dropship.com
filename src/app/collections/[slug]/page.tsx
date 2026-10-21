import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedProducts } from "@/lib/products";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";
import { Icon } from "@/components/icons";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCardPrice, CampaignCardBadge } from "@/components/product-card-price";
import { getCardImage } from "@/lib/product-images";

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
    title: { absolute: category.seo.title },
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
          {category.subcategories.map((sub) =>
            sub.href ? (
              <li key={sub.label}>
                <Link
                  href={sub.href}
                  className="rounded-full border border-sage/40 bg-sage/10 px-3.5 py-1.5 text-xs font-medium text-sageDeep hover:bg-sage/20"
                >
                  {sub.label}
                </Link>
              </li>
            ) : (
              <li
                key={sub.label}
                className="rounded-full border border-ink/10 bg-white/50 px-3.5 py-1.5 text-xs font-medium text-ink/70"
              >
                {sub.label}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="container-content mt-12">
        {products.length > 0 ? (
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
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{product.name}</p>
                <ProductCardPrice product={product} />
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

      {products.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: category.title,
              description: category.seo.metaDescription,
              url: `${siteConfig.domain}/collections/${category.slug}`,
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: products.length,
                itemListElement: products.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: `${siteConfig.domain}/produit/${p.slug}`,
                  name: p.name,
                })),
              },
            }),
          }}
        />
      )}

      <div className="container-content mt-16 grid max-w-4xl gap-10">
        {category.seoSections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3 text-ink/75">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h2 className="font-display text-2xl text-ink">Questions fréquentes</h2>
          <dl className="mt-4 divide-y divide-ink/10">
            {category.faq.map((item) => (
              <div key={item.question} className="py-4">
                <dt className="font-medium text-ink">{item.question}</dt>
                <dd className="mt-1 text-ink/70">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: category.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
