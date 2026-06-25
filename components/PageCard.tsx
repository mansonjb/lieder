import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import { pageHref } from "@/lib/registry";

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
  const cta = locale === "fr" ? "Découvrir" : "Explore";

  return (
    <Link
      href={pageHref(entry, locale)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(46,125,116,0.13)]"
    >
      {/* Top color stripe */}
      <div className="h-[3px] w-full shrink-0" style={{ background: meta.color }} />

      {/* Icon + category label */}
      <div className="flex items-center gap-2.5 px-5 pt-4 pb-1">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[15px] leading-none"
          style={{ background: meta.color + "22" }}
        >
          {meta.icon}
        </span>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.18em]"
          style={{ color: meta.color }}
        >
          {siloLabel}
        </span>
      </div>

      {/* Title + description */}
      <div className="flex flex-1 flex-col px-5 py-3">
        <h3 className="font-display text-xl leading-snug text-ink">
          {entry.h1[locale]}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {entry.description[locale]}
        </p>
      </div>

      {/* CTA row */}
      <div className="border-t border-line/50 px-5 py-3">
        <span
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-[gap] duration-150 group-hover:gap-2"
          style={{ color: meta.color }}
        >
          {cta} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
