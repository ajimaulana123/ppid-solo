// lib/schemas/submission.ts
import { z } from "zod";

export const statusCheck = z.object({
  id: z.string(),
  fullName: z.string().length(16),
  requestStatus: z.enum([
    'sedang diproses',
    'ditolak',
    'selesai diproses'
  ]),
  detailInformation: z.string(),
  createdAt: z.string().datetime()
});

export type StatusCheck = z.infer<typeof statusCheck>;