import { db } from "@/lib/db";
import { publicDocuments } from "@/lib/schemaDb";
import { faker } from "@faker-js/faker/locale/id_ID";

async function seedPublicDocuments() {
  console.log("Seeding publicDocuments...");

  const mockPublicDocuments = Array.from({ length: 20 }, (_, index) => ({
    documentNo: String(index + 1),
    title: faker.lorem.sentence(),
    issuingOffice: faker.company.name(),
    referenceNumber: faker.lorem.slug(),
    year: faker.date.past().getFullYear().toString(),
    fileType: faker.helpers.arrayElement(["pdf", "docx", "jpg"]),
    fileSize: `${faker.number.int({ min: 50, max: 5000 })} KB`,
    documentType: faker.helpers.arrayElement(["Surat", "Keputusan", "Pengumuman", "Laporan"]),
    description: faker.lorem.paragraph(),
    downloadUrl: faker.internet.url(),
  }));

  await db.insert(publicDocuments).values(mockPublicDocuments);

  console.log("Seeding publicDocuments completed!");
}

seedPublicDocuments()
  .catch((e) => {
    console.error("Seeding publicDocuments failed!");
    console.error(e);
    process.exit(1);
  });
