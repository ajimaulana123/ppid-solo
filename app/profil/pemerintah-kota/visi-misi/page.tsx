// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { VisiMission } from "@/components/entities/VisiMission";

// Data
import { visionMissionData } from "./vissionMissionData";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Profil PPID" description="Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kota Surakarta merupakan pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan/atau pelayanan informasi di Pemerintah Kota Surakarta." />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <VisiMission  content={visionMissionData} />
        </div>
      </main>
    </div>
  );
}
