import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { PageEntry } from "@/lib/types";
import { pageHref } from "@/lib/registry";

// Carte de lien interne, style "carte postale" : bord pointille, coin timbre,
// titre serif, leger biais au survol. Utilisee piliers / maillage / home.
export function PageCard({
  entry,
  locale,
}: {
  entry: PageEntry;
  locale: Locale;
}) {
  const label = entry.stay22 ? "Stay22" : entry.silo;
  const cta = locale === "fr" ? "Découvrir" : "Explore";
  return (
    <Link
      href={pageHref(entry, locale)}
      className="group relative block rounded-xl border border-dashed border-sand bg-white p-5 transition-all duration-200 hover:-rotate-1 hover:border-sea hover:shadow-[0_8px_22px_rgba(46,125,116,0.12)]"
    >
      <span
        aria-hidden
        className="absolute right-3 top-3 flex h-9 w-7 items-center justify-center rounded-[3px] border border-sea/50 font-display text-sm leading-none text-sea-deep"
      >
        Ré
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-sea-deep">
        {label}
      </span>
      <h3 className="mt-1.5 max-w-[88%] font-display text-xl leading-snug text-ink">
        {entry.h1[locale]}
      </h3>
      <span className="mt-3 inline-flex items-center gap-1 border-b-2 border-sun pb-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-ink">
        {cta}
        <span className="transition-transform group-hover:translate-x-0.5">
          {"→"}
        </span>
      </span>
    </Link>
  );
}
