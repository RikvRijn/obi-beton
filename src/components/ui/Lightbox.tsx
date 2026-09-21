"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type LightboxItem = {
  image?: string;
  video?: string;
  /** Aantal seconden intro dat in de bron overgeslagen moet worden (zie FramedVideo). */
  skipIntroSeconds?: number;
  title: string;
  subtitle?: string;
};

/** Klikstatus voor een lightbox: welk item (foto of video) op dit moment vergroot getoond wordt. */
export function useLightbox<T extends LightboxItem>() {
  const [active, setActive] = useState<T | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return { active, open: setActive, close: () => setActive(null) };
}

function LightboxVideo({ src, skipIntroSeconds = 0 }: { src: string; skipIntroSeconds?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!skipIntroSeconds) return;
    const video = videoRef.current;
    if (!video) return;

    const skipIntro = () => {
      video.currentTime = skipIntroSeconds;
    };

    const onTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.2) {
        skipIntro();
        void video.play();
      }
    };

    if (video.readyState >= 1) {
      skipIntro();
    } else {
      video.addEventListener("loadedmetadata", skipIntro);
    }
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("loadedmetadata", skipIntro);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [skipIntroSeconds]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      controls
      playsInline
      loop={!skipIntroSeconds}
      className="max-h-[85vh] w-full object-contain"
    />
  );
}

/** Herbruikbare vergrote weergave (foto of video): klik op de achtergrond of Escape om te sluiten. */
export function LightboxModal({ item, onClose }: { item: LightboxItem | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15, ease: "easeIn" } }}
            className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-sm"
            onClick={(event) => event.stopPropagation()}
          >
            {item.video ? (
              <LightboxVideo src={item.video} skipIntroSeconds={item.skipIntroSeconds} />
            ) : (
              item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1400}
                  height={1400}
                  className="h-auto max-h-[85vh] w-full object-contain"
                />
              )
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/90 to-transparent p-6">
              <p className="font-display text-xl font-bold text-on-dark">{item.title}</p>
              {item.subtitle && <p className="text-sm text-on-dark-secondary">{item.subtitle}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
