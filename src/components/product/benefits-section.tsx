import { ProductBenefit } from "@/lib/types";
import { Icon } from "@/components/icons";

/** Avantages en cartes : pastille verte cochee, titre fort, explication courte. */
export function BenefitsSection({ benefits }: { benefits: ProductBenefit[] }) {
  return (
    <section className="container-content py-14 md:py-20">
      <h2 className="section-title">Pourquoi vous allez l&apos;aimer</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex items-start gap-4 rounded-xl2 border border-sage/15 bg-sage/5 p-5 md:p-6"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage text-white">
              <Icon.check className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{benefit.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-ink/70">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
