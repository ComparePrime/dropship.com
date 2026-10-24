import type { Product } from "./types";

/**
 * Ordre d'affichage voulu pour certains univers (slug de l'univers -> slugs de produits, dans l'ordre).
 * Les produits non listés suivent, dans l'ordre du catalogue. Pour changer la mise en avant, modifier cette liste.
 * Ici : les lampes en tête, mêlées aux vases et aux objets de décoration.
 */
const COLLECTION_ORDER: Record<string, string[]> = {
  "maison-decoration": [
    "lampe-table-led-diamant-usb",
    "trio-vases-porcelaine-wabi-sabi",
    "lampe-chevet-rechargeable-cristal-doree",
    "vase-sculpture-fleurs-sechees",
    "lampe-de-table-rechargeable-doree-cannelee",
    "bougeoir-ceramique-argente-reflet",
    "lampe-lanterne-rechargeable-tactile-cristal",
    "plateau-decoratif-rond-resine-vague",
    "pendule-newton-metal-bureau",
    "ventilateur-plafond-invisible-led",
  ],
};

export function sortForCollection<T extends Pick<Product, "slug">>(products: T[], collectionSlug: string): T[] {
  const order = COLLECTION_ORDER[collectionSlug];
  if (!order) return products;
  const rank = (p: T) => {
    const i = order.indexOf(p.slug);
    return i === -1 ? order.length : i;
  };
  // Tri stable : à rang égal, l'ordre du catalogue est conservé.
  return products.map((p, i) => ({ p, i })).sort((a, b) => rank(a.p) - rank(b.p) || a.i - b.i).map((x) => x.p);
}
