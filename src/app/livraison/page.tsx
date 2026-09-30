import type { Metadata } from "next";
import { getPublishedProducts } from "@/lib/products";
import { TrustBadges } from "@/components/trust-badges";

export const metadata: Metadata = {
  title: "Livraison",
  description: "Nos conditions de livraison : livraison offerte, expédition sous 24h.",
};

export default function ShippingPage() {
  const shipping = getPublishedProducts()[0].shipping;

  return (
    <section className="container-content max-w-2xl py-14">
      <h1 className="section-title">Livraison</h1>
      <div className="mt-6">
        <TrustBadges />
      </div>
      <div className="mt-8 flex flex-col gap-4 text-ink/80">
        <p>
          Toutes les commandes bénéficient de la livraison offerte, sans minimum d&apos;achat.
        </p>
        <p>
          Chaque commande est expédiée sous {shipping.dispatchWithinHours} heures. Le délai de
          livraison estimé est de {shipping.minDays} à {shipping.maxDays} jours ouvrables selon
          votre pays de livraison.
        </p>
        <p>
          Un numéro de suivi vous est communiqué dès l&apos;expédition de votre colis, afin de
          suivre son acheminement jusqu&apos;à votre domicile.
        </p>
      </div>
    </section>
  );
}
