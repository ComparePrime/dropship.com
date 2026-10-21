import { SizeGuide } from "@/lib/types";

/**
 * Tableau des tailles en vrai texte. Sur ordinateur : un tableau classique ;
 * sur mobile : une carte par taille, pour que rien ne soit coupe ni a faire defiler.
 */
export function SizeGuideTable({ guide }: { guide: SizeGuide }) {
  return (
    <table className="w-full text-sm md:table-fixed">
      <caption className="sr-only">{guide.title}</caption>
      <thead className="sr-only md:not-sr-only">
        <tr className="bg-sand/70 text-xs uppercase tracking-wide text-ink/70">
          {guide.columns.map((col, i) => (
            <th key={col} scope="col" className={`px-2 py-3 font-semibold ${i === 0 ? "text-left" : "text-left"}`}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {guide.rows.map((row) => (
          <tr
            key={row.size}
            className="mb-3 block rounded-xl border border-ink/10 bg-white/60 p-3 md:mb-0 md:table-row md:rounded-none md:border-0 md:border-t md:bg-transparent md:p-0"
          >
            <th scope="row" className="block pb-1 text-left font-display text-xl lining-nums text-ink md:table-cell md:px-2 md:py-2.5 md:text-base">
              {row.size}
            </th>
            {row.cells.map((cell, i) => (
              <td
                key={i}
                data-label={guide.columns[i + 1]}
                className="flex justify-between gap-3 py-0.5 text-ink/80 before:text-xs before:uppercase before:tracking-wide before:text-ink/50 before:content-[attr(data-label)] md:table-cell md:px-2 md:py-2.5 md:before:hidden"
              >
                <span className="text-right md:text-left">{cell}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
