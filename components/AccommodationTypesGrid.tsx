import type { Locale } from "@/lib/i18n";

type AccomType = {
  icon: string;
  heading: { fr: string; en: string };
  description: { fr: string; en: string };
  price: string;
  bestFor: { fr: string; en: string };
  examples: { fr: string; en: string };
};

const TYPES: AccomType[] = [
  {
    icon: "🏨",
    heading:     { fr: "Hôtels",              en: "Hotels"             },
    description: { fr: "De la chambre confortable au Relais & Châteaux, l'offre hôtelière de l'île est restreinte mais qualitative, centrée sur Saint-Martin et La Flotte.", en: "From comfortable rooms to Relais & Châteaux, the island's hotel offer is limited but high-quality, centred on Saint-Martin and La Flotte." },
    price:       "€€ – €€€€",
    bestFor:     { fr: "Couples, séjour court, luxe", en: "Couples, short breaks, luxury" },
    examples:    { fr: "Hôtel de Toiras (5★ Saint-Martin), Le Richelieu (4★ La Flotte)", en: "Hôtel de Toiras (5★ Saint-Martin), Le Richelieu (4★ La Flotte)" },
  },
  {
    icon: "🏡",
    heading:     { fr: "Gîtes & locations",   en: "Rentals & gîtes"    },
    description: { fr: "La formule la plus répandue sur l'île : maisons et villas louées à la semaine. Disponibilités en hausse hors juillet-août, prix variables selon la surface et la proximité des plages.", en: "The most common format on the island: houses and villas rented by the week. Better availability outside July-August; prices vary by size and beach proximity." },
    price:       "€ – €€€€",
    bestFor:     { fr: "Familles, groupes, séjours d'une semaine", en: "Families, groups, week-long stays" },
    examples:    { fr: "Maisons intra-muros Saint-Martin, villas Le Bois-Plage, gîtes Loix", en: "Intra-muros Saint-Martin houses, Le Bois-Plage villas, Loix gîtes" },
  },
  {
    icon: "🏕",
    heading:     { fr: "Campings",            en: "Campsites"          },
    description: { fr: "L'île compte plusieurs campings 4 et 5 étoiles avec piscine, mobil-homes et services premium. Les meilleurs se réservent dès janvier pour l'été — certains affichent complet en mars.", en: "The island has several 4-and 5-star sites with pools, mobile homes and premium services. The best ones fill up by January for summer — some display full by March." },
    price:       "€ – €€",
    bestFor:     { fr: "Familles, budget maîtrisé, ambiance conviviale", en: "Families, budget-conscious, social atmosphere" },
    examples:    { fr: "Yelloh! Les Ilates (5★ Les Portes), La Tour des Prises (5★ Le Bois-Plage)", en: "Yelloh! Les Ilates (5★ Les Portes), La Tour des Prises (5★ Le Bois-Plage)" },
  },
  {
    icon: "🛎",
    heading:     { fr: "Chambres d'hôtes",    en: "B&Bs"               },
    description: { fr: "Petites structures à taille humaine chez l'habitant ou en maison de maître. Souvent incluses dans le prix : petit-déjeuner, conseils de propriétaires qui connaissent l'île sur le bout des doigts.", en: "Small, personal stays in owner-occupied homes or manor houses. Often included: breakfast and insider tips from locals who know every corner of the island." },
    price:       "€€ – €€€",
    bestFor:     { fr: "Couples, découverte authentique, contact local", en: "Couples, authentic discovery, local contact" },
    examples:    { fr: "Nombreuses maisons d'hôtes à Saint-Martin, La Flotte, Ars-en-Ré", en: "Many B&Bs in Saint-Martin, La Flotte and Ars-en-Ré" },
  },
];

export function AccommodationTypesGrid({ locale }: { locale: Locale }) {
  return (
    <div className="my-10">
      <div className="flex items-center gap-4 mb-7">
        <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
          {locale === "fr" ? "Types d'hébergements" : "Accommodation types"}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {TYPES.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl border border-line bg-white p-5 flex flex-col gap-3"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="text-2xl">{t.icon}</span>
              <div>
                <p className="font-semibold text-ink leading-none">
                  {locale === "fr" ? t.heading.fr : t.heading.en}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-sea-deep">{t.price}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted">
              {locale === "fr" ? t.description.fr : t.description.en}
            </p>

            {/* Meta */}
            <div className="space-y-1 border-t border-line pt-3">
              <p className="text-xs text-muted">
                <span className="font-medium text-ink">
                  {locale === "fr" ? "Idéal pour : " : "Best for: "}
                </span>
                {locale === "fr" ? t.bestFor.fr : t.bestFor.en}
              </p>
              <p className="text-xs text-muted">
                <span className="font-medium text-ink">
                  {locale === "fr" ? "Exemples : " : "Examples: "}
                </span>
                {locale === "fr" ? t.examples.fr : t.examples.en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
