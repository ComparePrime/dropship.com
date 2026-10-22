import Link from "@/i18n/link";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { alternatesFor, asLocale, metaT, pageSetup, LocaleParams } from "@/i18n/page";

export function generateMetadata({ params }: { params: LocaleParams }): Metadata {
  const locale = asLocale(params.locale);
  const t = metaT(locale);
  return {
    title: t("Journal"),
    description: t("Idées de décoration et inspirations autour de l'univers des chats."),
    alternates: alternatesFor(locale, "/blog"),
  };
}

export default function BlogIndexPage({ params }: { params: LocaleParams }) {
  const { t } = pageSetup(params);
  const posts = getAllBlogPosts();

  return (
    <section className="container-content py-14">
      <h1 className="section-title">{t("Le journal")}</h1>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-xl2 border border-ink/10 bg-white/50 p-8 transition-shadow hover:shadow-card"
          >
            <h2 className="font-display text-2xl">{post.title}</h2>
            <p className="mt-3 text-stone">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
