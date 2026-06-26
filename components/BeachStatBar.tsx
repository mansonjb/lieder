import type { Locale } from "@/lib/i18n";
import { BEACH_META } from "@/data/beach-meta";
import { getByKey } from "@/lib/registry";

export function BeachStatBar({ slug, locale }: { slug: string; locale: Locale }) {
  const meta = BEACH_META[slug];
  if (!meta) return null;

  const communeEntry = getByKey(`villages/${meta.commune}`);
  // Strip leading "Visiter " / "Visit " verb prefix from h1 to get bare village name
  const rawName = communeEntry ? communeEntry.h1[locale] : null;
  const communeName = rawName?.replace(/^(Visiter |Visit )/i, "") ?? null;

  const expLabel =
    meta.exposition === "atlantique"
      ? { fr: "Atlantique", en: "Atlantic" }
      : { fr: "Pertuis", en: "Pertuis" };

  const baigLabel =
    meta.baignade === "surveillee"
      ? { fr: "Surveillée (été)", en: "Lifeguarded (summer)" }
      : { fr: "Libre", en: "Unlifeguarded" };

  const stats = [
    { label: { fr: "Exposition", en: "Exposure" },       value: locale === "fr" ? expLabel.fr : expLabel.en,   icon: "🧭" },
    { label: { fr: "Longueur",   en: "Length"    },       value: meta.longueur,                                  icon: "📏" },
    { label: { fr: "Village",    en: "Village"   },       value: communeName ?? meta.commune,                    icon: "🏘" },
    { label: { fr: "Baignade",   en: "Swimming"  },       value: locale === "fr" ? baigLabel.fr : baigLabel.en,  icon: "🏊",
      highlight: meta.baignade === "surveillee" },
  ];

  const mapsUrl = `https://maps.google.com/?q=${meta.lat},${meta.lng}`;
  const mapsLabel = locale === "fr" ? "Itinéraire Google Maps" : "Google Maps directions";

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-sea-deep via-sea to-sea/40" />
      <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white px-4 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <span className="mr-1">{s.icon}</span>
              {locale === "fr" ? s.label.fr : s.label.en}
            </p>
            <p className={`mt-1 text-sm font-semibold leading-tight ${s.highlight ? "text-sea-deep" : "text-ink"}`}>
              {s.value}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-4 py-2.5">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] text-sea-deep hover:underline"
        >
          <span>📍</span>
          <span>{mapsLabel}</span>
          <span className="text-[10px] text-muted">↗</span>
        </a>
      </div>
    </div>
  );
}
