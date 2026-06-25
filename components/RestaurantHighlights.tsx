import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";
import { getByKey, pageHref } from "@/lib/registry";

const VILLAGE_NAMES: Record<string, string> = {
  "rivedoux-plage":             "Rivedoux-Plage",
  "sainte-marie-de-re":        "Sainte-Marie-de-Ré",
  "la-flotte":                 "La Flotte",
  "saint-martin-de-re":        "Saint-Martin-de-Ré",
  "le-bois-plage-en-re":       "Le Bois-Plage-en-Ré",
  "la-couarde-sur-mer":        "La Couarde-sur-Mer",
  "loix":                      "Loix",
  "ars-en-re":                 "Ars-en-Ré",
  "saint-clement-des-baleines":"Saint-Clément-des-Baleines",
  "les-portes-en-re":          "Les Portes-en-Ré",
};

// Couleur d'ambiance par type de cuisine (déduit du tag)
const CUISINE_COLORS: [string, string][] = [
  ["huîtres", "#0e7490"],
  ["poisson", "#0e7490"],
  ["fruits de mer", "#0e7490"],
  ["seafood", "#0e7490"],
  ["fish", "#0e7490"],
  ["oyster", "#0e7490"],
  ["bistro", "#92400e"],
  ["bistrono", "#92400e"],
  ["brasserie", "#92400e"],
  ["planches", "#b45309"],
  ["tapas", "#b45309"],
  ["cabane", "#065f46"],
  ["terrasse", "#065f46"],
  ["marché", "#4d7c0f"],
  ["market", "#4d7c0f"],
  ["ardoise", "#7c3aed"],
];

function cuisineColor(tag: string): string {
  const t = tag.toLowerCase();
  for (const [kw, color] of CUISINE_COLORS) {
    if (t.includes(kw)) return color;
  }
  return "#5e8c7d";
}

export function RestaurantHighlights({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const meta = VILLAGE_META[slug];
  const picks = meta?.restaurantPicks;
  if (!picks?.length) return null;

  const restaurantEntry = getByKey(`restaurants/${slug}`);
  const restaurantHref = restaurantEntry ? pageHref(restaurantEntry, locale) : null;

  const villageName = VILLAGE_NAMES[slug] ?? slug;
  const heading = locale === "fr" ? "Où manger" : "Where to eat";
  const linkLabel = locale === "fr" ? "Voir toutes les adresses →" : "See all recommendations →";

  return (
    <div className="my-10">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
            🍽 {heading}
          </h2>
          <div className="h-px flex-1 bg-line" />
        </div>
        {restaurantHref && (
          <Link
            href={restaurantHref}
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-sea-deep hover:underline"
          >
            {linkLabel}
          </Link>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {picks.map((r, i) => {
          const tag = locale === "fr" ? r.tag.fr : r.tag.en;
          const color = cuisineColor(tag);
          const mapsHref = `https://www.google.com/maps/search/${encodeURIComponent(`${r.name}, ${villageName}, Île de Ré`)}`;
          return (
            <article
              key={i}
              className="relative rounded-xl border border-line bg-white overflow-hidden flex flex-col transition-colors hover:border-sea/40"
            >
              {/* Stretched link vers Google Maps */}
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sea"
                aria-label={r.name}
              />

              {/* Bande colorée + emoji catégorie */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ background: color + "18", borderBottom: `2px solid ${color}22` }}
              >
                <span className="text-lg">🍽</span>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.16em]"
                  style={{ color }}
                >
                  {tag}
                </span>
                <span className="ml-auto font-mono text-[10px]" style={{ color }}>{r.price}</span>
              </div>

              {/* Texte */}
              <div className="px-4 py-3 flex flex-col gap-1 flex-1">
                <span className="font-semibold text-ink text-sm leading-snug">{r.name}</span>
                <p className="relative z-10 mt-auto pt-2 text-[10px] font-mono text-sea-deep">
                  {locale === "fr" ? "Voir sur Maps →" : "View on Maps →"}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
