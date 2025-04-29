import { db } from "../db";
import { requestPeople } from "../schemaDb";
import { faker } from "@faker-js/faker/locale/id_ID";

async function seed() {
    console.log("Seeding database...");
  
    // Generate 30 mock request people with validated data
    const mockRequests = Array.from({ length: 30 }, () => {
      // Generate phone number that fits within 15 characters
      const phone = faker.phone.number().replace(/\D/g, '').slice(0, 15);
      
      return {
        fullName: faker.person.fullName(),
        nik: faker.string.numeric(16), // Exactly 16 digits
        phone: phone,
        email: faker.internet.email().toLowerCase().slice(0, 255), // Ensure email fits
        detailInformation: faker.lorem.paragraph(),
        requestStatus: faker.helpers.arrayElement([
          "sedang diproses",
          "ditolak",
          "selesai diproses",
        ]) as "sedang diproses" | "ditolak" | "selesai diproses",
      };
    });
  
    // Insert into database
    await db.insert(requestPeople).values(mockRequests);
  
    console.log("Seeding completed!");
  }
  
  seed()
    .catch((e) => {
      console.error("Seeding failed!");
      console.error(e);
      process.exit(1);
    });