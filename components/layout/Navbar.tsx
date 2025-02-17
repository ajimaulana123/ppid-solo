"use client";

import { useState } from "react";
import { NavItem as NavItemType } from "@/types";
import Link from "next/link";

const navItems: NavItemType[] = [
  { label: "Beranda", href: "/" },
  { 
    label: "Profil", 
    href: "/profil" 
  },
  {
    label: "Pemerintah Kota Surakarta",
    href: "/pemerintah-kota",
  },
  {
    label: "PPID Pemkot Surakarta",
    href: "/ppid-pemkot",
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (href: string) => {
    setActiveSubmenu(activeSubmenu === href ? null : href);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm flex items-center gap-1"
                      onClick={() => toggleSubmenu(item.href)}
                    >
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div className="py-1 bg-white rounded-lg shadow-lg border border-gray-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm font-medium flex items-center justify-between"
                        onClick={() => toggleSubmenu(item.href)}
                      >
                        {item.label}
                        <svg 
                          className={`w-4 h-4 transform transition-transform ${activeSubmenu === item.href ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeSubmenu === item.href && (
                        <div className="pl-4 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-md"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 