CREATE TABLE "RequestPeople" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullName" text NOT NULL,
	"nik" varchar(16) NOT NULL,
	"phone" varchar(15) NOT NULL,
	"email" varchar(255) NOT NULL,
	"detailInformation" text NOT NULL,
	"requestStatus" text DEFAULT 'sedang diproses' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Submission" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullName" text NOT NULL,
	"nik" varchar(16) NOT NULL,
	"reasonOfSubmission" text[] DEFAULT '{}' NOT NULL,
	"chronology" text NOT NULL,
	"requestStatus" text DEFAULT 'sedang diproses' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
