import { Product } from "@/lib/types";
import { Icon } from "@/components/icons";
import { getT } from "@/i18n/server";

/**
 * « L'essentiel » : caractéristiques confirmées et contenu du colis, juste sous la zone d'achat.
 * Rien n'est affiché si la fiche n'a ni caractéristiques ni contenu documentés.
 */
export function KeyFactsSection({ product }: { product: Product }) {
  const t = getT();
  const specs = product.specs ?? [];
  const inBox = product.inBox ?? [];
  if (specs.length === 0 && inBox.length === 0) return null;

  return (
    <section className="container-content pb-4 pt-2 md:pb-8" aria-labelledby="essentiel">
      <div className="rounded-xl2 border border-ink/10 bg-white/50 p-6 md:p-8">
        <h2 id="essentiel" className="font-display text-2xl font-semibold text-ink md:text-3xl">
          {t("L'essentiel en un coup d'œil")}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {specs.length > 0 && (
            <div className={inBox.length > 0 ? "md:col-span-2" : "md:col-span-3"}>
              <p className="text-xs font-semibold uppercase tracking-widest text-sage">{t("Caractéristiques")}</p>
              <dl className="mt-3 divide-y divide-ink/10 text-[15px]">
                {specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-3 gap-3 py-2.5">
                    <dt className="text-ink/60">{spec.label}</dt>
                    <dd className="col-span-2 text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          {inBox.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sage">{t("Dans le colis")}</p>
              <ul className="mt-3 flex flex-col gap-2.5 text-[15px] text-ink/85">
                {inBox.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon.check className="mt-1 h-4 w-4 flex-shrink-0 text-sage" strokeWidth={2.25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
