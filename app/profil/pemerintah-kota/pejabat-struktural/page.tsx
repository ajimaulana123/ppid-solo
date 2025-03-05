"use client";

import { HeroSections } from "@/components/entities/HeroSections";
import { PejabatStrukturalEntity } from "@/components/entities/PejabatStrukturalEntity";

const dataPejabat = {
  members: [
    {
      name: "Dr. H. Gibran Rakabuming Raka",
      position: "Walikota Surakarta",
      department: "Pemerintah Kota Surakarta",
      workUnit: "Kantor Walikota",
      rank: "Pembina Utama Madya (IV/d)",
      lastUpdate: "2024"
    },
    {
      name: "Teguh Prakosa",
      position: "Wakil Walikota Surakarta",
      department: "Pemerintah Kota Surakarta",
      workUnit: "Kantor Walikota",
      rank: "Pembina Utama Muda (IV/c)",
      lastUpdate: "2024"
    },
    {
      name: "Drs. Bambang Hardjanto",
      position: "Sekretaris Daerah",
      department: "Sekretariat Daerah",
      workUnit: "Sekretariat Daerah",
      rank: "Pembina Utama Madya (IV/d)",
      lastUpdate: "2024"
    },
    {
      name: "Dr. H. Gibran Rakabuming Raka",
      position: "Walikota Surakarta",
      department: "Pemerintah Kota Surakarta",
      workUnit: "Kantor Walikota",
      rank: "Pembina Utama Madya (IV/d)",
      lastUpdate: "2024"
    },
    {
      name: "Teguh Prakosa",
      position: "Wakil Walikota Surakarta",
      department: "Pemerintah Kota Surakarta",
      workUnit: "Kantor Walikota",
      rank: "Pembina Utama Muda (IV/c)",
      lastUpdate: "2024"
    },
    {
      name: "Drs. Bambang Hardjanto",
      position: "Sekretaris Daerah",
      department: "Sekretariat Daerah",
      workUnit: "Sekretariat Daerah",
      rank: "Pembina Utama Madya (IV/d)",
      lastUpdate: "2024"
    },
    {
      name: "Dr. H. Gibran Rakabuming Raka",
      position: "Walikota Surakarta",
      department: "Pemerintah Kota Surakarta",
      workUnit: "Kantor Walikota",
      rank: "Pembina Utama Madya (IV/d)",
      lastUpdate: "2024"
    },
    {
      name: "Teguh Prakosa",
      position: "Wakil Walikota Surakarta",
      department: "Pemerintah Kota Surakarta",
      workUnit: "Kantor Walikota",
      rank: "Pembina Utama Muda (IV/c)",
      lastUpdate: "2024"
    },
    {
      name: "Drs. Bambang Hardjanto",
      position: "Sekretaris Daerah",
      department: "Sekretariat Daerah",
      workUnit: "Sekretariat Daerah",
      rank: "Pembina Utama Madya (IV/d)",
      lastUpdate: "2024"
    },
  ],
};

export default function PejabatStruktural() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Daftar Pejabat Struktural"
          description="lorem lorem"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <PejabatStrukturalEntity members={dataPejabat.members} />
        </div>
      </main>
    </div>
  );
}
