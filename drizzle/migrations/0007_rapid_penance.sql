ALTER TABLE "RequestPeople" ALTER COLUMN "requestStatus" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "RequestPeople" ALTER COLUMN "requestStatus" SET DEFAULT 'sedang diproses'::text;--> statement-breakpoint
DROP TYPE "public"."request_status";--> statement-breakpoint
CREATE TYPE "public"."request_status" AS ENUM('diproses', 'ditolak', 'selesai diproses');--> statement-breakpoint
ALTER TABLE "RequestPeople" ALTER COLUMN "requestStatus" SET DEFAULT 'sedang diproses'::"public"."request_status";--> statement-breakpoint
ALTER TABLE "RequestPeople" ALTER COLUMN "requestStatus" SET DATA TYPE "public"."request_status" USING "requestStatus"::"public"."request_status";