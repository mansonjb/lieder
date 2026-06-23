import type { Dict } from "@/data/i18n/ui";
import type { Geo } from "@/lib/types";
import { fill } from "@/lib/i18n";
import { BRAND_ACCENT } from "@/lib/site";
import { stay22MapSrc, stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

// Carte Stay22 contextualisee : une page = une intention de reservation.
export function Stay22Map({
  geo,
  label,
  campaign,
  dict,
}: {
  geo: Geo;
  label: string;
  campaign?: string;
  dict: Dict;
}) {
  const src = stay22MapSrc({
    lat: geo.lat,
    lng: geo.lng,
    zoom: geo.zoom,
    campaign,
    maincolor: BRAND_ACCENT,
    markerLabel: label,
  });
  const heading = fill(dict.stay22.hotelsNear, { name: label });

  return (
    <section className="my-10 rounded-2xl border border-dashed border-sand bg-white p-5 sm:p-7">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {dict.stay22.eyebrow}
          </p>
          <h2 className="mt-1 font-display text-xl font-semibold text-ink">
            {heading}
          </h2>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {dict.stay22.sponsored}
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-paper">
        <iframe
          src={src}
          title={heading}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block w-full"
          style={{ height: 460, border: 0 }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <AffiliateLink
          network="stay22"
          context={`${campaign ?? "stay"}-browse`}
          href={stay22Url(label)}
          className="inline-flex items-center gap-1.5 rounded-full bg-sea-deep px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sea"
        >
          {fill(dict.stay22.browse, { name: label })} {"→"}
        </AffiliateLink>
        <p className="max-w-md text-xs leading-relaxed text-muted">
          {dict.stay22.note}
        </p>
      </div>
    </section>
  );
}
