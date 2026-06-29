import { AffiliateLink } from "@/components/AffiliateLink";
import { PriceRange } from "@/components/PriceRange";
import type { VillaBooking } from "@/data/villas-booking";

function priceLevel(pricePerNight: number): 1 | 2 | 3 | 4 {
  if (pricePerNight < 300) return 1;
  if (pricePerNight < 500) return 2;
  if (pricePerNight < 800) return 3;
  return 4;
}

function RatingBadge({ rating }: { rating: number }) {
  if (!rating) return null;
  const color =
    rating >= 9 ? "bg-emerald-600" : rating >= 8 ? "bg-teal-600" : "bg-sea-deep";
  return (
    <span
      className={`${color} absolute right-2 top-2 rounded-lg px-2 py-0.5 font-mono text-xs font-bold text-white`}
    >
      {rating.toFixed(1)}
    </span>
  );
}

export function VillaCard({
  villa,
  locale,
}: {
  villa: VillaBooking;
  locale: "fr" | "en";
}) {
  const ctaLabel = locale === "fr" ? "Voir sur Booking.com" : "View on Booking.com";
  const perNightLabel = locale === "fr" ? "/nuit" : "/night";
  const level = priceLevel(villa.pricePerNight);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-52 shrink-0 overflow-hidden bg-sand">
        {villa.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={villa.image}
            alt={villa.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <RatingBadge rating={villa.rating} />
        {villa.reviews > 0 ? (
          <span className="absolute bottom-2 left-3 text-xs text-white/80">
            {villa.reviews} {locale === "fr" ? "avis" : "reviews"}
          </span>
        ) : null}
        <span className="absolute bottom-2 right-3 font-mono text-sm font-semibold text-white">
          {villa.pricePerNight}€{perNightLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-sm font-semibold leading-snug text-ink line-clamp-2">
            {villa.name}
          </h3>
          <PriceRange level={level} />
        </div>

        <p className="text-xs text-muted">{villa.city}, Île de Ré</p>

        {villa.highlights.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5">
            {villa.highlights.slice(0, 3).map((h) => (
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
          network="booking"
          context="villa-card"
          href={villa.url}
          className="mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-[#003580] px-4 py-2 pt-3 text-sm font-semibold text-white transition-colors hover:bg-[#00224a]"
        >
          {ctaLabel} {"→"}
        </AffiliateLink>
      </div>
    </article>
  );
}
