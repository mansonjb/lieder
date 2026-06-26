import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

type Example = {
  label: string;
  stay22Address: string;
};

type AccomType = {
  icon: string;
  color: string;
  heading: { fr: string; en: string };
  description: { fr: string; en: string };
  price: string;
  bestFor: { fr: string; en: string };
  examples: Example[];
  internalHref: string;
  cta: { fr: string; en: string };
};

const TYPES: AccomType[] = [
  {
    icon: "🏨",
    color: "#0f766e",
    heading:     { fr: "Hôtels",            en: "Hotels"           },
    description: {
      fr: "De la chambre confortable au Relais & Châteaux, l'offre hôtelière de l'île est restreinte mais qualitative, centrée sur Saint-Martin et La Flotte.",
      en: "From comfortable rooms to Relais & Châteaux, the island's hotel offer is limited but high-quality, centred on Saint-Martin and La Flotte.",
    },
    price:   "€€ – €€€€",
    bestFor: { fr: "Couples, séjour court, luxe",     en: "Couples, short breaks, luxury"       },
    examples: [
      { label: "Hôtel de Toiras ★★★★★", stay22Address: "Hôtel de Toiras, Saint-Martin-de-Ré, France"    },
      { label: "Le Richelieu ★★★★",      stay22Address: "Hôtel Le Richelieu, La Flotte, France"           },
      { label: "Hôtel L'Océan ★★",       stay22Address: "Hôtel L'Océan, Le Bois-Plage-en-Ré, France"     },
    ],
    internalHref: "/ou-dormir/hotels",
    cta: { fr: "Tous les hôtels →",           en: "All hotels →"             },
  },
  {
    icon: "🏡",
    color: "#4d7c0f",
    heading:     { fr: "Gîtes & locations",  en: "Rentals & gîtes"  },
    description: {
      fr: "La formule la plus répandue sur l'île : maisons et villas louées à la semaine. Disponibilités en hausse hors juillet-août, prix variables selon la surface et la proximité des plages.",
      en: "The most common format on the island: houses and villas rented by the week. Better availability outside July–August; prices vary by size and beach proximity.",
    },
    price:   "€ – €€€€",
    bestFor: { fr: "Familles, groupes, séjours d'une semaine", en: "Families, groups, week-long stays" },
    examples: [
      { label: "Saint-Martin-de-Ré", stay22Address: "Saint-Martin-de-Ré, Île de Ré, France"   },
      { label: "Le Bois-Plage",      stay22Address: "Le Bois-Plage-en-Ré, Île de Ré, France"  },
      { label: "Loix",               stay22Address: "Loix, Île de Ré, France"                 },
    ],
    internalHref: "/ou-dormir/locations-vacances",
    cta: { fr: "Voir les locations →",        en: "Browse rentals →"         },
  },
  {
    icon: "🏕",
    color: "#b45309",
    heading:     { fr: "Campings",           en: "Campsites"        },
    description: {
      fr: "L'île compte plusieurs campings 4 et 5 étoiles avec piscine, mobil-homes et services premium. Les meilleurs se réservent dès janvier pour l'été — certains affichent complet en mars.",
      en: "The island has several 4- and 5-star sites with pools, mobile homes and premium services. The best ones fill up by January for summer — some display full by March.",
    },
    price:   "€ – €€",
    bestFor: { fr: "Familles, budget maîtrisé, ambiance conviviale", en: "Families, budget-conscious, social atmosphere" },
    examples: [
      { label: "Yelloh! Les Ilates ★★★★★",  stay22Address: "Les Ilates, Les Portes-en-Ré, France"         },
      { label: "La Tour des Prises ★★★★★",  stay22Address: "La Tour des Prises, Le Bois-Plage-en-Ré, France" },
      { label: "Interlude ★★★★",             stay22Address: "Camping Interlude, Le Bois-Plage-en-Ré, France" },
    ],
    internalHref: "/ou-dormir/campings",
    cta: { fr: "Tous les campings →",        en: "All campsites →"          },
  },
  {
    icon: "🛎",
    color: "#7c3aed",
    heading:     { fr: "Chambres d'hôtes",  en: "B&Bs"             },
    description: {
      fr: "Petites structures à taille humaine chez l'habitant ou en maison de maître. Souvent incluses dans le prix : petit-déjeuner, conseils de propriétaires qui connaissent l'île sur le bout des doigts.",
      en: "Small, personal stays in owner-occupied homes or manor houses. Often included: breakfast and insider tips from locals who know every corner of the island.",
    },
    price:   "€€ – €€€",
    bestFor: { fr: "Couples, découverte authentique, contact local", en: "Couples, authentic discovery, local contact" },
    examples: [
      { label: "Saint-Martin-de-Ré", stay22Address: "Saint-Martin-de-Ré, Île de Ré, France" },
      { label: "La Flotte",          stay22Address: "La Flotte, Île de Ré, France"           },
      { label: "Ars-en-Ré",          stay22Address: "Ars-en-Ré, Île de Ré, France"           },
    ],
    internalHref: "/ou-dormir/maisons-dhotes",
    cta: { fr: "Toutes les chambres d'hôtes →", en: "All B&Bs →" },
  },
];

function AccomCard({ t, locale }: { t: AccomType; locale: Locale }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-150 hover:border-sea/40 hover:shadow-md">
      <div className="h-1 w-full shrink-0" style={{ background: t.color }} />
      <div className="flex flex-grow flex-col gap-3 px-5 pb-5 pt-4">
        <Link
          href={locale === "en" ? "/en" + t.internalHref : t.internalHref}
          className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sea"
          aria-label={locale === "fr" ? t.heading.fr : t.heading.en}
        />
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-2xl"
            style={{ background: t.color + "18" }}
            aria-hidden="true"
          >
            {t.icon}
          </span>
          <div>
            <p className="font-semibold leading-none text-ink">
              {locale === "fr" ? t.heading.fr : t.heading.en}
            </p>
            <p className="mt-0.5 font-mono text-[10px]" style={{ color: t.color }}>
              {t.price}
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          {locale === "fr" ? t.description.fr : t.description.en}
        </p>
        <p className="text-xs text-muted">
          <span className="font-medium text-ink">
            {locale === "fr" ? "Idéal pour : " : "Best for: "}
          </span>
          {locale === "fr" ? t.bestFor.fr : t.bestFor.en}
        </p>
        <div className="relative z-10 border-t border-line pt-3">
          <p className="mb-2 text-xs font-medium text-ink">
            {locale === "fr" ? "Exemples sur Stay22 :" : "Examples on Stay22:"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {t.examples.map((ex) => (
              <AffiliateLink
                key={ex.label}
                network="stay22"
                context={"accom-grid-" + t.icon}
                href={stay22Url(ex.stay22Address)}
                className="rounded-full border border-sea/30 bg-sea/5 px-3 py-1 text-xs text-sea-deep transition-colors hover:bg-sea/15"
              >
                {ex.label}
              </AffiliateLink>
            ))}
          </div>
        </div>
        <p className="mt-auto text-sm font-semibold text-sea-deep">
          {locale === "fr" ? t.cta.fr : t.cta.en}
        </p>
      </div>
    </article>
  );
}

export function AccommodationTypesGrid({ locale }: { locale: Locale }) {
  return (
    <div className="my-10">
      <div className="mb-7 flex items-center gap-4">
        <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
          {locale === "fr" ? "Types d'hébergements" : "Accommodation types"}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {TYPES.map((t) => (
          <AccomCard key={t.icon} t={t} locale={locale} />
        ))}
      </div>
    </div>
  );
}
