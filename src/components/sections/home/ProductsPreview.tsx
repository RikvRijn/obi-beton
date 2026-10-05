"use client";

import Image from "next/image";
import Link from "next/link";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { LightboxModal, useLightbox } from "@/components/ui/Lightbox";

const PRODUCTS = [
  {
    name: "Balkons",
    description: "Prefab balkons in diverse vormen en afmetingen, kant-en-klaar voor montage.",
    image: "/product-wanden-vloeren.jpg",
    alt: "Prefab betonnen balkonplaat met opstaande rand",
  },
  {
    name: "Galerijen",
    description: "Galerijvloeren en loopbruggen voor woongebouwen. Afgestemd op de architectuur van het project.",
    image: "/product-balkons.jpg",
    alt: "Woongebouw met doorlopende betonnen galerijen",
  },
  {
    name: "Gevelelementen",
    description:
      "In verschillende soorten en maten, glad, geborsteld of gestraald. Misschien wilt u wel steenstrips of een kleurtje. Dat is voor OBI geen probleem.",
    image: "/product-gevelpanelen.jpg",
    alt: "Gevelelement van beton met steenstrips",
  },
  {
    name: "Trappen",
    description: "Betonnen trappenhuizen, bordessen en traponderdelen. Veilig en tijdbesparend op de bouwplaats.",
    image: "/product-trappen-nieuw.jpg",
    alt: "Gestapelde prefab betonnen trappen op het fabrieksterrein",
  },
  {
    name: "Constructieve elementen",
    description:
      "Wanden, kolommen en liggers als basis van de draagconstructie. Nauwkeurig geproduceerd en direct monteerklaar volgens tekening.",
    image: "/product-kolommen.jpg",
    alt: "Gestapelde prefab betonnen liggers en kolommen op het fabrieksterrein",
  },
  {
    name: "Dorpels en muurafdekkers",
    description: "Prefab dorpels en muurafdekkers, op maat gemaakt voor iedere gevel.",
    image: "/product-dorpels.jpg",
    alt: "Pallets met prefab betonnen dorpels en muurafdekkers",
  },
];

export function ProductsPreview() {
  const { active, open, close } = useLightbox<{ image: string; title: string; subtitle?: string }>();

  return (
    <section id="producten" className="bg-surface px-6 py-16 sm:py-20">
      <PanelReveal className="mx-auto max-w-7xl">
        <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-dim">
          Producten
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl font-black uppercase leading-tight text-ink sm:text-5xl">
          Wat wij maken
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <button
              key={product.name}
              type="button"
              onClick={() => open({ image: product.image, title: product.name })}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-sm border border-border bg-page text-left ring-1 ring-inset ring-transparent transition-colors duration-200 hover:bg-white hover:ring-accent focus:outline-none focus-visible:ring-accent"
            >
              <div className="relative h-64 w-full flex-none overflow-hidden bg-surface-2">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
                <p className="mt-2 text-sm text-ink-secondary">{product.description}</p>
              </div>
            </button>
          ))}

          <div className="flex h-full flex-col justify-between rounded-sm bg-dark p-8 sm:col-span-2 sm:p-10">
            <div>
              <p className="accent-rule font-display text-xs font-semibold uppercase tracking-[0.2em] text-on-dark-secondary">
                Niet standaard
              </p>
              <h3 className="font-display mt-4 text-2xl font-black uppercase leading-tight text-on-dark sm:text-3xl">
                Maatwerk &amp; advies
              </h3>
              <p className="mt-4 max-w-lg text-base text-on-dark-secondary">
                Onze calculators en tekenaars denken graag mee over de meest efficiënte prefab oplossing voor uw
                project.
              </p>
            </div>
            <Link
              href="/offerte"
              className="font-display mt-8 inline-flex items-center gap-2 self-start bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-on-dark transition-colors hover:bg-accent-glow"
            >
              Vraag een offerte aan
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </PanelReveal>

      <LightboxModal item={active} onClose={close} />
    </section>
  );
}
