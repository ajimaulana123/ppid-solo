export const WebsiteRegion = () => (
    <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">WEBSITE WILAYAH</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                {
                    name: 'Surakarta Utara',
                    count: '125 Layanan',
                    description: 'Mencakup 4 Kelurahan',
                    stats: '45,000+ Penduduk',
                    color: 'blue',
                    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                },
                {
                    name: 'Surakarta Timur',
                    count: '98 Layanan',
                    description: 'Mencakup 3 Kelurahan',
                    stats: '38,000+ Penduduk',
                    color: 'purple',
                    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                },
                {
                    name: 'Surakarta Selatan',
                    count: '112 Layanan',
                    description: 'Mencakup 5 Kelurahan',
                    stats: '52,000+ Penduduk',
                    color: 'green',
                    icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                }
            ].map((region) => (
                <div
                    key={region.name}
                    className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-6 cursor-pointer hover:-translate-y-1 transform duration-300 relative overflow-hidden`}
                >
                    {/* Decorative Side Border */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${region.color}-500`} />

                    {/* Icon and Title Section */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className={`bg-${region.color}-50 rounded-xl p-4 group-hover:scale-95 transition-transform duration-300`}>
                            <svg className={`w-8 h-8 text-${region.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={region.icon} />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">{region.name}</h3>
                            <p className={`text-sm text-${region.color}-600 font-medium`}>{region.count}</p>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className={`bg-${region.color}-50/50 rounded-xl p-4 space-y-3`}>
                        <div className="flex items-center gap-2">
                            <svg className={`w-4 h-4 text-${region.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm text-gray-600">{region.description}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className={`w-4 h-4 text-${region.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-sm text-gray-600">{region.stats}</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button className={`mt-4 w-full px-4 py-2 bg-${region.color}-500 text-white rounded-lg font-medium hover:bg-${region.color}-600 transition-colors group-hover:shadow-md`}>
                        Kunjungi Website
                    </button>
                </div>
            ))}
        </div>
    </div>
)