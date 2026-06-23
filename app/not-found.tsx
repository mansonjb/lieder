import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

// 404 global (rendu sous le layout racine passe-plat : fournit son propre html/body).
export default function NotFound() {
  return (
    <html lang="fr-FR">
      <body className="min-h-screen bg-paper text-ink antialiased">
        <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
            404
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold">
            Page introuvable
          </h1>
          <p className="mt-3 text-muted">
            Cette page n&apos;existe pas ou a été déplacée. {SITE_NAME}.
          </p>
          <Link
            href="/"
            className="mt-6 rounded-full bg-sea px-5 py-2.5 text-sm font-semibold text-white"
          >
            Retour à l&apos;accueil
          </Link>
        </main>
      </body>
    </html>
  );
}
