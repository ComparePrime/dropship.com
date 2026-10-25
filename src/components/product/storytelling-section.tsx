import { StorytellingContent } from "@/lib/types";
import { getT } from "@/i18n/server";

/** Transition émotionnelle après le hero : avant de reparler produit, on installe une idée. */
export function StorytellingSection({
  content,
  gap,
  productName,
}: {
  content: StorytellingContent;
  gap?: { today: string; withProduct: string };
  productName?: string;
}) {
  const t = getT();
  return (
    <section className="container-content max-w-2xl py-16 text-center md:py-20">
      <span className="text-xs font-medium uppercase tracking-widest text-sage">
        {content.eyebrow}
      </span>
      <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
        {content.title}
      </h2>
      <div className="mx-auto mt-5 flex max-w-xl flex-col gap-3 text-ink/75">
        {content.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
      {gap && (
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          <div className="rounded-xl2 border border-ink/10 bg-white/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone">{t("Aujourd'hui")}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{gap.today}</p>
          </div>
          <div className="rounded-xl2 border border-sage/25 bg-sage/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-sageDeep">
              {productName ? t("Avec {name}", { name: productName }) : t("Avec ce produit")}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{gap.withProduct}</p>
          </div>
        </div>
      )}
    </section>
  );
}
