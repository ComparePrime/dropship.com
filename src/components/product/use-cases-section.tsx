import { UseCase } from "@/lib/types";
import { getT } from "@/i18n/server";

export function UseCasesSection({
  useCases,
  title,
  intro,
}: {
  useCases: UseCase[];
  title?: string;
  intro?: string;
}) {
  const t = getT();
  title = title ?? t("Où l'installer ?");
  intro = intro ?? t("À quoi ressemblerait-il chez vous ? Voici les endroits où il trouve le plus naturellement sa place.");
  return (
    <section className="container-content py-16 md:py-24">
      <h2 className="section-title text-center">{title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-ink/70">{intro}</p>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {useCases.map((useCase) => (
          <div
            key={useCase.title}
            className="rounded-xl2 border border-ink/10 bg-white/50 p-6 transition-shadow hover:shadow-card"
          >
            <h3 className="font-display text-lg text-ink">{useCase.title}</h3>
            <p className="mt-2 text-sm text-stone">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
