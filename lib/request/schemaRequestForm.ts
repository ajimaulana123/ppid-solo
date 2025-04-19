import { z } from "zod";

export const requestFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Nama Lengkap harus minimal 2 karakter.",
  }),
  nik: z.coerce
    .number({
      invalid_type_error: "NIK harus berupa angka",
    })
    .min(1000000000000000, { // 16 digit
      message: "NIK harus minimal 16 digit.",
    })
    .max(9999999999999999, {
      message: "NIK maksimal 16 digit.",
    }),
  phone: z.coerce
    .number({
      invalid_type_error: "Nomor telepon harus berupa angka",
    })
    .min(10000000, {
      message: "Masukkan nomor telepon yang valid (min 8 digit)."
    }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  detailInformation: z.string().min(2, {
    message: "Detail informasi harus minimal 1 karakter.",
  }),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
