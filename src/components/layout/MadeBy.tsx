/**
 * Credit onderaan de footer: "gebouwd door Webbouwerij" met het kraanlogo.
 * Neemt de tekstkleur van de footer over; het scherm aan de kraan is Webbouwerij-groen.
 */
export function MadeBy({ label = "Deze website is gebouwd door" }: { label?: string }) {
  return (
    <a
      href="https://webbouwerij.nl"
      className="group inline-flex items-center gap-2 text-xs opacity-80 transition-opacity hover:opacity-100"
    >
      <span>{label}</span>
      <svg aria-hidden="true" viewBox="0 0 64 64" width="18" height="18" className="shrink-0">
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
          <path d="M16 60V14M8 60h16M6 14h52M16 4v10M16 4L6 14M16 4l40 10" />
        </g>
        <rect x="6" y="14" width="6" height="6" fill="currentColor" />
        <path d="M44 14v13" stroke="currentColor" strokeWidth="2.5" />
        <rect x="31" y="27" width="26" height="20" rx="1.5" fill="#A8CDB5" />
      </svg>
      <span className="font-semibold uppercase tracking-wide group-hover:underline underline-offset-2">Webbouwerij</span>
    </a>
  );
}
