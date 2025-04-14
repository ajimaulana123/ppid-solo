export const Dataset2 = () => (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
    <div className="flex items-start gap-4">
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3">
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Data Konsumsi Website
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Statistik pengunjung website
        </p>
        <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-full font-medium">JSON</span>
      </div>
    </div>
  </div>
)