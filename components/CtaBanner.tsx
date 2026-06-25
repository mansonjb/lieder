import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Variant = "stay" | "discover";

const CONTENT: Record<Variant, { icon: string; fr: { tag: string; title: string; sub: string; cta: string }; en: { tag: string; title: string; sub: string; cta: string } }> = {
  stay: {
    icon: "🛏",
    fr: {
      tag: "Hébergement",
      title: "Vous cherchez où dormir sur l'île ?",
      sub: "Hôtels de charme, gîtes, campings, locations vacances. Carte interactive avec disponibilités en temps réel.",
      cta: "Voir les hébergements",
    },
    en: {
      tag: "Accommodation",
      title: "Looking for somewhere to stay on the island?",
      sub: "Boutique hotels, cottages, campsites, holiday rentals. Interactive map with real-time availability.",
      cta: "Browse accommodations",
    },
  },
  discover: {
    icon: "🗺",
    fr: {
      tag: "Découvrir",
      title: "Prêt à explorer l'Île de Ré ?",
      sub: "Villages, plages, activités, gastronomie. Tout ce qu'il faut pour un séjour réussi.",
      cta: "Commencer la visite",
    },
    en: {
      tag: "Discover",
      title: "Ready to explore Île de Ré?",
      sub: "Villages, beaches, activities, gastronomy. Everything you need for the perfect stay.",
      cta: "Start exploring",
    },
  },
};

export function CtaBanner({
  href,
  locale,
  variant = "stay",
}: {
  href: string;
  locale: Locale;
  variant?: Variant;
}) {
  const c = CONTENT[variant];
  const t = locale === "fr" ? c.fr : c.en;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-sea-deep px-7 py-8 sm:px-10 sm:py-10">
      {/* Decorative circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-8 h-56 w-56 rounded-full opacity-[0.06]"
        style={{ background: "white" }}
      />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
            {c.icon} {t.tag}
          </p>
          <h2 className="mt-2 font-display text-2xl leading-snug text-white sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{t.sub}</p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-sea-deep transition-all duration-150 hover:bg-sun hover:text-ink"
        >
          {t.cta} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
