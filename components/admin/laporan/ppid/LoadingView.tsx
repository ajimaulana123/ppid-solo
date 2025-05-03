import { HeroSections } from "@/components/entities/HeroSections";

export function LoadingView() {
    return (
      <div className="min-h-screen bg-gray-50">
        <main>
          <HeroSections title="Laporan PPID" />
          <div className="container mx-auto px-6 py-12 text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
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