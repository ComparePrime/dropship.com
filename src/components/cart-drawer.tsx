"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { Icon } from "@/components/icons";
import { CartPortal } from "@/components/cart-portal";
import { PromoCodeField } from "@/components/promo-code-field";
import { getCartTotals } from "@/lib/cart-totals";
import { useCheckout } from "@/lib/use-checkout";
import { getProductById } from "@/lib/products";
import { LOW_STOCK_THRESHOLD, URGENT_STOCK_THRESHOLD } from "@/lib/stock-config";
import { CartLine } from "@/lib/types";

const lineKey = (l: CartLine) => `${l.productId}-${l.variantLabel ?? ""}`;
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function CartDrawer() {
  const { lines, promo, isOpen, totalItems, closeCart, updateQuantity, removeItem } = useCart();
  const { currency } = useCurrency();
  const { startCheckout, loading, error } = useCheckout();

  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const previousQuantities = useRef<Map<string, number>>(new Map());
  const [closing, setClosing] = useState(false);
  const [removingKey, setRemovingKey] = useState<string | null>(null);
  const [highlightKey, setHighlightKey] = useState<string | null>(null);

  const requestClose = () => {
    if (closing) return;
    if (prefersReducedMotion()) {
      closeCart();
      return;
    }
    setClosing(true);
    window.setTimeout(() => {
      setClosing(false);
      closeCart();
    }, 200);
  };

  const requestRemove = (line: CartLine) => {
    const key = lineKey(line);
    if (prefersReducedMotion()) {
      removeItem(line.productId, line.variantLabel);
      return;
    }
    setRemovingKey(key);
    window.setTimeout(() => {
      removeItem(line.productId, line.variantLabel);
      setRemovingKey(null);
    }, 180);
  };

  // Confirmation visuelle discrete d'un article ajoute ou dont la quantite augmente.
  useEffect(() => {
    const previous = previousQuantities.current;
    let changed: string | null = null;
    for (const line of lines) {
      const key = lineKey(line);
      if (line.quantity > (previous.get(key) ?? 0)) changed = key;
    }
    previousQuantities.current = new Map(lines.map((l) => [lineKey(l), l.quantity]));
    if (changed && isOpen) {
      setHighlightKey(changed);
      const timer = window.setTimeout(() => setHighlightKey(null), 900);
      return () => window.clearTimeout(timer);
    }
  }, [lines, isOpen]);

  // Verrouille le scroll du body pendant que le panier est ouvert, et le
  // restaure exactement comme avant a la fermeture.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Focus : sur le bouton de fermeture a l'ouverture, restitue a l'element d'origine a la fermeture.
  useEffect(() => {
    if (!isOpen) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    const timer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(timer);
      previousFocus.current?.focus?.();
    };
  }, [isOpen]);

  // Clavier : Echap ferme, Tab reste dans le panier.
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, closing]);

  if (!isOpen) return null;

  const { subtotal, discount, total } = getCartTotals(lines, currency, promo?.percent ?? null);
  const hasDiscount = !!promo && discount > 0;

  const quantityByProduct = new Map<string, number>();
  for (const l of lines) quantityByProduct.set(l.productId, (quantityByProduct.get(l.productId) ?? 0) + l.quantity);

  return (
    <CartPortal>
      <div className="fixed inset-0 z-[999]" role="dialog" aria-modal="true" aria-label="Panier">
        {/* Fond : couvre tout le viewport, opaque a 40 %, ferme le panier au clic. */}
        <button
          type="button"
          aria-label="Fermer le panier"
          tabIndex={-1}
          className={`fixed inset-0 h-full w-full bg-ink/40 ${
            closing ? "motion-safe:animate-cart-fade-out" : "motion-safe:animate-cart-fade-in"
          }`}
          onClick={requestClose}
        />

        {/* Hauteur adaptee au contenu ; seule la liste defile quand le panier est long. */}
        <div
          ref={panelRef}
          className={`fixed right-0 top-0 z-[1000] flex max-h-[100dvh] w-full max-w-md flex-col overflow-hidden bg-cream shadow-lift sm:rounded-bl-xl2 ${
            closing ? "motion-safe:animate-cart-slide-out" : "motion-safe:animate-cart-slide-in"
          }`}
        >
          <div className="flex flex-shrink-0 items-center justify-between border-b border-ink/10 px-5 py-4">
            <h2 className="font-display text-2xl text-ink">
              Votre panier
              {totalItems > 0 && (
                <span className="ml-2 font-sans text-sm font-normal text-stone">
                  ({totalItems} article{totalItems > 1 ? "s" : ""})
                </span>
              )}
            </h2>
            <button
              ref={closeButtonRef}
              onClick={requestClose}
              aria-label="Fermer le panier"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-sand"
            >
              <Icon.close className="h-5 w-5" />
            </button>
          </div>

          {lines.length === 0 ? (
            <div className="px-5 py-10 text-center">
              <p className="text-sm text-stone">Votre panier est vide pour le moment.</p>
              <Link href="/collections" onClick={requestClose} className="btn-primary mt-6 inline-flex">
                Découvrir la boutique
              </Link>
            </div>
          ) : (
            <>
              <ul className="min-h-0 flex-1 divide-y divide-ink/10 overflow-y-auto px-5">
                {lines.map((line) => {
                  const key = lineKey(line);
                  const unitPrice = getPriceForCurrency(line.priceCHF, line.priceEUR, currency);
                  const stock = getProductById(line.productId)?.stock;
                  const tracked = !!stock && stock.source !== "none";
                  const inCart = quantityByProduct.get(line.productId) ?? 0;
                  const atLimit = tracked && inCart >= stock!.quantity;
                  const showLow = tracked && stock!.quantity > 0 && stock!.quantity <= LOW_STOCK_THRESHOLD;

                  return (
                    <li
                      key={key}
                      className={`flex gap-4 py-4 transition-colors duration-500 ${
                        removingKey === key ? "motion-safe:animate-line-out" : "motion-safe:animate-line-in"
                      } ${highlightKey === key ? "bg-sage/10" : ""}`}
                    >
                      <Link
                        href={`/produit/${line.slug}`}
                        onClick={requestClose}
                        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-sand"
                      >
                        {line.image && (
                          <Image src={line.image} alt={line.name} fill sizes="96px" className="object-cover" />
                        )}
                      </Link>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="break-words text-[15px] font-medium leading-snug text-ink">{line.name}</p>
                            {line.packLabel && <p className="text-xs text-sage">{line.packLabel}</p>}
                            {line.variantLabel && <p className="text-sm text-stone">{line.variantLabel}</p>}
                            <p className="text-xs text-stone">{formatPrice(unitPrice, currency)} l&apos;unité</p>
                          </div>
                          <button
                            onClick={() => requestRemove(line)}
                            aria-label={`Retirer ${line.name}`}
                            className="flex-shrink-0 p-1 text-stone transition-colors hover:text-ink"
                          >
                            <Icon.close className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-end justify-between pt-2">
                          <div className="flex items-center gap-1 rounded-full border border-ink/15 px-1">
                            <button
                              aria-label="Diminuer la quantité"
                              onClick={() =>
                                line.quantity <= 1
                                  ? requestRemove(line)
                                  : updateQuantity(line.productId, line.quantity - 1, line.variantLabel)
                              }
                              className="flex h-8 w-8 items-center justify-center text-ink/70 hover:text-ink"
                            >
                              <Icon.minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm font-medium">{line.quantity}</span>
                            <button
                              aria-label="Augmenter la quantité"
                              disabled={atLimit}
                              onClick={() => updateQuantity(line.productId, line.quantity + 1, line.variantLabel)}
                              className="flex h-8 w-8 items-center justify-center text-ink/70 hover:text-ink disabled:opacity-30"
                            >
                              <Icon.plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span key={line.quantity} className="motion-safe:animate-total-pop font-medium text-ink">
                            {formatPrice(unitPrice * line.quantity, currency)}
                          </span>
                        </div>

                        {atLimit ? (
                          <p className="mt-2 text-xs text-terracottaText">
                            Quantité maximale disponible atteinte.
                          </p>
                        ) : (
                          showLow && (
                            <p
                              className={`mt-2 text-xs ${
                                stock!.quantity <= URGENT_STOCK_THRESHOLD ? "text-terracottaText" : "text-stone"
                              }`}
                            >
                              Plus que {stock!.quantity} disponible{stock!.quantity > 1 ? "s" : ""}
                            </p>
                          )
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div
                className="flex-shrink-0 border-t border-ink/10 bg-sand/60 px-5 pt-4"
                style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
              >
                <PromoCodeField />

                <dl className="mt-4 space-y-1.5 text-sm">
                  <div className="flex items-center justify-between text-stone">
                    <dt>Sous-total</dt>
                    <dd>{formatPrice(subtotal, currency)}</dd>
                  </div>
                  {hasDiscount && (
                    <div className="motion-safe:animate-soft-in flex items-center justify-between text-sage">
                      <dt>
                        Code {promo!.code} (−{promo!.percent} %)
                      </dt>
                      <dd>−{formatPrice(discount, currency)}</dd>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-stone">
                    <dt>Livraison</dt>
                    <dd>Offerte</dd>
                  </div>
                </dl>

                <div className="mt-3 flex items-baseline justify-between border-t border-ink/10 pt-3">
                  <span className="font-display text-xl text-ink">Total</span>
                  <span key={total} className="motion-safe:animate-total-pop font-display text-2xl text-ink">
                    {formatPrice(total, currency)}
                  </span>
                </div>
                {hasDiscount && (
                  <p className="motion-safe:animate-soft-in mt-1 text-right text-sm font-medium text-sage">
                    Vous économisez {formatPrice(discount, currency)}
                  </p>
                )}

                <button
                  type="button"
                  onClick={startCheckout}
                  disabled={loading}
                  className="btn-primary mt-4 w-full gap-2 py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Icon.lock className="h-4 w-4" strokeWidth={1.75} />
                  {loading ? "Redirection vers le paiement…" : "Passer au paiement"}
                </button>
                {error && (
                  <p role="alert" className="mt-3 text-center text-sm text-terracottaText">
                    {error}
                  </p>
                )}
                <p className="mt-3 text-center text-xs text-stone">
                  Votre sélection est prête à être commandée · Paiement sécurisé via Stripe
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </CartPortal>
  );
}
