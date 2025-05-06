'use client'

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
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Nama lengkap minimal 2 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  description: z.string().min(10, { message: "Pesan minimal 10 karakter" }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <HeroSections title="Hubungi Kami" />
        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column - Contact Form */}
                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100 h-fit">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Masukkan nama lengkap"
                                {...field}
                                disabled={isSubmitting}
                              />
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
                              <Input
                                placeholder="Masukkan email"
                                {...field}
                                disabled={isSubmitting}
                              />
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
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Mengirim...
                          </>
                        ) : "Kirim Pesan"}
                      </Button>
                    </form>
                  </Form>


                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <h4 className="font-semibold text-lg text-gray-900">Lokasi</h4>
                    <div className="mt-6 space-y-6">
                      <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 mt-10">
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

                {/* Right Column - Contact Info */}
                <div className="space-y-8 h-fit w-full">
                  <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-100 h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>

                    <div className="space-y-8">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-gray-900">Alamat Kantor</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Jl. Karak No. 123, Kec. Laweyan<br />
                            Kota Surakarta 57148<br />
                            Jawa Tengah, Indonesia
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-gray-900">Kontak Telepon</h4>
                          <div className="space-y-2">
                            <p className="text-gray-600">
                              <span className="font-medium">Customer Service:</span> (0271) 1234567
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">WhatsApp:</span> +62 812-3456-7890
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Fax:</span> (0271) 7654321
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-gray-900">Email & Media Sosial</h4>
                          <div className="space-y-2">
                            <p className="text-gray-600">
                              <span className="font-medium">Email:</span> info@karakjawa.com
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Instagram:</span> @karakjawa.official
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Facebook:</span> Karak Jawa Indonesia
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-gray-900">Jam Operasional</h4>
                          <div className="space-y-2 text-gray-600">
                            <p className="flex justify-between">
                              <span>Senin - Kamis</span>
                              <span>08:00 - 16:00 WIB</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Jumat</span>
                              <span>08:00 - 16:30 WIB</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Sabtu</span>
                              <span>09:00 - 15:00 WIB</span>
                            </p>
                            <p className="flex justify-between text-blue-600">
                              <span>Minggu & Hari Libur</span>
                              <span>Tutup</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-gray-900">Layanan Darurat</h4>
                          <div className="space-y-2">
                            <p className="text-gray-600">
                              <span className="font-medium">Hotline 24 Jam:</span> +62 811-2233-4455
                            </p>
                            <p className="text-gray-600">
                              <span className="font-medium">Email Darurat:</span> emergency@karakjawa.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}