"use client";

import { useState, type ReactNode } from "react";

// Porte de chargement des embeds tiers (Stay22). Charge l'iframe au clic uniquement :
// protege le LCP et evite le depot de cookies tiers avant consentement.
export function EmbedGate({
  loadLabel,
  note,
  minHeight = 480,
  children,
}: {
  loadLabel: string;
  note: string;
  minHeight?: number;
  children: ReactNode;
}) {
  const [show, setShow] = useState(false);

  if (show) return <>{children}</>;

  return (
    <div
      className="flex flex-col items-center justify-center gap-3 bg-paper-2 p-8 text-center"
      style={{ minHeight }}
    >
      <button
        type="button"
        onClick={() => setShow(true)}
        className="rounded-full bg-sea px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sea-deep"
      >
        {loadLabel}
      </button>
      <p className="max-w-xs text-xs leading-relaxed text-muted">{note}</p>
    </div>
  );
}
