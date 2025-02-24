'use client';

import { ProfileHero } from "@/components/profile/ProfileHero";

export default function OrganisasiPerangkatDaerahPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <ProfileHero
          title="Organisasi Perangkat Daerah"
          description="Informasi mengenai struktur dan organisasi perangkat daerah Pemerintah Kota Surakarta"
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            {/* Main Information Section */}
            <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative z-10 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-white transition-colors">
                  Dasar Hukum
                </h2>
                <p className="text-gray-600 leading-relaxed group-hover:text-blue-100 transition-colors">
                  Organisasi Perangkat Daerah Pemerintah Kota Surakarta diatur dalam Peraturan Walikota Surakarta
                  mengenai Organisasi dan Tata Kerja Perangkat Daerah Kota Surakarta.
                </p>
              </div>
            </div>

            {/* PDF Viewer Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Dokumen Peraturan
              </h3>
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
      </main>
    </div>
  );
}