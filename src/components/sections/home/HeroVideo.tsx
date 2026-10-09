"use client";

import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";

/**
 * Achtergrondvideo van de hero: project Pharos gevolgd door HIGHnote (Almere).
 * De logokaartjes aan begin en eind van de bronvideo's zijn er bij het
 * comprimeren al afgeknipt, dus de video kan gewoon loopen.
 * Op mobiel een lichtere 480p-versie; er ligt toch een donkere laag overheen.
 * Het kleine posterbeeld laadt met voorrang; de video pas als de pagina
 * geladen is, zodat hij de rest van de pagina niet ophoudt.
 */
export function HeroVideo() {
  preload("/hero-projecten-poster.jpg", { as: "image", fetchPriority: "high" });

  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    if (ready) videoRef.current?.load();
  }, [ready]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      poster="/hero-projecten-poster.jpg"
      preload="none"
      autoPlay
      muted
      loop
      playsInline
    >
      {ready && (
        <source src="/hero-projecten-mobiel.mp4" type="video/mp4" media="(max-width: 767px)" />
      )}
      {ready && <source src="/hero-projecten.mp4" type="video/mp4" />}
    </video>
  );
}
