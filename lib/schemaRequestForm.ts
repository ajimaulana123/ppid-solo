import { z } from "zod";

export const requestFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Nama Lengkap harus minimal 2 karakter.",
  }),
  nik: z.number().min(16, {
    message: "NIK harus minimal 16 digit.",
  }),
  phone: z.number().min(8, {
    message: "Masukkan nomor telepon yang valid."
  }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  detailInformation: z.string().min(2, {
    message: "Detail informasi harus minimal 1 karakter.",
  }),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
