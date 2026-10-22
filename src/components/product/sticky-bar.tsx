"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { useCurrency } from "@/context/currency-context";
import { useCart } from "@/context/cart-context";
import { formatPrice, getOptionalPrice, getPriceForCurrency } from "@/lib/currency";
import { useCampaign } from "@/lib/use-campaign";
import { getPriceRange, hasSizes } from "@/lib/sku";
import { useT } from "@/i18n/provider";

export function StickyBar({ product }: { product: Product }) {
  const t = useT();
  const [visible, setVisible] = useState(false);
  const { running } = useCampaign();
  const { currency } = useCurrency();
  const { addItem } = useCart();
  const sized = hasSizes(product);
  const price = sized ? getPriceRange(product, currency).min : getPriceForCurrency(product.priceCHF, product.priceEUR, currency);
  const compareAt = getOptionalPrice(product.compareAtPriceCHF, product.compareAtPriceEUR, currency);
  const hasRealPromotion = product.promotion.active && !!compareAt && compareAt > price && running;
  const isOutOfStock =
    !sized && !!product.stock && product.stock.source !== "none" && product.stock.quantity <= 0;
  const hasVariants = !!product.variants && product.variants.length > 0;

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
            <span className="font-display text-lg">
              {sized && <span className="mr-1 text-xs text-ink/60">{t("Dès")}</span>}
              {formatPrice(price, currency)}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            // Avec des variantes, on renvoie vers le bloc d'offre pour que
            // le choix du motif reste explicite, plutot que d'en supposer un.
            if (hasVariants) {
              document.getElementById("acheter")?.scrollIntoView({ behavior: "smooth" });
              return;
            }
            addItem(product, 1);
          }}
          disabled={isOutOfStock}
          className="btn-primary ml-auto flex-1 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isOutOfStock ? t("Indisponible") : sized ? t("Choisir ma taille") : hasVariants ? t("Choisir une option") : t("Ajouter au panier")}
        </button>
      </div>
    </div>
  );
}
