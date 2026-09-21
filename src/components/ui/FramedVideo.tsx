"use client";

import { useEffect, useRef } from "react";

/**
 * Gekaderde, lussende video-kaart. Optioneel slaan we een introkaartje in de
 * bron over (zoals bij de HIGHnote-opname): zowel bij laden als bij elke
 * herhaling springen we naar skipIntroSeconds.
 */
export function FramedVideo({
  src,
  aspectClassName = "aspect-video",
  skipIntroSeconds = 0,
  className = "",
}: {
  src: string;
  aspectClassName?: string;
  skipIntroSeconds?: number;
  className?: string;
}) {
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
    <div className={`overflow-hidden rounded-sm border-4 border-white shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        className={`w-full object-cover ${aspectClassName}`}
        src={src}
        autoPlay
        muted
        playsInline
        loop={!skipIntroSeconds}
      />
    </div>
  );
}
