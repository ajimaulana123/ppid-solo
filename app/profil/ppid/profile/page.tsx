"use client";

import { ProfileEntity } from "@/components/entities/profil/ppid/profile/ProfileEntity";

export default function ProfilePpid() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <ProfileEntity title="Profile PPID" description="asd" />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            {/* Video Section */}
            <div className="rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="relative">
                <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                  <video
                    src="https://your-cdn-link.com/video.mp4"
                    className="w-full h-full"
                    controls
                    poster="/images/video-placeholder.jpg"
                  />
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
                <p className="text-gray-700 text-lg leading-relaxed">
                  fgjghjghj
                </p>
              </div>
            </div>

            {/* Main Information Section */}
            <div className="rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                  LATAR BELAKANG
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  nformasi merupakan kebutuhan pokok setiap orang bagi
                  pengembangan pribadi dan lingkungan sosialnya. Oleh karena
                  itu, hak memperoleh informasi merupakan hak asasi manusia dan
                  keterbukaan informasi publik. Hak atas Informasi ini menjadi
                  sangat penting, karena makin terbuka penyelenggaraan negara
                  untuk diawasi publik, penyelenggaraan negara tersebut makin
                  dapat dipertanggungjawabkan. Pemberlakuan Undang-Undang Nomor
                  14 tahun 2008 tentang Keterbukaan Informasi Publik pada 30
                  April 2010 merupakan momentum penting dalam mendorong
                  keterbukaan di Indonesia, khususnya di Provinsi DKI Jakarta.
                  Undang-Undang ini telah memberikan landasan hukum terhadap hak
                  setiap orang untuk memperoleh informasi publik di mana setiap
                  Badan Publik mempunyai kewajiban dalam menyediakan dan
                  melayani permohonan informasi publik secara cepat, akurat,
                  mudah dan berkualitas. Oleh karena itu, untuk melaksanakan
                  pelayanan informasi maka dibentuklah Pejabat Pengelola
                  Informasi dan Dokumentasi (PPID) yang bertanggung jawab
                  memberikan pelayanan informasi yang meliputi proses
                  penyimpanan, pendokumentasian, dan penyediaan pelayanan serta
                  pengumuman informasi publik.
                </p>
              </div>
            </div>

            {/* Main Information Section */}
            <div className=" rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                  PPID Pemerintah Provinsi DKI Surakarta
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Pejabat Pengelola Informasi dan Dokumentasi (PPID) Pemerintah
                  Provinsi DKI Jakarta merupakan ujung tombak pelayanan
                  informasi di Provinsi DKI Jakarta. Tugasnya adalah mengelola
                  dan memberikan pelayanan informasi kepada masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
