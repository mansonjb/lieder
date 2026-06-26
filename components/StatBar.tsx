import type { Locale } from "@/lib/i18n";

const STATS: { value: string; unit: string; fr: string; en: string; icon: string }[] = [
  { value: "73",   unit: "km²", fr: "superficie",           en: "land area",           icon: "🗺" },
  { value: "10",   unit: "",    fr: "communes",              en: "villages",            icon: "🏘" },
  { value: "85",   unit: "km",  fr: "pistes cyclables",      en: "of cycle paths",      icon: "🚴" },
  { value: "85",   unit: "km",  fr: "de côtes",              en: "of coastline",        icon: "🌊" },
  { value: "2",    unit: "",    fr: "«Plus Beaux Villages»", en: "\"most beautiful\"",  icon: "🏆" },
];

export function StatBar({ locale }: { locale: Locale }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-sea-deep via-sea to-sea/40" />
      <div className="flex flex-wrap gap-px bg-line">
        {STATS.map((s) => (
          <div
            key={s.fr}
            className="group flex flex-1 flex-col items-center gap-1.5 bg-white px-3 py-5 text-center"
            style={{ minWidth: "100px" }}
          >
            <span className="text-base">{s.icon}</span>
            <p className="font-display text-2xl leading-none text-sea-deep">
              {s.value}
              {s.unit && (
                <span className="ml-0.5 text-base text-sea">{s.unit}</span>
              )}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              {locale === "fr" ? s.fr : s.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
