const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Zeer subtiele betonkorrel-textuur (SVG-ruis, geen afbeelding nodig) om een
 * vlakke lichte sectie iets materiaals te geven i.p.v. helemaal plat.
 */
export function GrainOverlay({ opacity = 0.1 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundImage: `url("${NOISE_SVG}")`, opacity }}
    />
  );
}
