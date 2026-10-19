import { getPublishedProducts } from "@/lib/products";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site-config";
import { Product } from "@/lib/types";

/**
 * Flux produits pour Google Merchant Center (RSS 2.0 + espace de noms g:).
 * Genere a partir du catalogue : il suit donc les prix, le stock declare et les
 * photos a chaque deploiement. Marche : Suisse, prix en CHF, prix actuel
 * uniquement (jamais de prix de reference ni de prix soldes dans le flux, pour
 * rester identique a ce que la page affiche).
 *
 * Adresse a donner a Merchant Center : https://maisonloravie.com/merchant-feed.xml
 */
export const dynamic = "force-static";

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
  "pendule-newton": "Home & Garden > Decor",
  "plateau-vague-resine": "Home & Garden > Decor",
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

function itemXml(product: Product): string | null {
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
    tag("link", `${siteConfig.domain}/produit/${product.slug}`),
    tag("image_link", abs(main.src)),
    ...others.map((img) => tag("additional_image_link", abs(img.src))),
    tag("availability", isOut ? "out_of_stock" : "in_stock"),
    tag("price", `${product.priceCHF.toFixed(2)} CHF`),
    tag("condition", "new"),
    tag("brand", siteConfig.name),
    tag("identifier_exists", "no"),
    tag("google_product_category", GOOGLE_CATEGORY[product.id] ?? "Home & Garden > Decor"),
    ...(category ? [tag("product_type", category.title)] : []),
    "      <g:shipping>",
    "        <g:country>CH</g:country>",
    "        <g:service>Standard</g:service>",
    "        <g:price>0.00 CHF</g:price>",
    "        <g:min_handling_time>0</g:min_handling_time>",
    `        <g:max_handling_time>${Math.max(1, Math.ceil(product.shipping.dispatchWithinHours / 24))}</g:max_handling_time>`,
    `        <g:min_transit_time>${product.shipping.minDays}</g:min_transit_time>`,
    `        <g:max_transit_time>${product.shipping.maxDays}</g:max_transit_time>`,
    "      </g:shipping>",
    "    </item>",
  ];
  return lines.join("\n");
}

export function GET() {
  const items = getPublishedProducts()
    .map(itemXml)
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
