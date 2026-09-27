import { DemoStep } from "@/lib/types";

/** Permet de comprendre le produit sans avoir besoin de retourner sur la fiche fournisseur. */
export function DemoSection({ steps }: { steps: DemoStep[] }) {
  if (steps.length === 0) return null;

  return (
    <section className="container-content py-16 md:py-24">
      <h2 className="section-title text-center">Comment ça fonctionne</h2>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, idx) => (
          <div key={step.title} className="text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-sage font-display text-lg text-white">
              {idx + 1}
            </div>
            <h3 className="mt-4 text-base font-medium text-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-stone">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
