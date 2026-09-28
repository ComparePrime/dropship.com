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
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
        <Icon.check className="h-8 w-8 text-sage" strokeWidth={1.5} />
      </div>
      <h1 className="section-title mt-6">Merci pour votre commande</h1>
      <p className="mt-3 max-w-md text-stone">
        Votre paiement a bien été pris en compte. Vous recevrez un email de confirmation avec
        les détails de votre commande. Expédition sous 24h, livraison estimée entre 4 et 8
        jours ouvrables.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour à la boutique
      </Link>
    </section>
  );
}
