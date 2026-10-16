"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { Icon } from "@/components/icons";
import { CartPortal } from "@/components/cart-portal";
import { getCartTotals } from "@/lib/cart-totals";
import { useCheckout } from "@/lib/use-checkout";

export function CartDrawer() {
  const { lines, promo, isOpen, closeCart, updateQuantity, removeItem } = useCart();
  const { currency } = useCurrency();
  const { startCheckout, loading, error } = useCheckout();
  const panelRef = useRef<HTMLDivElement>(null);

  // Verrouille le scroll du body pendant que le panier est ouvert, et le
  // restaure exactement comme avant à la fermeture.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Fermeture au clavier (Escape), sans intercepter les autres touches.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const { subtotal, discount, total } = getCartTotals(lines, currency, promo?.percent ?? null);

  return (
    <CartPortal>
      <div className="fixed inset-0 z-[999]" role="dialog" aria-modal="true" aria-label="Panier">
        {/* Backdrop opaque : couvre tout le viewport, aucun texte ne doit passer au travers. */}
        <button
          type="button"
          aria-label="Fermer le panier"
          className="motion-safe:animate-cart-fade-in fixed inset-0 h-full w-full bg-ink/35"
          onClick={closeCart}
        />

        <div
          ref={panelRef}
          className="motion-safe:animate-cart-slide-in fixed inset-y-0 right-0 z-[1000] flex h-full w-full max-w-md flex-col bg-cream shadow-lift"
        >
          <div className="flex flex-shrink-0 items-center justify-between border-b border-ink/10 px-6 py-5">
            <h2 className="font-display text-xl">Votre panier</h2>
            <button onClick={closeCart} aria-label="Fermer" className="p-1">
              <Icon.close className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {lines.length === 0 ? (
              <p className="mt-10 text-center text-sm text-stone">Votre panier est vide.</p>
            ) : (
              <ul className="flex flex-col gap-5">
                {lines.map((line) => (
                  <li key={`${line.productId}-${line.variantLabel ?? ""}`} className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl2 bg-sand">
                      {line.image && (
                        <Image src={line.image} alt={line.name} fill className="object-cover" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium">{line.name}</p>
                          {line.packLabel && (
                            <p className="text-xs text-sage">{line.packLabel}</p>
                          )}
                          {line.variantLabel && (
                            <p className="text-xs text-stone">{line.variantLabel}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(line.productId, line.variantLabel)}
                          aria-label="Retirer l'article"
                          className="text-stone hover:text-ink"
                        >
                          <Icon.close className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-ink/15 px-2 py-1">
                          <button
                            aria-label="Diminuer la quantité"
                            onClick={() => updateQuantity(line.productId, line.quantity - 1, line.variantLabel)}
                          >
                            <Icon.minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-4 text-center text-sm">{line.quantity}</span>
                          <button
                            aria-label="Augmenter la quantité"
                            onClick={() => updateQuantity(line.productId, line.quantity + 1, line.variantLabel)}
                          >
                            <Icon.plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm">
                          {formatPrice(
                            getPriceForCurrency(line.priceCHF, line.priceEUR, currency) *
                              line.quantity,
                            currency
                          )}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {lines.length > 0 && (
            <div
              className="flex-shrink-0 border-t border-ink/10 px-6 pt-5"
              style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
            >
              {promo && discount > 0 && (
                <>
                  <div className="mb-1 flex items-center justify-between text-sm text-stone">
                    <span>Sous-total</span>
                    <span>{formatPrice(subtotal, currency)}</span>
                  </div>
                  <div className="mb-1 flex items-center justify-between text-sm text-sage">
                    <span>
                      Remise {promo.code} (−{promo.percent} %)
                    </span>
                    <span>−{formatPrice(discount, currency)}</span>
                  </div>
                </>
              )}
              <div className="mb-1 flex items-center justify-between text-sm text-stone">
                <span>Livraison</span>
                <span>Offerte</span>
              </div>
              <div className="mb-4 flex items-center justify-between font-display text-lg">
                <span>Total</span>
                <span>{formatPrice(total, currency)}</span>
              </div>
              <button
                type="button"
                onClick={startCheckout}
                disabled={loading}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Redirection vers le paiement…" : "Passer au paiement"}
              </button>
              {error && (
                <p role="alert" className="mt-3 text-center text-sm text-terracottaText">
                  {error}
                </p>
              )}
              {!promo && (
                <p className="mt-3 text-center text-xs text-stone">
                  Un code promo ? Saisissez-le dans{" "}
                  <Link href="/panier" onClick={closeCart} className="underline underline-offset-2">
                    votre panier
                  </Link>
                  .
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </CartPortal>
  );
}
