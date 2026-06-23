import { PriceRange } from "@/components/PriceRange";
import { AffiliateLink } from "@/components/AffiliateLink";

// Carte hebergement pour les selections "ou dormir" (a alimenter au Lot 1).
export function HotelCard({
  name,
  area,
  price,
  highlights = [],
  href,
  ctaLabel,
}: {
  name: string;
  area?: string;
  price?: 1 | 2 | 3 | 4;
  highlights?: string[];
  href: string;
  ctaLabel: string;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-paper p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-ink">{name}</h3>
        {price ? <PriceRange level={price} /> : null}
      </div>
      {area ? <p className="mt-1 text-sm text-muted">{area}</p> : null}
      {highlights.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <li
              key={h}
              className="rounded-full bg-paper-2 px-2.5 py-1 text-xs text-ink/80"
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
        className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-sea px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sea-deep"
      >
        {ctaLabel} {"→"}
      </AffiliateLink>
    </article>
  );
}
