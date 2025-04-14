"use client";

// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { SatuanUnitKerjaEntity } from "@/components/entities/SatuanUnitKerjaEntity";

// Data
import { dataPejabat } from "./data";

export default function SatuanUnitKerja() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Satuan Unit dan Kerja"
          description="Struktur organisasi pemerintahan daerah yang dibentuk untuk melaksanakan fungsi-fungsi pemerintahan secara efektif dan efisien. Setiap unit kerja memiliki tugas pokok dan fungsi (tupoksi) yang spesifik sesuai dengan bidangnya, serta bertanggung jawab dalam perencanaan, pelaksanaan, dan evaluasi program-program pembangunan daerah"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <SatuanUnitKerjaEntity members={dataPejabat.members} />
        </div>
      </main>
    </div>
  );
}
