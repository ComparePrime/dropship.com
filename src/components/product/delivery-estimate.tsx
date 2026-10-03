import { ShippingConfig } from "@/lib/types";
import { Icon } from "@/components/icons";

const Clock = Icon.clock;
const Truck = Icon.truck;

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-CH", { day: "numeric", month: "long" }).format(date);
}

/**
 * Petite frise "commande → livraison" calculée à partir des vrais délais du
 * produit (`shipping.minDays`/`maxDays`/`dispatchWithinHours`), jamais d'un
 * chiffre fixe écrit en dur. Les dates affichées sont donc toujours à jour.
 */
export function DeliveryEstimate({ shipping }: { shipping: ShippingConfig }) {
  const today = new Date();
  const earliest = new Date(today);
  earliest.setDate(earliest.getDate() + shipping.minDays);
  const latest = new Date(today);
  latest.setDate(latest.getDate() + shipping.maxDays);

  return (
    <div className="flex items-center gap-3 text-xs text-ink/70">
      <div className="flex flex-1 items-center gap-2">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
          <Clock className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <div>
          <p className="font-medium text-ink">Commande</p>
          <p>Aujourd&apos;hui</p>
        </div>
      </div>
      <div className="h-px flex-1 bg-ink/10" aria-hidden="true" />
      <div className="flex flex-1 items-center gap-2">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage">
          <Truck className="h-4 w-4" strokeWidth={1.5} />
        </span>
        <div>
          <p className="font-medium text-ink">Livraison estimée</p>
          <p>
            {formatDate(earliest)} – {formatDate(latest)}
          </p>
        </div>
      </div>
    </div>
  );
}
