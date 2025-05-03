import { db } from "../db";
import { contactUs } from "../schemaDb";
import { faker } from "@faker-js/faker/locale/id_ID";

async function seed() {
  console.log("Seeding database...");

  // Generate 30 mock request people with validated data
  const mockRequests = Array.from({ length: 30 }, () => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email().toLowerCase().slice(0, 255),
      description: faker.lorem.paragraph(),
      requestStatus: faker.helpers.arrayElement([
        "sedang diproses", // Perhatikan penulisan yang benar
        "ditolak",
        "selesai diproses",
      ]) as "sedang diproses" | "ditolak" | "selesai diproses",
      // createdAt dan updatedAt tidak perlu dimasukkan karena sudah ada DEFAULT
    };
  });

  // Insert into database
  await db.insert(contactUs).values(mockRequests);

  console.log("Seeding completed!");
}
  
  seed()
    .catch((e) => {
      console.error("Seeding failed!");
      console.error(e);
      process.exit(1);
    });

    