"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/cart-context";
import { Icon } from "@/components/icons";

export default function ConfirmationPage() {
  const { clear } = useCart();

  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container-content flex flex-col items-center py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
        <Icon.check className="h-8 w-8 text-accentDark" strokeWidth={1.5} />
      </div>
      <h1 className="section-title mt-6">Merci pour votre commande</h1>
      <p className="mt-3 max-w-md text-stone">
        Votre paiement a bien ete pris en compte. Vous recevrez un email de confirmation avec
        les details de votre commande. Expedition sous 24h, livraison estimee entre 4 et 8
        jours ouvrables.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour a la boutique
      </Link>
    </section>
  );
}
