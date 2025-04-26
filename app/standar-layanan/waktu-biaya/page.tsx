import { HeroSections } from "@/components/entities/HeroSections";
import { WaktuBiayaEntity } from "@/components/entities/standar-layanan/WaktuBiayaEntity";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="SOP PPID" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <WaktuBiayaEntity />
        </div>
      </main>
    </div>
  );
}
