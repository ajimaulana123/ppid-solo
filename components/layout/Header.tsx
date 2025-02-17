import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-ppid.png"
            alt="Logo PPID"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">PPID Kota Surakarta</h1>
            <p className="text-sm">Pejabat Pengelola Informasi dan Dokumentasi</p>
          </div>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-blue-900 bg-white rounded-lg hover:bg-gray-100">
          Permohonan Informasi
        </button>
      </div>
    </div>
  );
}; 