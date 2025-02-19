import { ProfileHero } from "@/components/profile/ProfileHero";
import { VisionMission } from "@/components/profile/VisionMission";
import { OrganizationStructure } from "@/components/profile/OrganizationStructure";

const visionMissionData = {
  vision: "Terwujudnya pelayanan informasi yang transparan dan akuntabel untuk Surakarta yang lebih baik",
  missions: [
    "Meningkatkan kualitas layanan informasi publik",
    "Meningkatkan kualitas pengelolaan dan pelayanan informasi",
    "Meningkatkan kualitas SDM dalam pelayanan informasi",
    "Memperkuat monitoring dan evaluasi pelaksanaan layanan informasi publik"
  ]
};

const organizationData = {
  members: [
    {
      name: "Dr. H. Gibran Rakabuming Raka",
      position: "Walikota Surakarta"
    },
    {
      name: "Teguh Prakosa",
      position: "Wakil Walikota Surakarta"
    },
    {
      name: "Drs. Bambang Hardjanto",
      position: "Sekretaris Daerah"
    }
  ]
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <ProfileHero title="Profil PPID" description="Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kota Surakarta merupakan pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan/atau pelayanan informasi di Pemerintah Kota Surakarta." imageUrl="https://images.unsplash.com/photo-1622940197086-cd1a8fcf9d2f?auto=format&fit=crop&q=80" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <VisionMission {...visionMissionData} />
          <OrganizationStructure members={organizationData.members} />
        </div>
      </main>
    </div>
  );
} 