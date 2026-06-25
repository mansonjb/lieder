import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";

export function VillageTags({ slug, locale }: { slug: string; locale: Locale }) {
  const meta = VILLAGE_META[slug];
  if (!meta?.tags?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {meta.tags.map((tag, i) => (
        <span
          key={i}
          className="rounded-full border border-sea/25 bg-sea/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-sea-deep"
        >
          {locale === "fr" ? tag.fr : tag.en}
        </span>
      ))}
    </div>
  );
}
