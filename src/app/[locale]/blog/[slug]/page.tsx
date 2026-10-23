import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "@/i18n/link";
import { blogPosts, getBlogCategory, getBlogPostBySlug, parseBody, readingMinutes } from "@/lib/blog";
import { locales, liveLocales } from "@/i18n/config";
import { alternatesFor, asLocale, pageSetup } from "@/i18n/page";
import { localizeBlogCategory, localizeBlogPost } from "@/i18n/data";
import { BlogBody, renderInline } from "@/components/blog/blog-body";
import { BlogCard, formatBlogDate } from "@/components/blog/blog-card";
import { BlogJsonLd } from "@/components/blog/blog-jsonld";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Props {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  return locales.flatMap((locale) => blogPosts.filter((p) => p.languages.includes(locale)).map((post) => ({ locale, slug: post.slug })));
}

export function generateMetadata({ params }: Props): Metadata {
  const locale = asLocale(params.locale);
  const base = getBlogPostBySlug(params.slug);
  if (!base || !base.languages.includes(locale)) return {};
  const post = localizeBlogPost(base, locale);
  const only = liveLocales.filter((l) => base.languages.includes(l));
  const alternates = alternatesFor(locale, `/blog/${post.slug}`, only);
  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    alternates,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: alternates.canonical,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: [{ url: post.cover.src, alt: post.cover.alt }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const { t, locale } = pageSetup(params);
  const base = getBlogPostBySlug(params.slug);
  if (!base || !base.languages.includes(locale)) notFound();
  const post = localizeBlogPost(base, locale);
  const baseCategory = getBlogCategory(post.category);
  const category = baseCategory ? localizeBlogCategory(baseCategory, locale) : undefined;
  const headings = parseBody(post.body).flatMap((b) => (b.type === "h2" ? [b] : []));
  const related = post.related
    .map((slug) => getBlogPostBySlug(slug))
    .flatMap((p) => (p && p.languages.includes(locale) ? [localizeBlogPost(p, locale)] : []));

  return (
    <>
      <BlogJsonLd post={post} locale={locale} />
      <Breadcrumbs
        items={[
          { label: t("Accueil"), href: "/" },
          { label: t("Journal"), href: "/blog" },
          ...(category ? [{ label: category.title, href: `/blog/categorie/${category.slug}` }] : []),
          { label: post.title },
        ]}
      />
      <article className="container-content pb-10 pt-8">
        <header className="mx-auto max-w-3xl">
          {category && (
            <Link href={`/blog/categorie/${category.slug}`} className="text-xs font-semibold uppercase tracking-widest text-terracottaText hover:underline">
              {category.title}
            </Link>
          )}
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">{post.excerpt}</p>
          <p className="mt-4 text-sm text-stone">
            {formatBlogDate(post.publishedAt, locale)} · {t("{minutes} min de lecture", { minutes: readingMinutes(post) })}
          </p>
        </header>

        <div className="relative mx-auto mt-8 aspect-[3/2] max-w-4xl overflow-hidden rounded-xl2 bg-sand md:aspect-[16/9]">
          <Image src={post.cover.src} alt={post.cover.alt} fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {headings.length >= 4 && (
            <nav aria-label={t("Dans cet article")} className="mb-10 rounded-xl2 border border-ink/10 bg-white/60 p-5">
              <p className="font-display text-xl font-semibold text-ink">{t("Dans cet article")}</p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px] text-ink/80 marker:text-sage">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="hover:text-ink hover:underline">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <BlogBody post={post} />

          {post.faq.length > 0 && (
            <section aria-labelledby="faq-titre" className="mt-14">
              <h2 id="faq-titre" className="font-display text-3xl font-semibold text-ink">
                {t("Questions fréquentes")}
              </h2>
              <div className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                {post.faq.map((item) => (
                  <details key={item.question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium text-ink">
                      {item.question}
                      <span aria-hidden="true" className="text-sage transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-ink/80">{renderInline(item.answer)}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {baseCategory && (
            <div className="mt-14 rounded-xl2 bg-sand/70 p-6 text-center md:p-8">
              <p className="font-display text-2xl font-semibold text-ink">{t("Envie d'aller plus loin ?")}</p>
              <p className="mt-2 text-ink/75">{t("Retrouvez notre sélection d'objets choisis un par un, avec livraison offerte et 30 jours pour changer d'avis.")}</p>
              <Link href={`/collections/${baseCategory.shopCategory}`} className="btn-primary mt-5">
                {t("Découvrir la sélection")}
              </Link>
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-content pb-16 pt-6 md:pb-24">
          <h2 className="section-title text-center">{t("À lire aussi")}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
