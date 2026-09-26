import { ProductBenefit } from "@/lib/types";
import { Icon, IconName } from "@/components/icons";

export function BenefitsSection({ benefits }: { benefits: ProductBenefit[] }) {
  return (
    <section className="container-content py-16 md:py-24">
      <h2 className="section-title text-center">Pourquoi vous allez l&apos;aimer</h2>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {benefits.map((benefit) => {
          const IconComp = Icon[benefit.icon as IconName] ?? Icon.cat;
          return (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sand">
                <IconComp className="h-6 w-6 text-accentDark" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm text-stone">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
