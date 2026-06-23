export function ProsCons({
  prosLabel,
  consLabel,
  pros,
  cons,
}: {
  prosLabel: string;
  consLabel: string;
  pros: string[];
  cons: string[];
}) {
  if (pros.length === 0 && cons.length === 0) return null;
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-line bg-paper p-5">
        <h3 className="font-display text-lg font-semibold text-marsh">
          {prosLabel}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-ink/90">
          {pros.map((p) => (
            <li key={p} className="flex gap-2">
              <span aria-hidden className="text-marsh">
                {"+"}
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-line bg-paper p-5">
        <h3 className="font-display text-lg font-semibold text-sea-deep">
          {consLabel}
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-ink/90">
          {cons.map((c) => (
            <li key={c} className="flex gap-2">
              <span aria-hidden className="text-sea-deep">
                {"–"}
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
