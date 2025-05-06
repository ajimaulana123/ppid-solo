// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { VisiMission } from "@/components/entities/VisiMission";

// Data
import { visionMissionData } from "./vissionMissionData";

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <main>
        <HeroSections title="Profil PPID" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <VisiMission  content={visionMissionData} />
        </div>
      </main>
    </div>
  );
}
