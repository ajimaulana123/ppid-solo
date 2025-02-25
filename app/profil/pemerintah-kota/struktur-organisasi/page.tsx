import { HeroSections } from "@/components/entities/HeroSections";
import { OrganizationStructure } from "@/components/entities/OrganizationStructure";

const organizationData = {
  members: [
    {
      name: "Dr. H. Gibran Rakabuming Raka",
      position: "Walikota Surakarta",
    },
    {
      name: "Teguh Prakosa",
      position: "Wakil Walikota Surakarta",
    },
    {
      name: "Drs. Bambang Hardjanto",
      position: "Sekretaris Daerah",
    },
  ],
};

export default function StrukturOrganisasi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Struktur Organisasi"
          description="Struktur organisasi PPID Kota Surakarta terdiri dari Pejabat Pengelola, Sekretariat, Bidang Pelayanan Informasi, dan Bidang Dokumentasi. Setiap bagian memiliki peran dalam mengelola serta menyediakan informasi kepada publik sesuai dengan peraturan yang berlaku."
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <OrganizationStructure members={organizationData.members} />
        </div>
      </main>
    </div>
  );
}
