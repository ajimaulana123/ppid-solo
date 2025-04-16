import { HeroSections } from "@/components/entities/HeroSections";
import { TugasFungsiEntity } from "@/components/entities/TugasFungsiEntity";

import { dasarHukum } from "./data";

export default function DasarHukum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Dasar Hukum"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <TugasFungsiEntity tugasFungsi={dasarHukum} />
        </div>
      </main>
    </div>
  );
}
