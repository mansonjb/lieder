import type { Locale } from "@/lib/i18n";
import type { VillageLink } from "@/data/village-meta";
import { VILLAGE_META } from "@/data/village-meta";

export function VillageLinks({ slug, locale }: { slug: string; locale: Locale }) {
  const links = VILLAGE_META[slug]?.links;
  if (!links?.length) return null;

  const heading = locale === "fr" ? "Liens utiles" : "Useful links";

  return (
    <div className="my-8">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="shrink-0 font-mono text-[12px] uppercase tracking-[0.2em] text-sea-deep">
          🔗 {heading}
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link: VillageLink, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-150 hover:border-sea/50 hover:shadow-md"
          >
            <div className="flex h-full w-11 shrink-0 items-center justify-center self-stretch bg-sea/8 text-lg">
              {link.icon}
            </div>
            <span className="flex-1 py-3 text-sm text-ink transition-colors duration-150 group-hover:text-sea-deep">
              {locale === "fr" ? link.label.fr : link.label.en}
            </span>
            <span className="mr-4 shrink-0 font-mono text-[11px] text-muted transition-colors duration-150 group-hover:text-sea">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
