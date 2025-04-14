import { organizationFields } from "./data"

export const UrusanPemerintahKelembagaan = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Urusan Pemerintahan */}
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
        Urusan Pemerintahan
      </h2>
      <ul className="space-y-4">
        {organizationFields.map((data, index) => (
          <li key={index} className="flex items-start gap-4 group">
            <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {index + 1}
            </span>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
              {data}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Kelembagaan */}
    <div className="bg-white from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 relative overflow-hidden h-fit">
      <div className="relative">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="bg-blue-600 w-8 h-1 rounded-full"></span>
          Kelembagaan
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Pemerintahan Kota Surakarta memiliki kewenangan khusus dalam
          aspek kelembagaan untuk menunjang pelaksanaan urusan
          pemerintahan dan pembangunan daerah.
        </p>
      </div>
    </div>
  </div>
)