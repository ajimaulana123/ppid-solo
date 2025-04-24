import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const requestPeople = pgTable('RequestPeople', {
  id: serial('id').primaryKey(),
  fullName: text('fullName').notNull(),
  nik: varchar('nik', { length: 16 }).notNull(),
  phone: varchar('phone', { length: 15 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  detailInformation: text('detailInformation').notNull(),
  requestStatus: text('requestStatus')
    .default('sedang diproses')
    .notNull()
    .$type<'sedang diproses' | 'ditolak' | 'selesai diproses'>(),
  createdAt: timestamp('createdAt', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).$onUpdate(() => new Date()).notNull(),
});

export const submission = pgTable('Submission', {
  id: serial('id').primaryKey(),
  fullName: text('fullName').notNull(),
  nik: varchar('nik', { length: 16 }).notNull(),
  reasonOfSubmission: text('reasonOfSubmission').array().notNull().default([]),
  chronology: text('chronology').notNull(),
  requestStatus: text('requestStatus')
    .default('sedang diproses')
    .notNull()
    .$type<'sedang diproses' | 'ditolak' | 'selesai diproses'>(),
  createdAt: timestamp('createdAt', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).$onUpdate(() => new Date()).notNull()
});

export const news = pgTable('News', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});
