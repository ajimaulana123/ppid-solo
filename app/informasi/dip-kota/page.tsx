"use client";

// Component
import { HeroSections } from "@/components/entities/HeroSections";
import { DipKotaEntity } from "@/components/entities/informasi/DipKotaEntity";

// Data
import { dataDipKota } from "./data";

export default function DipKota() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Daftar Informasi Publik PPID Kota"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <DipKotaEntity items={dataDipKota.items} />
        </div>
      </main>
    </div>
  );
}
