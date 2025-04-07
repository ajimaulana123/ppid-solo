"use client";

import { HeroSections } from "@/components/entities/HeroSections";
import { DokumenEntity } from "@/components/entities/informasi/DokumenEntity";

const dataDocs = {
  items: [
    {
      no: "1",
      date: "25-03-2025 10:39",
      infoType: "Berkala",
      department: "BADAN KEPEGAWAIAN DAERAH",
      title:
        "Keputusan Kepala BKD Provinsi DKI Jakarta Nomor E-0041 TAHUN 2025",
      description:
        "Daftar Informasi Publik Badan Kepegawaian Daerah Provinsi DKI Jakarta Tahun 2025",
      fileType: "pdf",
      fileSize: "694 KB",
      fileIcon: "pdf",
    },
    {
      no: "2",
      date: "24-03-2025 10:58",
      infoType: "Berkala",
      department: "KELURAHAN PANCORAN KEC. PANCORAN KOTA ADM. JAKARTA SELATAN",
      title: "RUP",
      description:
        "Informasi mengenai Rencana Umum Pengadaan Barang/Jasa Kelurahan Pancoran Tahun 2025",
      fileType: "pdf",
      fileSize: "48 KB",
      fileIcon: "pdf",
    },
    {
      no: "3",
      date: "24-03-2025 10:12",
      infoType: "Berkala",
      department: "KELURAHAN PANCORAN KEC. PANCORAN KOTA ADM. JAKARTA SELATAN",
      title: "Struktur Organisasi",
      description:
        "Informasi tentang Struktur Organisasi Kelurahan berdasarkan Peraturan Gubernur Nomor 57 Tahun 2022 dan Nama-nama pejabat pengampu",
      fileType: "pdf",
      fileSize: "71 KB",
      fileIcon: "pdf",
    },
    {
      no: "4",
      date: "24-03-2025 10:07",
      infoType: "Berkala",
      department: "KELURAHAN PANCORAN KEC. PANCORAN KOTA ADM. JAKARTA SELATAN",
      title: "Gambaran Organisasi",
      description:
        "Informasi mengenai kedudukan Kelurahan Berdasarkan Peraturan Gubernur Nomor 57 Tahun 2022",
      fileType: "pdf",
      fileSize: "524 KB",
      fileIcon: "pdf",
    },
    {
      no: "5",
      date: "20-03-2025 09:39",
      infoType: "Berkala",
      department:
        "KELURAHAN PESANGGRAHAN KEC. PESANGGRAHAN KOTA ADM. JAKARTA SELATAN",
      title: "Laporan PPID Kelurahan Pesanggrahan Tahun 2024",
      description:
        "Laporan Pelaksanaan Layanan Informasi Publik Kelurahan Pesanggrahan Kecamatan Pesanggrahan Kota Administrasi Jakarta Selatan Tahun 2024",
      fileType: "pdf",
      fileSize: "798 KB",
      fileIcon: "pdf",
    },
    {
      no: "6",
      date: "10-03-2025 15:57",
      infoType: "Berkala",
      department: "KECAMATAN TANAH ABANG KOTA ADM. JAKARTA PUSAT",
      title: "SOP",
      description: "SOP Pelayanan Informasi Publik",
      fileType: "pdf",
      fileSize: "820 KB",
      fileIcon: "pdf",
    },
    {
      no: "7",
      date: "10-03-2025 13:58",
      infoType: "Berkala",
      department: "KECAMATAN TANAH ABANG KOTA ADM. JAKARTA PUSAT",
      title: "Laporan Layanan Informasi Publik 2024",
      description:
        "Memuat gambaran informasi dan dokumentasi publik Kecamatan Tanah Abang",
      fileType: "pdf",
      fileSize: "1.66 MB",
      fileIcon: "pdf",
    },
    {
      no: "8",
      date: "27-02-2025 07:50",
      infoType: "Tersedia Setiap Saat",
      department: "WALI KOTA ADMINISTRASI JAKARTA UTARA",
      title: "LAPORAN TAHUNAN PPID TAHUN 2024 KOTA ADMINISTRASI JAKARTA UTARA",
      description: "LAPORAN TAHUNAN PPID TAHUN 2024",
      fileType: "pdf",
      fileSize: "699 KB",
      fileIcon: "pdf",
    },
    {
      no: "9",
      date: "27-02-2025 07:45",
      infoType: "Tersedia Setiap Saat",
      department: "WALI KOTA ADMINISTRASI JAKARTA UTARA",
      title: "LAPORAN PELAKSANAAN SURVEI KEPUASAN MASYARAKAT (SKM) TAHUN 2024",
      description:
        "LAPORAN PELAKSANAAN SURVEI KEPUASAN MASYARAKAT (SKM) SEMESTER 2 TAHUN 2024",
      fileType: "pdf",
      fileSize: "3.32 MB",
      fileIcon: "pdf",
    },
    {
      no: "10",
      date: "27-02-2025 07:43",
      infoType: "Tersedia Setiap Saat",
      department: "WALI KOTA ADMINISTRASI JAKARTA UTARA",
      title: "LAPORAN PELAKSANAAN SURVEI KEPUASAN MASYARAKAT (SKM) TAHUN 2024",
      description:
        "LAPORAN PELAKSANAAN SURVEI KEPUASAN MASYARAKAT (SKM) SEMESTER 1 TAHUN 2024",
      fileType: "pdf",
      fileSize: "887 KB",
      fileIcon: "pdf",
    },
  ],
};

export default function Dokument() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Dokumen Informasi Publik"
          description="lorem lorem"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <DokumenEntity items={dataDocs.items} />
        </div>
      </main>
    </div>
  );
}
