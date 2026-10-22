import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "@/i18n/link";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getPublishedProducts } from "@/lib/products";

interface Props {
  params: { locale: string; slug: string };
}

import { locales } from "@/i18n/config";
import { alternatesFor, asLocale, pageSetup } from "@/i18n/page";
import { localizeBlogPost } from "@/i18n/data";
import { localizeProducts } from "@/i18n/product-translation";

export function generateStaticParams() {
  return locales.flatMap((locale) => getAllBlogPosts().map((post) => ({ locale, slug: post.slug })));
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = asLocale(params.locale);
  const base = getBlogPostBySlug(params.slug);
  if (!base) return {};
  const post = localizeBlogPost(base, locale);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: alternatesFor(locale, `/blog/${post.slug}`),
  };
}

export default function BlogPostPage({ params }: Props) {
  const { t, locale } = pageSetup(params);
  const base = getBlogPostBySlug(params.slug);
  if (!base) notFound();
  const post = localizeBlogPost(base, locale);

  const products = localizeProducts(
    getPublishedProducts().filter((p) => post.productSlugs?.includes(p.slug)),
    locale
  );

  return (
    <article className="container-content max-w-2xl py-14">
      <h1 className="section-title">{post.title}</h1>
      <div className="mt-8 flex flex-col gap-4 text-ink/80">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      {products.length > 0 && (
      <div className="mt-10 rounded-xl2 border border-ink/10 bg-sand/60 p-6">
        <p className="text-sm text-stone">{t("A découvrir dans cet article :")}</p>
        <ul className="mt-2 flex flex-col gap-1">
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/produit/${product.slug}`} className="text-sageDeep underline">
                {product.name} — {product.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      )}
    </article>
  );
}
