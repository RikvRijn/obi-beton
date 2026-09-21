"use client";

import Image from "next/image";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { LightboxModal, useLightbox } from "@/components/ui/Lightbox";

const REFERENCES = [
  {
    name: "Marienpoelstraat",
    location: "Leiden",
    image: "/referentie-marienpoelstraat-leiden.jpg",
  },
  {
    name: "Kraaijhoek",
    location: "Papendrecht",
    image: "/referentie-kraaijhoek-papendrecht.jpg",
  },
  {
    name: "Amstelkwartier",
    location: "Amsterdam",
    image: "/referentie-amstelkwartier-amsterdam-1.png",
  },
  {
    name: "Amstelkwartier",
    location: "Amsterdam",
    image: "/referentie-amstelkwartier-amsterdam-2.png",
  },
];

export function ReferencesShowcase() {
  const { active, open, close } = useLightbox<{ image: string; title: string; subtitle?: string }>();

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
            <button
              key={project.image}
              type="button"
              onClick={() => open({ image: project.image, title: project.name, subtitle: project.location })}
              className="group relative flex h-[26rem] w-[30rem] flex-none flex-col justify-end overflow-hidden rounded-sm text-left ring-1 ring-inset ring-transparent transition-shadow duration-200 hover:ring-accent focus:outline-none focus-visible:ring-accent"
            >
              <Image
                src={project.image}
                alt={`${project.name}, ${project.location}`}
                fill
                className="object-cover transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/10 to-transparent" />
              <p className="relative p-6 font-display text-2xl font-bold text-on-dark">
                {project.name}
                <span className="mt-1 block text-sm font-normal text-on-dark-secondary">
                  {project.location}
                </span>
              </p>
            </button>
          ))}

          <div className="flex h-[26rem] w-[30rem] flex-none flex-col items-start justify-center gap-2 rounded-sm border border-dashed border-border-strong p-6">
            <p className="font-display text-lg font-bold text-ink-muted">Meer projecten volgen</p>
            <p className="text-sm text-ink-muted">
              Deze sectie vullen we verder aan met foto&apos;s en projectnamen.
            </p>
          </div>
        </div>
      </PanelReveal>

      <LightboxModal item={active} onClose={close} />
    </section>
  );
}
