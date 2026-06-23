import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import { localeHref, type Locale } from "@/lib/i18n";
import { getByKey, pageHref } from "@/lib/registry";
import { SITE_NAME } from "@/lib/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const NAV: { key: string; label: (d: Dict) => string }[] = [
  { key: "villages", label: (d) => d.nav.villages },
  { key: "plages", label: (d) => d.nav.plages },
  { key: "ou-dormir", label: (d) => d.nav.ouDormir },
  { key: "que-faire", label: (d) => d.nav.queFaire },
  { key: "restaurants", label: (d) => d.nav.restaurants },
  { key: "quand-venir", label: (d) => d.nav.quandVenir },
  { key: "sejour", label: (d) => d.nav.sejour },
  { key: "preparer", label: (d) => d.nav.preparer },
];

export function Header({
  locale,
  dict,
  alt,
}: {
  locale: Locale;
  dict: Dict;
  alt: Record<Locale, string>;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href={localeHref(locale, "")}
          className="shrink-0 font-display text-lg font-semibold text-ink"
        >
          {SITE_NAME}
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 overflow-x-auto text-sm lg:flex">
          {NAV.map((item) => {
            const e = getByKey(item.key);
            if (!e) return null;
            return (
              <Link
                key={item.key}
                href={pageHref(e, locale)}
                className="whitespace-nowrap text-ink/80 transition-colors hover:text-sea-deep"
              >
                {item.label(dict)}
              </Link>
            );
          })}
        </nav>
        <LanguageSwitcher current={locale} alt={alt} />
      </div>
      <nav className="flex items-center gap-4 overflow-x-auto px-5 pb-3 text-sm lg:hidden">
        {NAV.map((item) => {
          const e = getByKey(item.key);
          if (!e) return null;
          return (
            <Link
              key={item.key}
              href={pageHref(e, locale)}
              className="whitespace-nowrap text-ink/80"
            >
              {item.label(dict)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
