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
          description="Bertanggung jawab atas pelaksanaan kebijakan, pengelolaan administrasi pemerintahan, serta pelayanan publik di lingkungan Pemerintah Kota. Pejabat ini meliputi wali kota, wakil wali kota, sekretaris daerah, para asisten, kepala dinas, kepala badan, dan kepala bagian di lingkungan sekretariat daerah"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <PejabatStrukturalEntity members={dataPejabat.members} />
        </div>
      </main>
    </div>
  );
}
