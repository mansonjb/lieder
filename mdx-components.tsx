import type { MDXComponents } from "mdx/types";

// Le style editorial est gere globalement via la classe `.longform` (globals.css),
// donc on garde les composants MDX par defaut. On pourra surcharger ici plus tard
// (ex: liens internes, callouts, tableaux Stay22 inline).
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
