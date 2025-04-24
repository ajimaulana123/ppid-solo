import { z } from "zod";

export const ReasonOptions = {
  PENOLAKAN_1: "Penolakan atas informasi berdasarkan alasan pengecualian sebagaimana dimaksud dalam pasal 17 UU No. 14 tahun 2008.",
  PENOLAKAN_2: "Tidak ditanggapinya permintaan Informasi.",
  PENOLAKAN_3: "Tidak dipenuhi permintaan Informasi.",
  PENOLAKAN_4: "Penyampaian informasi melebihi jangka waktu yang diatur dalam UU No. 14 tahun 2008.",
  PENOLAKAN_5: "Tidak disediakannya informasi berkala.",
  PENOLAKAN_6: "Pengenaan biaya yang tidak wajar."
} as const;

export type ReasonOptionKey = keyof typeof ReasonOptions;
export type ReasonOptionValue = typeof ReasonOptions[ReasonOptionKey];

export const submissionFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Nama Lengkap harus minimal 2 karakter.",
  }),
  nik: z.coerce.number().min(1000000000000000).max(9999999999999999),
  reasonOfSubmission: z.array(z.enum(Object.keys(ReasonOptions) as [ReasonOptionKey, ...ReasonOptionKey[]])),
  chronology: z.string().min(10)
});

export type SubmissionFormSchema = z.infer<typeof submissionFormSchema>;