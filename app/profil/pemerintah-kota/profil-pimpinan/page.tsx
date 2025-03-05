import { HeroSections } from "@/components/entities/HeroSections";
import { ProfilPimpinanEntity } from "@/components/entities/ProfilPimpinanEntity";

const organizationData = {
  title: "Profil Pimpinan",
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

const shortProfile = [
  "Inspektorat Kota Surakarta",
  "Badan Perencanaan Pembangunan Daerah Kota Surakarta",
  "Badan Pengelolaan Keuangan dan Aset Daerah Kota Surakarta",
  "Badan Pendapatan Daerah Kota Surakarta",
  "Dinas Pendidikan Kota Surakarta",
  "Dinas Kesehatan Kota Surakarta",
  "Dinas Pekerjaan Umum dan Penataan Ruang Kota Surakarta",
  "Dinas Perumahan, Kawasan Permukiman dan Pertanahan Kota Surakarta",
  "Dinas Sosial Kota Surakarta",
];

export default function ProfilPimpinan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Profil Pimpinan" description="Lorem lorem." />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <ProfilPimpinanEntity members={organizationData.members} />

          <div className="grid gap-8">
            {/* General Governance Section */}
            <div className=" from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                  Pemerintahan Kota Surakarta
                </h2>
              </div>
            </div>

            {/* Special Authorities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urusan Pemerintahan */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <ul className="space-y-4">
                  {shortProfile.map((data, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {data}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <ul className="space-y-4">
                  {shortProfile.map((data, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {data}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
