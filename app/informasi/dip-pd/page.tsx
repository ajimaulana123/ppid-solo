"use client";

import { HeroSections } from "@/components/entities/HeroSections";
import { DipPdEntity } from "@/components/entities/informasi/DipPdEntity";

const dataDipPd = {
  items: [
    {
      no: "1",
      department: "PPID Provinsi",
      documentName: "Surat Edaran Sekda Nomor 14 SE 2025",
      year: "2025",
      fileType: "pdf",
      fileSize: "984 KB",
      fileIcon: "pdf",
    },
    {
      no: "2",
      department: "PPID Provinsi",
      documentName: "Surat Edaran Sekda Nomor 14 SE 2025",
      year: "2025",
      fileType: "pdf",
      fileSize: "984 KB",
      fileIcon: "pdf",
    },
    {
      no: "3",
      department: "PPID Provinsi",
      documentName: "Surat Edaran Sekda Nomor 14 SE 2025",
      year: "2025",
      fileType: "pdf",
      fileSize: "984 KB",
      fileIcon: "pdf",
    },
    {
      no: "4",
      department: "DINAS KEBUDAYAAN",
      documentName: "Surat Keputusan Daftar Informasi Publik Tahun 2025",
      year: "2025",
      fileType: "pdf",
      fileSize: "1.30 MB",
      fileIcon: "pdf",
    },
    {
      no: "5",
      department:
        "KELURAHAN PENJARINGAN KEC. PENJARINGAN KOTA ADM. JAKARTA UTARA",
      documentName: "Daftar Informasi Publik Kelurahan Penjaringan",
      year: "2025",
      fileType: "pdf",
      fileSize: "3.72 MB",
      fileIcon: "pdf",
    },
    {
      no: "6",
      department: "DINAS PERTAMANAN DAN HUTAN KOTA",
      documentName: "DIP Dinas Pertamanan dan Hutan Kota 2025",
      year: "2025",
      fileType: "pdf",
      fileSize: "782 KB",
      fileIcon: "pdf",
    },
    {
      no: "7",
      department: "KELURAHAN PASEBAN KEC. SENEN KOTA ADM. JAKARTA PUSAT",
      documentName:
        "SK No 41 Tahun 2024 Tentang Daftar Informasi Publik Kelurahan Paseban",
      year: "2024",
      fileType: "pdf",
      fileSize: "414 KB",
      fileIcon: "pdf",
    },
    {
      no: "8",
      department: "BADAN PENDAPATAN DAERAH",
      documentName:
        "Daftar Informasi Publik Badan Pendapatan Daerah Provinsi DKI Jakarta",
      year: "2024",
      fileType: "pdf",
      fileSize: "3.48 MB",
      fileIcon: "pdf",
    },
    {
      no: "9",
      department: "KECAMATAN MENTENG KOTA ADM. JAKARTA PUSAT",
      documentName:
        "Daftar Informasi Publik SK Camat No. 37 Tahun 2023 tentang DIP Kecamatan Menteng",
      year: "2023",
      fileType: "pdf",
      fileSize: "999 KB",
      fileIcon: "pdf",
    },
    {
      no: "10",
      department: "KECAMATAN TANAH ABANG KOTA ADM. JAKARTA PUSAT",
      documentName: "SK DIP Kecamatan Tanah Abang",
      year: "2024",
      fileType: "pdf",
      fileSize: "1.76 MB",
      fileIcon: "pdf",
    },
  ],
};

export default function DipKota() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Daftar Informasi Publik PPID Perangkat Daerah"
          description="lorem lorem"
        />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <DipPdEntity items={dataDipPd.items} />
        </div>
      </main>
    </div>
  );
}
