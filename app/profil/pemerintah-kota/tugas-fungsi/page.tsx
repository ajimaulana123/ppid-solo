// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { TugasFungsiEntity } from "@/components/entities/TugasFungsiEntity";

// Data
import { tugasFungsi } from "./data";

export default function TugasFungsi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Tugas dan Fungsi"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <TugasFungsiEntity tugasFungsi={tugasFungsi} />
        </div>
      </main>
    </div>
  );
}
