import { HeroSections } from "@/components/entities/HeroSections";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Statistik Layanan Informasi Publik" />
        <div className="container mx-auto px-6 py-12 space-y-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Jumlah Permohonan Publik</h2>
              <div className="text-4xl font-bold text-blue-500">6599</div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Jumlah Visitor</h2>
              <div className="text-4xl font-bold text-blue-500">900.000</div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Jumlah Permohonan</h2>
              <div className="text-4xl font-bold text-blue-500">4491</div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Jumlah Keberatan</h2>
              <div className="text-4xl font-bold text-blue-500">168</div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Permohonan Selesai</h2>
              <div className="text-4xl font-bold text-blue-500">4316</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Rata-Rata Pemenuhan Permohonan</h2>
              <div className="h-48 w-full rounded-lg bg-gray-200">
                {/* Replace this with your chart component */}
                <div className="text-center mt-4">Diagram Batang</div>
              </div>
              <ul className="list-disc mt-2">
                <li>Kurang dari 5 hari</li>
                <li>6–10 hari</li>
                <li>11–15 hari</li>
                <li>16–20 hari</li>
                <li>Lebih dari 20 hari</li>
              </ul>
              <p className="mt-2">Mayoritas permohonan diselesaikan dalam 11–15 hari dan 16–20 hari.</p>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Tingkat Penyelesaian</h2>
              <div className="h-48 w-full rounded-lg bg-gray-200">
                {/* Replace this with your chart component */}
                <div className="text-center mt-4">Pie Chart</div>
              </div>
              <ul className="list-disc mt-2">
                <li>✅ Permohonan Pemohon Selesai: 96.1%</li>
                <li>🟦 Informasi Publik Dikecualikan: 2.4%</li>
                <li>🟧 Alasan Permohonan Ditolak: 1.5%</li>
              </ul>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Grafik Tren Permohonan (Bulanan)</h2>
              <div className="h-48 w-full rounded-lg bg-gray-200">
                {/* Replace this with your chart component */}
                <div className="text-center mt-4">Grafik Tren</div>
              </div>
              <p className="mt-2">Menampilkan jumlah permohonan setiap bulan dari Oktober 2023 hingga April 2024. Ada peningkatan signifikan di Maret 2024 lalu turun di April 2024.</p>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Permohonan Layanan Informasi</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg shadow-md bg-white p-4">
                  <h3 className="text-lg font-bold mb-2">Temujin Partindungan Pasaribu</h3>
                  <p className="mb-2">Informasi A</p>
                  <p className="text-gray-500">2024-04-20</p>
                </div>
                <div className="rounded-lg shadow-md bg-white p-4">
                  <h3 className="text-lg font-bold mb-2">Muhammad Sulhan</h3>
                  <p className="mb-2">Informasi B</p>
                  <p className="text-gray-500">2024-04-20</p>
                </div>
                <div className="rounded-lg shadow-md bg-white p-4">
                  <h3 className="text-lg font-bold mb-2">LEA Alvin H. Paradisea</h3>
                  <p className="mb-2">Informasi C</p>
                  <p className="text-gray-500">2024-04-20</p>
                </div>
                <div className="rounded-lg shadow-md bg-white p-4">
                  <h3 className="text-lg font-bold mb-2">dddg syuyng widarto</h3>
                  <p className="mb-2">Informasi D</p>
                  <p className="text-gray-500">2024-04-20</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-md bg-white p-4">
              <h2 className="text-xl font-bold mb-2">Keberatan Informasi Publik</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg shadow-md bg-white p-4">
                  <h3 className="text-lg font-bold mb-2">Nomor Registrasi: 12345</h3>
                  <p className="mb-2">Kode Pemohon: ABC</p>
                  <p className="mb-2">Catatan Keberatan: Alasan Keberatan A</p>
                  <p className="text-gray-500">2024-04-20</p>
                </div>
                <div className="rounded-lg shadow-md bg-white p-4">
                  <h3 className="text-lg font-bold mb-2">Nomor Registrasi: 67890</h3>
                  <p className="mb-2">Kode Pemohon: DEF</p>
                  <p className="mb-2">Catatan Keberatan: Alasan Keberatan B</p>
                  <p className="text-gray-500">2024-04-20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
