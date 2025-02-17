import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header - Modern Glassmorphism Effect */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            {/* Icon instead of Image */}
            <div className="bg-white/10 p-3 rounded-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold tracking-tight">PPID Kota Surakarta</h1>
              <p className="text-sm text-blue-100">Pejabat Pengelola Informasi dan Dokumentasi</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            {[
              { name: 'facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { name: 'twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { name: 'instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A1.5 1.5 0 0119 8v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 19V8a1.5 1.5 0 011.5-1.5z' }
            ].map((social) => (
              <a
                key={social.name}
                href={`#${social.name}`}
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation - Floating Nav */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Beranda</a>
              <a href="/profil" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Profil</a>
              <a href="/informasi" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Informasi Publik</a>
              <a href="/standar-layanan" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Standar Layanan</a>
              <a href="/berita" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Berita</a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Kontak</a>
            </div>
            
            {/* Modern Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Keterbukaan Informasi Publik untuk 
                <span className="text-blue-300"> Surakarta yang Transparan</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed">
                Akses informasi publik dengan mudah dan cepat. Kami berkomitmen untuk mewujudkan pelayanan informasi yang transparan dan akuntabel.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-blue-900 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                  Ajukan Permohonan
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-3xl font-bold mb-2">1,234+</div>
                <div className="text-blue-100">Permohonan Informasi Diselesaikan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Tingkat Kepuasan Layanan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Layanan Online</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Dataset Tersedia</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-current text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Form Permohonan Card */}
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

          {/* Form Pengajuan Card */}
          <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1">
            <div className="bg-purple-50 rounded-xl p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900">Form Pengajuan</h3>
            <p className="text-sm text-gray-600 mb-4">Keberatan</p>
            <button className="w-full px-4 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-sm hover:shadow">
              Ajukan Keberatan
            </button>
          </div>

          {/* Cek Status Card */}
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

          {/* Statistik Card */}
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
        </div>

        {/* Open Data Section */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Open Data</h2>
            <a href="/dataset" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
              Lihat Semua »
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dataset Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Pra Perkiraan Masyarakat (PPM)
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Data statistik peserta KB baru
                  </p>
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">CSV</span>
                </div>
              </div>
            </div>

            {/* Dataset Card 2 */}
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

            {/* Dataset Card 3 */}
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
          </div>
        </div>

        {/* Berita Terkini - 3 Cards */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Berita Terkini</h2>
            <a href="/berita" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
              Lihat Semua »
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
                <div className="text-sm text-gray-500 mb-2">30 Januari 2025</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  Halo, Sobat #PPID! Obrolan Kekinian Seputar Informasi Publik
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Penyalahgunaan data pribadi untuk modus penipuan makin marak!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full">#PPID</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Penghargaan Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">PENGHARGAAN</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Keterbukaan Informasi Publik",
                year: "2024",
                category: "Kualifikasi Informatif",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              },
              {
                title: "Smart City Rating",
                year: "2023",
                category: "Kategori Utama",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              },
              {
                title: "Website Terbaik",
                year: "2023",
                category: "Tingkat Nasional",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              }
            ].map((award, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 w-16 h-16 flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={award.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-yellow-600 font-medium">{award.year}</div>
                    <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg px-4 py-2 text-sm text-yellow-700 font-medium text-center">
                  {award.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website Wilayah Section */}
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

        {/* Website Perangkat Daerah Section */}
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
      </main>

      {/* Footer Section - Full Width */}
      <footer className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative pt-16 pb-8">
          {/* Partner Logos */}
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 md:grid-cols-9 gap-6 mb-16">
              {[
                { name: 'Website', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
                { name: 'Hoaks', icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { name: 'Berita', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2' },
                { name: 'Data', icon: 'M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm12 .5v9c0 2 1.5 3 3.5 3s3.5-1 3.5-3v-9c0-2-1.5-3-3.5-3s-3.5 1-3.5 3z' },
                { name: 'KIP', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                { name: 'Smart', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5' },
                { name: 'Satu Data', icon: 'M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7z' },
                { name: 'Open Gov', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
                { name: 'Statistik', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-center">
                  <div className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-all hover:scale-110 cursor-pointer">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-6">PPID KOTA SURAKARTA</h4>
                <div className="space-y-2 text-blue-100">
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Jl. Jenderal Sudirman No.2 Surakarta, Jawa Tengah, 57111</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Telp: (0271) 123456 - Fax: (0271) 123457</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Email: ppid@surakarta.go.id</span>
                  </p>
                </div>
              </div>

              {/* Statistics */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-6">STATISTIK PENGUNJUNG</h4>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-100">Kunjungan bulan ini</p>
                      <p className="text-2xl font-bold text-white">69,598</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-6">MEDIA SOSIAL</h4>
                <div className="flex gap-4">
                  {[
                    { name: 'facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                    { name: 'twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                    { name: 'instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A1.5 1.5 0 0119 8v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 19V8a1.5 1.5 0 011.5-1.5z' },
                    { name: 'youtube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={`#${social.name}`}
                      className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-all"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-center text-blue-100 text-sm">
                © 2024 Dinas Komunikasi, Informatika dan Statistik Pemerintah Kota Surakarta
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
