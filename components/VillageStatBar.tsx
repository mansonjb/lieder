import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";

type Stat = { icon: string; value: string; label: { fr: string; en: string } };

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
    });
  }

  return stats;
}

export function VillageStatBar({ slug, locale }: { slug: string; locale: Locale }) {
  const stats = buildStats(slug, locale);
  if (!stats.length) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-px overflow-hidden rounded-2xl border border-line bg-line">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex flex-1 flex-col items-center gap-1 bg-white px-4 py-4 text-center"
          style={{ minWidth: "120px" }}
        >
          <span className="text-xl">{s.icon}</span>
          <span className="font-display text-lg font-semibold text-sea-deep leading-tight">
            {s.value}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {locale === "fr" ? s.label.fr : s.label.en}
          </span>
        </div>
      ))}
    </div>
  );
}
