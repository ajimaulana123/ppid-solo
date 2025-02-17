export const WelcomeSection = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Selamat Datang di PPID Kota Surakarta
      </h2>
      <p className="text-gray-600 mb-6">
        Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kota Surakarta merupakan pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan/atau pelayanan informasi di badan publik.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-700">Daftar Informasi Publik</h3>
          <p className="text-sm text-gray-600 mt-2">Akses daftar informasi publik yang tersedia</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-700">PPID Perangkat Daerah</h3>
          <p className="text-sm text-gray-600 mt-2">Informasi PPID di tingkat daerah</p>
        </div>
      </div>
    </div>
  );
}; 