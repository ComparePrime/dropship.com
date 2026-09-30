"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";

export function StickyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const price = getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
  const compareAt =
    currency === "CHF" ? product.compareAtPriceCHF : product.compareAtPriceEUR;
  const hasRealPromotion = product.promotion.active && !!compareAt && compareAt > price;
  const isOutOfStock =
    !!product.stock && product.stock.source !== "none" && product.stock.quantity <= 0;

  useEffect(() => {
    const target = document.getElementById("acheter");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-cream/95 p-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-sand">
          {product.images[0] && (
            <Image src={product.images[0].src} alt="" fill className="object-cover" />
          )}
        </div>
        <div className="flex-shrink-0">
          {product.packLabel && (
            <p className="text-[10px] font-medium uppercase tracking-wide text-sage">
              {product.packLabel}
            </p>
          )}
          <div className="flex items-baseline gap-1.5">
            {hasRealPromotion && (
              <span className="text-xs text-ink/40 line-through">
                {formatPrice(compareAt!, currency)}
              </span>
            )}
            <span className="font-display text-lg">{formatPrice(price, currency)}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => addItem(product, 1)}
          disabled={isOutOfStock}
          className="btn-primary ml-auto flex-1 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isOutOfStock ? "Indisponible" : "Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}
