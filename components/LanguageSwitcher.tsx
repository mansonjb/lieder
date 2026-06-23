"use client";

import Link from "next/link";
import { LOCALES, type Locale } from "@/lib/i18n";

// Bascule vers la MEME page dans l'autre langue (hrefs calcules cote serveur).
export function LanguageSwitcher({
  current,
  alt,
}: {
  current: Locale;
  alt: Record<Locale, string>;
}) {
  return (
    <div className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em]">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {l === current ? (
            <span className="font-semibold text-ink">{l}</span>
          ) : (
            <Link
              href={alt[l]}
              hrefLang={l}
              className="text-muted transition-colors hover:text-ink"
            >
              {l}
            </Link>
          )}
          {i < LOCALES.length - 1 && <span className="text-line">/</span>}
        </span>
      ))}
    </div>
  );
}
