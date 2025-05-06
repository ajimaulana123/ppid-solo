import { HeroSections } from "@/components/entities/HeroSections";
import { VisiMission } from "@/components/entities/VisiMission";

const visionMissionData = {
  firstTitle: "Visi",
  firstDescription:
    "MEWUJUDKAN SURAKARTA SEBAGAI KOTA BUDAYA YANG MODERN, TANGGUH, GESIT, KREATIF DAN SEJAHTERA",
  secondTitle: "Misi",
  secondDescription: [
    "Meningkatkan kualitas kesehatan masyarakat yang berkelanjutan",
    "Memperkuat pertumbuhan ekonomi yang adaptif dan berkelanjutan",
    "Mewujudkan tata ruang dan infrastruktur kota yang mendukung pemajuan kebudayaan dan pariwisata berkelanjutan",
    "Meningkatkan kualitas dan daya saing pemuda dan masyarakat umum di bidang pendidikan, ekonomi, seni budaya, dan olahraga",
    "Mengembangkan tata kelola pemerintahan dan pelayanan publik yang gesit dan kolaboratif berlandaskan semangat gotong royong dan kebinekaan",
    "Mewujudkan kemakmuran dan kesejahteraan bersama warga kota yang berkeadilan dan inklusif",
    "Mewujudkan daerah yang kondusif dan kerukunan antar umat beragama dalam tata kehidupan bermasyarakat yang saling menghormati",
  ],  
};

export default function VisiMisi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Visi dan Misi PPID" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <VisiMission content={visionMissionData} />
        </div>
      </main>
    </div>
  );
}
