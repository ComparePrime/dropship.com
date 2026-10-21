import { SizeGuide } from "@/lib/types";

/** Tableau des tailles en vrai texte (lisible par les moteurs de recherche et les lecteurs d'ecran). */
export function SizeGuideSection({ guide }: { guide: SizeGuide }) {
  return (
    <section className="container-content py-16 md:py-24" id="guide-des-tailles">
      <h2 className="section-title text-center">{guide.title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-ink/70">{guide.intro}</p>

      <div className="mx-auto mt-10 max-w-3xl overflow-x-auto rounded-xl2 border border-ink/10 bg-white/50">
        <table className="w-full table-fixed text-center text-sm">
          <caption className="sr-only">{guide.title} (en centimètres)</caption>
          <thead>
            <tr className="bg-sand/70 text-xs uppercase tracking-wide text-ink/70">
              {guide.columns.map((col, i) => (
                <th key={col} scope="col" className={`px-1.5 py-3 text-[11px] font-semibold sm:px-3 sm:text-xs ${i === 0 ? "text-left" : ""}`}>
                  {col}
                  {i > 0 && <span className="block text-[11px] font-normal normal-case text-ink/50">en cm</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/10">
            {guide.rows.map((row) => (
              <tr key={row.size}>
                <th scope="row" className="px-2 py-2.5 text-left font-display text-base lining-nums text-ink sm:px-3">
                  {row.size}
                </th>
                {row.cells.map((cell, i) => (
                  <td key={i} className="px-1.5 py-2.5 tabular-nums sm:px-3 text-ink/80">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mx-auto mt-6 max-w-3xl list-disc space-y-1.5 pl-5 text-sm text-ink/70">
        {guide.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
