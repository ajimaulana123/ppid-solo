import { HeroSections } from "@/components/entities/HeroSections";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Berita Transparan" description="lorem " />
        <div className="container mx-auto px-6 py-12 space-y-12">
          {/* Berita Terkini - 3 Cards */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all"
                >
                  <div className="text-sm text-gray-500 mb-2">
                    30 Januari 2025
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    Halo, Sobat #PPID! Obrolan Kekinian Seputar Informasi Publik
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Penyalahgunaan data pribadi untuk modus penipuan makin
                    marak!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                      #PPID
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
