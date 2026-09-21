"use client";

import { useEffect, useRef } from "react";

const SKIP_INTRO_SECONDS = 4.5;

/**
 * De brondata bevat een kort logo-introkaartje (OBI/Eurobeton) aan het begin.
 * Die slaan we over: bij laden en bij elke loop springen we naar
 * SKIP_INTRO_SECONDS, zodat bezoekers direct de luchtfoto van het gebouw zien.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const skipIntro = () => {
      video.currentTime = SKIP_INTRO_SECONDS;
    };

    const onTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.2) {
        skipIntro();
        void video.play();
      }
    };

    // Metadata kan al geladen zijn vóór dit effect draait (bv. uit browsercache),
    // dan vuurt "loadedmetadata" nooit meer: direct zelf controleren.
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
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src="/project-highnote-almere.mp4"
      autoPlay
      muted
      playsInline
    />
  );
}
