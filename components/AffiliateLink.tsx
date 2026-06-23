import type { CSSProperties, ReactNode } from "react";

export type AffiliateNetwork = "stay22";

type Props = {
  href: string;
  network: AffiliateNetwork;
  context: string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  children: ReactNode;
};

// Tout lien sortant monetise passe par ici : rel sponsored/nofollow + attributs de suivi.
export function AffiliateLink({
  href,
  network,
  context,
  className,
  style,
  ariaLabel,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener nofollow"
      data-affiliate-network={network}
      data-affiliate-context={context}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
