import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";
import { getByKey, pageHref } from "@/lib/registry";
import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

// Photos scrapées via Apify Google Places (vraies photos des établissements)
import hotelImagesRaw from "@/data/hotel-images.generated.json";
const hotelImages = hotelImagesRaw as Record<string, string>;

// Fallback local : images de la commune (jamais d'Unsplash générique sans rapport)
function typePhoto(slug: string, idx: number): string {
  const variants = [
    `/images/villages/${slug}.webp`,
    `/images/villages/${slug}-2.webp`,
    `/images/villages/${slug}-3.webp`,
  ];
  return variants[idx % variants.length];
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[12px] text-amber-300" aria-label={`${count} étoiles`}>
      {"★".repeat(count)}
    </span>
  );
}

const TYPE_COLORS: [string, string][] = [
  ["hôtel", "#0f766e"], ["hotel", "#0f766e"], ["relais", "#0f766e"],
  ["gîte", "#4d7c0f"], ["location", "#4d7c0f"], ["villa", "#4d7c0f"], ["maison", "#4d7c0f"],
  ["camping", "#b45309"], ["glamping", "#b45309"],
  ["chambre", "#7c3aed"], ["bed", "#7c3aed"],
];

function typeColor(label: string): string {
  const t = label.toLowerCase();
  for (const [kw, color] of TYPE_COLORS) {
    if (t.includes(kw)) return color;
  }
  return "#5e8c7d";
}

function typeEmoji(label: string): string {
  const t = label.toLowerCase();
  if (t.includes("camping") || t.includes("glamping")) return "⛺";
  if (t.includes("gîte") || t.includes("location") || t.includes("villa")) return "🏡";
  if (t.includes("chambre") || t.includes("bed")) return "🛏";
  return "🏨";
}

export function AccommodationHighlights({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const meta = VILLAGE_META[slug];
  const picks = meta?.accommodationPicks;
  if (!picks?.length) return null;

  const ouDormirEntry = getByKey(`ou-dormir/${slug}`) ?? getByKey("ou-dormir");
  const ouDormirHref = ouDormirEntry ? pageHref(ouDormirEntry, locale) : null;

  const heading = locale === "fr" ? "Où dormir" : "Where to stay";
  const linkLabel = locale === "fr" ? "Tous les hébergements →" : "All accommodation →";
  const reserveLabel = locale === "fr" ? "Voir les disponibilités" : "Check availability";

  return (
    <div className="my-10">
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
            🛏 {heading}
          </h2>
          <div className="h-px flex-1 bg-line" />
        </div>
        {ouDormirHref && (
          <a
            href={ouDormirHref}
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-sea-deep hover:underline"
          >
            {linkLabel}
          </a>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {picks.map((r, i) => {
          const typeLabel = locale === "fr" ? r.type.fr : r.type.en;
          const frLabel = r.type.fr;
          const color = typeColor(frLabel);
          const emoji = typeEmoji(frLabel);
          const scraped = hotelImages[`${slug}-${i}`];
          const photo = scraped || typePhoto(slug, i);
          const s22href = stay22Url(`${r.name}, Île de Ré, France`, r.name);

          return (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
            >
              <AffiliateLink
                network="stay22"
                context="accom-highlights"
                href={s22href}
                className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sea"
                ariaLabel={r.name}
              >
                <span className="sr-only">{r.name}</span>
              </AffiliateLink>

              {/* Photo */}
              <div className="relative h-44 w-full overflow-hidden bg-sand">
                <Image
                  src={photo}
                  alt={r.name}
                  fill
                  sizes="(max-width:640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient + stars + price overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-3">
                  {r.stars ? <Stars count={r.stars} /> : <span />}
                  <span className="rounded-full bg-white/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white backdrop-blur-sm">
                    {r.price}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="px-4 pt-3.5 pb-4 flex flex-col gap-2">
                {/* Type badge */}
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">{emoji}</span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.15em]"
                    style={{ color }}
                  >
                    {typeLabel}
                  </span>
                </div>

                {/* Name */}
                <p className="font-semibold text-ink leading-snug text-sm">{r.name}</p>

                {/* CTA */}
                <div className="mt-1">
                  <span
                    className="inline-flex items-center gap-1 rounded-lg px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white transition-opacity group-hover:opacity-90"
                    style={{ background: color }}
                  >
                    {reserveLabel} →
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
