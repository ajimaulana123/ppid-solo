"use client";

// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { DipPdEntity } from "@/components/entities/informasi/DipPdEntity";

// Data
import { dataDipPd } from "./data";

export default function DipKota() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Daftar Informasi Publik PPID Perangkat Daerah"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <DipPdEntity items={dataDipPd.items} />
        </div>
      </main>
    </div>
  );
}
