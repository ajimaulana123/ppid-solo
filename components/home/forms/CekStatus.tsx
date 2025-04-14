export const CekStatus = () => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
    <div className="bg-green-50 rounded-xl p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-green-100 transition-colors">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    </div>
    <h3 className="font-semibold text-lg mb-2 text-gray-900">Cek Status</h3>
    <p className="text-sm text-gray-600 mb-4">Permohonan Informasi</p>
    <button className="w-full px-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-sm hover:shadow">
      Cek Status
    </button>
  </div>
)