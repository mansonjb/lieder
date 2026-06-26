import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";

type Stat = { icon: string; value: string; label: { fr: string; en: string }; accent?: boolean };

function buildStats(slug: string, locale: Locale): Stat[] {
  const meta = VILLAGE_META[slug];
  if (!meta) return [];

  const stats: Stat[] = [
    {
      icon: "📍",
      value: `${meta.distancePontKm} km`,
      label: { fr: "du pont", en: "from bridge" },
    },
    {
      icon: "🌊",
      value: `${meta.beachCount}`,
      label: { fr: meta.beachCount > 1 ? "plages proches" : "plage proche", en: meta.beachCount > 1 ? "nearby beaches" : "nearby beach" },
    },
    {
      icon: "🚴",
      value: "100 km",
      label: { fr: "de pistes cyclables", en: "of cycle paths" },
    },
    {
      icon: "🛒",
      value: locale === "fr" ? meta.marketDay.fr : meta.marketDay.en,
      label: { fr: "marché", en: "market" },
    },
  ];

  if (meta.pbeauVillage) {
    stats.push({
      icon: "🏆",
      value: locale === "fr" ? "Labellisé" : "Certified",
      label: { fr: "Plus Beau Village", en: "Plus Beau Village" },
      accent: true,
    });
  }

  return stats;
}

export function VillageStatBar({ slug, locale }: { slug: string; locale: Locale }) {
  const stats = buildStats(slug, locale);
  if (!stats.length) return null;

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-sea-deep via-sea to-sea/40" />
      <div className="flex flex-wrap gap-px bg-line">
        {stats.map((s, i) => (
          <div
            key={i}
            className="group flex flex-1 flex-col items-center gap-1.5 bg-white px-3 py-4 text-center"
            style={{ minWidth: "110px" }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sea/10 text-lg transition-colors duration-200 group-hover:bg-sea/20">
              {s.icon}
            </div>
            <span className={`font-display text-xl font-bold leading-tight ${s.accent ? "text-amber-500" : "text-sea-deep"}`}>
              {s.value}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              {locale === "fr" ? s.label.fr : s.label.en}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
