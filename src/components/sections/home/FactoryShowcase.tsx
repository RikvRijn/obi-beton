import Link from "next/link";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { FramedVideo } from "@/components/ui/FramedVideo";

const LINKS = [
  {
    label: "Afwerking & kleuren",
    description: "Uitgewassen, gestraald, geprofileerd of glad: de mogelijkheden op een rij.",
    href: "/afwerking-en-kleuren",
  },
  {
    label: "Duurzaamheid",
    description: "Hoe OBI de CO₂-uitstoot van haar beton stap voor stap verlaagt.",
    href: "/duurzaamheid",
  },
  {
    label: "Kwaliteit",
    description: "Gecertificeerd volgens KOMO / BRL 2813, dagelijks gecontroleerd.",
    href: "/kwaliteit",
  },
  {
    label: "Offerte aanvragen",
    description: "Wat we nodig hebben voor een snelle en correcte offerte.",
    href: "/offerte",
  },
];

/**
 * Bewust volledig bordeaux (net als de footer eronder), zodat dit en de footer
 * samen aanvoelen als één donkere afsluiting van de pagina, in plaats van een
 * los gekleurd vak binnen een lichte sectie.
 */
export function FactoryShowcase() {
  return (
    <section className="bg-dark-maroon px-6 py-16 sm:py-20">
      <PanelReveal className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Beton Wonderland
            </p>
            <h2 className="font-display mt-4 max-w-xl text-4xl font-black uppercase leading-tight text-on-dark sm:text-5xl">
              Een kijkje op ons terrein
            </h2>
            <p className="mt-6 max-w-lg text-lg text-on-dark-secondary">
              Een dronevideo van ons productieterrein in Ossendrecht: rijen prefab
              betonelementen, klaar om naar de bouwplaats te gaan.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col justify-between gap-6 border-l-4 border-accent bg-white/5 p-6 transition-colors duration-200 hover:bg-white/10"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-on-dark transition-colors group-hover:text-accent">
                      {link.label}
                    </h3>
                    <p className="mt-2 text-sm text-on-dark-secondary">{link.description}</p>
                  </div>
                  <span
                    aria-hidden
                    className="font-display text-sm font-semibold text-accent transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <FramedVideo
            src="/beton-wonderland.mp4"
            aspectClassName="aspect-[9/16]"
            className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto"
          />
        </div>
      </PanelReveal>
    </section>
  );
}
