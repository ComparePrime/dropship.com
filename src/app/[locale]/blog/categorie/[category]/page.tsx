import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogCategories, blogPosts, getBlogCategory, getBlogPostsFor } from "@/lib/blog";
import { localizeBlogCategory, localizeBlogPost } from "@/i18n/data";
import { alternatesFor, asLocale, pageSetup } from "@/i18n/page";
import { locales, liveLocales } from "@/i18n/config";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogCategoryNav } from "@/components/blog/blog-nav";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Link from "@/i18n/link";

interface Props {
  params: { locale: string; category: string };
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogCategories
      .filter((c) => blogPosts.some((p) => p.category === c.slug && p.languages.includes(locale)))
      .map((c) => ({ locale, category: c.slug }))
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = asLocale(params.locale);
  const base = getBlogCategory(params.category);
  if (!base || !getBlogPostsFor(locale).some((p) => p.category === base.slug)) return {};
  const category = localizeBlogCategory(base, locale);
  const only = liveLocales.filter((l) => blogPosts.some((p) => p.category === base.slug && p.languages.includes(l)));
  return {
    title: { absolute: category.seoTitle },
    description: category.metaDescription,
    alternates: alternatesFor(locale, `/blog/categorie/${base.slug}`, only),
  };
}

export default function BlogCategoryPage({ params }: Props) {
  const { t, locale } = pageSetup(params);
  const base = getBlogCategory(params.category);
  const posts = getBlogPostsFor(locale).filter((p) => p.category === params.category);
  if (!base || posts.length === 0) notFound();
  const category = localizeBlogCategory(base, locale);

  return (
    <>
      <Breadcrumbs items={[{ label: t("Accueil"), href: "/" }, { label: t("Journal"), href: "/blog" }, { label: category.title }]} />
      <section className="container-content pb-16 pt-8 md:pb-24">
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">{category.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">{category.intro}</p>
        <BlogCategoryNav active={category.slug} />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <BlogCard key={post.slug} post={localizeBlogPost(post, locale)} priority={idx < 3} />
          ))}
        </div>
        <p className="mt-12 text-center">
          <Link href={`/collections/${base.shopCategory}`} className="btn-secondary">
            {t("Voir la sélection de la boutique")}
          </Link>
        </p>
      </section>
    </>
  );
}
