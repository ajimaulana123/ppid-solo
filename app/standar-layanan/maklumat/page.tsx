import { HeroSections } from "@/components/entities/HeroSections";
import { MaklumatEntity } from "@/components/entities/standar-layanan/MaklumatEntity";

const visionMissionData = {
  firstTitle: "Visi",
  firstDescription:
    "Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk Surakarta yang lebih baik",
  secondTitle: "Berita PPID",
  secondDescription: [
    "Meningkatkan kualitas layanan informasi publik",
    "Meningkatkan kualitas pengelolaan dan pelayanan informasi",
    "Meningkatkan kualitas SDM dalam pelayanan informasi",
    "Memperkuat monitoring dan evaluasi pelaksanaan layanan informasi publik",
  ],
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Maklumat Pelayanan Informasi Publik"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <MaklumatEntity content={visionMissionData} />
        </div>
      </main>
    </div>
  );
}
