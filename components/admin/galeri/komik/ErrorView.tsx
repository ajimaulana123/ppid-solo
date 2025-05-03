import { HeroSections } from "@/components/entities/HeroSections";

export function ErrorView({ error }: { error: string }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main>
          <HeroSections title="Komik OKE SIP!" />
          <div className="container mx-auto px-6 py-12 text-center">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
              <p className="font-medium">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }