// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { PemerintahKotaSurakarta } from "@/components/entities/profil/pemerintah-kota/PemerintahanKotaSurakarta";
import { PusatPerekonomianNasionalGlobal } from "@/components/entities/profil/pemerintah-kota/PusatPerekonomianNasionalGlobal";
import { UrusanPemerintahKelembagaan } from "@/components/entities/profil/pemerintah-kota/UrusanPemerintahKelembagaan";

export default function RuangLingkupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Ruang Lingkup Pemerintahan"
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            <PemerintahKotaSurakarta />
            <PusatPerekonomianNasionalGlobal />
            <UrusanPemerintahKelembagaan />
          </div>
        </div>
      </main>
    </div>
  );
}
