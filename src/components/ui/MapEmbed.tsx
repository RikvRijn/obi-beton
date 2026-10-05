"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MapEmbedProps = {
  src: string;
  title: string;
  externalHref: string;
  className?: string;
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-accent";

/**
 * Laadt de Google Maps-iframe pas na een klik, zodat Google geen gegevens
 * ontvangt of cookies plaatst zolang de bezoeker daar niet voor kiest.
 */
export function MapEmbed({ src, title, externalHref, className = "" }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Na het klikken verdwijnt de knop; zet de focus op de kaart zodat toetsenbordgebruikers hun plek houden.
  useEffect(() => {
    if (loaded) iframeRef.current?.focus();
  }, [loaded]);

  return (
    <div className={`overflow-hidden rounded-sm border border-border ${className}`}>
      {loaded ? (
        <iframe
          ref={iframeRef}
          src={src}
          title={title}
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-80 w-full border-0 lg:h-full lg:min-h-80"
        />
      ) : (
        <div className="flex h-full min-h-80 flex-col items-center justify-center bg-page px-6 py-10 text-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-accent"
            aria-hidden
          >
            <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <h3 className="font-display mt-4 text-xl font-black uppercase leading-tight text-ink">
            Kaart laden
          </h3>
          <p className="mt-3 max-w-sm text-ink-secondary">
            Bij het laden van de kaart worden gegevens gedeeld met Google.{" "}
            <Link href="/privacy" className={`underline underline-offset-2 hover:text-accent ${focusRing}`}>
              Meer in onze privacyverklaring
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className={`font-display inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-on-dark transition-[color,background-color,transform] duration-200 hover:bg-accent-glow active:scale-[0.97] ${focusRing}`}
            >
              Kaart tonen
            </button>
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold text-ink underline underline-offset-4 hover:text-accent ${focusRing}`}
            >
              Open in Google Maps
              <span className="sr-only"> (opent in een nieuw tabblad)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
