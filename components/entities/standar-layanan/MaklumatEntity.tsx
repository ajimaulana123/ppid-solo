import { News } from "@/components/home/news/page";

export const MaklumatEntity = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Vision Card - Lebar 2 kolom */}
      <div className="h-fit bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden md:col-span-2">
        <div className="absolute top-0 right-0 w-40 h-40 -mr-16 -mt-16 bg-blue-200 rounded-full opacity-50" />
        <div className="relative">
          {/* PDF Viewer Section */}
          <div className="relative overflow-hidden">
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
                Dokumen Peraturan
              </h2>
              <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="/documents/perwal-opd-surakarta.pdf"
                  className="w-full h-full"
                  title="Peraturan Walikota tentang OPD"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="/documents/perwal-opd-surakarta.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Unduh PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Card - Lebar 1 kolom */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:col-span-1">
        <News horizontalNewsView="flex flex-col" topGap="mt-0" />
      </div>
    </div>
  );
};
