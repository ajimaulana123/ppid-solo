// drizzle.config.ts
import type { Config } from 'drizzle-kit';

export default {
  schema: "./lib/schemaDb.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql", // Tambahkan ini
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Gunakan 'url' bukan 'connectionString'
  },
} satisfies Config;