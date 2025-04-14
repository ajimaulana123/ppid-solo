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
      </main>
    </div>
  );
}
