import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";
import { getByKey, pageHref } from "@/lib/registry";
import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[11px] text-amber-400" aria-label={`${count} étoiles`}>
      {"★".repeat(count)}{"☆".repeat(Math.max(0, 5 - count))}
    </span>
  );
}

const TYPE_COLORS: [string, string][] = [
  ["hôtel", "#0f766e"],
  ["hotel", "#0f766e"],
  ["relais", "#0f766e"],
  ["gîte", "#4d7c0f"],
  ["location", "#4d7c0f"],
  ["villa", "#4d7c0f"],
  ["maison", "#4d7c0f"],
  ["camping", "#b45309"],
  ["glamping", "#b45309"],
  ["lodge", "#b45309"],
  ["chambre", "#7c3aed"],
  ["bed", "#7c3aed"],
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
  const reserveLabel = locale === "fr" ? "Voir les dispo →" : "Check availability →";

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
          const typeLabel = locale === "fr" ? r.type.fr : r.type.en;
          const color = typeColor(typeLabel);
          const emoji = typeEmoji(typeLabel);
          const s22href = stay22Url(`${r.name}, Île de Ré, France`);
          return (
            <article
              key={i}
              className="relative rounded-xl border border-line bg-white overflow-hidden flex flex-col transition-colors hover:border-sea/40"
            >
              <AffiliateLink
                network="stay22"
                context="accom-highlights"
                href={s22href}
                className="absolute inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sea"
                ariaLabel={r.name}
              >
                <span className="sr-only">{r.name}</span>
              </AffiliateLink>

              {/* Bande type + emoji */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ background: color + "18", borderBottom: `2px solid ${color}22` }}
              >
                <span className="text-lg">{emoji}</span>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.16em]"
                  style={{ color }}
                >
                  {typeLabel}
                </span>
                <span className="ml-auto font-mono text-[10px]" style={{ color }}>{r.price}</span>
              </div>

              {/* Texte */}
              <div className="px-4 py-3 flex flex-col gap-1 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-ink text-sm leading-snug">{r.name}</span>
                  {r.stars ? <Stars count={r.stars} /> : null}
                </div>
                <p className="relative z-10 mt-auto pt-2 text-[10px] font-mono text-sea-deep">
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
