// src/db/seed.ts
import { db } from "../db";
import { activiesPodcastPpid } from "../schemaDb";
import { faker } from "@faker-js/faker/locale/id_ID";

// Daftar path gambar di storage (tanpa URL lengkap)
const imagePaths = [
  "139777.jpg",
  "570759.jpg",
  "139777.jpg"
];

async function seed() {
  console.log("Seeding news database...");

  const mockNews = Array.from({ length: 3 }, () => {
    const title = faker.lorem.sentence();
    const content = faker.lorem.paragraphs(faker.number.int({ min: 3, max: 7 }));

    return {
      title,
      content,
      imageUrl: faker.helpers.arrayElement(imagePaths),
      createdAt: faker.date.between({ 
        from: '2025-01-01', 
        to: new Date() 
      }),
      updatedAt: faker.date.between({ 
        from: '2025-01-01', 
        to: new Date() 
      })
    };
  });

  await db.insert(activiesPodcastPpid).values(mockNews);
  console.log(`Successfully seeded ${mockNews.length} news articles!`);
}

seed().catch((e) => {
  console.error("Seeding failed!");
  console.error(e);
  process.exit(1);
});