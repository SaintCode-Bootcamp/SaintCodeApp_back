import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

  const course1 = await prisma.course.upsert({
    where: { id: "64ecd87248bde21b3c5d63dd" },
    update: {},
    create: {
      id: "64ecd87248bde21b3c5d63dd",
      title: "Как создать свой TODO",
      desc: "Здесь весело!"
    }
  });

  const course2 = await prisma.course.upsert({
    where: { id: "64ecd88d48bde21b3c5d63de" },
    update: {},
    create: {
      id: "64ecd88d48bde21b3c5d63de",
      title: "А это курс по Fetch тестовый",
      desc: "Это печально ( "
    }
  });

  console.log({ course1, course2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });