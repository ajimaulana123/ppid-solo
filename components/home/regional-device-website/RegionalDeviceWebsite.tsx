export const RegionalDeviceWebsite = () => (
    <div className="mt-16">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">WEBSITE PERANGKAT DAERAH</h2>
            <a href="/perangkat-daerah" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
                Lihat Semua »
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                {
                    name: 'Dinas Komunikasi dan Informatika',
                    shortName: 'DISKOMINFO',
                    services: '24 Layanan Digital',
                    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                },
                {
                    name: 'Dinas Pendidikan',
                    shortName: 'DISDIK',
                    services: '18 Layanan Pendidikan',
                    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                },
                {
                    name: 'Dinas Kesehatan',
                    shortName: 'DINKES',
                    services: '15 Layanan Kesehatan',
                    icon: 'M4.5 12.75l6 6 9-13.5'
                }
            ].map((dept) => (
                <div key={dept.name} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all group cursor-pointer">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 group-hover:scale-95 transition-transform">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dept.icon} />
                            </svg>
                        </div>
                        <div>
                            <span className="text-sm text-blue-600 font-medium">{dept.shortName}</span>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                            <p className="text-sm text-gray-600">{dept.services}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)