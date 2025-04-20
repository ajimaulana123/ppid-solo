import { pgTable, serial, text, timestamp, varchar, pgEnum } from 'drizzle-orm/pg-core';

export const requestStatusEnum = pgEnum('request_status', [
  'belum diproses',
  'sedang diproses',
  'selesai diproses'
]);

export const requestPeople = pgTable('RequestPeople', {
  id: serial('id').primaryKey(),
  fullName: text('fullName').notNull(),
  nik: varchar('nik', { length: 20 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  detailInformation: text('detailInformation').notNull(),
  requestStatus: requestStatusEnum('requestStatus')
    .default('belum diproses')
    .notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').$onUpdate(() => new Date()),
});

export const submission = pgTable('Submission', {
  id: serial('id').primaryKey(),
  nik: varchar('nik', { length: 16 }).notNull(),
  reasonOfSubmission: text('reason_of_submission').array().notNull(), // Untuk PostgreSQL array
  chronology: text('chronology').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date())
});
