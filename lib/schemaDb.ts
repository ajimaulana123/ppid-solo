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

export const publicInformation = pgTable('PublicInformation', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  summary: text('summary').notNull(),
  informationOfficer: text('informationOfficer').notNull(),
  responsibleOfficer: text('responsibleOfficer').notNull(),
  creationTime: text('creationTime').notNull(),
  availableForm: text('availableForm').notNull(),
  retentionPeriod: text('retentionPeriod').notNull(),
  mediaType: text('mediaType').notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).$onUpdate(() => new Date()).notNull(),
});

export const publicDocuments = pgTable('PublicDocuments', {
  id: serial('id').primaryKey(),
  documentNo: varchar('documentNo', { length: 20 }).notNull(),
  title: text('title').notNull(),
  issuingOffice: text('issuingOffice').notNull(), // "PPID Provinsi"
  referenceNumber: text('referenceNumber'), // "Surat Edaran Sekda Nomor 14 SE 2025"
  year: varchar('year', { length: 4 }).notNull(), // "2025"
  fileType: varchar('fileType', { length: 10 }).notNull(), // "pdf"
  fileSize: varchar('fileSize', { length: 20 }).notNull(), // "984 KB"
  documentType: text('documentType'), // Optional field for categorization
  description: text('description'), // Optional field for additional info
  downloadUrl: text('downloadUrl'), // Optional field for file URL
  createdAt: timestamp('createdAt', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).$onUpdate(() => new Date()).notNull(),
});

export const publicLocalInformation = pgTable('PublicLocalInformation', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  creationTime: text('creationTime').notNull(),
  availableForm: text('availableForm').notNull(),
  retentionPeriod: text('retentionPeriod').notNull(),
  mediaType: text('mediaType').notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).$onUpdate(() => new Date()).notNull(),
});

export const reportLkpd = pgTable('ReportLkpd', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const reportPpid = pgTable('ReportPpid', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const survei = pgTable('Survei', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const activiesImagePpid = pgTable('ActiviesImagePpid', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const activiesVideoPpid = pgTable('ActiviesVideoPpid', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const activiesComicPpid = pgTable('ActiviesComicPpid', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const activiesPodcastPpid = pgTable('ActiviesPodcastPpid', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  content: text('content').notNull(),
  imageUrl: text('imageUrl'), // Ubah dari varchar(255) ke text
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export const contactUs = pgTable('ContactUs', {
  id: serial('id').primaryKey(),
  fullName: text('fullName').notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  description: text('description'), 
  requestStatus: text('requestStatus')
  .default('sedang diproses')
  .notNull()
  .$type<'sedang diproses' | 'ditolak' | 'selesai diproses'>(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});
