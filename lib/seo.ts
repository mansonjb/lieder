import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  LOCALES,
  OG_LOCALE,
  localeHref,
  type Locale,
} from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Date de derniere mise a jour globale du contenu (override par page possible).
export const CONTENT_UPDATED = "2026-06-22";
export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function abs(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function clip(s: string, n = 158): string {
  if (!s) return s;
  return s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`;
}

export function orgNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
  };
}

/** Construit les alternates hreflang depuis les slugs localises d'une page. */
export function buildLanguages(
  slugByLocale: Record<Locale, string>,
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = abs(localeHref(l, slugByLocale[l]));
  }
  languages["x-default"] = abs(
    localeHref(DEFAULT_LOCALE, slugByLocale[DEFAULT_LOCALE]),
  );
  return languages;
}

type BuildMetadataOpts = {
  locale: Locale;
  title: string;
  description: string;
  slugByLocale: Record<Locale, string>;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
};

export function buildMetadata(opts: BuildMetadataOpts): Metadata {
  const canonical = abs(localeHref(opts.locale, opts.slugByLocale[opts.locale]));
  const images = opts.image ? [{ url: abs(opts.image) }] : undefined;
  return {
    metadataBase: new URL(SITE_URL),
    title: opts.title,
    description: clip(opts.description),
    alternates: {
      canonical,
      languages: buildLanguages(opts.slugByLocale),
    },
    openGraph: {
      title: opts.title,
      description: clip(opts.description),
      url: canonical,
      siteName: SITE_NAME,
      locale: OG_LOCALE[opts.locale],
      type: opts.type ?? "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: clip(opts.description),
      images: images?.map((i) => i.url),
    },
    robots: opts.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}
