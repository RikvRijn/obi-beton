"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroPanels } from "@/components/sections/home/HeroPanels";
import { HeroVideo } from "@/components/sections/home/HeroVideo";
import { FramedVideo } from "@/components/ui/FramedVideo";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { LightboxModal, useLightbox } from "@/components/ui/Lightbox";

const COMPANY_FACTS = "Sinds 1960 · 80+ medewerkers · 4 productgroepen";

const PROJECT_FACTS = [
  { value: 19, suffix: "", label: "Verdiepingen" },
  { value: 157, suffix: "", label: "Startersappartementen" },
  { value: 800, suffix: "m²", label: "Commerciële ruimte" },
];

function FactTile({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div>
      <span ref={ref} className="font-display block text-4xl font-black text-on-dark">
        {display}
        {suffix}
      </span>
      <span className="text-sm uppercase tracking-[0.15em] text-on-dark-secondary">{label}</span>
    </div>
  );
}

/**
 * Hero en het uitgelichte project (HIGHnote) staan bewust in dezelfde sectie,
 * op dezelfde donkere achtergrond: één doorlopend geheel in plaats van twee
 * losse vakken onder elkaar.
 */
export function HeroSection() {
  const { active, open, close } = useLightbox<{
    image?: string;
    video?: string;
    skipIntroSeconds?: number;
    title: string;
    subtitle?: string;
  }>();

  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="relative flex min-h-[82vh] items-center px-6 pt-28 pb-20">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/50" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Sinds 1960 · Ossendrecht
            </p>

            <h1 className="font-display mt-6 max-w-4xl text-6xl font-black uppercase leading-[0.95] text-on-dark sm:text-7xl lg:text-6xl xl:text-7xl">
              Beton dat
              <br />
              blijft <span className="text-accent">staan.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-on-dark-secondary">
              OBI ontwikkelt en produceert prefab betonelementen: wanden en vloeren,
              gevelpanelen, balkons en trappen. Vakmanschap in iedere laag,
              van de tekentafel tot de bouwplaats.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/offerte" variant="primary">
                Offerte aanvragen
              </Button>
              <Button href="#producten" variant="secondary">
                Bekijk producten
              </Button>
            </div>
          </div>

          <HeroPanels />
        </div>
      </div>

      <div className="relative bg-dark-maroon px-6 py-16 sm:py-20">
        <PanelReveal className="mx-auto max-w-[100rem]">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-on-dark-secondary">
            {COMPANY_FACTS}
          </p>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[0.85fr_0.9fr_1.15fr]">
            <button
              type="button"
              onClick={() => open({ image: "/highnote-almere-foto.jpg", title: "HIGHnote", subtitle: "Almere" })}
              className="cursor-pointer overflow-hidden rounded-sm border-4 border-white shadow-2xl ring-2 ring-transparent transition-shadow hover:ring-accent focus:outline-none focus-visible:ring-accent"
            >
              <Image
                src="/highnote-almere-foto.jpg"
                alt="HIGHnote, Almere"
                width={1440}
                height={1080}
                className="aspect-[4/3] w-full object-cover"
              />
            </button>

            <div>
              <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Uitgelicht project
              </p>
              <h2 className="font-display mt-4 max-w-lg text-4xl font-black uppercase leading-[0.95] text-on-dark sm:text-5xl">
                HIGHnote <span className="text-accent">Almere</span>
              </h2>

              <p className="mt-6 max-w-lg text-lg text-on-dark-secondary">
                Een iconisch gebouw in het stadshart van Almere, een inspirerende en
                energieke plek voor jonge pioniers. De uitkragende balkons en rode
                architectonische elementen zijn met de grootste zorg gemaakt door onze
                zusteronderneming Eurobeton in België.
              </p>

              <div className="mt-8 flex flex-wrap gap-8">
                {PROJECT_FACTS.map((fact) => (
                  <FactTile key={fact.label} {...fact} />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                open({
                  video: "/project-highnote-almere.mp4",
                  skipIntroSeconds: 20,
                  title: "HIGHnote",
                  subtitle: "Almere",
                })
              }
              className="cursor-pointer text-left"
            >
              <FramedVideo
                src="/project-highnote-almere.mp4"
                aspectClassName="aspect-video"
                skipIntroSeconds={20}
                className="ring-2 ring-transparent transition-shadow hover:ring-accent"
              />
            </button>
          </div>
        </PanelReveal>
      </div>

      <LightboxModal item={active} onClose={close} />
    </section>
  );
}
