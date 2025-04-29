import { db } from "@/lib/db";
import { publicLocalInformation } from "@/lib/schemaDb";
import { faker } from "@faker-js/faker/locale/id_ID";

async function seedPublicInformation() {
  console.log("Seeding publicInformation...");

  const mockPublicLocalInformation = Array.from({ length: 20 }, () => ({
    title: faker.lorem.sentence(),
    creationTime: faker.date.past().toISOString(),
    availableForm: faker.helpers.arrayElement(["Softcopy", "Hardcopy", "Softcopy & Hardcopy"]),
    retentionPeriod: faker.helpers.arrayElement(["1 Tahun", "5 Tahun", "Permanen"]),
    mediaType: faker.helpers.arrayElement(["pdf", "docx", "jpeg", "xlsx"]),
  }));

  await db.insert(publicLocalInformation).values(mockPublicLocalInformation);

  console.log("Seeding publicInformation completed!");
}

seedPublicInformation()
  .catch((e) => {
    console.error("Seeding publicInformation failed!");
    console.error(e);
    process.exit(1);
  });
