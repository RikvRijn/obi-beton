"use client";

import Image from "next/image";
import Link from "next/link";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { LightboxModal, useLightbox } from "@/components/ui/Lightbox";
import { GalleryModal, PhotosIcon, useGallery, type GalleryPhoto } from "@/components/sections/afwerking/FinishGallery";

type Product = { name: string; description: string; image: string; alt: string; gallery?: GalleryPhoto[] };

const PRODUCTS: Product[] = [
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
    image: "/afwerking-borstwering-steenstrips.jpg",
    alt: "Prefab borstwering met ingestorte steenstrips",
    gallery: [
      { src: "/afwerking-borstwering-steenstrips.jpg", alt: "Prefab borstwering met ingestorte steenstrips", label: "Borstwering met steenstrips", width: 1200, height: 1600 },
      { src: "/afwerking-steenstrips.jpg", alt: "Close-up van ingestorte steenstrips in een betonelement", label: "Steenstrips", width: 1200, height: 1600 },
    ],
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

function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  const gallery = useGallery(product.gallery?.length ?? 0);
  const count = product.gallery?.length ?? 0;

  return (
    <>
      <button
        type="button"
        onClick={() => (count ? gallery.open(0) : onOpen())}
        aria-label={count > 1 ? `Bekijk ${count} foto's van ${product.name.toLowerCase()}` : undefined}
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
          {count > 1 && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-dark/80 px-2.5 py-1 text-xs font-semibold text-on-dark">
              <PhotosIcon />
              {`${count} foto's`}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
          <p className="mt-2 text-sm text-ink-secondary">{product.description}</p>
        </div>
      </button>

      {product.gallery && (
        <GalleryModal
          title={product.name}
          photos={product.gallery}
          index={gallery.index}
          onClose={gallery.close}
          onPrev={gallery.prev}
          onNext={gallery.next}
        />
      )}
    </>
  );
}

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
            <ProductCard
              key={product.name}
              product={product}
              onOpen={() => open({ image: product.image, title: product.name })}
            />
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
