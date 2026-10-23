import type { Locale } from "@/i18n/config";
import { articles } from "./blog-articles";

/**
 * Journal Maison Loravie. Chaque article est un fichier dans `src/lib/blog-articles/` ; ce module décrit leur
 * structure, les catégories et le format du corps de texte (un Markdown volontairement réduit, voir `parseBody`).
 */
export type BlogCategorySlug = "decoration" | "luminaires" | "noel-cadeaux" | "bebe-famille" | "animaux";

export interface BlogCategory {
  slug: BlogCategorySlug;
  title: string;
  /** Phrase d'introduction de la page de la catégorie. */
  intro: string;
  seoTitle: string;
  metaDescription: string;
  /** Univers de la boutique proposé en fin d'article pour cette catégorie. */
  shopCategory: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "decoration",
    title: "Décoration",
    intro: "Des idées simples pour composer un intérieur chaleureux, sobre et personnel : vases, consoles, matières naturelles.",
    seoTitle: "Idées de décoration d'intérieur : conseils et inspirations",
    metaDescription:
      "Conseils concrets pour décorer une console, choisir des vases ou composer un intérieur minimaliste et chaleureux. Les idées du journal Maison Loravie.",
    shopCategory: "maison-decoration",
  },
  {
    slug: "luminaires",
    title: "Luminaires",
    intro: "Choisir une lampe, une température de lumière ou une ambiance : le guide pratique pour éclairer chaque pièce avec justesse.",
    seoTitle: "Luminaires et éclairage : bien choisir ses lampes",
    metaDescription:
      "Lampe de chevet, lampe d'ambiance, lumière chaude ou froide : nos conseils pour éclairer chaque pièce de la maison. Le journal Maison Loravie.",
    shopCategory: "maison-decoration/eclairage-et-ambiance",
  },
  {
    slug: "noel-cadeaux",
    title: "Noël et idées cadeaux",
    intro: "Décorer pour les fêtes sans surcharger, dresser une jolie table et trouver le cadeau qui fait vraiment plaisir.",
    seoTitle: "Noël et idées cadeaux : décoration, table et cadeaux utiles",
    metaDescription:
      "Décoration de Noël élégante, table de fêtes, idées de cadeaux pour elle, pour une jeune maman, pour les enfants et les animaux. Le journal Maison Loravie.",
    shopCategory: "idees-cadeaux",
  },
  {
    slug: "bebe-famille",
    title: "Bébé et famille",
    intro: "Préparer une chambre, organiser le quotidien et choisir des objets utiles pour les parents et les enfants.",
    seoTitle: "Bébé et famille : chambre, organisation et idées utiles",
    metaDescription:
      "Préparer une chambre de bébé, organiser une chambre d'enfant, idées utiles pour une jeune famille : les conseils pratiques du journal Maison Loravie.",
    shopCategory: "bebe-famille",
  },
  {
    slug: "animaux",
    title: "Animaux",
    intro: "Protéger son chien du froid, aménager un coin pour son chat, choisir de bons cadeaux : des conseils concrets pour nos compagnons.",
    seoTitle: "Chiens et chats : conseils pratiques et idées cadeaux",
    metaDescription:
      "Protéger son chien du froid, choisir un manteau, aménager un coin confortable pour son chat, idées cadeaux pour animaux. Le journal Maison Loravie.",
    shopCategory: "nos-compagnons",
  },
];

export function getBlogCategory(slug: string) {
  return blogCategories.find((c) => c.slug === slug);
}

/** Emplacement éditorial pour un produit que la boutique ne propose pas encore (voir `:::idee` dans le corps). */
export interface BlogIdea {
  id: string;
  title: string;
  /** Type de produit à ajouter un jour au catalogue (usage interne, jamais affiché). */
  productType: string;
  /** Besoin auquel il répondrait (usage interne, jamais affiché). */
  need: string;
  /** Texte de recommandation affiché dans l'article. */
  text: string;
  /**
   * À renseigner (slug de la fiche produit) quand le produit existe : le bloc affiche alors la fiche avec un
   * lien. Tant que ce champ est vide, le bloc reste un simple conseil éditorial, sans bouton ni lien.
   */
  productSlug?: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  /** H1 de la page. */
  title: string;
  /** Balise title (sans le nom du site, ajouté automatiquement). */
  seoTitle: string;
  metaDescription: string;
  /** Chapô affiché sous le titre et sur les cartes. */
  excerpt: string;
  category: BlogCategorySlug;
  cover: { src: string; alt: string };
  /** Corps de l'article, voir `parseBody`. */
  body: string;
  faq: BlogFaq[];
  /** Slugs d'articles à proposer en fin de page. */
  related: string[];
  ideas?: BlogIdea[];
  /** Requête principale visée (hypothèse à vérifier dans Search Console) et variantes. */
  mainQuery: string;
  secondaryQueries: string[];
  intent: "informationnelle" | "conseil d'achat" | "comparaison" | "transactionnelle";
  publishedAt: string;
  updatedAt?: string;
  /** Langues dans lesquelles l'article existe (le français seul par défaut). */
  languages: Locale[];
}

export const blogPosts: BlogPost[] = articles;

export function getAllBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string) {
  return blogPosts.filter((p) => p.category === category);
}

/** Articles disponibles dans une langue, du plus récent au plus ancien. */
export function getBlogPostsFor(locale: Locale) {
  return blogPosts
    .filter((p) => p.languages.includes(locale))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || blogPosts.indexOf(a) - blogPosts.indexOf(b));
}

// ---------------------------------------------------------------------------------------------------------------
// Corps de texte
// ---------------------------------------------------------------------------------------------------------------

export type BlogBlock =
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; title: string; text: string }
  | { type: "products"; title: string; slugs: string[] }
  | { type: "idea"; id: string };

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/**
 * Format du corps : des blocs séparés par une ligne vide.
 *   ## Titre              → H2 (avec ancre pour le sommaire)       ### Titre → H3
 *   - élément / 1. élément → liste à puces / numérotée (une ligne par élément)
 *   > Titre :: texte       → encadré conseil (le titre est facultatif : > texte)
 *   :::produits slug slug | Titre du bloc → fiches de produits réels de la boutique
 *   :::idee identifiant    → emplacement éditorial défini dans `ideas`
 *   autre texte            → paragraphe ; **gras** et [texte](/lien) sont reconnus dans tous les textes.
 */
export function parseBody(body: string): BlogBlock[] {
  const blocks: BlogBlock[] = [];
  for (const raw of body.trim().split(/\n\s*\n/)) {
    const chunk = raw.trim();
    if (!chunk) continue;
    if (chunk.startsWith("### ")) blocks.push({ type: "h3", text: chunk.slice(4).trim() });
    else if (chunk.startsWith("## ")) {
      const text = chunk.slice(3).trim();
      blocks.push({ type: "h2", text, id: slugifyHeading(text) });
    } else if (chunk.startsWith(":::produits")) {
      const [list, title] = chunk.slice(":::produits".length).split("|");
      blocks.push({ type: "products", title: (title ?? "").trim(), slugs: list.trim().split(/\s+/).filter(Boolean) });
    } else if (chunk.startsWith(":::idee")) {
      blocks.push({ type: "idea", id: chunk.slice(":::idee".length).trim() });
    } else if (chunk.startsWith("> ")) {
      const text = chunk.replace(/^>\s?/gm, "").replace(/\n/g, " ").trim();
      const [a, b] = text.split("::");
      blocks.push(b === undefined ? { type: "tip", title: "", text: a.trim() } : { type: "tip", title: a.trim(), text: b.trim() });
    } else if (/^- /.test(chunk)) {
      blocks.push({ type: "ul", items: chunk.split("\n").map((l) => l.replace(/^- /, "").trim()) });
    } else if (/^1\. /.test(chunk)) {
      blocks.push({ type: "ol", items: chunk.split("\n").map((l) => l.replace(/^\d+\.\s+/, "").trim()) });
    } else blocks.push({ type: "p", text: chunk.replace(/\n/g, " ") });
  }
  return blocks;
}

/** Texte brut d'un texte balisé (retire le gras et les liens), pour les extraits et les données structurées. */
export function plainText(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function countWords(post: BlogPost): number {
  const text = [post.excerpt, plainText(post.body), ...post.faq.map((f) => `${f.question} ${f.answer}`)].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(countWords(post) / 210));
}
