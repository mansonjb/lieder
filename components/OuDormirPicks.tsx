import { OU_DORMIR_PICKS } from "@/data/ou-dormir-picks";
import { stay22Url } from "@/lib/affiliates/stay22";
import { HotelCard } from "@/components/HotelCard";
import type { Locale } from "@/lib/i18n";

export function OuDormirPicks({
  entryKey,
  locale,
}: {
  entryKey: string;
  locale: Locale;
}) {
  const picks = OU_DORMIR_PICKS[entryKey];
  if (!picks?.length) return null;

  const heading =
    locale === "fr" ? "Nos coups de coeur" : "Our top picks";
  const sub =
    locale === "fr"
      ? "Une sélection d'établissements vérifiés sur l'Île de Ré"
      : "A curated selection of verified properties on Île de Ré";
  const ctaLabel =
    locale === "fr" ? "Voir les disponibilités" : "Check availability";

  return (
    <section className="mt-10">
      <div className="flex items-center gap-4">
        <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
          {heading}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>
      <p className="mt-2 text-sm text-muted">{sub}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((pick) => (
          <HotelCard
            key={pick.name}
            name={pick.name}
            village={pick.village}
            photo={pick.imageUrl}
            type={pick.type[locale]}
            stars={pick.stars}
            priceLevel={pick.priceLevel}
            features={pick.features.map((f) => f[locale])}
            href={stay22Url(pick.stayAddress, pick.name)}
            ctaLabel={ctaLabel}
          />
        ))}
      </div>
    </section>
  );
}
