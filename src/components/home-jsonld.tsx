import { siteConfig } from "@/lib/site-config";
import { getLocale, getT } from "@/i18n/server";

/**
 * Donnees structurees Organization + WebSite pour la page d'accueil.
 * Pas de `sameAs` : les liens reseaux sociaux de siteConfig.social sont
 * des URLs generiques de plateforme (pas de vrais comptes Maison Loravie
 * configures a ce stade), donc jamais presentes comme de vrais profils.
 */
export function HomeJsonLd() {
  const t = getT();
  const locale = getLocale();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.domain,
        logo: `${siteConfig.domain}/images/brand/logo-square.webp`,
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.domain,
        inLanguage: locale === "fr" ? "fr-CH" : locale,
        description: t(siteConfig.description),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
