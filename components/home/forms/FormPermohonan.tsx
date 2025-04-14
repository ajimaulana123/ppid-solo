export const FormPermohonan = () => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
    <div className="bg-blue-50 rounded-xl p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
    <h3 className="font-semibold text-lg mb-2 text-gray-900">Form Permohonan</h3>
    <p className="text-sm text-gray-600 mb-4">Informasi Publik</p>
    <button className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow">
      Ajukan Permohonan
    </button>
  </div>
)