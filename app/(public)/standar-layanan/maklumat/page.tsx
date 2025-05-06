import { HeroSections } from "@/components/entities/HeroSections";
import { MaklumatEntity } from "@/components/entities/standar-layanan/MaklumatEntity";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Maklumat Pelayanan Informasi Publik"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <MaklumatEntity />
        </div>
      </main>
    </div>
  );
}
