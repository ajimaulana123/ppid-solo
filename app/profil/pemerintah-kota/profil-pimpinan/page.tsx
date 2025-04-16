// Components
import { HeroSections } from "@/components/entities/HeroSections";
import { ProfileCard } from "./ProfileCard";
import Image from "next/image";

export default function ProfilPimpinan() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Profil Pimpinan" />
        <div className="container flex flex-col justify-center items-center mx-auto px-6 py-12 space-y-12">
          <ProfileCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto place-items-center">
            <Image
              src="/wali-kota-1.jpg"
              alt="Struktur Organisasi"
              width={600} // Ganti dengan width asli gambar
              height={400} // Ganti dengan height asli gambar
            />
            <Image
              src="/wali-kota-2.jpg"
              alt="Struktur Organisasi"
              width={600} // Ganti dengan width asli gambar
              height={400} // Ganti dengan height asli gambar
            />
          </div>
        </div>
      </main>
    </div>
  );
}
