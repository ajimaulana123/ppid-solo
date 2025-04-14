import { useState, useMemo } from "react";

interface DocumentItem {
  no: string;
  date: string;
  infoType: string;
  department: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string
}

interface DokumenEntityProps {
  items: DocumentItem[];
}

export const DokumenEntity = ({ items }: DokumenEntityProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [items, searchTerm]);

  const getFileIcon = (fileType: string) => {

    switch (fileType.toLowerCase()) {
      case "pdf":
        return (
          <svg
            className="w-8 h-8 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 4h7v5h5v11H6V4zm8 11h-2v2h2v-2zm-4 0H8v2h2v-2zm0-3H8v2h2v-2zm4 3h-2v2h2v-2z" />
          </svg>
        );
      case "doc":
      case "docx":
        return (
          <svg
            className="w-8 h-8 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 4h7v5h5v11H6V4zm8 12H8v-2h6v2zm0-3H8v-2h6v2z" />
          </svg>
        );
      case "xls":
      case "xlsx":
        return (
          <svg
            className="w-8 h-8 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 4h7v5h5v11H6V4zm8 12H8v-2h6v2zm0-3H8v-2h6v2z" />
          </svg>
        );
      default:
        return (
          <svg
            className="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 4h7v5h5v11H6V4z" />
          </svg>
        );
    }
  };

  const getInfoTypeBadge = (infoType: string) => {
    let bgColor = "bg-gray-100";
    let textColor = "text-gray-800";

    if (infoType === "Berkala") {
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
    } else if (infoType === "Tersedia Setiap Saat") {
      bgColor = "bg-green-100";
      textColor = "text-green-800";
    }

    return (
      <span
        className={`text-xs font-medium ${bgColor} ${textColor} px-2.5 py-0.5 rounded`}
      >
        {infoType}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4">
          <div className="w-full max-w-2xl relative">
            <label
              htmlFor="searchTerm"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Cari berdasarkan judul, deskripsi, atau PPID SKPD/UKPD
            </label>
            <div className="relative">
              <input
                type="text"
                id="searchTerm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Masukkan kata kunci..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white hover:bg-gray-50 placeholder-gray-400"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Menampilkan {filteredItems.length} dari {items.length} dokumen
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  {getFileIcon(item.fileType)}
                </div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {getInfoTypeBadge(item.infoType)}
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.department}
                    </span>
                  </div>
                  <h3 className="mt-2 font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500">Tanggal</p>
                    <p className="text-sm font-medium">{item.date}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Tipe File
                    </p>
                    <p className="text-sm font-medium uppercase">
                      {item.fileType}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Ukuran</p>
                    <p className="text-sm font-medium">{item.fileSize}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">No</p>
                    <p className="text-sm font-medium">{item.no}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
