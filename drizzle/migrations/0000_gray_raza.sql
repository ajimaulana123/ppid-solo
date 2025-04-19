CREATE TABLE "RequestPeople" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullName" text NOT NULL,
	"nik" varchar(20) NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(255) NOT NULL,
	"detailInformation" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp
);
