import type { MetadataRoute } from "next";
import { getPublishedProducts } from "@/lib/products";
import { getAllBlogPosts } from "@/lib/blog";
import { getPublishedScenes } from "@/lib/scenes";
import { categories } from "@/lib/categories";
import { subcategories } from "@/lib/subcategories";
import { absoluteUrl, alternateUrls, defaultLocale, isFrenchOnly, liveLocales, type Locale } from "@/i18n/config";
import { blogCategories } from "@/lib/blog";

type Entry = MetadataRoute.Sitemap[number];

/** Une entrée par langue ouverte pour chaque page, avec les liens hreflang vers les autres langues. */
function entries(path: string, lastModified: Date, only?: Locale[]): Entry[] {
  const languages = alternateUrls(path, only);
  const locales = isFrenchOnly(path) ? [defaultLocale] : liveLocales.filter((l) => !only || only.includes(l));
  const multi = locales.length > 1;
  return locales.map((locale) => ({
    url: absoluteUrl(path, locale),
    lastModified,
    ...(multi ? { alternates: { languages: { ...languages, "x-default": languages[defaultLocale] } } } : {}),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogIndex = entries("/blog", now, liveLocales.filter((l) => getAllBlogPosts().some((p) => p.languages.includes(l))));
  const staticRoutes = ["/", "/collections", "/a-propos", "/livraison", "/retours", "/contact", "/confidentialite"].flatMap(
    (path) => entries(path, now)
  );
  const productRoutes = getPublishedProducts().flatMap((product) => entries(`/produit/${product.slug}`, now));
  const collectionRoutes = categories.flatMap((c) => entries(`/collections/${c.slug}`, now));
  const subcategoryRoutes = [
    ...entries("/collections/maison-decoration/art-de-la-table", now),
    ...subcategories.flatMap((s) => entries(`/collections/maison-decoration/${s.slug}`, now)),
  ];
  const sceneRoutes = getPublishedScenes().flatMap((s) => entries(`/mises-en-scene/${s.slug}`, now));
  const blogRoutes = [
    ...getAllBlogPosts().flatMap((post) => entries(`/blog/${post.slug}`, new Date(post.updatedAt ?? post.publishedAt), post.languages)),
    ...blogCategories.flatMap((c) => {
      const posts = getAllBlogPosts().filter((p) => p.category === c.slug);
      if (posts.length === 0) return [];
      const only = liveLocales.filter((l) => posts.some((p) => p.languages.includes(l)));
      const latest = posts.map((p) => p.updatedAt ?? p.publishedAt).sort().pop()!;
      return entries(`/blog/categorie/${c.slug}`, new Date(latest), only);
    }),
  ];

  return [...staticRoutes, ...blogIndex, ...productRoutes, ...collectionRoutes, ...subcategoryRoutes, ...sceneRoutes, ...blogRoutes];
}
