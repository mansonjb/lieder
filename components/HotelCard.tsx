import { PriceRange } from "@/components/PriceRange";
import { AffiliateLink } from "@/components/AffiliateLink";

export function HotelCard({
  name,
  village,
  photo,
  type,
  stars,
  priceLevel,
  features = [],
  href,
  ctaLabel,
  // legacy props kept for any callers that pre-date the photo upgrade
  area,
  price,
  highlights,
}: {
  name: string;
  village?: string;
  photo?: string;
  type?: string;
  stars?: number;
  priceLevel?: 1 | 2 | 3 | 4;
  features?: string[];
  href: string;
  ctaLabel: string;
  area?: string;
  price?: 1 | 2 | 3 | 4;
  highlights?: string[];
}) {
  const resolvedFeatures = features.length > 0 ? features : (highlights ?? []);
  const resolvedPrice = priceLevel ?? price;
  const resolvedVillage = village ?? area;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
      {photo ? (
        <div className="relative h-44 shrink-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt={name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {type ? (
            <span className="absolute left-2 top-2 rounded-full bg-sea-deep/90 px-2.5 py-0.5 text-xs font-semibold text-white">
              {type}
            </span>
          ) : null}
          {stars ? (
            <span className="absolute bottom-2 left-2 text-sm text-amber-300">
              {"★".repeat(stars)}
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold leading-tight text-ink">{name}</h3>
          {resolvedPrice ? <PriceRange level={resolvedPrice} /> : null}
        </div>
        {resolvedVillage ? (
          <p className="mt-0.5 text-xs text-muted">{resolvedVillage}</p>
        ) : null}
        {resolvedFeatures.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {resolvedFeatures.map((h) => (
              <li
                key={h}
                className="rounded-full bg-paper-2 px-2 py-0.5 text-xs text-ink/80"
              >
                {h}
              </li>
            ))}
          </ul>
        ) : null}
        <AffiliateLink
          network="stay22"
          context="hotelcard"
          href={href}
          className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-sea px-4 py-2 pt-4 text-sm font-semibold text-white transition-colors hover:bg-sea-deep"
        >
          {ctaLabel} {"→"}
        </AffiliateLink>
      </div>
    </article>
  );
}
