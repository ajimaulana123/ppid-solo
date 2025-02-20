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
          { label: "Ruang Lingkup", href: "/profil/pemerintah-kota/ruang-lingkup" }
        ]
      },
      {
        label: "PPID Kota Surakarta",
        href: "/profil/ppid",
        children: [
          { label: "Profil PPID", href: "/profil/ppid/profile" },
          { label: "Visi Misi PPID", href: "/profil/ppid/visi-misi" }
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
      { label: "Prosedur Pengelolaan Keberatan", href: "/standar-layanan/prosedur-keberatan" },
      { label: "Prosedur Permohonan Penyelesaian Sengketa", href: "/standar-layanan/prosedur-sengketa" },
      { label: "Prosedur Penanganan Sengketa", href: "/standar-layanan/penanganan-sengketa" },
      { label: "SOP PPID", href: "/standar-layanan/sop" },
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
  { label: "Laporan", href: "/laporan" },
  { label: "Galeri", href: "/galeri" },
  {
    label: "Pusat Media",
    href: "/pusat-media",
    children: [
      { label: "Foto Kegiatan PPID", href: "/pusat-media/foto" },
      { label: "Video Kegiatan PPID", href: "/pusat-media/video" },
      { label: "Komik OKE SIP", href: "/pusat-media/komik" },
      { label: "Podcast OKE SIP", href: "/pusat-media/podcast" },
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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

  return (
    <>
      {/* Top Header - Modern Glassmorphism Effect */}
      <div className={`sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 text-white backdrop-blur-lg transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
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
              className="absolute left-0 right-0 border-t bg-white w-full"
              style={{
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            >
              <div className="container mx-auto max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div 
                    key={item.href} 
                    className="border-b last:border-b-0 group"
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors
                        ${isActive(item.href)
                          ? 'text-blue-600 bg-blue-50/50' 
                          : 'text-gray-700'
                        }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.children && (
                        <motion.svg 
                          className="w-5 h-5 text-gray-400"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ rotate: hoveredItem === item.href ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                    </Link>
                    {item.children && (
                      <AnimatePresence>
                        {hoveredItem === item.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: 1, 
                              height: "auto",
                              transition: { duration: 0.2 }
                            }}
                            exit={{ 
                              opacity: 0, 
                              height: 0,
                              transition: { duration: 0.2 }
                            }}
                            className="bg-gray-50/50 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <div key={child.href} className="border-b last:border-b-0">
                                <Link
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`block px-8 py-3 hover:bg-gray-100 transition-colors ${
                                    isActive(child.href) ? 'text-blue-600 bg-blue-50/80' : 'text-gray-600'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{child.label}</span>
                                    {child.children && (
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    )}
                                  </div>
                                </Link>

                                {child.children && (
                                  <div className="pl-4 bg-gray-50/50">
                                    {child.children.map((subChild) => (
                                      <Link
                                        key={subChild.href}
                                        href={subChild.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-8 py-2 hover:bg-gray-100 transition-colors ${
                                          isActive(subChild.href) ? 'text-blue-600 bg-blue-50/80' : 'text-gray-600'
                                        }`}
                                      >
                                        {subChild.label}
                                      </Link>
                                    ))}
                                  </div>
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