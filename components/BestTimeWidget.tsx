import type { Locale } from "@/lib/i18n";

const MONTHS: Record<Locale, string[]> = {
  fr: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

// 0 = creux, 1 = epaule, 2 = pleine saison. Saisonnalite indicative de l'Île de Ré.
const DEFAULT_RATING = [0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 0, 0];

export function BestTimeWidget({
  locale,
  heading,
  note,
  rating = DEFAULT_RATING,
  highlight,
}: {
  locale: Locale;
  heading: string;
  note: string;
  rating?: number[];
  highlight?: number; // index 0-11 du mois a surligner
}) {
  const cls = ["bg-paper-2 text-muted", "bg-sand text-ink", "bg-sea text-white"];
  return (
    <section className="my-10 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-sea-deep via-sea to-sea/40" />
      <div className="p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sea-deep">
          🗓 {heading}
        </p>
        <p className="mt-1 mb-4 text-sm text-muted">{note}</p>
        <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-12">
          {MONTHS[locale].map((m, i) => (
            <div
              key={m}
              className={`rounded-lg px-1 py-2 text-center text-xs font-medium ${cls[rating[i] ?? 0]} ${
                highlight === i ? "ring-2 ring-sea-deep ring-offset-1 ring-offset-white" : ""
              }`}
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
