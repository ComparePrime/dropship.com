import { siteConfig } from "@/lib/site-config";

/**
 * Langues du site. Le francais est la langue de reference : il reste SANS prefixe d'adresse
 * (maisonloravie.com/produit/...), comme avant, pour que les pages deja indexees ne changent pas.
 * Les autres langues sont prefixees : /en, /de, /it, /es, /pt.
 */
export const locales = ["fr", "en", "de", "it", "es", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/**
 * Langues OUVERTES au public. Une langue en cours de traduction n'est ni indexee (noindex), ni dans le
 * sitemap, ni dans les balises hreflang, ni dans le selecteur de langue : on l'ajoute ici quand elle est complete.
 */
export const liveLocales: Locale[] = ["fr", "en"];

export function isLiveLocale(locale: Locale): boolean {
  return liveLocales.includes(locale);
}

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
  it: "Italiano",
  es: "Español",
  pt: "Português",
};

/** Code de langue pour Open Graph. */
export const ogLocales: Record<Locale, string> = {
  fr: "fr_CH",
  en: "en_US",
  de: "de_DE",
  it: "it_IT",
  es: "es_ES",
  pt: "pt_PT",
};

/** Langue de page de paiement Stripe. */
export const stripeLocales: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  de: "de",
  it: "it",
  es: "es",
  pt: "pt",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/**
 * Pages juridiques : tant qu'une traduction juridique relue n'existe pas, elles restent uniquement en français.
 * Les liens des autres langues pointent vers la version française, qui reste la seule indexée.
 */
export const FRENCH_ONLY_PATHS = ["/cgv", "/confidentialite", "/mentions-legales"];

export function isFrenchOnly(path: string): boolean {
  return FRENCH_ONLY_PATHS.includes(stripLocale(path.split(/[?#]/)[0]).path);
}

/** Adresses qui ne dependent jamais de la langue (API, flux, sitemap, fichiers). */
const NEUTRAL_PREFIXES = ["/api", "/merchant-feed", "/sitemap", "/robots", "/images", "/_next"];

/** Ajoute le prefixe de langue a un chemin interne ("/panier" -> "/de/panier"). Le francais reste sans prefixe. */
export function localizePath(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (NEUTRAL_PREFIXES.some((p) => href === p || href.startsWith(`${p}/`) || href.startsWith(`${p}.`))) return href;
  const { path, rest } = splitHref(href);
  const stripped = stripLocale(path).path;
  if (locale === defaultLocale || FRENCH_ONLY_PATHS.includes(stripped)) return `${stripped}${rest}`;
  return `/${locale}${stripped === "/" ? "" : stripped}${rest}`;
}

function splitHref(href: string): { path: string; rest: string } {
  const i = href.search(/[?#]/);
  return i === -1 ? { path: href, rest: "" } : { path: href.slice(0, i), rest: href.slice(i) };
}

/** Retire un prefixe de langue eventuel : "/de/panier" -> { locale: "de", path: "/panier" }. */
export function stripLocale(pathname: string): { locale: Locale | null; path: string } {
  const match = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (match && isLocale(match[1])) return { locale: match[1], path: match[2] ?? "/" };
  return { locale: null, path: pathname || "/" };
}

/** Adresse absolue d'une page dans une langue ("/" donne la racine du site, sans barre finale). */
export function absoluteUrl(path: string, locale: Locale): string {
  const localized = localizePath(path || "/", locale);
  return `${siteConfig.domain}${localized === "/" ? "" : localized}`;
}

/** Adresses completes d'une page dans chaque langue (pour les balises hreflang et le sitemap). */
export function alternateUrls(path: string): Record<Locale, string> {
  const urls = {} as Record<Locale, string>;
  for (const locale of isFrenchOnly(path) ? [defaultLocale] : liveLocales) urls[locale] = absoluteUrl(path, locale);
  return urls;
}

/** Bloc `alternates` des metadonnees : adresse canonique de la langue + hreflang de toutes les langues. */
export function alternatesFor(locale: Locale, path: string) {
  const urls = alternateUrls(path);
  const canonical = absoluteUrl(path, locale);
  // hreflang uniquement quand au moins deux langues sont ouvertes.
  return liveLocales.length > 1 && !isFrenchOnly(path)
    ? { canonical, languages: { ...urls, "x-default": urls[defaultLocale] } }
    : { canonical };
}
