import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { AboutTeaser } from "@/components/sections/home/AboutTeaser";
import { ProductsPreview } from "@/components/sections/home/ProductsPreview";
import { ReferencesShowcase } from "@/components/sections/home/ReferencesShowcase";
import { FactoryShowcase } from "@/components/sections/home/FactoryShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutTeaser />
        <ReferencesShowcase />
        <ProductsPreview />
        <FactoryShowcase />
      </main>
      <Footer />
    </>
  );
}
