'use client';

import { HeroSections } from "@/components/entities/HeroSections";
import { Information } from "@/components/entities/profil/organisasi-perangkat-daerah/Information";
import { PdfViewer } from "@/components/entities/profil/organisasi-perangkat-daerah/PdfViewer";

export default function OrganisasiPerangkatDaerahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Organisasi Perangkat Daerah"
          description="Informasi mengenai struktur dan organisasi perangkat daerah Pemerintah Kota Surakarta"
        />
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8">
            <Information />
            <PdfViewer />
          </div>
        </div>
      </main>
    </div>
  );
}
