import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";
import { getByKey, pageHref } from "@/lib/registry";

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
        {picks.map((r, i) => (
          <div
            key={i}
            className="rounded-xl border border-line bg-white px-4 py-3 flex flex-col gap-1"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="font-semibold text-ink text-sm leading-snug">{r.name}</span>
              <span className="shrink-0 font-mono text-[10px] text-muted">{r.price}</span>
            </div>
            <span className="text-xs text-muted leading-relaxed">
              {locale === "fr" ? r.tag.fr : r.tag.en}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
