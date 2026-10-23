import { BlogPost, getBlogCategory, plainText } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl, type Locale } from "@/i18n/config";
import { translate } from "@/i18n/messages";

/** Données structurées d'un article : BlogPosting, fil d'Ariane et, quand la FAQ est affichée, FAQPage. */
export function BlogJsonLd({ post, locale }: { post: BlogPost; locale: Locale }) {
  const url = absoluteUrl(`/blog/${post.slug}`, locale);
  const category = getBlogCategory(post.category);
  const image = post.cover.src.startsWith("http") ? post.cover.src : `${siteConfig.domain}${post.cover.src}`;
  const t = (s: string) => translate(locale, s);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: post.title,
      description: post.metaDescription,
      image: [image],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      inLanguage: locale === "fr" ? "fr-CH" : locale,
      articleSection: category ? t(category.title) : undefined,
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.domain,
        logo: { "@type": "ImageObject", url: `${siteConfig.domain}/images/brand/logo-square.webp` },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("Accueil"), item: absoluteUrl("/", locale) },
        { "@type": "ListItem", position: 2, name: t("Journal"), item: absoluteUrl("/blog", locale) },
        ...(category
          ? [{ "@type": "ListItem", position: 3, name: t(category.title), item: absoluteUrl(`/blog/categorie/${category.slug}`, locale) }]
          : []),
        { "@type": "ListItem", position: category ? 4 : 3, name: post.title, item: url },
      ],
    },
  ];
  if (post.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: plainText(f.answer) },
      })),
    });
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />;
}
