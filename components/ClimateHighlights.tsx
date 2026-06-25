import type { Locale } from "@/lib/i18n";

type Highlight = {
  value: string;
  label: { fr: string; en: string };
  sub: { fr: string; en: string };
  color: string;      // bg color class
  textColor: string;  // text color class
};

const HIGHLIGHTS: Highlight[] = [
  {
    value: "2 400h",
    label: { fr: "de soleil par an", en: "sunshine per year" },
    sub:   { fr: "Dans le top 5 des villes françaises les plus ensoleillées", en: "Top 5 sunniest cities in France" },
    color: "bg-amber-50", textColor: "text-amber-700",
  },
  {
    value: "22°C",
    label: { fr: "en mer (août)", en: "sea temp. (Aug)" },
    sub:   { fr: "Baignade confortable de juin à fin septembre", en: "Comfortable swimming June to late September" },
    color: "bg-sky-50", textColor: "text-sky-700",
  },
  {
    value: "4 jours",
    label: { fr: "de pluie en juillet", en: "rain days in July" },
    sub:   { fr: "Le mois le plus sec — mais la pluie reste possible", en: "Driest month — but rain is still possible" },
    color: "bg-sea/8", textColor: "text-sea-deep",
  },
  {
    value: "Sept.",
    label: { fr: "le meilleur mois", en: "the golden month" },
    sub:   { fr: "Mer chaude, foule partie, prix en baisse", en: "Warm sea, crowds gone, prices dropping" },
    color: "bg-orange-50", textColor: "text-orange-700",
  },
];

export function ClimateHighlights({ locale }: { locale: Locale }) {
  return (
    <div className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {HIGHLIGHTS.map((h) => (
        <div
          key={h.value}
          className={`rounded-2xl border border-line ${h.color} px-5 py-4`}
        >
          <p className={`font-display text-4xl font-bold leading-none ${h.textColor}`}>
            {h.value}
          </p>
          <p className={`mt-1 text-sm font-semibold ${h.textColor}`}>
            {locale === "fr" ? h.label.fr : h.label.en}
          </p>
          <p className="mt-1 text-xs text-muted leading-relaxed">
            {locale === "fr" ? h.sub.fr : h.sub.en}
          </p>
        </div>
      ))}
    </div>
  );
}
