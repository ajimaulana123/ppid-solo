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
          description="Menyelenggarakan urusan pemerintahan daerah berdasarkan asas otonomi daerah dan tugas pembantuan. Balai Kota berperan sebagai pusat administrasi dan pelayanan publik, melaksanakan pembangunan daerah, serta mengkoordinasikan berbagai program dan kebijakan untuk kesejahteraan masyarakat Kota Surakarta."
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <TugasFungsiEntity tugasFungsi={tugasFungsi} />
        </div>
      </main>
    </div>
  );
}
