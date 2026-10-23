import type { Metadata } from "next";
import { getBlogPostsFor } from "@/lib/blog";
import { localizeBlogPost } from "@/i18n/data";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogCategoryNav } from "@/components/blog/blog-nav";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts } from "@/lib/blog";
import { liveLocales } from "@/i18n/config";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  const title = t("Le journal Maison Loravie : décoration, lumière, famille et animaux");
  const description = t("Conseils concrets et idées pour la maison : décoration, luminaires, Noël et cadeaux, bébé et famille, animaux.");
  const only = liveLocales.filter((l) => blogPosts.some((p) => p.languages.includes(l)));
  return {
    title: { absolute: title },
    description,
    alternates: alternatesFor(locale, "/blog", only),
    openGraph: { title, description, type: "website" },
  };
}

export default function BlogIndexPage({ params }: { params: LocaleParams }) {
  const { t, locale } = pageSetup(params);
  const posts = getBlogPostsFor(locale).map((post) => localizeBlogPost(post, locale));
  const [first, ...rest] = posts;

  return (
    <>
      <Breadcrumbs items={[{ label: t("Accueil"), href: "/" }, { label: t("Journal") }]} />
      <section className="container-content pb-16 pt-8 md:pb-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage">{t("Le journal")}</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          {t("Des idées et des conseils pour une maison qui vous ressemble")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          {t("Décoration, lumière, famille et compagnons à quatre pattes : des guides concrets, sans jargon, pour choisir avec justesse.")}
        </p>
        <BlogCategoryNav />

        {first && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard post={first} featured priority />
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
