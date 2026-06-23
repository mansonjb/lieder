import Link from "next/link";
import type { Dict } from "@/data/i18n/ui";
import { localeHref, type Locale } from "@/lib/i18n";
import { getByKey, pageHref } from "@/lib/registry";
import { SITE_NAME } from "@/lib/site";

const SECTION_KEYS = [
  "villages",
  "plages",
  "ou-dormir",
  "que-faire",
  "restaurants",
  "quand-venir",
  "sejour",
  "preparer",
  "comparatifs",
];
const LEGAL_KEYS = ["a-propos", "affiliation", "confidentialite", "mentions-legales"];

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href={localeHref(locale, "")}
              className="font-display text-lg font-semibold text-ink"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {dict.footer.sections}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {SECTION_KEYS.map((k) => {
                const e = getByKey(k);
                if (!e) return null;
                return (
                  <li key={k}>
                    <Link
                      href={pageHref(e, locale)}
                      className="text-ink/80 hover:text-sea-deep"
                    >
                      {e.h1[locale]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {SITE_NAME}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {LEGAL_KEYS.map((k) => {
                const e = getByKey(k);
                if (!e) return null;
                return (
                  <li key={k}>
                    <Link
                      href={pageHref(e, locale)}
                      className="text-ink/80 hover:text-sea-deep"
                    >
                      {e.h1[locale]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="text-xs leading-relaxed text-muted">
            {dict.footer.disclosureLine}
          </p>
          <p className="mt-2 text-xs text-muted">
            © {year} {SITE_NAME}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
