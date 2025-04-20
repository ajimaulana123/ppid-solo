CREATE TABLE "submission" (
	"id" serial PRIMARY KEY NOT NULL,
	"nik" varchar(16) NOT NULL,
	"reason_of_submission" text[] NOT NULL,
	"chronology" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
