// lib/schemas/submission.ts
import { z } from "zod";

export const statusCheckPengajuan = z.object({
  id: z.string(),
  fullName: z.string().length(16),
  requestStatus: z.enum([
    'sedang diproses',
    'ditolak',
    'selesai diproses'
  ]),
  chronology: z.string(),
  createdAt: z.string().datetime()
});

export type StatusCheckPengajuan = z.infer<typeof statusCheckPengajuan>;