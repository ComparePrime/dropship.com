import Image from "next/image";
import Link from "@/i18n/link";
import { BlogPost, getBlogCategory, readingMinutes } from "@/lib/blog";
import { getLocale, getT } from "@/i18n/server";
import { translate } from "@/i18n/messages";

export function formatBlogDate(iso: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CH" : locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(iso)
  );
}

export function BlogCard({ post, priority = false, featured = false }: { post: BlogPost; priority?: boolean; featured?: boolean }) {
  const t = getT();
  const locale = getLocale();
  const category = getBlogCategory(post.category);
  return (
    <article className={featured ? "md:col-span-2" : ""}>
      <Link href={`/blog/${post.slug}`} className={`group flex h-full flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-white/60 transition-shadow hover:shadow-card ${featured ? "md:flex-row" : ""}`}>
        <span className={`relative block overflow-hidden bg-sand ${featured ? "aspect-[4/3] md:aspect-auto md:w-1/2" : "aspect-[3/2]"}`}>
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            priority={priority}
            sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </span>
        <span className={`flex flex-1 flex-col p-6 ${featured ? "md:w-1/2 md:justify-center md:p-10" : ""}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-terracottaText">
            {category ? translate(locale, category.title) : ""}
          </span>
          <h2 className={`mt-2 font-display font-semibold leading-snug text-ink group-hover:underline ${featured ? "text-3xl" : "text-2xl"}`}>{post.title}</h2>
          <span className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-stone">{post.excerpt}</span>
          <span className="mt-4 text-xs text-stone">
            {formatBlogDate(post.publishedAt, locale)} · {t("{minutes} min de lecture", { minutes: readingMinutes(post) })}
          </span>
        </span>
      </Link>
    </article>
  );
}
