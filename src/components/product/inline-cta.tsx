"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";

/**
 * CTA intermédiaire, à placer après une nouvelle raison d'acheter (jamais deux fois
 * consécutivement avec le même message).
 */
export function InlineCta({ product, text }: { product: Product; text: string }) {
  const { addItem } = useCart();

  return (
    <div className="container-content flex flex-col items-center gap-4 py-10 text-center">
      <p className="max-w-sm font-display text-lg text-ink">{text}</p>
      <button type="button" onClick={() => addItem(product, 1)} className="btn-primary">
        Ajouter au panier
      </button>
    </div>
  );
}
