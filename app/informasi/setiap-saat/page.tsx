import { HeroSections } from "@/components/entities/HeroSections";
import { Link } from "lucide-react";

const pusatPerekonomianNasionalKotaGlobal = {
  title: "Informasi Publik yang Wajib Disediakan dan Diumumkan Secara Berkala",
  description: [
    "Pusat perdagangan",
    "Pusat kegiatan layanan jasa dan layanan jasa keuangan",
    "Pusat kegiatan bisnis nasional, regional, dan global",
  ],
};

export default function RuangLingkupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Informasi Publik yang Wajib Disediakan dan Diumumkan Secara Berkala"
          description="lorem lorem"
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            {/* Pusat Perekonomian Nasional dan Kota Global */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                {pusatPerekonomianNasionalKotaGlobal.title}
                <Link className="text-blue-600">Lihat</Link>
              </h2>
            </div>

            {/* Pusat Perekonomian Nasional dan Kota Global */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                {pusatPerekonomianNasionalKotaGlobal.title}
              </h2>

              <ul className="space-y-4">
                {pusatPerekonomianNasionalKotaGlobal.description.map(
                  (data, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index + 1}
                      </span>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                        {data}
                      </span>
                      <Link className="text-blue-600">Lihat</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
