export const Statistik = () => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
    <div className="bg-orange-50 rounded-xl p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </div>
    <h3 className="font-semibold text-lg mb-2 text-gray-900">Statistik</h3>
    <p className="text-sm text-gray-600 mb-4">Layanan Informasi</p>
    <button className="w-full px-4 py-2.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors shadow-sm hover:shadow">
      Lihat Statistik
    </button>
  </div>
)