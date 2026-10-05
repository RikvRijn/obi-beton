/**
 * Achtergrondvideo van de hero: project Pharos gevolgd door HIGHnote (Almere).
 * De logokaartjes aan begin en eind van de bronvideo's zijn er bij het
 * comprimeren al afgeknipt, dus de video kan gewoon loopen.
 */
export function HeroVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/hero-projecten.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
