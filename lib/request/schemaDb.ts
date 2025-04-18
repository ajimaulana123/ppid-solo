import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const requestPeople = pgTable('RequestPeople', {
  id: serial('id').primaryKey(),
  fullName: text('fullName').notNull(),
  nik: varchar('nik', { length: 20 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  detailInformation: text('detailInformation').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').$onUpdate(() => new Date()),
});

// Type inference
export type RequestPeople = typeof requestPeople.$inferSelect;
export type NewRequestPeople = typeof requestPeople.$inferInsert;