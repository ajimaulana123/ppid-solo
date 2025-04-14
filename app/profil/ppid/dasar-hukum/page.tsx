// Components
import { HeroSections } from "@/components/entities/HeroSections";

// Data
import { organizationFields } from "./data";

export default function RuangLingkupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Dasar Hukum"
          description="sfhlskdfhkdsf"
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            {/* General Governance Section */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -mr-16 -mt-16 bg-blue-200 rounded-full opacity-50" />
              <div className="relative">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Berdasarkan Peraturan Gubernur DKI Jakarta Nomor 40 Tahun 2024
                  tentang Pedoman Pengelolaan Pelayanan informasi publik dan
                  Dokumentasi
                </p>
              </div>
            </div>

            {/* Pusat Perekonomian Nasional dan Kota Global */}
            <div className="px-8 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                Tanggung Jawab
              </h2>
            </div>

            {/* Special Authorities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urusan Pemerintahan */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-1xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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

              {/* Urusan Pemerintahan */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-1xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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
            </div>

            <div className="px-8 py-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                Tugas
              </h2>
            </div>

            {/* Special Authorities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Urusan Pemerintahan */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-1xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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

              {/* Urusan Pemerintahan */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-1xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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
            </div>
            {/* Urusan Pemerintahan */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-1xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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
          </div>
        </div>
      </main>
    </div>
  );
}
