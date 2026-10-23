import Link from "@/i18n/link";
import { getBlogCategory, blogCategories, getBlogPostsFor } from "@/lib/blog";
import { getLocale, getT } from "@/i18n/server";
import { translate } from "@/i18n/messages";

/** Puces de navigation entre « Tous les articles » et les catégories du journal (seulement celles qui ont des articles). */
export function BlogCategoryNav({ active }: { active?: string }) {
  const t = getT();
  const locale = getLocale();
  const posts = getBlogPostsFor(locale);
  const categories = blogCategories.filter((c) => posts.some((p) => p.category === c.slug));
  if (categories.length < 2 && !active) return null;
  const chip = (isActive: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition-colors ${isActive ? "border-sage bg-sage text-white" : "border-ink/15 text-ink/80 hover:bg-sand"}`;
  return (
    <nav aria-label={t("Catégories du journal")} className="mt-8 flex flex-wrap gap-2">
      <Link href="/blog" className={chip(!active)} aria-current={!active ? "page" : undefined}>
        {t("Tous les articles")}
      </Link>
      {categories.map((c) => (
        <Link key={c.slug} href={`/blog/categorie/${c.slug}`} className={chip(active === c.slug)} aria-current={active === c.slug ? "page" : undefined}>
          {translate(locale, getBlogCategory(c.slug)!.title)}
        </Link>
      ))}
    </nav>
  );
}
