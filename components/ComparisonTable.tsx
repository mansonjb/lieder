import type { ReactNode } from "react";

export type ComparisonRow = { cells: ReactNode[] };

// Tableau comparatif editorial (capte la longue traine, rassure avant le clic Stay22).
// Sans donnees, affiche un etat vide structurant plutot que du faux contenu.
export function ComparisonTable({
  heading,
  columns,
  rows,
  emptyLabel,
}: {
  heading: string;
  columns?: string[];
  rows?: ComparisonRow[];
  emptyLabel?: string;
}) {
  return (
    <section className="my-10">
      <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
        {heading}
      </h2>
      {rows && rows.length > 0 && columns ? (
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-paper-2 text-left">
                {columns.map((c) => (
                  <th key={c} className="px-4 py-3 font-semibold text-ink">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-line">
                  {r.cells.map((cell, j) => (
                    <td key={j} className="px-4 py-3 align-top text-ink/90">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-paper-2 px-5 py-8 text-center text-sm text-muted">
          {emptyLabel ?? "Comparatif en préparation."}
        </div>
      )}
    </section>
  );
}
