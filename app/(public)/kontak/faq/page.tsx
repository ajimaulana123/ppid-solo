import { HeroSections } from "@/components/entities/HeroSections";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function RuangLingkupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="FAQ PPID"
        />
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-left">
                Apa itu PPID?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                PPID (Pejabat Pengelola Informasi dan Dokumentasi) adalah pejabat yang bertanggung jawab di bidang penyimpanan, pendokumentasian, penyediaan, dan pelayanan informasi di lingkungan Pemerintah Kota Surakarta sesuai dengan Undang-Undang Keterbukaan Informasi Publik.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-left">
                Informasi apa saja yang dapat diminta masyarakat?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Masyarakat dapat meminta semua informasi publik yang dihasilkan/disimpan oleh Pemkot Surakarta, kecuali informasi yang dikecualikan sesuai Pasal 17 UU KIP seperti rahasia negara, rahasia dagang, dan informasi yang dapat mengganggu proses penegakan hukum.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-left">
                Bagaimana cara mengajukan permohonan informasi?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Permohonan dapat diajukan secara:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Online melalui website ppid.surakarta.go.id</li>
                  <li>Datang langsung ke kantor PPID Kota Surakarta</li>
                  <li>Melalui pos/email ke ppid@surakarta.go.id</li>
                </ul>
                Dengan melampirkan identitas dan mengisi formulir permohonan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-left">
                Berapa lama waktu yang dibutuhkan untuk mendapatkan informasi?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                PPID wajib memberikan tanggapan dalam waktu:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>10 hari kerja untuk informasi tersedia</li>
                  <li>14 hari kerja untuk informasi perlu pengumpulan</li>
                  <li>7 hari kerja setelah putusan Komisi Informasi untuk informasi dikecualikan</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-left">
                Apakah ada biaya untuk mendapatkan informasi?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Pada prinsipnya tidak ada biaya, namun untuk informasi yang memerlukan penggandaan dokumen fisik dikenakan biaya materai dan fotokopi sesuai ketentuan yang berlaku.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-left">
                Bagaimana jika permohonan informasi ditolak?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Jika permohonan ditolak, pemohon dapat mengajukan keberatan secara tertulis kepada atasan PPID dalam waktu 14 hari kerja. Jika tetap ditolak, dapat mengajukan penyelesaian sengketa ke Komisi Informasi Jawa Tengah.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-left">
                Informasi apa saja yang wajib diumumkan secara berkala?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-600">
                Termasuk tetapi tidak terbatas pada:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Profil institusi dan SOP</li>
                  <li>Laporan keuangan dan APBD</li>
                  <li>Proyek pembangunan dan pengadaan barang/jasa</li>
                  <li>Kebijakan dan peraturan daerah</li>
                  <li>Laporan kinerja instansi</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Masih ada pertanyaan?</h3>
            <p className="text-gray-600 mb-4">Hubungi PPID Kota Surakarta melalui layanan pelanggan kami</p>
            <a 
              href="/kontak/hubungi" 
              className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}