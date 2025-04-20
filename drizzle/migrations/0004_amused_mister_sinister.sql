ALTER TYPE "public"."status_pemohonan" RENAME TO "request_status";--> statement-breakpoint
ALTER TABLE "RequestPeople" RENAME COLUMN "statusPemohonan" TO "requestStatus";