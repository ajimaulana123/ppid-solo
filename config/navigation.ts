import { NavItem } from "@/types";

export const navItems: NavItem[] = [
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