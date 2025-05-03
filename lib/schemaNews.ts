import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().min(2, {
    message: "Judul harus minimal 2 karakter.",
  }),
  content: z.string().min(10, {
    message: "Konten harus minimal 10 karakter.",
  }),
  imageUrl: z.instanceof(File).optional(), // atau z.any() jika ingin lebih fleksibel
});

export type NewsSchema = z.infer<typeof newsSchema>;