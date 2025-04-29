import { db } from "../db";
import { submission } from "../schemaDb";
import { faker } from "@faker-js/faker/locale/id_ID";

async function seed() {
  console.log("Seeding database...");

  // Generate 30 mock submissions
  const mockSubmissions = Array.from({ length: 30 }, () => {
    // Generate random reasons (array of strings)
    const reasons = Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => 
      faker.lorem.sentence()
    );

    return {
      fullName: faker.person.fullName(),
      nik: faker.string.numeric(16), // Exactly 16 digits
      reasonOfSubmission: reasons,
      chronology: faker.lorem.paragraphs(2),
      requestStatus: faker.helpers.arrayElement([
        "sedang diproses",
        "ditolak",
        "selesai diproses",
      ]) as "sedang diproses" | "ditolak" | "selesai diproses",
    };
  });

  // Insert into database
  await db.insert(submission).values(mockSubmissions);

  console.log("Seeding completed!");
}

seed()
  .catch((e) => {
    console.error("Seeding failed!");
    console.error(e);
    process.exit(1);
  });