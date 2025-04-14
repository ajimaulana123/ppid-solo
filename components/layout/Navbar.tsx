"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"

interface NavItemType {
  label: string;
  href: string;
  children?: NavItemType[];
}

const navItems: NavItemType[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    href: "/profil/pemerintah-kota/visi-misi",
    children: [
      {
        label: "Pemerintah Kota Surakarta",
        href: "/profil/pemerintah-kota",
        children: [
          { label: "Visi dan Misi", href: "/profil/pemerintah-kota/visi-misi" },
          {
            label: "Ruang Lingkup",
            href: "/profil/pemerintah-kota/ruang-lingkup",
          },
          {
            label: "Organisasi Perangkat Daerah",
            href: "/profil/pemerintah-kota/organisasi-perangkat-daerah",
          },
          {
            label: "Struktur Organisasi",
            href: "/profil/pemerintah-kota/struktur-organisasi",
          },
          {
            label: "Tugas dan Fungsi",
            href: "/profil/pemerintah-kota/tugas-fungsi",
          },
          {
            label: "Profil Pimpinan",
            href: "/profil/pemerintah-kota/profil-pimpinan",
          },
          {
            label: "Daftar Pejabat Struktural",
            href: "/profil/pemerintah-kota/pejabat-struktural",
          },
          {
            label: "Satuan dan Unit Kerja",
            href: "/profil/pemerintah-kota/satuan-unit-kerja",
          },
        ],
      },
      {
        label: "PPID Kota Surakarta",
        href: "/profil/ppid/profile",
        children: [
          { label: "Profil PPID", href: "/profil/ppid/profile" },
          { label: "Visi Misi PPID", href: "/profil/ppid/visi-misi" },
          {
            label: "Struktur Organisasi PPID",
            href: "/profil/ppid/struktur-organisasi",
          },
          { label: "Tugas dan Fungsi", href: "/profil/ppid/tugas-fungsi" },
          { label: "Dasar Hukum PPID", href: "/profil/ppid/dasar-hukum" },
        ],
      },
    ],
  },
  {
    label: "Informasi Publik",
    href: "/informasi/dip-kota",
    children: [
      {
        label: "Daftar Informasi Publik PPID Kota",
        href: "/informasi/dip-kota",
      },
      {
        label: "Daftar Informasi Publik PPID Perangkat Daerah",
        href: "/informasi/dip-pd",
      },
      { label: "Dokumen Informasi Publik", href: "/informasi/dokumen" },
      { label: "Informasi Berkala", href: "/informasi/berkala" },
      { label: "Informasi Serta Merta", href: "/informasi/serta-merta" },
      { label: "Informasi Setiap Saat", href: "/informasi/setiap-saat" },
    ],
  },
  {
    label: "Standar Layanan",
    href: "/standar-layanan/prosedur-pelayanan",
    children: [
      {
        label: "Prosedur Pelayanan Informasi Publik",
        href: "/standar-layanan/prosedur-pelayanan",
      },
      {
        label: "Prosedur Pengelolaan Keberatan Informasi Publik",
        href: "/standar-layanan/prosedur-keberatan",
      },
      {
        label: "Prosedur Permohonan Penyelesaian Sengketa Informasi",
        href: "/standar-layanan/prosedur-sengketa",
      },
      {
        label: "Prosedur Penanganan Sengketa Informasi",
        href: "/standar-layanan/penanganan-sengketa",
      },
      { label: "SOP PPID", href: "/standar-layanan/sop" },
      {
        label: "Kanal Layanan Informasi",
        href: "/standar-layanan/kanal-layanan",
      },
      { label: "Waktu & Biaya Layanan", href: "/standar-layanan/waktu-biaya" },
      { label: "Maklumat Informasi Publik", href: "/standar-layanan/maklumat" },
      {
        label: "Libur Nasional Dan Cuti Bersama",
        href: "/standar-layanan/libur-cuti",
      },
    ],
  },
  {
    label: "Berita",
    href: "/berita/surakarta",
    children: [
      { label: "Berita Surakarta", href: "/berita/surakarta" },
      { label: "Berita Transparansi", href: "/berita/transparansi" },
    ],
  },
  {
    label: "Laporan",
    href: "/laporan/lkpd",
    children: [
      {
        label: "Pemerintah Kota Surakarta",
        href: "/profil/pemerintah-kota",
        children: [
          {
            label: "Laporan Keuangan Pemerintah Daerah (LKPD)",
            href: "/laporan/lkpd",
          },
          {
            label: "Laporan Kinerja Instansi Pemerintah (LKIP)",
            href: "/laporan/lkip",
          },
          {
            label: "Laporan Penyelenggaraan Pemerintahan Daerah (LPPD)",
            href: "/laporan/lppd",
          },
        ],
      },
      {
        label: "PPID Kota Surakarta",
        href: "/profil/ppid",
        children: [
          { label: "Laporan PPID", href: "/laporan/ppid" },
          {
            label: "Statistik Layanan Informasi Publik",
            href: "/laporan/statistik",
          },
          { label: "Survei Layanan PPID", href: "/laporan/survei" },
        ],
      },
    ],
  },
  {
    label: "Galeri",
    href: "/galeri/foto",
    children: [
      { label: "Foto Kegiatan PPID", href: "/galeri/foto" },
      { label: "Video Kegiatan PPID", href: "/galeri/video" },
      { label: "Komik OKE SIP", href: "/galeri/komik" },
      { label: "Podcast OKESIP", href: "/galeri/podcast" },
    ],
  },
  {
    label: "Kontak",
    href: "/kontak/faq",
    children: [
      { label: "FAQ", href: "/kontak/faq" },
      { label: "Kontak", href: "/kontak/hubungi" },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [desktopOpenMenus, setDesktopOpenMenus] = useState<string | null>(null);
  const [desktopOpenSubMenus, setDesktopOpenSubMenus] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Fix hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  const toggleMenu = (href: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  const isMenuOpen = (href: string) => !!openMenus[href];

  // Desktop menu handlers
  const handleDesktopMenuEnter = (href: string) => {
    setDesktopOpenMenus(href);
  };

  const handleDesktopMenuLeave = () => {
    setDesktopOpenMenus(null);
    setDesktopOpenSubMenus(null);
  };

  const handleDesktopSubMenuEnter = (href: string) => {
    setDesktopOpenSubMenus(href);
  };

  const handleDesktopSubMenuLeave = () => {
    setDesktopOpenSubMenus(null);
  };

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
    setOpenMenus({});
    setDesktopOpenMenus(null);
    setDesktopOpenSubMenus(null);
  }, [pathname]);

  // Hitung tinggi header secara dinamis
  const headerHeight = 64; // Sesuaikan dengan tinggi header Anda

  return (
    <div className="sticky top-0 z-50">
      {/* Header Section */}
      <div
        className={`bg-gradient-to-r from-blue-900/80 to-blue-800/80 text-white backdrop-blur-lg transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="bg-white/10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
              aria-label="Home"
            >
              <Image
                src="/logo-ppid.png" // bisa dari public folder atau URL online
                alt="Foto Kucing"
                width={30}
                height={30}
                className="rounded-10"
              />
            </Link>
            <div>
              <h1 className="text-sm lg:text-base font-bold tracking-tight">
                PPID Kota Surakarta
              </h1>
              <p className="text-xs text-blue-100">
                Pejabat Pengelola Informasi dan Dokumentasi
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => handleDesktopMenuEnter(item.href)}
                  onMouseLeave={handleDesktopMenuLeave}
                >
                  {/* Top Level Nav Item */}
                  <Link
                    href={item.href}
                    className={`px-2 py-2 text-xs font-medium transition-colors flex items-center gap-1
                    ${
                      isActive(item.href)
                        ? "text-white bg-white/10"
                        : "text-blue-100 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => {
                      if (!item.children) {
                        handleDesktopMenuLeave();
                      }
                    }}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* First Level Dropdown */}
                  {item.children && desktopOpenMenus === item.href && (
                    <div 
                      className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.children.map((child) => (
                          <div
                            key={child.href}
                            className="relative"
                            onMouseEnter={() => handleDesktopSubMenuEnter(child.href)}
                            onMouseLeave={handleDesktopSubMenuLeave}
                          >
                            {child.children ? (
                              <div 
                                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between
                                  ${
                                    isActive(child.href)
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                              >
                                {child.label}
                                <svg
                                  className="w-3 h-3 text-gray-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <Link
                                href={child.href}
                                className={`block px-3 py-2 text-xs
                                  ${
                                    isActive(child.href)
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                role="menuitem"
                              >
                                {child.label}
                              </Link>
                            )}

                            {/* Second Level Dropdown */}
                            {child.children && desktopOpenSubMenus === child.href && (
                              <div className="absolute left-full top-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                  {child.children.map((subChild) => (
                                    <Link
                                      key={subChild.href}
                                      href={subChild.href}
                                      className={`block px-3 py-2 text-xs
                                        ${
                                          isActive(subChild.href)
                                            ? "text-blue-600 bg-blue-50"
                                            : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                      role="menuitem"
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              {[
                {
                  name: "facebook",
                  icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                },
                {
                  name: "twitter",
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  name: "instagram",
                  icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A1.5 1.5 0 0119 8v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 19V8a1.5 1.5 0 011.5-1.5z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={`#${social.name}`}
                  className="bg-white/10 p-1.5 rounded-lg hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                  aria-label={`${social.name} link`}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={social.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Section - Fixed Position */}
      {isMounted && (
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Container */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-x-0 top-16 bg-white shadow-lg z-50 overflow-y-auto"
                style={{
                  maxHeight: `calc(100vh - ${headerHeight}px)`,
                  willChange: "opacity, transform",
                }}
              >
                <div className="container mx-auto py-2">
                  {navItems.map((item) => (
                    <div
                      key={item.href}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      {item.children ? (
                        <>
                          <button
                            onClick={() => toggleMenu(item.href)}
                            className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left
                              ${
                                isActive(item.href)
                                  ? "text-blue-600 bg-blue-50/50"
                                  : "text-gray-700"
                              }`}
                            aria-expanded={isMenuOpen(item.href)}
                            aria-controls={`submenu-${item.href.replace(
                              /\//g,
                              "-"
                            )}`}
                          >
                            <span className="font-medium">{item.label}</span>
                            <motion.svg
                              className="w-5 h-5 text-gray-400"
                              animate={{
                                rotate: isMenuOpen(item.href) ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </button>

                          <AnimatePresence>
                            {isMenuOpen(item.href) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="bg-gray-50 overflow-hidden"
                                id={`submenu-${item.href.replace(/\//g, "-")}`}
                                role="region"
                              >
                                {item.children.map((child) => (
                                  <div key={child.href}>
                                    {child.children ? (
                                      <>
                                        <button
                                          onClick={() => toggleMenu(child.href)}
                                          className={`w-full flex items-center justify-between px-6 py-2 hover:bg-gray-100 transition-colors text-left
                                            ${
                                              isActive(child.href)
                                                ? "text-blue-600 bg-blue-50/80"
                                                : "text-gray-600"
                                            }`}
                                          aria-expanded={isMenuOpen(child.href)}
                                          aria-controls={`subsubmenu-${child.href.replace(
                                            /\//g,
                                            "-"
                                          )}`}
                                        >
                                          <span>{child.label}</span>
                                          <motion.svg
                                            className="w-4 h-4"
                                            animate={{
                                              rotate: isMenuOpen(child.href)
                                                ? 90
                                                : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M9 5l7 7-7 7"
                                            />
                                          </motion.svg>
                                        </button>

                                        <AnimatePresence>
                                          {isMenuOpen(child.href) && (
                                            <motion.div
                                              initial={{
                                                opacity: 0,
                                                height: 0,
                                              }}
                                              animate={{
                                                opacity: 1,
                                                height: "auto",
                                              }}
                                              exit={{ opacity: 0, height: 0 }}
                                              transition={{ duration: 0.2 }}
                                              className="bg-gray-100/50 pl-8"
                                              id={`subsubmenu-${child.href.replace(
                                                /\//g,
                                                "-"
                                              )}`}
                                              role="region"
                                            >
                                              {child.children.map(
                                                (subChild) => (
                                                  <Link
                                                    key={subChild.href}
                                                    href={subChild.href}
                                                    onClick={() =>
                                                      setIsOpen(false)
                                                    }
                                                    className={`block px-4 py-2 hover:bg-gray-200 transition-colors
                                                    ${
                                                      isActive(subChild.href)
                                                        ? "text-blue-600 bg-blue-100/80"
                                                        : "text-gray-600"
                                                    }`}
                                                  >
                                                    {subChild.label}
                                                  </Link>
                                                )
                                              )}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </>
                                    ) : (
                                      <Link
                                        href={child.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-6 py-2 hover:bg-gray-100 transition-colors
                                          ${
                                            isActive(child.href)
                                              ? "text-blue-600 bg-blue-50/80"
                                              : "text-gray-600"
                                          }`}
                                      >
                                        {child.label}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-3 hover:bg-gray-50 transition-colors
                            ${
                              isActive(item.href)
                                ? "text-blue-600 bg-blue-50/50"
                                : "text-gray-700"
                            }`}
                        >
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};