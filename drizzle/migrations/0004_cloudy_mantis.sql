CREATE TABLE "ContactUs" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullName" text NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
