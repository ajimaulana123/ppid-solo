"use client";

import { ProfileHero } from "@/components/profile/ProfileHero";

const PemerintahKotaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <ProfileHero 
          title="Pemerintah Kota Surakarta"
          description="Pusat Informasi dan Layanan Pemerintah Kota Surakarta"
        />
        
        {/* Informasi Umum */}
        <div className="container mx-auto px-6 py-12 space-y-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Tentang Kota Surakarta</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Sejarah Singkat</h3>
                <p className="text-gray-600">
                  Kota Surakarta atau Solo merupakan kota yang memiliki sejarah dan warisan budaya yang kaya. 
                  Didirikan pada tahun 1745, kota ini telah berkembang menjadi pusat kebudayaan Jawa dan 
                  salah satu kota penting di Indonesia.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Data Geografis</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Luas Wilayah: 44,04 km²</li>
                  <li>• Jumlah Kecamatan: 5</li>
                  <li>• Jumlah Kelurahan: 51</li>
                  <li>• Ketinggian: 105 m dari permukaan laut</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Layanan Publik */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Layanan Publik</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Pelayanan Terpadu",
                  desc: "Layanan satu pintu untuk berbagai kebutuhan administrasi masyarakat",
                  icon: "🏢"
                },
                {
                  title: "E-Government",
                  desc: "Sistem pelayanan pemerintah berbasis elektronik yang terintegrasi",
                  icon: "💻"
                },
                {
                  title: "Pengaduan Masyarakat",
                  desc: "Kanal pengaduan dan aspirasi untuk peningkatan layanan publik",
                  icon: "📢"
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="relative z-10 p-6">
                    <div className="text-4xl mb-4 group-hover:text-white transition-colors">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pencapaian dan Penghargaan */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Pencapaian dan Penghargaan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 group-hover:text-white transition-colors">
                    Penghargaan Terkini
                  </h3>
                  <ul className="space-y-3 text-gray-600 group-hover:text-blue-100 transition-colors">
                    <li>• Kota Terbaik dalam Implementasi Smart City 2023</li>
                    <li>• Penghargaan Kota Sehat Kategori Wistara 2023</li>
                    <li>• Innovation Government Award 2023</li>
                    <li>• Penghargaan Kota Layak Anak 2023</li>
                  </ul>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 group-hover:text-white transition-colors">
                    Inovasi Terbaru
                  </h3>
                  <ul className="space-y-3 text-gray-600 group-hover:text-blue-100 transition-colors">
                    <li>• Pengembangan Sistem Transportasi Terintegrasi</li>
                    <li>• Program Digitalisasi UMKM</li>
                    <li>• Sistem Manajemen Sampah Terpadu</li>
                    <li>• Program Pemberdayaan Ekonomi Kreatif</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PemerintahKotaPage; 