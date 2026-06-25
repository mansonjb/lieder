import type { Locale } from "@/lib/i18n";
import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

export function SeasonBand({ locale }: { locale: Locale }) {
  const href = stay22Url("Île de Ré, France");

  const fr = {
    tag: "Conseil réservation",
    text: "Été 2026 : campings et locations partent dès janvier. Vérifiez les disponibilités maintenant.",
    cta: "Voir les dispo →",
  };
  const en = {
    tag: "Booking tip",
    text: "Summer 2026: campsites and rentals fill up from January. Check availability now.",
    cta: "Check now →",
  };
  const t = locale === "fr" ? fr : en;

  return (
    <div className="my-6 flex flex-col gap-3 rounded-xl border border-sun/40 bg-sun/12 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-700">
          ⏰ {t.tag}
        </p>
        <p className="mt-1 text-sm text-ink">{t.text}</p>
      </div>
      <AffiliateLink
        network="stay22"
        context="season-band"
        href={href}
        className="shrink-0 rounded-xl bg-amber-600 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-amber-700"
      >
        {t.cta}
      </AffiliateLink>
    </div>
  );
}
