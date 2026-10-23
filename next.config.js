/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["clsx"],
  },
  /**
   * Langues : le francais (langue de reference) reste SANS prefixe d'adresse. Les pages sont stockees sous
   * /fr en interne ; ces regles reecrivent /panier en /fr/panier sans changer l'adresse visible. Les autres
   * langues (/en, /de, /it, /es, /pt) ont leur prefixe visible. Voir src/i18n/config.ts.
   */
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/fr" },
        {
          source:
            "/:path((?!(?:fr|en|de|it|es|pt|api|_next|images|merchant-feed|sitemap|robots|icon|apple-icon)(?:/|$))(?!.*\\.[A-Za-z0-9]+$).*)",
          destination: "/fr/:path",
        },
      ],
    };
  },
  async redirects() {
    // /fr/... n'existe pas pour les visiteurs : une seule adresse par page (pas de doublon pour Google).
    return [
      { source: "/fr", destination: "/", permanent: true },
      { source: "/fr/:path*", destination: "/:path*", permanent: true },
      // Article remplacé par un guide plus complet (même sujet, nouvelle adresse).
      { source: "/blog/choisir-taille-veste-chien", destination: "/blog/choisir-manteau-chien", permanent: true },
      { source: "/:locale(en|de|it|es|pt)/blog/choisir-taille-veste-chien", destination: "/blog", permanent: true },
    ];
  },
};

module.exports = nextConfig;
