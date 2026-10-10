import { CatalogSections } from "@/components/ui/catalog-sections";
import { CommerceHero } from "@/components/ui/loja-labs-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CommerceHero />
      <CatalogSections />
    </main>
  );
}
