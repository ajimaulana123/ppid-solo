CREATE TABLE "News" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"imageUrl" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "PublicDocuments" (
	"id" serial PRIMARY KEY NOT NULL,
	"documentNo" varchar(20) NOT NULL,
	"title" text NOT NULL,
	"issuingOffice" text NOT NULL,
	"referenceNumber" text,
	"year" varchar(4) NOT NULL,
	"fileType" varchar(10) NOT NULL,
	"fileSize" varchar(20) NOT NULL,
	"documentType" text,
	"description" text,
	"downloadUrl" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "PublicInformation" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"summary" text NOT NULL,
	"informationOfficer" text NOT NULL,
	"responsibleOfficer" text NOT NULL,
	"creationTime" text NOT NULL,
	"availableForm" text NOT NULL,
	"retentionPeriod" text NOT NULL,
	"mediaType" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "PublicLocalInformation" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"creationTime" text NOT NULL,
	"availableForm" text NOT NULL,
	"retentionPeriod" text NOT NULL,
	"mediaType" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
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
