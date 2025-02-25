import { HeroSections } from "@/components/entities/HeroSections";

const organizationFields = [
  "Pekerjaan umum dan penataan ruang",
  "Perumahan dan kawasan permukiman",
  "Penanaman modal",
  "Perhubungan",
  "Lingkungan hidup",
  "Perindustrian",
  "Pariwisata dan ekonomi kreatif",
  "Perdagangan",
  "Pendidikan",
  "Kesehatan",
  "Kebudayaan",
  "Pengendalian penduduk dan keluarga berencana",
  "Administrasi kependudukan dan pencatatan sipil",
  "Kelautan dan perikanan",
  "Ketenagakerjaan",
];

const pusatPerekonomianNasionalKotaGlobal = {
  title: "Pusat Perekonomian Nasional dan Kota Global",
  description: [
    "Pusat perdagangan",
    "Pusat kegiatan layanan jasa dan layanan jasa keuangan",
    "Pusat kegiatan bisnis nasional, regional, dan global",
  ],
}

export default function RuangLingkupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Ruang Lingkup Pemerintahan"
          description="Ruang lingkup dan kewenangan Pemerintahan berdasarkan Undang-Undang Republik Indonesia"
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            {/* General Governance Section */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -mr-16 -mt-16 bg-blue-200 rounded-full opacity-50" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                  Pemerintahan Kota Surakarta
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Pemerintahan Kota Surakarta adalah penyelenggaraan urusan
                  pemerintahan oleh Walikota dan Dewan Perwakilan Rakyat Daerah
                  Kota Surakarta menurut asas otonomi dan tugas pembantuan
                  dengan prinsip otonomi seluas-luasnya dalam sistem dan prinsip
                  Negara Kesatuan Republik Indonesia sebagaimana dimaksud dalam
                  Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.
                </p>
              </div>
            </div>

            {/* Pusat Perekonomian Nasional dan Kota Global */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                {pusatPerekonomianNasionalKotaGlobal.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-blue-100 transition-colors">
                Kota Surakarta sebagai Pusat Perekonomian Nasional dan Kota
                Global berfungsi sebagai:
              </p>
              <ul className="space-y-4">
                {pusatPerekonomianNasionalKotaGlobal.description.map((data, index) => (
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

            {/* Special Authorities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urusan Pemerintahan */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                  Urusan Pemerintahan
                </h2>
                <ul className="space-y-4">
                  {organizationFields.map((data, index) => (
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

              {/* Kelembagaan */}
              <div className="bg-white from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden h-fit">
                <div className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                    Kelembagaan
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Pemerintahan Kota Surakarta memiliki kewenangan khusus dalam
                    aspek kelembagaan untuk menunjang pelaksanaan urusan
                    pemerintahan dan pembangunan daerah.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
