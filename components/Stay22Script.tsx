import Script from "next/script";

// Script Stay22 "LetMeAllez" (LMA) : reecrit automatiquement les liens de
// reservation sortants en liens affilies Stay22. Pose une seule fois, globalement.
// Charge en differe (afterInteractive) pour ne pas peser sur le LCP.
// L'identifiant (lmaID) est public cote client et vient de l'environnement.
export function Stay22Script({ lmaId }: { lmaId?: string }) {
  if (!lmaId) return null;
  return (
    <Script id="stay22-letmeallez" strategy="afterInteractive">
      {`(function (s, t, a, y) {
  s.Stay22 = s.Stay22 || {};
  s.Stay22.params = { lmaID: '${lmaId}' };
  var el = t.createElement(a), first = t.getElementsByTagName(a)[0];
  el.async = 1; el.src = y; first.parentNode.insertBefore(el, first);
})(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');`}
    </Script>
  );
}
