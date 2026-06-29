import { AffiliateLink } from "@/components/AffiliateLink";
import type { VillaBooking } from "@/data/villas-booking";

function ratingColor(r: number) {
  if (r >= 9) return "bg-emerald-600";
  if (r >= 8) return "bg-teal-600";
  if (r >= 7) return "bg-sea-deep";
  return "bg-muted";
}

function reviewCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function VillaCard({
  villa,
  locale,
}: {
  villa: VillaBooking;
  locale: "fr" | "en";
}) {
  const ctaLabel = locale === "fr" ? "Réserver sur Booking.com" : "Book on Booking.com";
  const fromLabel = locale === "fr" ? "À PARTIR DE" : "FROM";
  const perNight = locale === "fr" ? "/ nuit" : "/ night";
  const reviewLabel = locale === "fr" ? "avis" : "reviews";

  const typeLabel =
    villa.type === "villa"
      ? locale === "fr" ? "Villa" : "Villa"
      : locale === "fr" ? "Maison" : "House";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Photo */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Rating badge — top left */}
        {villa.rating > 0 ? (
          <div className={`absolute left-2 top-2 flex items-center gap-1.5 rounded-xl ${ratingColor(villa.rating)} px-2 py-1`}>
            <span className="font-mono text-sm font-bold text-white leading-none">
              {villa.rating.toFixed(1)}
            </span>
            {villa.reviews > 0 ? (
              <span className="font-mono text-[10px] text-white/80 leading-none">
                {reviewCount(villa.reviews)}
              </span>
            ) : null}
          </div>
        ) : null}

        {/* Type badge — top right */}
        <span className="absolute right-2 top-2 rounded-xl bg-amber-400 px-2.5 py-1 font-mono text-[10px] font-bold text-amber-900 uppercase tracking-wide">
          {typeLabel}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-base font-semibold leading-snug text-ink line-clamp-2">
            {villa.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">
            {villa.city}, Île de Ré
            {villa.rating > 0 && villa.ratingLabel ? (
              <> · <span className="text-ink/70">{villa.ratingLabel}</span>
              {villa.reviews > 0 ? <> · {villa.reviews} {reviewLabel}</> : null}
              </>
            ) : null}
          </p>
        </div>

        {/* Description */}
        {villa.description ? (
          <p className="rounded-xl bg-paper-2 px-3 py-2.5 text-xs leading-relaxed text-ink/80 line-clamp-3">
            {villa.description}
          </p>
        ) : null}

        {/* Feature pills */}
        {villa.highlights.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5">
            {villa.highlights.slice(0, 3).map((h) => (
              <li
                key={h}
                className="rounded-full border border-line px-2 py-0.5 text-xs text-ink/70"
              >
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Footer: price + CTA */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-1">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted">{fromLabel}</p>
            <p className="font-display text-xl font-bold text-ink">
              {villa.pricePerNight}€{" "}
              <span className="text-sm font-normal text-muted">{perNight}</span>
            </p>
          </div>
          <AffiliateLink
            network="booking"
            context="villa-card"
            href={villa.url}
            className="shrink-0 rounded-full bg-[#003580] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#00224a]"
          >
            {ctaLabel} →
          </AffiliateLink>
        </div>
      </div>
    </article>
  );
}
