import { HeroSections } from "@/components/entities/HeroSections";

import { MapPin, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

function createWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export default function RuangLingkupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections
          title="Faq"
        />
        <div className="container mx-auto px-6 py-12">
       

            <div className="mt-16 mb-16 grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900">Alamat</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Jl. Karak No. 123<br />
                        Kota Surakarta<br />
                        Jawa Tengah, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900">Telepon</h4>
                      <p className="text-gray-600">+62 812-3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-900">Email</h4>
                      <p className="text-gray-600">info@karakjawa.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h4 className="font-semibold text-lg text-gray-900">Jam Operasional</h4>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span>08:00 - 17:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sabtu</span>
                      <span>09:00 - 15:00</span>
                    </p>
                    <p className="flex justify-between text-blue-600">
                      <span>Minggu</span>
                      <span>Tutup</span>
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <a
                    href={createWhatsAppUrl("Halo, saya ingin bertanya tentang produk Karak Jawa")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.1487767694255!2d110.8271253!3d-7.5595329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16627ad11ab7%3A0xe7fe4e0454bc3095!2sSurakarta%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1650000000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
