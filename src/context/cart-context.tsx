"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartLine, Product } from "@/lib/types";

/** Ligne de panier d'un produit (prix du lot ou de la variante inclus), sans l'ajouter au panier. */
export function buildCartLine(product: Product, quantity = 1, variantLabel?: string): CartLine {
  const pack = product.packOffers?.find((p) => p.label === variantLabel);
  const variantImage = product.variants?.find((v) => v.label === variantLabel)?.image.src;
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    image: variantImage ?? product.images[0]?.src ?? "",
    priceCHF: pack?.priceCHF ?? product.priceCHF,
    priceEUR: pack?.priceEUR ?? product.priceEUR,
    quantity,
    packLabel: product.packLabel,
    variantLabel,
  };
}

export interface AppliedPromo {
  code: string;
  percent: number;
}

interface CartContextValue {
  lines: CartLine[];
  promo: AppliedPromo | null;
  applyPromo: (code: string) => Promise<{ ok: boolean; message: string }>;
  removePromo: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number, variantLabel?: string) => void;
  removeItem: (productId: string, variantLabel?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantLabel?: string) => void;
  clear: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "mf_cart";
const PROMO_KEY = "mf_promo";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [promo, setPromo] = useState<AppliedPromo | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);

    // Un code memorise est revalide aupres du serveur : un code retire ou modifie disparait.
    try {
      const storedCode = window.localStorage.getItem(PROMO_KEY);
      if (storedCode) {
        fetch("/api/promo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: storedCode }),
        })
          .then((res) => (res.ok ? res.json() : null))
          .then((data) => {
            if (data?.code && typeof data.percent === "number") {
              setPromo({ code: data.code, percent: data.percent });
            } else {
              window.localStorage.removeItem(PROMO_KEY);
            }
          })
          .catch(() => {});
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore
    }
  }, [lines, hydrated]);

  const addItem = (product: Product, quantity = 1, variantLabel?: string) => {
    // Le stock, quand il est suivi, plafonne la quantite ajoutable : on ne
    // reserve/decremente rien ici (simple plafond côté panier), la
    // disponibilite reelle est revalidee cote serveur avant paiement.
    const cap = product.stock && product.stock.source !== "none" ? product.stock.quantity : Infinity;
    // Deux variantes du meme produit restent deux lignes distinctes.
    const matchesLine = (l: CartLine) => l.productId === product.id && l.variantLabel === variantLabel;
    // Un lot est ajoute avec son libelle en tant que variantLabel : il garde son propre prix.
    const pack = product.packOffers?.find((p) => p.label === variantLabel);
    const variantImage = product.variants?.find((v) => v.label === variantLabel)?.image.src;

    setLines((prev) => {
      const existing = prev.find(matchesLine);
      if (existing) {
        const nextQuantity = Math.min(cap, existing.quantity + quantity);
        return prev.map((l) => (matchesLine(l) ? { ...l, quantity: nextQuantity } : l));
      }
      return [
        ...prev,
        {
          productId: product.id,
          slug: product.slug,
          name: product.name,
          image: variantImage ?? product.images[0]?.src ?? "",
          priceCHF: pack?.priceCHF ?? product.priceCHF,
          priceEUR: pack?.priceEUR ?? product.priceEUR,
          quantity: Math.min(cap, quantity),
          packLabel: product.packLabel,
          variantLabel,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, variantLabel?: string) => {
    setLines((prev) =>
      prev.filter((l) => !(l.productId === productId && l.variantLabel === variantLabel))
    );
  };

  const updateQuantity = (productId: string, quantity: number, variantLabel?: string) => {
    if (quantity <= 0) {
      removeItem(productId, variantLabel);
      return;
    }
    setLines((prev) =>
      prev.map((l) =>
        l.productId === productId && l.variantLabel === variantLabel ? { ...l, quantity } : l
      )
    );
  };

  const clear = () => {
    setLines([]);
    setPromo(null);
    // Suppression directe du stockage : la page de confirmation appelle clear() avant que le
    // panier memorise ne soit relu au chargement, qui sinon le restaurerait.
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(PROMO_KEY);
    } catch {
      // ignore
    }
  };

  const applyPromo = async (code: string): Promise<{ ok: boolean; message: string }> => {
    try {
      const res = await fetch("/api/promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (!res.ok) return { ok: false, message: data.error ?? "Ce code promo n'est pas valide." };
      setPromo({ code: data.code, percent: data.percent });
      try {
        window.localStorage.setItem(PROMO_KEY, data.code);
      } catch {
        // ignore
      }
      return { ok: true, message: `Code ${data.code} appliqué : −${data.percent} % sur votre commande.` };
    } catch {
      return { ok: false, message: "Impossible de vérifier le code pour le moment. Réessayez." };
    }
  };

  const removePromo = () => {
    setPromo(null);
    try {
      window.localStorage.removeItem(PROMO_KEY);
    } catch {
      // ignore
    }
  };

  const totalItems = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);

  const value: CartContextValue = {
    lines,
    promo,
    applyPromo,
    removePromo,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    clear,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
