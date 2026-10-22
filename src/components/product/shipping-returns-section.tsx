import { ShippingConfig } from "@/lib/types";
import { Icon } from "@/components/icons";
import { getT } from "@/i18n/server";

const RotateCcw = Icon["rotate-ccw"];

export function ShippingReturnsSection({ shipping }: { shipping: ShippingConfig }) {
  const t = getT();
  return (
    <section className="bg-sand/60 py-16 md:py-24">
      <div className="container-content grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <Icon.truck className="h-6 w-6 text-sage" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-2xl">{t("Livraison offerte")}</h2>
          <p className="mt-3 text-ink/70">
            {t("Votre commande est expédiée sous {hours} heures. Comptez ensuite entre {min} et {max} jours ouvrables pour la réception, avec un suivi disponible tout au long du trajet.", {
              hours: shipping.dispatchWithinHours,
              min: shipping.minDays,
              max: shipping.maxDays,
            })}
          </p>
        </div>
        <div>
          <RotateCcw className="h-6 w-6 text-sage" strokeWidth={1.5} />
          <h2 className="mt-4 font-display text-2xl">
            {t("{days} jours pour changer d'avis", { days: shipping.returnDays })}
          </h2>
          <p className="mt-3 text-ink/70">
            {t("Si le produit ne correspond pas à vos attentes, vous disposez de {days} jours après réception pour nous contacter et organiser un retour gratuit. Les conditions détaillées sont disponibles sur notre page dédiée aux retours.", { days: shipping.returnDays })}
          </p>
        </div>
      </div>
    </section>
  );
}
