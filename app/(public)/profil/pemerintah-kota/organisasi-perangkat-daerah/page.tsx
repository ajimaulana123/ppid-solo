'use client';

import { HeroSections } from "@/components/entities/HeroSections";
import { TugasFungsiEntity } from "@/components/entities/TugasFungsiEntity";

import { tugasFungsi } from "./data";

export default function OrganisasiPerangkatDaerahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Organisasi Perangkat Daerah"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <TugasFungsiEntity tugasFungsi={tugasFungsi} />
        </div>
      </main>
    </div>
  );
}
