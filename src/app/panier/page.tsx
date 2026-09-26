"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { useCurrency } from "@/context/currency-context";
import { formatPrice, getPriceForCurrency } from "@/lib/currency";
import { getAllProducts } from "@/lib/products";
import { Icon } from "@/components/icons";

export default function CartPage() {
  const { lines, updateQuantity, removeItem } = useCart();
  const { currency } = useCurrency();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subtotal = lines.reduce(
    (sum, l) => sum + getPriceForCurrency(l.priceCHF, l.priceEUR, currency) * l.quantity,
    0
  );

  const suggestions = getAllProducts().filter(
    (p) => !lines.some((l) => l.productId === p.id)
  );

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines, currency }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Impossible de lancer le paiement.");
      }
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Une erreur est survenue.");
      setLoading(false);
    }
  };

  return (
    <section className="container-content py-14">
      <h1 className="section-title">Votre panier</h1>

      {lines.length === 0 ? (
        <div className="mt-10 text-center">
          <p className="text-stone">Votre panier est vide pour le moment.</p>
          <Link href="/" className="btn-primary mt-6 inline-flex">
            Continuer mes achats
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <ul className="flex flex-col gap-6">
              {lines.map((line) => (
                <li
                  key={line.productId}
                  className="flex gap-4 rounded-xl2 border border-ink/10 bg-white/50 p-4"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-sand">
                    {line.image && (
                      <Image src={line.image} alt={line.name} fill className="object-cover" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <Link href={`/produit/${line.slug}`} className="font-medium hover:underline">
                        {line.name}
                      </Link>
                      <button
                        onClick={() => removeItem(line.productId)}
                        aria-label="Retirer l'article"
                        className="text-stone hover:text-ink"
                      >
                        <Icon.close className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-ink/15 px-2 py-1">
                        <button
                          aria-label="Diminuer la quantite"
                          onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                        >
                          <Icon.minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center text-sm">{line.quantity}</span>
                        <button
                          aria-label="Augmenter la quantite"
                          onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                        >
                          <Icon.plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span>
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

            {suggestions.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-medium text-ink">Vous pourriez aussi aimer</p>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {suggestions.slice(0, 3).map((p) => (
                    <Link key={p.id} href={`/produit/${p.slug}`} className="group">
                      <div className="relative aspect-square overflow-hidden rounded-xl2 bg-sand">
                        {p.images[0] && (
                          <Image
                            src={p.images[0].src}
                            alt={p.images[0].alt}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        )}
                      </div>
                      <p className="mt-2 text-xs">{p.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="h-fit rounded-xl2 border border-ink/10 bg-white/60 p-6">
            <div className="flex items-center justify-between text-sm text-stone">
              <span>Sous-total</span>
              <span>{formatPrice(subtotal, currency)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-stone">
              <span>Livraison</span>
              <span>Offerte</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4 font-display text-xl">
              <span>Total</span>
              <span>{formatPrice(subtotal, currency)}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="btn-primary mt-6 w-full"
            >
              {loading ? "Redirection..." : "Passer au paiement"}
            </button>
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            <p className="mt-4 text-center text-xs text-stone">
              Paiement securise via Stripe · Retours gratuits 30 jours
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
