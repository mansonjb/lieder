import type { Locale } from "@/lib/i18n";
import { VILLAGE_META } from "@/data/village-meta";

export function VillageTags({ slug, locale }: { slug: string; locale: Locale }) {
  const meta = VILLAGE_META[slug];
  if (!meta?.tags?.length) return null;

  const COLORS = [
    { bg: "bg-sea/15",     border: "border-sea/40",     text: "text-sea-deep"    },
    { bg: "bg-amber-50",   border: "border-amber-200",  text: "text-amber-700"   },
    { bg: "bg-emerald-50", border: "border-emerald-200",text: "text-emerald-700" },
    { bg: "bg-sky-50",     border: "border-sky-200",    text: "text-sky-700"     },
  ];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {meta.tags.map((tag, i) => {
        const c = COLORS[i % COLORS.length];
        return (
          <span
            key={i}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${c.bg} ${c.border} ${c.text}`}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
            {locale === "fr" ? tag.fr : tag.en}
          </span>
        );
      })}
    </div>
  );
}
