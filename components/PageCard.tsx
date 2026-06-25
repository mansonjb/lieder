import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import { pageHref } from "@/lib/registry";
import { heroImage } from "@/lib/images";

export const SILO_META: Record<string, { icon: string; color: string; fr: string; en: string }> = {
  villages:            { icon: "🏘",  color: "#3fa99b", fr: "Villages",      en: "Villages"      },
  plages:              { icon: "🌊",  color: "#2e7d74", fr: "Plages",        en: "Beaches"       },
  "ou-dormir":         { icon: "🛏",  color: "#5e8c7d", fr: "Hébergements",  en: "Where to stay" },
  "ou-dormir-mariage": { icon: "💍",  color: "#c9a028", fr: "Mariage",       en: "Wedding stays" },
  "que-faire":         { icon: "🚴",  color: "#3fa99b", fr: "Activités",     en: "Activities"    },
  restaurants:         { icon: "🍽",  color: "#5e8c7d", fr: "Restaurants",   en: "Restaurants"   },
  gastronomie:         { icon: "🧂",  color: "#c9a028", fr: "Gastronomie",   en: "Food & drink"  },
  "quand-venir":       { icon: "🌤",  color: "#2e7d74", fr: "Quand venir",   en: "When to visit" },
  evenements:          { icon: "📅",  color: "#3fa99b", fr: "Événements",    en: "Events"        },
  sejour:              { icon: "☀",   color: "#5e8c7d", fr: "Séjour",        en: "Your stay"     },
  preparer:            { icon: "🗺",  color: "#2e7d74", fr: "Préparer",      en: "Plan ahead"    },
  comparatifs:         { icon: "⚖",   color: "#6e746a", fr: "Comparatifs",   en: "Comparisons"   },
  home:                { icon: "🏝",  color: "#3fa99b", fr: "Accueil",       en: "Home"          },
  legal:               { icon: "📄",  color: "#6e746a", fr: "Légal",         en: "Legal"         },
};

export function PageCard({
  entry,
  locale,
}: {
  entry: PageEntry;
  locale: Locale;
}) {
  const meta = SILO_META[entry.silo] ?? { icon: "✦", color: "#3fa99b", fr: entry.silo, en: entry.silo };
  const siloLabel = locale === "fr" ? meta.fr : meta.en;
  const thumb = heroImage(entry.key);
  const cta = locale === "fr" ? "Découvrir" : "Explore";

  return (
    <Link
      href={pageHref(entry, locale)}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.14)]"
      style={{ outline: `1.5px solid ${meta.color}28` }}
    >
      {/* ── Photo zone ── */}
      <div
        className="relative h-48 w-full shrink-0 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${meta.color}30 0%, ${meta.color}18 100%)`,
        }}
      >
        {thumb ? (
          <Image
            src={thumb}
            alt={entry.h1[locale]}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* No-photo fallback: diagonal texture pattern */
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full opacity-[0.18]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id={`diag-${entry.key.replace(/[^a-z0-9]/g, "-")}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke={meta.color} strokeWidth="4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#diag-${entry.key.replace(/[^a-z0-9]/g, "-")})`} />
          </svg>
        )}

        {/* Gradient overlay (always) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category badge — top left */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 backdrop-blur-sm"
          style={{ background: meta.color }}
        >
          <span className="text-[12px] leading-none">{meta.icon}</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white font-semibold">
            {siloLabel}
          </span>
        </div>

        {/* Arrow pill — bottom right, revealed on hover */}
        <div
          className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm text-sm opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
          aria-hidden
        >
          →
        </div>

        {/* Decorative dots — bottom left */}
        <div className="absolute bottom-3 left-4 flex gap-1 opacity-50" aria-hidden>
          <span className="block h-1 w-1 rounded-full bg-white" />
          <span className="block h-1 w-1 rounded-full bg-white opacity-60" />
          <span className="block h-1 w-1 rounded-full bg-white opacity-30" />
        </div>
      </div>

      {/* ── Colored accent separator ── */}
      <div className="h-[3px] w-full shrink-0" style={{ background: meta.color }} />

      {/* ── Card body ── */}
      <div
        className="flex flex-1 flex-col px-5 pt-4 pb-5"
        style={{
          background: `linear-gradient(180deg, ${meta.color}07 0%, transparent 60%)`,
        }}
      >
        {/* Title */}
        <h3 className="font-display text-[17px] leading-snug text-ink transition-colors duration-150 group-hover:text-sea-deep">
          {entry.h1[locale]}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted">
          {entry.description[locale]}
        </p>

        {/* CTA row */}
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-black/[0.05]">
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-[gap] duration-150 group-hover:gap-2.5"
            style={{ color: meta.color }}
          >
            {cta}
            <span aria-hidden className="text-[11px]">→</span>
          </span>
          {/* Tiny color accent dot */}
          <span
            className="h-2 w-2 rounded-full opacity-30 transition-opacity duration-150 group-hover:opacity-70"
            style={{ background: meta.color }}
            aria-hidden
          />
        </div>
      </div>

      {/* ── Bottom border grow on hover ── */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 transition-[width] duration-300 group-hover:w-full"
        style={{ background: meta.color }}
        aria-hidden
      />
    </Link>
  );
}
