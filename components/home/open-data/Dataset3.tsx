export const Dataset3 = () => (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Data Angkutan Massal
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Informasi transportasi publik
        </p>
        <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full font-medium">XLS</span>
      </div>
    </div>
  </div>
)