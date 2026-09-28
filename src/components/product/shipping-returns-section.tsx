import { ShippingConfig } from "@/lib/types";
import { Icon } from "@/components/icons";

const RotateCcw = Icon["rotate-ccw"];

export function ShippingReturnsSection({ shipping }: { shipping: ShippingConfig }) {
  return (
    <section className="bg-sand/60 py-16 md:py-24">
      <div className="container-content grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <Icon.truck className="h-6 w-6 text-sage" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-2xl">Livraison offerte</h2>
          <p className="mt-3 text-ink/70">
            Votre commande est expédiée sous {shipping.dispatchWithinHours} heures. Comptez
            ensuite entre {shipping.minDays} et {shipping.maxDays} jours ouvrables pour la
            réception, avec un suivi disponible tout au long du trajet.
          </p>
        </div>
        <div>
          <RotateCcw className="h-6 w-6 text-sage" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-2xl">
            {shipping.returnDays} jours pour changer d&apos;avis
          </h2>
          <p className="mt-3 text-ink/70">
            Si le produit ne correspond pas à vos attentes, vous disposez de{" "}
            {shipping.returnDays} jours après réception pour nous contacter et organiser un
            retour gratuit. Les conditions détaillées sont disponibles sur notre page dédiée
            aux retours.
          </p>
        </div>
      </div>
    </section>
  );
}
