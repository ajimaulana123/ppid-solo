"use client";

// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { PejabatStrukturalEntity } from "@/components/entities/PejabatStrukturalEntity";

// Data
import { dataPejabat } from "./data";

export default function PejabatStruktural() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Daftar Pejabat Struktural"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <PejabatStrukturalEntity members={dataPejabat.members} />
        </div>
      </main>
    </div>
  );
}
