"use client";

import { useState, useEffect } from "react";
import { NavItem as NavItemType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems: NavItemType[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil",
    children: [
      {
        label: "Pemerintah Kota Surakarta",
        href: "/profil/pemerintah-kota",
        children: [
          { label: "Visi dan Misi", href: "/profil/pemerintah-kota/visi-misi" },
          { label: "Ruang Lingkup", href: "/profil/pemerintah-kota/ruang-lingkup" },
          { label: "Organisasi Perangkat Daerah", href: "/profil/pemerintah-kota/organisasi-perangkat-daerah" },
          { label: "Struktur Organisasi", href: "/profil/pemerintah-kota/struktur-organisasi" },
          { label: "Tugas dan Fungsi", href: "/profil/pemerintah-kota/tugas-fungsi" },
          { label: "Profil Pimpinan", href: "/profil/pemerintah-kota/profil-pimpinan" },
          { label: "Daftar Pejabat Struktural", href: "/profil/pemerintah-kota/pejabat-struktural" },
          { label: "Satuan dan Unit Kerja", href: "/profil/pemerintah-kota/satuan-unit-kerja" }
        ]
      },
      {
        label: "PPID Kota Surakarta",
        href: "/profil/ppid",
        children: [
          { label: "Profil PPID", href: "/profil/ppid/profile" },
          { label: "Visi Misi PPID", href: "/profil/ppid/visi-misi" },
          { label: "Struktur Organisasi PPID", href: "/profil/ppid/struktur-organisasi" },
          { label: "Tugas dan Fungsi", href: "/profil/ppid/tugas-fungsi" },
          { label: "Dasar Hukum PPID", href: "/profil/ppid/dasar-hukum" }
        ]
      }
    ]
  },
  {
    label: "Informasi Publik",
    href: "/informasi",
    children: [
      { label: "Daftar Informasi Publik PPID Kota", href: "/informasi/dip-kota" },
      { label: "Daftar Informasi Publik PPID Perangkat Daerah", href: "/informasi/dip-pd" },
      { label: "Dokumen Informasi Publik", href: "/informasi/dokumen" },
      { label: "Informasi Berkala", href: "/informasi/berkala" },
      { label: "Informasi Serta Merta", href: "/informasi/serta-merta" },
      { label: "Informasi Setiap Saat", href: "/informasi/setiap-saat" },
    ],
  },
  {
    label: "Standar Layanan",
    href: "/standar-layanan",
    children: [
      { label: "Prosedur Pelayanan Informasi Publik", href: "/standar-layanan/prosedur-pelayanan" },
      { label: "Prosedur Pengelolaan Keberatan Informasi Publik", href: "/standar-layanan/prosedur-keberatan" },
      { label: "Prosedur Permohonan Penyelesaian Sengketa Informasi", href: "/standar-layanan/prosedur-sengketa" },
      { label: "Prosedur Penanganan Sengketa Informasi", href: "/standar-layanan/penanganan-sengketa" },
      { label: "SOP PPID", href: "/standar-layanan/sop" },
      { label: "Kanal Layanan Informasi", href: "/standar-layanan/kanal-layanan" },
      { label: "Waktu & Biaya Layanan", href: "/standar-layanan/waktu-biaya" },
      { label: "Maklumat Informasi Publik", href: "/standar-layanan/maklumat" },
      { label: "Libur Nasional Dan Cuti Bersama", href: "/standar-layanan/libur-cuti" }
    ],
  },
  {
    label: "Kanal Layanan",
    href: "/kanal-layanan",
    children: [
      { label: "Waktu & Biaya Layanan", href: "/kanal-layanan/waktu-biaya" },
      { label: "Maklumat Informasi Publik", href: "/kanal-layanan/maklumat" },
      { label: "Libur Nasional dan Cuti Bersama", href: "/kanal-layanan/libur-cuti" },
    ],
  },
  {
    label: "Berita",
    href: "/berita",
    children: [
      { label: "Berita Surakarta", href: "/berita/surakarta" },
      { label: "Berita Transparansi", href: "/berita/transparansi" },
    ],
  },
  {
    label: "Laporan", href: "/laporan", children: [
      {
        label: "Pemerintah Kota Surakarta",
        href: "/profil/pemerintah-kota",
        children: [
          { label: "Laporan Keuangan Pemerintah Daerah (LKPD)", href: "/laporan/lkpd" },
          { label: "Laporan Kinerja Instansi Pemerintah (LKIP)", href: "/laporan/lkip" },
          { label: "Laporan Penyelenggaraan Pemerintahan Daerah (LPPD)", href: "/laporan/lppd" }
        ]
      },
      {
        label: "PPID Kota Surakarta",
        href: "/profil/ppid",
        children: [
          { label: "Laporan PPID", href: "/profil/ppid/laporan" },
          { label: "Statistik Layanan Informasi Publik", href: "/profil/ppid/statistik" },
          { label: "Survei Layanan PPID", href: "/profil/ppid/survei" }
        ]
      }
    ]
  },
  {
    label: "Galeri", href: "/galeri", children: [
      { label: "Foto Kegiatan PPID", href: "/pusat-media/foto" },
      { label: "Video Kegiatan PPID", href: "/pusat-media/video" }, 
      { label: "Komik OKE SIP", href: "/pusat-media/komik" },
      { label: "Podcast OKESIP", href: "/pusat-media/podcast" },
    ],
  },
  {
    label: "Kontak",
    href: "/kontak",
    children: [
      { label: "FAQ", href: "/kontak/faq" },
      { label: "Kontak", href: "/kontak/hubungi" },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = (href: string) => {
    setOpenMenus(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const isMenuOpen = (href: string) => openMenus.includes(href);

  return (
    <>
      {/* Top Header - Modern Glassmorphism Effect */}
      <div className={`sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 text-white backdrop-blur-lg transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''
        }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="bg-white/10 p-3 rounded-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </Link>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold tracking-tight">PPID Kota Surakarta</h1>
              <p className="text-sm text-blue-100">Pejabat Pengelola Informasi dan Dokumentasi</p>
            </div>
          </div>

          <div className="flex items-center">
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

            <div className="mx-4 h-6 w-px bg-white/20" />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 border-t bg-white w-full shadow-lg"
            >
              <div className="container mx-auto max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.href} className="border-b last:border-b-0">
                    {item.children ? (
                      <div
                        onClick={() => toggleMenu(item.href)}
                        className={`flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors
                          ${isActive(item.href) ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700'}`}
                      >
                        <span className="font-medium">{item.label}</span>
                        <motion.svg 
                          className="w-5 h-5 text-gray-400"
                          animate={{ rotate: isMenuOpen(item.href) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-6 py-4 hover:bg-gray-50 transition-colors
                          ${isActive(item.href) ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700'}`}
                      >
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )}

                    {item.children && (
                      <AnimatePresence>
                        {isMenuOpen(item.href) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-50/50 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <div key={child.href}>
                                <div
                                  onClick={() => child.children && toggleMenu(child.href)}
                                  className={`flex items-center justify-between px-8 py-3 cursor-pointer hover:bg-gray-100 transition-colors
                                    ${isActive(child.href) ? 'text-blue-600 bg-blue-50/80' : 'text-gray-600'}`}
                                >
                                  <span>{child.label}</span>
                                  {child.children && (
                                    <motion.svg 
                                      className="w-4 h-4"
                                      animate={{ rotate: isMenuOpen(child.href) ? 90 : 0 }}
                                      transition={{ duration: 0.2 }}
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </motion.svg>
                                  )}
                                </div>

                                {child.children && (
                                  <AnimatePresence>
                                    {isMenuOpen(child.href) && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="pl-4 bg-gray-50/50"
                                      >
                                        {child.children.map((subChild) => (
                                          <Link
                                            key={subChild.href}
                                            href={subChild.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-8 py-2 hover:bg-gray-100 transition-colors
                                              ${isActive(subChild.href) ? 'text-blue-600 bg-blue-50/80' : 'text-gray-600'}`}
                                          >
                                            {subChild.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}; 