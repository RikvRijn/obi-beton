"use client";

import Image from "next/image";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { GalleryModal, PhotosIcon, useGallery, type GalleryPhoto } from "@/components/sections/afwerking/FinishGallery";

type Reference = { name: string; location: string; photos: GalleryPhoto[] };

const LANDSCAPE = { width: 1600, height: 1200 };
const PORTRAIT = { width: 1200, height: 1600 };

// Eén kaart per project; alle foto's van een project zitten in dezelfde galerij.
const REFERENCES: Reference[] = [
  {
    name: "Schelde Buren",
    location: "Bergen op Zoom",
    photos: [
      { src: "/referentie-schelde-buren-bergen-op-zoom-1.jpg", alt: "Prefab betonnen balkons van OBI bij Schelde Buren in Bergen op Zoom", label: "Balkons", ...LANDSCAPE },
      { src: "/referentie-schelde-buren-bergen-op-zoom-2.jpg", alt: "Prefab galerijen en consoles van OBI bij Schelde Buren in Bergen op Zoom", label: "Galerijen en consoles", ...LANDSCAPE },
      { src: "/referentie-schelde-buren-bergen-op-zoom-3.jpg", alt: "Prefab betonnen galerij van OBI bij Schelde Buren in Bergen op Zoom", label: "Galerij", ...PORTRAIT },
    ],
  },
  {
    name: "Maasbode",
    location: "Rotterdam",
    photos: [
      { src: "/referentie-maasbode-rotterdam-1.jpg", alt: "Prefab gevelelementen van OBI bij de Maasbode in Rotterdam", label: "Gevelelementen", ...PORTRAIT },
      { src: "/referentie-maasbode-rotterdam-2.jpg", alt: "Prefab balkons met steenstrips van OBI bij de Maasbode in Rotterdam", label: "Balkons met steenstrips", ...PORTRAIT },
      { src: "/referentie-maasbode-rotterdam-3.jpg", alt: "Overzicht van het Maasbode-gebouw in Rotterdam", label: "Totaaloverzicht", width: 480, height: 640 },
    ],
  },
  {
    name: "Marienpoelstraat",
    location: "Leiden",
    photos: [{ src: "/referentie-marienpoelstraat-leiden.jpg", alt: "Marienpoelstraat, Leiden", width: 1200, height: 1200 }],
  },
  {
    name: "Kraaijhoek",
    location: "Papendrecht",
    photos: [{ src: "/referentie-kraaijhoek-papendrecht.jpg", alt: "Kraaijhoek, Papendrecht", width: 2142, height: 2142 }],
  },
  {
    name: "Amstelkwartier",
    location: "Amsterdam",
    photos: [
      { src: "/referentie-amstelkwartier-amsterdam-1.png", alt: "Amstelkwartier, Amsterdam", width: 1521, height: 1138 },
      { src: "/referentie-amstelkwartier-amsterdam-2.png", alt: "Amstelkwartier, Amsterdam", width: 1576, height: 1183 },
    ],
  },
  {
    name: "Lomanlaan",
    location: "Utrecht",
    photos: [
      { src: "/referentie-lomanlaan-utrecht-1.jpg", alt: "Lomanlaan, Utrecht", ...LANDSCAPE },
      { src: "/referentie-lomanlaan-utrecht-2.jpg", alt: "Lomanlaan, Utrecht", ...LANDSCAPE },
    ],
  },
];

function ReferenceCard({ project }: { project: Reference }) {
  const gallery = useGallery(project.photos.length);
  const [cover] = project.photos;
  const count = project.photos.length;

  return (
    <>
      <button
        type="button"
        onClick={() => gallery.open(0)}
        aria-label={count > 1 ? `Bekijk ${count} foto's van ${project.name}, ${project.location}` : `Vergroot foto van ${project.name}, ${project.location}`}
        className="group relative flex h-[26rem] w-[30rem] max-w-[85vw] flex-none flex-col justify-end overflow-hidden rounded-sm text-left ring-1 ring-inset ring-transparent transition-shadow duration-200 hover:ring-accent focus:outline-none focus-visible:ring-accent"
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="480px"
          className="object-cover transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/10 to-transparent" />
        {count > 1 && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-dark/80 px-2.5 py-1 text-xs font-semibold text-on-dark">
            <PhotosIcon />
            {`${count} foto's`}
          </span>
        )}
        <p className="relative p-6 font-display text-2xl font-bold text-on-dark">
          {project.name}
          <span className="mt-1 block text-sm font-normal text-on-dark-secondary">{project.location}</span>
        </p>
      </button>

      <GalleryModal
        title={`${project.name}, ${project.location}`}
        photos={project.photos}
        index={gallery.index}
        onClose={gallery.close}
        onPrev={gallery.prev}
        onNext={gallery.next}
      />
    </>
  );
}

export function ReferencesShowcase() {
  return (
    <section id="referenties" className="bg-page px-6 py-16 sm:py-20">
      <PanelReveal className="mx-auto max-w-7xl">
        <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
          Referenties
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
          Projecten met OBI-beton
        </h2>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4">
          {REFERENCES.map((project) => (
            <ReferenceCard key={project.name} project={project} />
          ))}

          <div className="flex h-[26rem] w-[30rem] max-w-[85vw] flex-none flex-col items-start justify-center gap-2 rounded-sm border border-dashed border-border-strong p-6">
            <p className="font-display text-lg font-bold text-ink-muted">Meer projecten volgen</p>
            <p className="text-sm text-ink-muted">
              Deze sectie vullen we verder aan met foto&apos;s en projectnamen.
            </p>
          </div>
        </div>
      </PanelReveal>
    </section>
  );
}
