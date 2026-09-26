export const siteConfig = {
  name: "Maison Félin",
  legalName: "Maison Félin Sàrl",
  domain: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maisonfelin.com",
  description:
    "Objets de décoration originaux inspirés des chats, pensés pour la chambre, le bureau et le salon.",
  supportEmail: "bonjour@maisonfelin.com",
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    pinterest: "https://pinterest.com",
  },
  markets: ["CH", "FR", "BE", "DE", "IT", "ES", "NL", "AT", "PT", "LU"] as const,
  defaultCurrency: "CHF" as const,
  shippingTrust: [
    { icon: "truck", label: "Livraison offerte" },
    { icon: "clock", label: "Expedition sous 24h" },
    { icon: "map-pin", label: "Livraison suivie" },
    { icon: "rotate-ccw", label: "Retours gratuits sous 30 jours" },
    { icon: "shield-check", label: "Paiement securise" },
  ],
};

export const countryCurrencyMap: Record<string, "CHF" | "EUR"> = {
  CH: "CHF",
  LI: "CHF",
  FR: "EUR",
  BE: "EUR",
  DE: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
  AT: "EUR",
  PT: "EUR",
  LU: "EUR",
};
