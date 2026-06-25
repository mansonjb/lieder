import type { Locale } from "@/lib/i18n";
import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

type Season = {
  icon: string;
  name: { fr: string; en: string };
  months: { fr: string; en: string };
  temp: string;
  sea: string;
  crowd: number;        // 1-5
  budget: { fr: string; en: string };
  highlights: { fr: string; en: string }[];
  bestFor: { fr: string; en: string };
  warning?: { fr: string; en: string };
  color: string;
};

const SEASONS: Season[] = [
  {
    icon: "🌸",
    name:    { fr: "Printemps",    en: "Spring"     },
    months:  { fr: "Avr – Mai",    en: "Apr – May"  },
    temp: "12–18°C", sea: "13–16°C",
    crowd: 2,
    budget:  { fr: "Tarifs hors-saison (-30 à -50%)", en: "Off-season rates (-30 to -50%)" },
    highlights: [
      { fr: "Vélo sans foule sur 100 km de pistes", en: "Cycling 100 km of paths crowd-free" },
      { fr: "Marchés locaux et producteurs en direct", en: "Local markets and direct producers" },
      { fr: "Floraison des roses trémières (mai)", en: "Hollyhocks in bloom (May)" },
    ],
    bestFor: { fr: "Couples, cyclistes, amoureux du calme", en: "Couples, cyclists, peace-seekers" },
    color: "#86efac",
  },
  {
    icon: "☀️",
    name:    { fr: "Été",              en: "Summer"         },
    months:  { fr: "Juin – Août",      en: "Jun – Aug"      },
    temp: "20–27°C", sea: "19–22°C",
    crowd: 5,
    budget:  { fr: "Tarifs au maximum — réserver 6 mois avant", en: "Peak rates — book 6 months ahead" },
    highlights: [
      { fr: "Baignades, surf, kitesurf sur la côte atlantique", en: "Swimming, surfing, kitesurfing on the Atlantic coast" },
      { fr: "Marchés nocturnes et animation dans tous les villages", en: "Night markets and events in every village" },
      { fr: "Dégustation d'huîtres dans les cabanes ostréicoles", en: "Oyster tasting in the fishing shacks" },
    ],
    bestFor: { fr: "Familles, fêtards, amoureux de plage", en: "Families, beach lovers, summer vibe" },
    warning: { fr: "Circulation dense et parkings saturés — vélo fortement recommandé", en: "Heavy traffic and full car parks — cycling strongly recommended" },
    color: "#fbbf24",
  },
  {
    icon: "🍂",
    name:    { fr: "Automne",        en: "Autumn"         },
    months:  { fr: "Sep – Oct",      en: "Sep – Oct"      },
    temp: "15–22°C", sea: "18–21°C",
    crowd: 2,
    budget:  { fr: "Tarifs en baisse dès septembre", en: "Rates falling from September" },
    highlights: [
      { fr: "Mer encore chaude (>20°C en septembre)", en: "Sea still warm (>20°C in September)" },
      { fr: "Lumières d'automne parfaites pour la photographie", en: "Autumn light perfect for photography" },
      { fr: "Vendanges dans les vignes de Pineau des Charentes", en: "Harvest in the Pineau des Charentes vineyards" },
    ],
    bestFor: { fr: "Photographes, retraités, couples sans enfants", en: "Photographers, retirees, couples without kids" },
    color: "#f97316",
  },
  {
    icon: "🌿",
    name:    { fr: "Hiver",          en: "Winter"         },
    months:  { fr: "Nov – Fév",      en: "Nov – Feb"      },
    temp: "5–12°C", sea: "10–12°C",
    crowd: 1,
    budget:  { fr: "Tarifs au plancher, village très calme", en: "Rock-bottom rates, very quiet village" },
    highlights: [
      { fr: "Tempêtes atlantiques spectaculaires sur la côte", en: "Spectacular Atlantic storms on the coast" },
      { fr: "Marchés du terroir et huîtres sans attente", en: "Local markets and oysters without queues" },
      { fr: "Nombreux restaurants ferment — vérifier avant de venir", en: "Many restaurants close — check before visiting" },
    ],
    bestFor: { fr: "Randonneurs, ornithologues, pêcheurs à pied", en: "Hikers, birdwatchers, shellfish pickers" },
    warning: { fr: "Beaucoup d'hébergements et commerces fermés hors-saison", en: "Many accommodations and shops closed off-season" },
    color: "#93c5fd",
  },
];

function CrowdDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1" aria-label={`Fréquentation ${level}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${i < level ? "bg-ink" : "bg-line"}`}
        />
      ))}
    </div>
  );
}

export function SeasonGrid({ locale }: { locale: Locale }) {
  const crowdLabel = locale === "fr" ? "Affluence" : "Crowds";
  const budgetLabel = locale === "fr" ? "Budget" : "Budget";
  const bestForLabel = locale === "fr" ? "Idéal pour" : "Best for";
  const bookLabel = locale === "fr" ? "Voir les dispo →" : "Check availability →";

  return (
    <div className="my-10">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
          {locale === "fr" ? "Choisir sa saison" : "Choose your season"}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SEASONS.map((s) => (
          <div
            key={s.icon}
            className="rounded-2xl border border-line bg-white overflow-hidden flex flex-col"
          >
            {/* Header coloré */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{ background: s.color + "28" }}
            >
              <span className="text-3xl">{s.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-ink leading-none">
                  {locale === "fr" ? s.name.fr : s.name.en}
                  <span className="ml-2 font-normal text-sm text-muted">
                    {locale === "fr" ? s.months.fr : s.months.en}
                  </span>
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="font-mono text-[11px] text-ink">🌡 {s.temp}</span>
                  <span className="font-mono text-[11px] text-sky-600">🌊 {s.sea}</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4 flex flex-col gap-3 flex-1">
              {/* Affluence + budget */}
              <div className="flex flex-wrap items-start gap-x-6 gap-y-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1">{crowdLabel}</p>
                  <CrowdDots level={s.crowd} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted mb-1">{budgetLabel}</p>
                  <p className="text-xs text-ink">{locale === "fr" ? s.budget.fr : s.budget.en}</p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-1">
                {s.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-[10px]">›</span>
                    {locale === "fr" ? h.fr : h.en}
                  </li>
                ))}
              </ul>

              {/* Warning */}
              {s.warning && (
                <p className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800">
                  ⚠ {locale === "fr" ? s.warning.fr : s.warning.en}
                </p>
              )}

              {/* Best for + CTA */}
              <div className="mt-auto pt-2 border-t border-line flex items-center justify-between gap-3">
                <p className="text-xs text-muted">
                  <span className="font-medium text-ink">{bestForLabel} : </span>
                  {locale === "fr" ? s.bestFor.fr : s.bestFor.en}
                </p>
                <AffiliateLink
                  network="stay22"
                  context={`season-grid-${s.icon}`}
                  href={stay22Url("Île de Ré, France")}
                  className="shrink-0 rounded-xl bg-sea-deep px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-sea"
                >
                  {bookLabel}
                </AffiliateLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
