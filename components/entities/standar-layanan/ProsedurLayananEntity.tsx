import Image from "next/image";
import { News } from "@/components/home/news/page";

export const ProsedurLayananEntity = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Vision Card - Lebar 2 kolom */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden md:col-span-2 h-fit">
        <div className="absolute top-0 right-0 w-40 h-40 -mr-16 -mt-16 bg-blue-200 rounded-full opacity-50" />
        <div className="relative">
          <Image
            src="/logo-ppid.png" // File di folder public
            alt="Foto profil"
            width={2000}
            height={1000}
            priority // Untuk gambar penting yang ingin di-load pertama
            quality={85} // Kualitas gambar (1-100)
            placeholder="blur" // Efek blur saat loading
            blurDataURL="data:image/png;base64,..." // Base64 untuk placeholder
            className="rounded-full"
          />
        </div>
      </div>

      {/* Mission Card - Lebar 1 kolom */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:col-span-1">
        <News horizontalNewsView="flex flex-col" topGap="mt-0" />
      </div>
    </div>
  );
};
