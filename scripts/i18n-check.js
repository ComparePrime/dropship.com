#!/usr/bin/env node
/**
 * Vérifie la complétude des traductions.
 *
 *   npm run i18n:check            toutes les langues
 *   npm run i18n:check -- de      une seule langue
 *   npm run i18n:check -- --list  liste aussi les textes manquants
 *
 * 1. Textes d'interface : tout texte passé à t("…") / tr("…") / translate(…) / metaT(…), plus les textes des
 *    fichiers de données (univers, sous-catégories, journal, mises en scène, campagne, libellés de variantes,
 *    de lots et photos de variantes) doit avoir une entrée dans src/i18n/messages/<langue>.ts.
 * 2. Fiches produit : chaque produit publié doit avoir une traduction dans src/i18n/products/<langue>.ts,
 *    avec les mêmes nombres d'éléments (avantages, FAQ, photos…) que la fiche française.
 *
 * Code de sortie 1 s'il manque quelque chose (utilisable en CI).
 */
const path = require("path");
const fs = require("fs");
const Module = require("module");
const ts = require("typescript");

const ROOT = path.join(__dirname, "..", "src");
const LOCALES = ["en", "de", "it", "es", "pt"];
const args = process.argv.slice(2);
const list = args.includes("--list");
const only = args.find((a) => LOCALES.includes(a));

// Chargeur TypeScript minimal (alias @/ -> src/).
const resolve = Module._resolveFilename;
Module._resolveFilename = function (req, ...rest) {
  if (req.startsWith("@/")) req = path.join(ROOT, req.slice(2));
  return resolve.call(this, req, ...rest);
};
const compile = (m, f) => {
  const out = ts.transpileModule(fs.readFileSync(f, "utf8"), {
    compilerOptions: { module: "commonjs", target: "es2020", jsx: "react-jsx", esModuleInterop: true },
  });
  m._compile(out.outputText, f);
};
require.extensions[".ts"] = compile;
require.extensions[".tsx"] = compile;
const load = (p) => require(path.join(ROOT, p));

const SKIP_FILE = /\/(i18n\/|app\/api|lib\/reviews-|merchant-feed|admin|app\/sitemap)/;
// Routes réservées à l'administration / à Stripe : leurs messages ne sont jamais montrés aux visiteurs.
const INTERNAL_API = /\/app\/api\/(admin|webhook|order-summary|geo|presence)/;
const walk = (dir, out = []) => {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(p)) out.push(p);
  }
  return out;
};

const keys = new Set();
const addLiteral = (n) => {
  if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) keys.add(n.text);
  else if (ts.isConditionalExpression(n)) (addLiteral(n.whenTrue), addLiteral(n.whenFalse));
  else if (ts.isParenthesizedExpression(n)) addLiteral(n.expression);
  else if (ts.isBinaryExpression(n) && n.operatorToken.getText() === "??") (addLiteral(n.left), addLiteral(n.right));
};
for (const file of walk(ROOT)) {
  const rel = file.slice(ROOT.length);
  if (SKIP_FILE.test(rel) && !/i18n\/api/.test(rel)) continue;
  const sf = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const visit = (n) => {
    if (ts.isCallExpression(n) && n.arguments.length) {
      const callee = n.expression.getText();
      if (/^(t|tr|tk)$/.test(callee) || /^metaT\(/.test(callee)) addLiteral(n.arguments[0]);
    }
    ts.forEachChild(n, visit);
  };
  visit(sf);
}
// Les routes d'API traduisent aussi leurs messages avec tr() / fail().
for (const file of walk(path.join(ROOT, "app", "api")).filter((f) => !INTERNAL_API.test(f)).concat(path.join(ROOT, "lib", "mailer.ts"), path.join(ROOT, "lib", "newsletter.ts"), path.join(ROOT, "lib", "promo-server.ts"))) {
  const sf = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const visit = (n) => {
    if (ts.isCallExpression(n) && n.arguments.length && /^(tr|fail)$/.test(n.expression.getText())) addLiteral(n.arguments[0]);
    if (ts.isPropertyAssignment(n) && n.name.getText() === "error" && ts.isStringLiteral(n.initializer)) keys.add(n.initializer.text);
    ts.forEachChild(n, visit);
  };
  visit(sf);
}

// Données éditoriales.
const SKIP_PROP = /^(id|slug|href|src|icon|image|status|category|productId|productSlug|key|type|sku|gtin|brand|color|hex|currency|x|y|order|publishedAt|productSlugs|hotspots|subcategories_)$/;
const collect = (o) => {
  if (typeof o === "string") keys.add(o);
  else if (Array.isArray(o)) o.forEach(collect);
  else if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (!SKIP_PROP.test(k) || (k === "image" && typeof v === "object")) collect(k === "image" ? { alt: v && v.alt } : v);
};
const data = (mod, pick) => {
  const m = load(mod);
  collect(pick ? pick(m) : Object.fromEntries(Object.entries(m).filter(([, v]) => typeof v !== "function")));
};
data("lib/categories");
data("lib/subcategories");
// Le journal : un article n'a besoin d'être traduit que dans les langues où il est publié.
const blogLib = load("lib/blog");
const blogKeys = {};
for (const post of blogLib.getAllBlogPosts()) {
  for (const locale of post.languages.filter((l) => l !== "fr")) {
    const set = (blogKeys[locale] = blogKeys[locale] || new Set());
    [post.title, post.seoTitle, post.metaDescription, post.excerpt, post.cover.alt].forEach((k) => set.add(k));
    post.body.trim().split(/\n\s*\n/).forEach((chunk) => !chunk.trim().startsWith(":::") && set.add(chunk.trim()));
    post.faq.forEach((f) => (set.add(f.question), set.add(f.answer)));
    const c = blogLib.getBlogCategory(post.category);
    [c.title, c.intro, c.seoTitle, c.metaDescription].forEach((k) => set.add(k));
  }
}
data("lib/scenes");
data("lib/collection-showcase");
data("lib/campaign", (m) => m.AUTUMN_CAMPAIGN);
data("lib/multi-buy", (m) => ({ label: m.MULTI_BUY.label }));
data("lib/site-config", (m) => [m.siteConfig.slogan, m.siteConfig.description, m.siteConfig.shippingTrust.map((x) => x.label)]);

const { getAllProducts } = load("lib/products");
const products = getAllProducts().filter((p) => p.status === "published");
for (const p of getAllProducts()) {
  keys.add(p.name);
  if (p.packLabel) keys.add(p.packLabel);
  for (const v of p.variants || []) (keys.add(v.label), v.image && v.image.alt && keys.add(v.image.alt));
  for (const o of p.packOffers || []) keys.add(o.label);
  for (const s of p.sizes || []) keys.add(s.label);
}

// Entrées sans lettre (ex. « 25 »), adresses internes et identifiants de pages : jamais à traduire.
const SHORT_KEYS = ["j", "h", "min", "s"];
const needsTranslation = (k) => (/[A-Za-zÀ-ÿ]{2,}/.test(k) || SHORT_KEYS.includes(k)) && !/^\//.test(k) && !/^[a-z0-9]+(-[a-z0-9]+)+$/.test(k);
const sourceKeys = [...keys].filter(needsTranslation);

let failed = false;
for (const locale of LOCALES) {
  if (only && locale !== only) continue;
  const messages = load(`i18n/messages/${locale}`).default;
  const localeKeys = [...new Set([...sourceKeys, ...(blogKeys[locale] || [])])];
  const missing = localeKeys.filter((k) => !(k in messages));
  const unused = Object.keys(messages).filter((k) => !keys.has(k) && !(blogKeys[locale] && blogKeys[locale].has(k)));
  console.log(`\n[${locale}] textes : ${localeKeys.length - missing.length}/${localeKeys.length} traduits` + (unused.length ? `, ${unused.length} entrée(s) inutilisée(s)` : ""));
  if (missing.length) failed = true;
  if (list) unused.forEach((k) => console.log("   inutilisée :", JSON.stringify(k.length > 110 ? k.slice(0, 107) + "…" : k)));
  if (process.env.I18N_DUMP) fs.writeFileSync(process.env.I18N_DUMP, JSON.stringify(missing, null, 1));
  if (list) missing.forEach((k) => console.log("   manque :", JSON.stringify(k.length > 110 ? k.slice(0, 107) + "…" : k)));

  const tr = load(`i18n/products/${locale}`).default;
  const problems = [];
  for (const p of products) {
    const t = tr[p.slug];
    if (!t) {
      problems.push(`${p.slug} : fiche non traduite`);
      continue;
    }
    const same = (field, a, b) => b !== undefined && (a || []).length !== b.length && problems.push(`${p.slug} : ${field} (${(b || []).length} au lieu de ${(a || []).length})`);
    for (const f of ["name", "headline", "subtitle", "h1", "shortDescription", "badge"]) if (!t[f]) problems.push(`${p.slug} : ${f} manquant`);
    same("heroBullets", p.heroBullets, t.heroBullets);
    same("description", p.description, t.description);
    same("objections", p.objections, t.objections);
    same("valueStack", p.valueStack, t.valueStack);
    same("midCtaTexts", p.midCtaTexts, t.midCtaTexts);
    same("benefits", p.benefits, t.benefits);
    same("useCases", p.useCases, t.useCases);
    same("faq", p.faq, t.faq);
    same("images", p.images, t.images);
    if (p.demoSteps) same("demoSteps", p.demoSteps, t.demoSteps);
    if (!t.seo) problems.push(`${p.slug} : seo manquant`);
    if (p.sizeGuide) {
      if (!t.sizeGuide) problems.push(`${p.slug} : guide des tailles manquant`);
      else {
        same("sizeGuide.columns", p.sizeGuide.columns, t.sizeGuide.columns);
        same("sizeGuide.notes", p.sizeGuide.notes, t.sizeGuide.notes);
        same("sizeGuide.cells", p.sizeGuide.rows, t.sizeGuide.cells);
      }
    }
  }
  console.log(`[${locale}] fiches produit : ${products.length - problems.filter((x) => x.includes("non traduite")).length}/${products.length}` + (problems.length ? `, ${problems.length} problème(s)` : ""));
  if (problems.length) failed = true;
  problems.forEach((x) => console.log("   ", x));
}
process.exit(failed ? 1 : 0);
