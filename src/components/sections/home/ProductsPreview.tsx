"use client";

import Image from "next/image";
import Link from "next/link";
import { PanelReveal } from "@/components/ui/PanelReveal";
import { LightboxModal, useLightbox } from "@/components/ui/Lightbox";

const PRODUCTS = [
  {
    name: "Balkons",
    description: "Kant-en-klare balkonelementen, snel te plaatsen op de bouwplaats.",
    image: "/product-balkons.jpg",
  },
  {
    name: "Gevelpanelen",
    description: "Esthetiek en functie in één element, in vorm en kleur naar wens.",
    image: "/product-gevelpanelen.jpg",
  },
  {
    name: "Trappen",
    description: "Prefab trappen, nauwkeurig gefabriceerd voor een vlekkeloze montage.",
    image: "/product-trappen.jpg",
  },
  {
    name: "Wanden en vloeren",
    description: "Constructieve basis voor iedere bouw, prefab geproduceerd op maat.",
    image: "/product-wanden-vloeren.jpg",
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
          {PRODUCTS.map((product) => {
            const Wrapper = product.image ? "button" : "div";
            return (
              <Wrapper
                key={product.name}
                type={product.image ? "button" : undefined}
                onClick={
                  product.image
                    ? () => open({ image: product.image as string, title: product.name })
                    : undefined
                }
                className={`group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-page text-left transition-colors duration-200 hover:bg-white ${
                  product.image
                    ? "cursor-pointer ring-1 ring-inset ring-transparent hover:ring-accent focus:outline-none focus-visible:ring-accent"
                    : ""
                }`}
              >
                <div className="relative h-64 w-full flex-none overflow-hidden bg-surface-2">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-[transform,filter] duration-300 group-hover:scale-105 group-hover:brightness-110"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
                  <p className="mt-2 text-sm text-ink-secondary">{product.description}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <p className="mt-10 text-lg text-ink-secondary">
          Staat uw element er niet tussen? OBI fabriceert ook maatwerk prefab beton.{" "}
          <Link href="/offerte" className="font-semibold text-accent underline underline-offset-4 hover:text-accent-dim">
            Vraag een offerte aan voor uw project
          </Link>
          .
        </p>
      </PanelReveal>

      <LightboxModal item={active} onClose={close} />
    </section>
  );
}
