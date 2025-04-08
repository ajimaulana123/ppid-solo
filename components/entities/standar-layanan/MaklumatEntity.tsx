interface MaklumatProps {
  content: {
    firstTitle: string;
    firstDescription: string;
    secondTitle: string;
    secondDescription: string[];
  };
}

const notifications = [
  {
    date: "10 Maret 2025 09:16",
    sender: "Kelurahan Kebun Kosong",
    title: "Diminta Tingkatkan Pengelolaan PPID",
    message:
      "Komisi Informasi KI Provinsi DKI Jakarta merekomendasikan jajaran pemerintahan untuk meningkatkan transparansi informasi publik.",
    urgent: true,
  },
  {
    date: "9 Maret 2025 14:30",
    sender: "Dinas Kesehatan",
    title: "Peringatan Kualitas Udara",
    message:
      "Tingkat polusi udara mencapai 150 PSI. Warga diimbau mengurangi aktivitas luar ruangan.",
    urgent: false,
  },
  {
    date: "8 Maret 2025 11:45",
    sender: "RT 05/RW 02",
    title: "Jadwal Pemadaman Listrik",
    message:
      "Akan dilakukan pemadaman bergilir pada 12 Maret pukul 09.00-15.00 untuk perawatan jaringan.",
    urgent: false,
  },
  {
    date: "7 Maret 2025 16:20",
    sender: "Dinas Pendidikan",
    title: "Pembagian Bantuan Sekolah",
    message:
      "Bantuan peralatan sekolah akan dibagikan mulai 15 Maret di balai kelurahan.",
    urgent: false,
  },
];

export const MaklumatEntity = ({ content }: MaklumatProps) => {
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
          {content.secondTitle}
        </h2>
        {notifications.map((notif, index) => (
          <div
            key={index}
            className={`bg-white mb-5 rounded-xl shadow-md overflow-hidden border-l-4 ${
              notif.urgent ? "border-red-500" : "border-blue-500"
            }`}
          >
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
              <p className="text-gray-600 text-sm font-medium">{notif.date}</p>
              {notif.urgent && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  Penting
                </span>
              )}
            </div>

            <div className="p-5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-800">
                    {notif.sender}
                  </h2>
                  <p className="text-md font-semibold text-gray-700 my-2">
                    {notif.title}
                  </p>
                  <p className="text-gray-600">{notif.message}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-3">
                <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Arsipkan
                </button>
                <button className="px-3 py-1.5 text-sm bg-blue-600 rounded-md text-white hover:bg-blue-700">
                  Tindak Lanjut
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
