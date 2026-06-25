import type { Locale } from "@/lib/i18n";

const STATS: { value: string; unit: string; fr: string; en: string }[] = [
  { value: "85",   unit: "km²", fr: "superficie",           en: "land area"         },
  { value: "10",   unit: "",    fr: "communes",              en: "villages"          },
  { value: "100+", unit: "km",  fr: "pistes cyclables",      en: "of cycle paths"    },
  { value: "85",   unit: "km",  fr: "de côtes",              en: "of coastline"      },
  { value: "2",    unit: "",    fr: "«Plus Beaux Villages»", en: "\"most beautiful\""},
];

export function StatBar({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 border-y border-line py-7">
      {STATS.map((s) => (
        <div key={s.fr} className="text-center">
          <p className="font-display text-3xl leading-none text-sea-deep">
            {s.value}
            {s.unit && (
              <span className="ml-0.5 text-lg text-sea">{s.unit}</span>
            )}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {locale === "fr" ? s.fr : s.en}
          </p>
        </div>
      ))}
    </div>
  );
}
