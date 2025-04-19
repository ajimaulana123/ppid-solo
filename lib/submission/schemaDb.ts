// src/lib/submission/schemaDb.ts
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const submission = pgTable('submission', {
  id: serial('id').primaryKey(),
  nik: varchar('nik', { length: 16 }).notNull(),
  reasonOfSubmission: text('reason_of_submission').array().notNull(), // Untuk PostgreSQL array
  chronology: text('chronology').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date())
});