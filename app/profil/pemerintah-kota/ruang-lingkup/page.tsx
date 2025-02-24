import { ProfileHero } from "@/components/profile/ProfileHero";

export default function RuangLingkupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <ProfileHero
          title="Ruang Lingkup Pemerintahan"
          description="Ruang lingkup dan kewenangan Pemerintahan berdasarkan Undang-Undang Republik Indonesia"
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            {/* General Governance Section */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative z-10 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-white transition-colors">
                  Pemerintahan Kota Surakarta
                </h2>
                <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors">
                  Pemerintahan Kota Surakarta adalah
                  penyelenggaraan urusan pemerintahan oleh Walikota dan Dewan
                  Perwakilan Rakyat Daerah Kota Surakarta
                  menurut asas otonomi dan tugas pembantuan dengan prinsip
                  otonomi seluas-luasnya dalam sistem dan prinsip Negara
                  Kesatuan Republik Indonesia sebagaimana dimaksud dalam
                  Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.
                </p>
              </div>
            </div>

            {/* Economic Center Section */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative z-10 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-white transition-colors">
                  Pusat Perekonomian Nasional dan Kota Global
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-blue-100 transition-colors">
                  Kota Surakarta sebagai Pusat Perekonomian
                  Nasional dan Kota Global berfungsi sebagai:
                </p>
                <ul className="space-y-2 text-gray-600 group-hover:text-blue-100 transition-colors">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600 group-hover:text-white">
                      •
                    </span>
                    <span>Pusat perdagangan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600 group-hover:text-white">
                      •
                    </span>
                    <span>
                      Pusat kegiatan layanan jasa dan layanan jasa keuangan
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-600 group-hover:text-white">
                      •
                    </span>
                    <span>
                      Pusat kegiatan bisnis nasional, regional, dan global
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Special Authorities Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative z-10 p-8">
                  <h3 className="text-xl font-semibold mb-6 text-blue-600 group-hover:text-white transition-colors">
                    Urusan Pemerintahan
                  </h3>
                  <ul className="space-y-2 text-gray-600 group-hover:text-blue-100 transition-colors">
                    {[
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
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-blue-600 group-hover:text-white">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative z-10 p-8">
                  <h3 className="text-xl font-semibold mb-6 text-blue-600 group-hover:text-white transition-colors">
                    Kelembagaan
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors">
                    Pemerintahan Kota Surakarta memiliki
                    kewenangan khusus dalam aspek kelembagaan untuk menunjang
                    pelaksanaan urusan pemerintahan dan pembangunan daerah.
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
