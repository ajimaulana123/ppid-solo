import { HeroSections } from "@/components/entities/HeroSections";
import { TugasFungsiEntity } from "@/components/entities/profil/ppid/tugas-fungsi/TugasFungsiEntity";

const tugasFungsi = [
  "Meningkatkan kualitas layanan informasi publik",
  "Meningkatkan kualitas pengelolaan dan pelayanan informasi",
  "Meningkatkan kualitas SDM dalam pelayanan informasi",
  "Memperkuat monitoring dan evaluasi pelaksanaan layanan informasi publik",
  "Meningkatkan kualitas layanan informasi publik",
  "Meningkatkan kualitas pengelolaan dan pelayanan informasi",
  "Meningkatkan kualitas SDM dalam pelayanan informasi",
  "Memperkuat monitoring dan evaluasi pelaksanaan layanan informasi publik",
];

export default function TugasFungsi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Tanggung Jawab, Tugas dan Wewenang PPID"
          description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem "
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            <div className="container mx-auto px-6 py-12 space-y-12">
              <TugasFungsiEntity tugasFungsi={tugasFungsi} />
            </div>
          </div>
        </div>
        {/* Main Information Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 -mr-16 -mt-16 bg-blue-200 rounded-full opacity-50" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
              Motto PPID
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">fgjghjghj</p>
          </div>
        </div>
      </main>
    </div>
  );
}
