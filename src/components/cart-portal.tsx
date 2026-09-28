"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Rend ses enfants directement sous document.body.
 *
 * Nécessaire car un ancêtre (le header) utilise backdrop-blur : backdrop-filter
 * crée un containing block pour les descendants en position fixed, exactement
 * comme transform ou filter. Sans portal, le panier `fixed inset-0` se
 * positionne alors par rapport au header (~70px de haut) au lieu du viewport,
 * ce qui provoquait la superposition/transparence constatée.
 */
export function CartPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}
