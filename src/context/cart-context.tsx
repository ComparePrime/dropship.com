"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartLine, Product } from "@/lib/types";

interface CartContextValue {
  lines: CartLine[];
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

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
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
          image: product.images[0]?.src ?? "",
          priceCHF: product.priceCHF,
          priceEUR: product.priceEUR,
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

  const clear = () => setLines([]);

  const totalItems = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);

  const value: CartContextValue = {
    lines,
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
