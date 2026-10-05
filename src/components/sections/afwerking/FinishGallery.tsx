"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export type GalleryPhoto = {
  src: string;
  alt: string;
  /** Optioneel bijschrift, bv. "Licht gestraald". */
  label?: string;
  width: number;
  height: number;
};

/** Klikstatus voor een fotogalerij: welke foto (index) vergroot getoond wordt. */
function useGallery(count: number) {
  const [index, setIndex] = useState<number | null>(null);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + count) % count)), [count]);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % count)), [count]);
  const close = useCallback(() => setIndex(null), []);
  return { index, open: setIndex, close, prev, next };
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhotosIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="5" width="14" height="14" rx="1" />
      <path d="M7 3h14v14" strokeLinecap="round" />
    </svg>
  );
}

/** Vergrote weergave met bladeren: pijltoetsen, Escape, klik op achtergrond om te sluiten. */
function GalleryModal({
  title,
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  title: string;
  photos: GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const multiple = photos.length > 1;
  // Handlers via ref, zodat het effect alleen bij openen/sluiten draait (focus blijft waar hij is bij bladeren).
  const handlers = useRef({ onClose, onPrev, onNext, multiple });
  useEffect(() => {
    handlers.current = { onClose, onPrev, onNext, multiple };
  });

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      const { onClose, onPrev, onNext, multiple } = handlers.current;
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft" && multiple) onPrev();
      else if (event.key === "ArrowRight" && multiple) onNext();
      else if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  const photo = index !== null ? photos[index] : null;

  return (
    <AnimatePresence>
      {photo && index !== null && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${title}: foto's`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark/95 px-4 py-16 backdrop-blur-sm sm:px-20"
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Sluiten"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-sm text-on-dark transition-colors duration-200 hover:bg-dark-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <motion.figure
            key={photo.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }}
            className="flex max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto max-h-[72vh] w-auto max-w-[calc(100vw-2rem)] rounded-sm object-contain sm:max-w-[calc(100vw-10rem)]"
              priority
            />
            <figcaption className="mt-4 flex w-full items-baseline justify-between gap-4 text-on-dark">
              <span>
                <span className="font-display text-lg font-bold">{title}</span>
                {photo.label && <span className="ml-2 text-sm text-on-dark-secondary">{photo.label}</span>}
              </span>
              {multiple && (
                <span className="text-sm tabular-nums text-on-dark-secondary" aria-live="polite">
                  Foto {index + 1} van {photos.length}
                </span>
              )}
            </figcaption>
          </motion.figure>

          {multiple && (
            <div
              className="mt-4 flex gap-3 sm:mt-0 sm:contents"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onPrev();
                }}
                aria-label="Vorige foto"
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-dark-border bg-dark-surface text-on-dark transition-colors duration-200 hover:border-accent-glow hover:text-accent-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onNext();
                }}
                aria-label="Volgende foto"
                className="flex h-12 w-12 items-center justify-center rounded-sm border border-dark-border bg-dark-surface text-on-dark transition-colors duration-200 hover:border-accent-glow hover:text-accent-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-glow sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronIcon direction="right" />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Kaartfoto voor een afwerking: hoofdfoto + (bij meerdere foto's) miniaturen; klik opent de galerij. */
export function FinishMedia({ title, photos }: { title: string; photos: GalleryPhoto[] }) {
  const gallery = useGallery(photos.length);
  const multiple = photos.length > 1;
  const [main] = photos;

  return (
    <>
      <div className="group relative h-56 w-full overflow-hidden bg-surface-2">
        <button
          type="button"
          onClick={() => gallery.open(0)}
          aria-label={multiple ? `Bekijk ${photos.length} foto's van ${title.toLowerCase()}` : `Vergroot foto van ${title.toLowerCase()}`}
          className="absolute inset-0 cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        >
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:brightness-110"
          />
        </button>

        {multiple && (
          <>
            <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-dark/80 px-2.5 py-1 text-xs font-semibold text-on-dark">
              <PhotosIcon />
              {`${photos.length} foto's`}
            </span>
            <div className="absolute bottom-3 left-3 flex gap-2">
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => gallery.open(i)}
                  aria-label={`Foto ${i + 1} van ${photos.length}${photo.label ? `: ${photo.label}` : ""}`}
                  className="relative h-11 w-11 overflow-hidden rounded-sm border-2 border-white/90 bg-surface-2 shadow-md transition-colors duration-200 hover:border-accent focus:outline-none focus-visible:border-accent sm:h-12 sm:w-12"
                >
                  <Image src={photo.src} alt="" fill sizes="48px" className="object-cover" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <GalleryModal
        title={title}
        photos={photos}
        index={gallery.index}
        onClose={gallery.close}
        onPrev={gallery.prev}
        onNext={gallery.next}
      />
    </>
  );
}

/** Raster van klikbare foto's met bijschrift (bv. voor Metselwerkelementen); opent dezelfde galerij. */
export function PhotoGrid({ title, photos }: { title: string; photos: GalleryPhoto[] }) {
  const gallery = useGallery(photos.length);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, i) => (
          <figure key={photo.src}>
            <button
              type="button"
              onClick={() => gallery.open(i)}
              aria-label={`Vergroot foto: ${photo.label ?? photo.alt}`}
              className="group relative block aspect-[3/4] w-full sm:aspect-square cursor-zoom-in overflow-hidden rounded-sm border border-border bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 360px, 50vw"
                className="object-cover transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
            </button>
            {photo.label && <figcaption className="mt-2 text-sm text-ink-muted">{photo.label}</figcaption>}
          </figure>
        ))}
      </div>

      <GalleryModal
        title={title}
        photos={photos}
        index={gallery.index}
        onClose={gallery.close}
        onPrev={gallery.prev}
        onNext={gallery.next}
      />
    </>
  );
}
