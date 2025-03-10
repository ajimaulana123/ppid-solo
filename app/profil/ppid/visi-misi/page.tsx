import { HeroSections } from "@/components/entities/HeroSections";
import { VisiMission } from "@/components/entities/VisiMission";

const visionMissionData = {
  firstTitle: "Visi",
  firstDescription:
    "Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk Surakarta yang lebih baik",
  secondTitle: "Misi",
  secondDescription: [
    "Meningkatkan kualitas layanan informasi publik",
    "Meningkatkan kualitas pengelolaan dan pelayanan informasi",
    "Meningkatkan kualitas SDM dalam pelayanan informasi",
    "Memperkuat monitoring dan evaluasi pelaksanaan layanan informasi publik",
  ],
};

export default function VisiMisi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Visi dan Misi PPID" description="SDFSDFSD" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <VisiMission content={visionMissionData} />
        </div>
      </main>
    </div>
  );
}
