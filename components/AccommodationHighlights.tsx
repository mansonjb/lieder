import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";
import { getByKey, pageHref } from "@/lib/registry";
import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";
import { galleryImages, heroImage } from "@/lib/images";

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[10px] text-amber-500" aria-label={`${count} étoiles`}>
      {"★".repeat(count)}
    </span>
  );
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
  const reserveLabel = locale === "fr" ? "Voir les dispo →" : "Check availability →";

  // Photos du village, décalées pour que chaque card ait une image différente
  const gallery = [
    heroImage(`villages/${slug}`),
    ...galleryImages(`villages/${slug}`).slice(1),
  ].filter(Boolean) as string[];

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
          <Link
            href={ouDormirHref}
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-sea-deep hover:underline"
          >
            {linkLabel}
          </Link>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {picks.map((r, i) => {
          const img = gallery[i % gallery.length];
          const s22href = stay22Url(`${r.name}, Île de Ré, France`);
          return (
            <article
              key={i}
              className="relative rounded-xl border border-line bg-white overflow-hidden flex flex-col transition-colors hover:border-sea/40"
            >
              {/* Stretched affiliate link */}
              <AffiliateLink
                network="stay22"
                context="accom-highlights"
                href={s22href}
                className="absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sea"
                ariaLabel={r.name}
              >
                <span className="sr-only">{r.name}</span>
              </AffiliateLink>

              {/* Thumbnail photo */}
              {img && (
                <div className="relative h-32 w-full shrink-0">
                  <Image
                    src={img}
                    alt={r.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Texte */}
              <div className="px-4 py-3 flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-ink text-sm leading-snug">{r.name}</span>
                  <span className="shrink-0 font-mono text-[10px] text-muted">{r.price}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-muted leading-relaxed">
                    {locale === "fr" ? r.type.fr : r.type.en}
                  </span>
                  {r.stars ? <Stars count={r.stars} /> : null}
                </div>
                <p className="relative z-10 mt-2 text-[10px] font-mono text-sea-deep">
                  {reserveLabel}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
