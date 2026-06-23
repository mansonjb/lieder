export type TocItem = { id: string; label: string };

// Sommaire pour les pages longues (> ~1200 mots). Ne rend rien si vide.
export function TableOfContents({
  heading,
  items,
}: {
  heading: string;
  items: TocItem[];
}) {
  if (!items || items.length === 0) return null;
  return (
    <nav
      aria-label={heading}
      className="my-8 rounded-2xl border border-line bg-paper-2 p-5"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {heading}
      </p>
      <ol className="mt-3 space-y-1.5 text-sm">
        {items.map((it, i) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className="text-sea-deep underline-offset-2 hover:underline"
            >
              {i + 1}. {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
