import type { Locale } from "@/lib/i18n";
import { stay22Url } from "@/lib/affiliates/stay22";
import { AffiliateLink } from "@/components/AffiliateLink";

type Variant = "band" | "card";

export function Stay22InlineCta({
  locale,
  address,
  label,
  sub,
  variant = "band",
  campaign,
}: {
  locale: Locale;
  address: string;
  label: { fr: string; en: string };
  sub?: { fr: string; en: string };
  variant?: Variant;
  campaign?: string;
}) {
  const href = stay22Url(address);
  const ctaLabel = locale === "fr" ? "Voir les disponibilités →" : "Check availability →";

  if (variant === "card") {
    return (
      <AffiliateLink
        network="stay22"
        context={campaign ?? "inline-cta"}
        href={href}
        className="group my-8 overflow-hidden rounded-2xl border border-sea/30 bg-white shadow-sm transition-all duration-150 hover:border-sea/50 hover:shadow-md"
      >
        <div className="h-1 w-full bg-gradient-to-r from-sea-deep via-sea to-sea/40" />
        <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sea-deep">
              🛏 {locale === "fr" ? "Hébergement" : "Accommodation"}
            </p>
            <p className="mt-1 font-semibold text-ink">{locale === "fr" ? label.fr : label.en}</p>
            {sub && (
              <p className="mt-0.5 text-sm text-muted">{locale === "fr" ? sub.fr : sub.en}</p>
            )}
          </div>
          <span className="shrink-0 rounded-xl bg-sea-deep px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white transition-colors group-hover:bg-sea">
            {ctaLabel}
          </span>
        </div>
      </AffiliateLink>
    );
  }

  // variant = "band" — fine bande horizontale
  return (
    <AffiliateLink
      network="stay22"
      context={campaign ?? "inline-band"}
      href={href}
      className="my-6 flex items-center justify-between gap-4 rounded-xl border border-sea/20 bg-sea/5 px-5 py-3 transition-colors hover:border-sea/35 hover:bg-sea/8"
    >
      <p className="text-sm text-ink">
        <span className="font-semibold">{locale === "fr" ? label.fr : label.en}</span>
        {sub && (
          <span className="ml-2 text-muted">{locale === "fr" ? sub.fr : sub.en}</span>
        )}
      </p>
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-sea-deep">
        {ctaLabel}
      </span>
    </AffiliateLink>
  );
}
