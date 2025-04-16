"use client";

// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { DokumenEntity } from "@/components/entities/informasi/DokumenEntity";

// Data
import { dataDocs } from "./data"; 

export default function Dokument() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Dokumen Informasi Publik"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <DokumenEntity items={dataDocs.items} />
        </div>
      </main>
    </div>
  );
}
