import { VILLAS_BOOKING } from "@/data/villas-booking";
import { VillaCard } from "@/components/VillaCard";
import type { Locale } from "@/lib/i18n";

export function VillaShowcase({ locale }: { locale: Locale }) {
  const heading = locale === "fr" ? "Villas disponibles sur Booking" : "Villas available on Booking";
  const sub =
    locale === "fr"
      ? "Sélection de maisons et villas à louer à la semaine sur l'Île de Ré, avec prix, avis et disponibilités en temps réel."
      : "Curated holiday homes and villas for weekly rent on Île de Ré — live prices, ratings and availability.";

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
        {VILLAS_BOOKING.map((villa) => (
          <VillaCard key={villa.url} villa={villa} locale={locale} />
        ))}
      </div>
    </section>
  );
}
