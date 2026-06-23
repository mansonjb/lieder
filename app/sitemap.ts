import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, localeHref } from "@/lib/i18n";
import { allPages } from "@/lib/registry";
import { abs } from "@/lib/seo";

// Sitemap unique avec alternates hreflang par page (568 URLs, < limite 50k).
// A segmenter par silo si le volume explose (cf. brief §9).
export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const e of allPages()) {
    const languages: Record<string, string> = {};
    for (const l of LOCALES) languages[l] = abs(localeHref(l, e.slug[l]));
    languages["x-default"] = abs(localeHref(DEFAULT_LOCALE, e.slug[DEFAULT_LOCALE]));
    for (const l of LOCALES) {
      out.push({
        url: abs(localeHref(l, e.slug[l])),
        lastModified: e.lastUpdated,
        priority: e.priority,
        alternates: { languages },
      });
    }
  }
  return out;
}
