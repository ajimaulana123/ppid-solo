// Components
import { HeroSections } from "@/components/entities/HeroSections";
import Image from "next/image";

export default function StrukturOrganisasi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Struktur Organisasi"
        />
        <div className="container flex justify-center items-center px-6 py-12 space-y-12">
          <Image
            src="/struktur-organisasi.jpg"
            alt="Struktur Organisasi"
            width={600} // Ganti dengan width asli gambar
            height={400} // Ganti dengan height asli gambar
          />
        </div>
      </main>
    </div>
  );
}
