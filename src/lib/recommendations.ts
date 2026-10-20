import { getProductBySlug } from "@/lib/products";
import type { Product } from "@/lib/types";

/**
 * Compléments recommandés, par produit (slugs, du plus au moins pertinent).
 * Seul fichier à modifier pour changer les suggestions : un produit absent de
 * la table n'a aucune recommandation (le bloc est alors simplement masqué).
 * Critères : même univers (décoration d'intérieur), petit prix, style cohérent.
 */
const COMPLEMENTS: Record<string, string[]> = {
  "lampe-table-led-diamant-usb": ["bougeoir-ceramique-argente-reflet", "vase-sculpture-fleurs-sechees"],
  "trio-vases-porcelaine-wabi-sabi": ["bougeoir-ceramique-argente-reflet", "plateau-decoratif-rond-resine-vague"],
  "vase-sculpture-fleurs-sechees": ["bougeoir-ceramique-argente-reflet", "plateau-decoratif-rond-resine-vague"],
  "bougeoir-ceramique-argente-reflet": ["vase-sculpture-fleurs-sechees", "plateau-decoratif-rond-resine-vague"],
  "plateau-decoratif-rond-resine-vague": ["bougeoir-ceramique-argente-reflet", "vase-sculpture-fleurs-sechees"],
  "pendule-newton-metal-bureau": ["plateau-decoratif-rond-resine-vague", "bougeoir-ceramique-argente-reflet"],
  "ventilateur-plafond-invisible-led": ["bougeoir-ceramique-argente-reflet", "plateau-decoratif-rond-resine-vague"],
  "ventilateur-anti-mouches-table": ["plateau-decoratif-rond-resine-vague", "bougeoir-ceramique-argente-reflet"],
  "crochet-chat-lanterne": ["bougeoir-ceramique-argente-reflet", "vase-sculpture-fleurs-sechees"],
};

/** Produits conservés au catalogue mais jamais mis en avant comme complément. */
const NEVER_RECOMMEND = new Set(["ventilateur-anti-mouches-table", "crochet-chat-lanterne"]);

/** Fourchette de prix d'un complément (valable en CHF comme en EUR). */
const MIN_PRICE = 8;
const MAX_PRICE = 32;

function isRecommendable(p: Product | undefined, excluded: Set<string>): p is Product {
  if (!p || p.status !== "published" || excluded.has(p.slug) || NEVER_RECOMMEND.has(p.slug)) return false;
  if (p.stock && p.stock.source !== "none" && p.stock.quantity <= 0) return false;
  return p.priceCHF >= MIN_PRICE && p.priceCHF <= MAX_PRICE && p.priceEUR >= MIN_PRICE && p.priceEUR <= MAX_PRICE;
}

/**
 * Compléments pertinents pour un ou plusieurs produits. `excludeSlugs` écarte
 * ce qui est déjà au panier. Retourne 0 à `limit` produits : jamais de
 * remplissage artificiel.
 */
export function getRecommendations(
  slugs: string | string[],
  { limit = 2, excludeSlugs = [] }: { limit?: number; excludeSlugs?: string[] } = {}
): Product[] {
  const sources = Array.isArray(slugs) ? slugs : [slugs];
  const excluded = new Set([...sources, ...excludeSlugs]);
  const result: Product[] = [];
  for (const source of sources) {
    for (const slug of COMPLEMENTS[source] ?? []) {
      const candidate = getProductBySlug(slug);
      if (isRecommendable(candidate, excluded) && !result.some((r) => r.id === candidate.id)) {
        result.push(candidate);
      }
    }
  }
  return result.slice(0, limit);
}
