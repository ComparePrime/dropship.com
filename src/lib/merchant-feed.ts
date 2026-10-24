import { getPublishedProducts } from "@/lib/products";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";
import { Product } from "@/lib/types";
import { getSkuStock, hasSizes } from "@/lib/sku";
import { getPriceForCurrency } from "@/lib/currency";
import { isShippableToNorthAmerica } from "@/lib/shipping";

/**
 * Flux produits pour Google Merchant Center (RSS 2.0 + espace de noms g:), genere a
 * partir du catalogue : il suit les prix, le stock declare et les photos a chaque
 * deploiement. Prix actuel uniquement (jamais de prix de reference ni de prix soldes
 * dans le flux, pour rester identique a ce que la page affiche).
 *
 * Un flux par marche (devise + pays livres). Ne declarer ici que les pays que la
 * page de paiement accepte reellement (voir shipping_address_collection dans
 * api/checkout/route.ts).
 */
export interface FeedMarket {
  currency: "CHF" | "EUR" | "USD" | "CAD";
  countries: string[];
  /** Ajoute a l'adresse de chaque produit pour afficher la bonne devise a Google et aux clients. */
  linkSuffix: string;
}

export const FEED_MARKETS: Record<"ch" | "eu" | "us" | "ca", FeedMarket> = {
  ch: { currency: "CHF", countries: ["CH"], linkSuffix: "" },
  eu: {
    currency: "EUR",
    countries: ["FR", "BE", "DE", "IT", "ES", "NL", "AT", "PT", "LU"],
    linkSuffix: "?currency=EUR",
  },
  // Amerique du Nord : uniquement les produits livrables (voir lib/shipping.ts).
  us: { currency: "USD", countries: ["US"], linkSuffix: "?currency=USD" },
  ca: { currency: "CAD", countries: ["CA"], linkSuffix: "?currency=CAD" },
};

/**
 * Categorie Google par produit (taxonomie Google en anglais). Valeurs generales et
 * prudentes : a affiner dans Merchant Center si Google propose une categorie plus precise.
 */
const GOOGLE_CATEGORY: Record<string, string> = {
  "petite-lanterne-feline": "Home & Garden > Decor",
  "ventilateur-anti-mouches": "Home & Garden > Household Appliances > Climate Control Appliances > Fans",
  "coussin-bras-allaitement": "Baby & Toddler > Nursing & Feeding",
  "ventilateur-plafond-led": "Home & Garden > Household Appliances > Climate Control Appliances > Fans",
  "meduse-dansante": "Toys & Games > Toys",
  "bougeoir-reflet": "Home & Garden > Decor",
  "vase-arche": "Home & Garden > Decor",
  "trio-vases-wabi-sabi": "Home & Garden > Decor",
  "lampe-diamant-led": "Home & Garden > Lighting",
  "lampe-coupole": "Home & Garden > Lighting",
  "pendule-newton": "Home & Garden > Decor",
  "plateau-vague-resine": "Home & Garden > Decor",
  "veste-chien-montagne": "Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Apparel",
  "griffoir-accordeon": "Animals & Pet Supplies > Pet Supplies > Cat Supplies > Cat Toys",
  "arcade-souris": "Animals & Pet Supplies > Pet Supplies > Cat Supplies > Cat Toys",
};

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const tag = (name: string, value: string | number) => `      <g:${name}>${escapeXml(String(value))}</g:${name}>`;

/** Photos utilisables par Google : ni visuels d'information (dimensions...) ni photos avec texte superpose. */
function usableImages(product: Product) {
  const images = product.images.filter((img) => !img.info && !img.inspiration);
  // Formats surs en premier (jpg/png) pour l'image principale.
  const preferred = images.find((img) => /\.(jpe?g|png)$/i.test(img.src));
  const main = preferred ?? images[0];
  return { main, others: images.filter((img) => img !== main).slice(0, 10) };
}

/** Un produit a tailles donne une fiche par coloris x taille, regroupees par `item_group_id`. */
function sizedItemsXml(product: Product, market: FeedMarket): string[] {
  const category = categories.find((c) => product.collections.includes(c.slug));
  const abs = (src: string) => `${siteConfig.domain}${src}`;
  const items: string[] = [];
  for (const variant of product.variants ?? []) {
    const own = product.images.filter((img) => img.variantId === variant.id && !img.info && !img.inspiration);
    const main = own[0] ?? { src: variant.image.src };
    for (const size of product.sizes ?? []) {
      const stock = getSkuStock(product, variant.id, size.id) ?? 0;
      const price = getPriceForCurrency(size.priceCHF, size.priceEUR, market.currency);
      items.push(
        [
          "    <item>",
          tag("id", `${product.id}-${variant.id}-${size.id}`),
          tag("item_group_id", product.id),
          tag("title", `${product.h1.slice(0, 110)} - ${variant.label}, taille ${size.label}`),
          tag("description", product.shortDescription.slice(0, 5000)),
          tag("link", `${siteConfig.domain}/produit/${product.slug}${market.linkSuffix}`),
          tag("image_link", abs(main.src)),
          tag("availability", stock > 0 ? "in_stock" : "out_of_stock"),
          tag("price", `${price.toFixed(2)} ${market.currency}`),
          tag("condition", "new"),
          tag("brand", siteConfig.name),
          tag("identifier_exists", "no"),
          tag("color", variant.label),
          tag("size", size.label),
          tag("google_product_category", GOOGLE_CATEGORY[product.id] ?? "Home & Garden > Decor"),
          ...(category ? [tag("product_type", category.title)] : []),
          ...market.countries.flatMap((country) => [
            "      <g:shipping>",
            `        <g:country>${country}</g:country>`,
            "        <g:service>Standard</g:service>",
            `        <g:price>0.00 ${market.currency}</g:price>`,
            "        <g:min_handling_time>0</g:min_handling_time>",
            `        <g:max_handling_time>${Math.max(1, Math.ceil(product.shipping.dispatchWithinHours / 24))}</g:max_handling_time>`,
            `        <g:min_transit_time>${product.shipping.minDays}</g:min_transit_time>`,
            `        <g:max_transit_time>${product.shipping.maxDays}</g:max_transit_time>`,
            "      </g:shipping>",
          ]),
          "    </item>",
        ].join("\n")
      );
    }
  }
  return items;
}

function itemXml(product: Product, market: FeedMarket): string | null {
  const { main, others } = usableImages(product);
  if (!main) return null;

  const isOut = !!product.stock && product.stock.source !== "none" && product.stock.quantity <= 0;
  const category = categories.find((c) => product.collections.includes(c.slug));
  const abs = (src: string) => `${siteConfig.domain}${src}`;

  const lines = [
    "    <item>",
    tag("id", product.id),
    tag("title", product.h1.slice(0, 150)),
    tag("description", product.shortDescription.slice(0, 5000)),
    tag("link", `${siteConfig.domain}/produit/${product.slug}${market.linkSuffix}`),
    tag("image_link", abs(main.src)),
    ...others.map((img) => tag("additional_image_link", abs(img.src))),
    tag("availability", isOut ? "out_of_stock" : "in_stock"),
    tag("price", `${getPriceForCurrency(product.priceCHF, product.priceEUR, market.currency).toFixed(2)} ${market.currency}`),
    tag("condition", "new"),
    tag("brand", siteConfig.name),
    tag("identifier_exists", "no"),
    tag("google_product_category", GOOGLE_CATEGORY[product.id] ?? "Home & Garden > Decor"),
    ...(category ? [tag("product_type", category.title)] : []),
    ...market.countries.flatMap((country) => [
      "      <g:shipping>",
      `        <g:country>${country}</g:country>`,
      "        <g:service>Standard</g:service>",
      `        <g:price>0.00 ${market.currency}</g:price>`,
      "        <g:min_handling_time>0</g:min_handling_time>",
      `        <g:max_handling_time>${Math.max(1, Math.ceil(product.shipping.dispatchWithinHours / 24))}</g:max_handling_time>`,
      `        <g:min_transit_time>${product.shipping.minDays}</g:min_transit_time>`,
      `        <g:max_transit_time>${product.shipping.maxDays}</g:max_transit_time>`,
      "      </g:shipping>",
    ]),
    "    </item>",
  ];
  return lines.join("\n");
}

export function buildFeed(market: FeedMarket): Response {
  const northAmerica = market.currency === "USD" || market.currency === "CAD";
  const items = getPublishedProducts()
    .filter((p) => !northAmerica || isShippableToNorthAmerica(p))
    .flatMap((p) => (hasSizes(p) ? sizedItemsXml(p, market) : [itemXml(p, market)]))
    .filter((x): x is string => !!x)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${siteConfig.domain}</link>
    <description>${escapeXml(siteConfig.description)}</description>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
