import type { Category } from "@/lib/categories";
import type { Subcategory } from "@/lib/subcategories";
import type { BlogPost } from "@/lib/blog";
import type { Locale } from "./config";
import { translate } from "./messages";

/**
 * Traduction des contenus "donnees" (univers, sous-categories, journal) : chaque texte francais est traduit
 * par le dictionnaire de la langue (cle = texte francais). Les identifiants (slug, href, icone) ne changent jamais.
 */
export function localizeCategory(category: Category, locale: Locale): Category {
  if (locale === "fr") return category;
  const t = (s: string) => translate(locale, s);
  return {
    ...category,
    title: t(category.title),
    cardDescription: t(category.cardDescription),
    intro: t(category.intro),
    subcategories: category.subcategories.map((s) => ({ ...s, label: t(s.label) })),
    seo: { title: t(category.seo.title), metaDescription: t(category.seo.metaDescription) },
    seoSections: category.seoSections.map((s) => ({ heading: t(s.heading), paragraphs: s.paragraphs.map(t) })),
    faq: category.faq.map((f) => ({ question: t(f.question), answer: t(f.answer) })),
  };
}

export function localizeSubcategory(sub: Subcategory, locale: Locale): Subcategory {
  if (locale === "fr") return sub;
  const t = (s: string) => translate(locale, s);
  return {
    ...sub,
    title: t(sub.title),
    intro: t(sub.intro),
    seoTitle: t(sub.seoTitle),
    metaDescription: t(sub.metaDescription),
  };
}

export function localizeBlogPost(post: BlogPost, locale: Locale): BlogPost {
  if (locale === "fr") return post;
  const t = (s: string) => translate(locale, s);
  return { ...post, title: t(post.title), excerpt: t(post.excerpt), content: post.content.map(t) };
}
