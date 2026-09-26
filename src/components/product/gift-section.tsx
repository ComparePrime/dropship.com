"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/context/cart-context";

export function GiftSection({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <section className="bg-ink py-16 text-cream md:py-24">
      <div className="container-content text-center">
        <h2 className="font-display text-3xl md:text-4xl">
          Le petit cadeau qui fait sourire les amoureux des chats
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/70">
          Offrir un objet un peu different, qui sort des cadeaux habituels : voila ce que
          propose {product.name}, pour une personne qui aime les chats autant que les jolis
          details decoratifs.
        </p>
        <button
          type="button"
          onClick={() => addItem(product, 1)}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-cream px-8 py-4 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-cream/90"
        >
          Offrir ce produit
        </button>
      </div>
    </section>
  );
}
