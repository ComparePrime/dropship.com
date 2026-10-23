#!/usr/bin/env node
/**
 * Récapitulatif des articles pour Google Search Console : `node scripts/blog-export.js` écrit docs/blog-recap.csv.
 * Les volumes de recherche (France, par mois) viennent d'une mesure réelle faite le 23/10/2026 sur quelques
 * requêtes ; toute requête absente de la table est « non mesurée » (volume trop faible ou non testé).
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
const blog = require(path.join(ROOT, "lib/blog.ts"));
const { siteConfig } = require(path.join(ROOT, "lib/site-config.ts"));

const VOLUMES = {
  "décoration noël maison": 4400, "décoration table de noël": 6600, "idées déco noël": 880, "décoration de noël naturelle": 70,
  "cadeau naissance maman": 1900, "cadeau noël jeune maman": 50, "lampe d'ambiance salon": 590, "lampe de chevet chambre": 390,
  "lumière chaude ou froide": 590, "vase décoratif": 880, "décoration minimaliste": 590, "décoration intemporelle": 70,
  "décoration cosy": 260, "décorer une commode": 30, "décorer un buffet": 40, "cadeau jeune famille": 10, "taille manteau chien": 140,
  "manteau chien": 8100, "cadeau noël chat": 260, "cadeau noël chien": 40, "cadeau pour chat noël": 70, "température de couleur éclairage": 10,
  "ambiance cosy hiver": 10,
};
const cell = (v) => `"${String(v).replace(/"/g, '""')}"`;
const header = ["N°", "Titre (H1)", "URL finale", "Requête principale", "Volume FR/mois (mesuré)", "Requêtes secondaires (hypothèses)", "Intention", "Catégorie", "Articles liés", "Statut", "Date de publication"];
const posts = blog.getAllBlogPosts();
const rows = posts.map((p, i) => {
  const links = [...new Set([...p.related, ...[...p.body.matchAll(/\]\(\/blog\/([a-z0-9-]+)\)/g)].map((m) => m[1])])].filter((s) => s !== p.slug);
  const volumes = [p.mainQuery, ...p.secondaryQueries].filter((q) => VOLUMES[q] !== undefined).map((q) => `${q} : ${VOLUMES[q]}`);
  return [
    i + 1, p.title, `${siteConfig.domain}/blog/${p.slug}`, p.mainQuery, volumes.join(" ; ") || "non mesuré", p.secondaryQueries.join(" ; "), p.intent,
    blog.getBlogCategory(p.category).title, links.map((s) => `${siteConfig.domain}/blog/${s}`).join(" ; "), "Publié (à soumettre dans Search Console)", p.publishedAt,
  ].map(cell).join(",");
});
fs.mkdirSync(path.join(__dirname, "..", "docs"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "..", "docs", "blog-recap.csv"), "﻿" + [header.map(cell).join(","), ...rows].join("\r\n") + "\r\n");
console.log(`${posts.length} articles écrits dans docs/blog-recap.csv`);
