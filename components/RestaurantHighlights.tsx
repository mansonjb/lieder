import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";
import { getByKey, pageHref } from "@/lib/registry";

// Slug village → nom d'affichage pour les recherches
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
          const mapsHref = `https://www.google.com/maps/search/${encodeURIComponent(`${r.name}, ${villageName}, Île de Ré`)}`;
          return (
            <article
              key={i}
              className="relative rounded-xl border border-line bg-white px-4 py-3 flex flex-col gap-1 transition-colors hover:border-sea/40"
            >
              {/* Stretched link vers Google Maps */}
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sea"
                aria-label={r.name}
              />

              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-ink text-sm leading-snug">{r.name}</span>
                <span className="shrink-0 font-mono text-[10px] text-muted">{r.price}</span>
              </div>
              <span className="text-xs text-muted leading-relaxed">
                {locale === "fr" ? r.tag.fr : r.tag.en}
              </span>
              <p className="relative z-10 mt-2 text-[10px] font-mono text-sea-deep">
                {locale === "fr" ? "Voir sur Maps →" : "View on Maps →"}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
