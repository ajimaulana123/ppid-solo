import { HeroSections } from "@/components/entities/HeroSections";
import { MapPin, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "6281234567890";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Nama lengkap minimal 2 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  description: z.string().min(10, { message: "Pesan minimal 10 karakter" }),
});

export default function ContactPage() {
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(values: FormData) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim pesan");
      }

      await response.json();
      
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
      });

      form.reset();
    } catch {
      toast({
        title: "Gagal mengirim pesan",
        description: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Hubungi Kami" />
        <div className="container mx-auto px-6 py-12">
          <div className="mt-16 mb-16 grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Hubungi Kami</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama lengkap" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pesan</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tulis pesan Anda"
                            className="resize-none"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </Form>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-lg text-gray-900">Atau hubungi kami melalui</h4>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <a 
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <a 
                      href="mailto:info@karakjawa.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      info@karakjawa.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100 h-full">
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
                  <div className="space-y-2 text-gray-600 mt-4">
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
              </div>

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