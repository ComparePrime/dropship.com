#!/usr/bin/env node
/**
 * Contrôle éditorial et technique du journal : `npm run blog:check`.
 * Vérifie les doublons (adresses, titres, descriptions, requêtes principales), les longueurs de balises,
 * les liens internes, les fiches produit citées, les emplacements éditoriaux, les images et la longueur des articles.
 * Code de sortie 1 en cas d'erreur.
 */
const path = require("path");
const fs = require("fs");
const Module = require("module");
const ts = require("typescript");

const ROOT = path.join(__dirname, "..", "src");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (req, ...rest) {
  if (req.startsWith("@/")) req = path.join(ROOT, req.slice(2));
  return resolve.call(this, req, ...rest);
};
require.extensions[".ts"] = (m, f) =>
  m._compile(ts.transpileModule(fs.readFileSync(f, "utf8"), { compilerOptions: { module: "commonjs", target: "es2020", esModuleInterop: true } }).outputText, f);
const load = (p) => require(path.join(ROOT, p));

const blog = load("lib/blog.ts");
const { getAllProducts } = load("lib/products.ts");
const { categories } = load("lib/categories.ts");
const { subcategories } = load("lib/subcategories.ts");

const posts = blog.getAllBlogPosts();
const products = new Map(getAllProducts().map((p) => [p.slug, p]));
const errors = [];
const warnings = [];
const err = (post, msg) => errors.push(`${post.slug} : ${msg}`);
const warn = (post, msg) => warnings.push(`${post.slug} : ${msg}`);

const seen = (key) => {
  const map = new Map();
  return (post, value, label) => {
    const k = String(value).toLowerCase().trim();
    if (map.has(k)) err(post, `${label} identique à celui de ${map.get(k)}`);
    else map.set(k, post.slug);
  };
};
const uniq = { slug: seen(), title: seen(), seoTitle: seen(), meta: seen(), query: seen(), excerpt: seen() };

const shopPaths = new Set([
  "/", "/collections", "/blog", "/a-propos", "/contact", "/livraison", "/retours",
  ...categories.map((c) => `/collections/${c.slug}`),
  ...subcategories.map((s) => `/collections/maison-decoration/${s.slug}`),
  ...blog.blogCategories.map((c) => `/blog/categorie/${c.slug}`),
]);

for (const post of posts) {
  uniq.slug(post, post.slug, "adresse");
  uniq.title(post, post.title, "titre H1");
  uniq.seoTitle(post, post.seoTitle, "balise title");
  uniq.meta(post, post.metaDescription, "meta description");
  uniq.query(post, post.mainQuery, "requête principale");
  uniq.excerpt(post, post.excerpt, "chapô");

  if (post.seoTitle.length > 62) warn(post, `balise title longue (${post.seoTitle.length} caractères)`);
  if (post.metaDescription.length > 165) warn(post, `meta description longue (${post.metaDescription.length} caractères)`);
  if (post.metaDescription.length < 90) warn(post, `meta description courte (${post.metaDescription.length} caractères)`);
  if (!blog.getBlogCategory(post.category)) err(post, `catégorie inconnue « ${post.category} »`);
  if (!fs.existsSync(path.join(__dirname, "..", "public", post.cover.src))) err(post, `image de couverture introuvable : ${post.cover.src}`);
  if (!post.cover.alt || post.cover.alt.length < 20) err(post, "texte alternatif de couverture trop court");

  const blocks = blog.parseBody(post.body);
  const h2 = blocks.filter((b) => b.type === "h2");
  const words = blog.countWords(post);
  const isNew = post.languages.length === 1;
  if (isNew && words < 1100) warn(post, `court : ${words} mots`);
  if (isNew && h2.length < 4) err(post, `seulement ${h2.length} titres H2`);
  if (isNew && post.faq.length < 3) err(post, "FAQ insuffisante");
  if (new Set(h2.map((b) => b.id)).size !== h2.length) err(post, "ancres H2 en double");

  // Produits cités.
  for (const b of blocks) {
    if (b.type === "products") {
      for (const slug of b.slugs) {
        const p = products.get(slug);
        if (!p) err(post, `produit inconnu : ${slug}`);
        else if (p.status !== "published") err(post, `produit non publié : ${slug}`);
      }
    }
    if (b.type === "idea" && !(post.ideas || []).some((i) => i.id === b.id)) err(post, `emplacement éditorial inconnu : ${b.id}`);
  }
  for (const idea of post.ideas || []) {
    if (!blocks.some((b) => b.type === "idea" && b.id === idea.id)) err(post, `emplacement éditorial non utilisé : ${idea.id}`);
    if (idea.productSlug && !products.get(idea.productSlug)) err(post, `emplacement « ${idea.id} » : produit inconnu ${idea.productSlug}`);
  }

  // Liens internes (corps, FAQ et emplacements).
  const texts = [post.body, ...post.faq.map((f) => f.answer), ...(post.ideas || []).map((i) => i.text)];
  const links = new Set();
  for (const t of texts) for (const m of t.matchAll(/\]\(([^)]+)\)/g)) links.add(m[1]);
  let internalBlog = 0;
  for (const href of links) {
    if (!href.startsWith("/")) continue;
    const clean = href.split(/[#?]/)[0];
    if (clean.startsWith("/blog/") && !clean.startsWith("/blog/categorie/")) {
      internalBlog += 1;
      if (!blog.getBlogPostBySlug(clean.slice(6))) err(post, `lien vers un article inexistant : ${href}`);
    } else if (clean.startsWith("/produit/")) {
      const p = products.get(clean.slice(9));
      if (!p || p.status !== "published") err(post, `lien vers un produit inexistant : ${href}`);
    } else if (!shopPaths.has(clean)) err(post, `lien interne inconnu : ${href}`);
  }
  if (isNew && internalBlog < 2) warn(post, `peu de liens vers d'autres articles (${internalBlog})`);
  if (links.has(`/blog/${post.slug}`)) err(post, "lien vers lui-même");

  // Articles associés.
  for (const slug of post.related) if (!blog.getBlogPostBySlug(slug)) err(post, `article associé inexistant : ${slug}`);
  if (isNew && post.related.length < 3) err(post, "moins de 3 articles associés");

  // Mentions à ne pas laisser dans un texte public.
  const all = [post.title, post.excerpt, post.body, ...post.faq.map((f) => f.question + f.answer)].join("\n");
  for (const bad of [/TODO/i, /lorem/i, /à compléter/i, /\bXXX\b/, /productSlug/, /guirlande_/]) if (bad.test(all)) err(post, `texte provisoire détecté (${bad})`);
}

// Articles jamais liés depuis un autre article : orphelins.
for (const post of posts) {
  const linked = posts.some((o) => o.slug !== post.slug && (o.related.includes(post.slug) || o.body.includes(`/blog/${post.slug}`)));
  if (!linked) warnings.push(`${post.slug} : aucun autre article n'y renvoie`);
}

console.log(`${posts.length} articles contrôlés.`);
const totalWords = posts.reduce((n, p) => n + blog.countWords(p), 0);
console.log(`Mots (corps + FAQ) : ${totalWords} au total, ${Math.round(totalWords / posts.length)} en moyenne.`);
for (const p of posts) console.log(`  ${String(blog.countWords(p)).padStart(5)} mots · ${String(blog.parseBody(p.body).filter((b) => b.type === "h2").length).padStart(2)} H2 · ${p.faq.length} FAQ · ${p.slug}`);
warnings.forEach((w) => console.log("AVERTISSEMENT", w));
errors.forEach((e) => console.log("ERREUR", e));
console.log(errors.length ? `\n${errors.length} erreur(s).` : "\nAucune erreur.");
process.exit(errors.length ? 1 : 0);
