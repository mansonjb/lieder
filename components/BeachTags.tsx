import type { Locale } from "@/lib/i18n";
import { BEACH_META, TAG_LABELS } from "@/data/beach-meta";

export function BeachTags({ slug, locale }: { slug: string; locale: Locale }) {
  const meta = BEACH_META[slug];
  if (!meta?.tags?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {meta.tags.map((tag, i) => {
        const label = TAG_LABELS[tag];
        if (!label) return null;
        return (
          <span
            key={i}
            className="rounded-full border border-sea/25 bg-sea/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-sea-deep"
          >
            {label.icon} {locale === "fr" ? label.fr : label.en}
          </span>
        );
      })}
    </div>
  );
}
