import { Objection } from "@/lib/types";
import { Icon } from "@/components/icons";

/**
 * Traite directement les doutes qui empechent l'achat, sous forme affirmative
 * (contrairement a la FAQ, qui reste une liste de questions factuelles).
 */
export function ObjectionsSection({ objections }: { objections: Objection[] }) {
  if (objections.length === 0) return null;

  return (
    <section className="bg-sand/60 py-16 md:py-24">
      <div className="container-content">
        <h2 className="section-title text-center">Ce que vous vous demandez peut-être</h2>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
          {objections.map((o) => (
            <div key={o.doubt} className="rounded-xl2 bg-white/60 p-6">
              <p className="font-display text-lg italic text-ink/60">"{o.doubt}"</p>
              <p className="mt-3 flex items-start gap-2 text-sm text-ink/80">
                <Icon.check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" strokeWidth={2} />
                <span>{o.response}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
