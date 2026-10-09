"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Gekaderde, lussende video-kaart. Optioneel slaan we een introkaartje in de
 * bron over (zoals bij de HIGHnote-opname): zowel bij laden als bij elke
 * herhaling springen we naar skipIntroSeconds.
 * Video en posterbeeld laden pas als de kaart bijna in beeld is.
 * Met mobileSrc krijgen schermen tot 767px een lichtere versie.
 */
export function FramedVideo({
  src,
  mobileSrc,
  poster,
  aspectClassName = "aspect-video",
  skipIntroSeconds = 0,
  className = "",
}: {
  src: string;
  mobileSrc?: string;
  poster?: string;
  aspectClassName?: string;
  skipIntroSeconds?: number;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) videoRef.current?.load();
  }, [inView]);

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
        poster={inView ? poster : undefined}
        preload="none"
        autoPlay
        muted
        playsInline
        loop={!skipIntroSeconds}
      >
        {inView && mobileSrc && (
          <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
        )}
        {inView && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
