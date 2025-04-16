import Image from 'next/image';

export const ProfileCard = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Bagian Gambar Profil - Responsive */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-6 md:p-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/people.jpg" // Ganti dengan path gambar yang sesuai
              alt="Budi Murtono - Sekretaris Daerah Kota Surakarta"
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Bagian Informasi Profil */}
        <div className="md:w-2/3 p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Budi Murtono</h1>
            <p className="text-lg sm:text-xl text-blue-600 font-medium">Sekretaris Daerah Kota Surakarta</p>
          </div>

          {/* Grid Responsive untuk Pendidikan dan Jabatan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pendidikan Formal */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                PENDIDIKAN FORMAL
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[40px]">SD</span>
                  <span className="text-gray-700">SD N 98 Tegalrejo Surakarta (1984)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[40px]">SMP</span>
                  <span className="text-gray-700">SMP N 12 Surakarta (1987)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[40px]">SMA</span>
                  <span className="text-gray-700">SMA N 2 Surakarta (1990)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[40px]">S1</span>
                  <span className="text-gray-700">Sarjana Ekonomi Pembangunan Universitas Sebelas Maret (1997)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[40px]">S2</span>
                  <span className="text-gray-700">Magister Manajemen Universitas Batik Surakarta (2011)</span>
                </li>
              </ul>
            </div>

            {/* Riwayat Jabatan */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                RIWAYAT JABATAN
              </h2>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[50px]">2005</span>
                  <span className="text-gray-700">Kepala Seksi Anggaran Pembangunan</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[50px]">2008</span>
                  <span className="text-gray-700">Kepala Seksi Anggaran I</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[50px]">2013</span>
                  <span className="text-gray-700">Kepala Bidang Anggaran</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[50px]">2018</span>
                  <span className="text-gray-700">Sekretaris BPKAD</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full mr-3 min-w-[50px]">2023</span>
                  <span className="text-gray-700">Sekretaris Daerah Kota Surakarta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
