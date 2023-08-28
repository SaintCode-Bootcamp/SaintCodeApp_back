import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

  const chapter1 = await prisma.chapter.upsert({
    where: { id: "64de34fc980ffe56f1c0c351" },
    update: {},
    create: {
      id: "64de34fc980ffe56f1c0c351",
      title: "Раздел 1",
      desc: "Верстка, язык разметки HTML, базис любого сайта.",
      course_id: "64ecd87248bde21b3c5d63dd",
      order: 0
    }
  });

  const chapter2 = await prisma.chapter.upsert({
    where: { id: "64de35df980ffe56f1c0c352" },
    update: {},
    create: {
      id: "64de35df980ffe56f1c0c352",
      title: "Раздел 2",
      desc: "JavaScript, “оживляем” web страницу",
      course_id: "64ecd87248bde21b3c5d63dd",
      order: 0
    }
  });


  const chapterLevel1 = await prisma.chapter_level.upsert({
    where: { id: "64de366a980ffe56f1c0c35e" },
    update: {},
    create: {
      id: "64de366a980ffe56f1c0c35e",
      chapter_id: "64de34fc980ffe56f1c0c351",
      title: "Как будет выглядеть наш TODO",
      order: 0,
      is_draft: false
    }
  });

  const chapterLevel2 = await prisma.chapter_level.upsert({
    where: { id: "64e7d6270d4f09cada4267a9" },
    update: {},
    create: {
      id: "64e7d6270d4f09cada4267a9",
      chapter_id: "64de34fc980ffe56f1c0c351",
      title: "Создание кнопки ( Button )",
      order: 1,
      is_draft: false
    }
  });

  const chapterLevel3 = await prisma.chapter_level.upsert({
    where: { id: "64ecdb9f48bde21b3c5d63e1" },
    update: {},
    create: {
      id: "64ecdb9f48bde21b3c5d63e1",
      chapter_id: "64de34fc980ffe56f1c0c351",
      title: "Заголовки ( h1-h6 )",
      order: 2,
      is_draft: false
    }
  });

  const chapterLevel4 = await prisma.chapter_level.upsert({
    where: { id: "64ecdbc248bde21b3c5d63e2" },
    update: {},
    create: {
      id: "64ecdbc248bde21b3c5d63e2",
      chapter_id: "64de34fc980ffe56f1c0c351",
      title: "Поле ввода ( Input )",
      order: 3,
      is_draft: false
    }
  });

  const chapterLevel5 = await prisma.chapter_level.upsert({
    where: { id: "64ecdc0848bde21b3c5d63e3" },
    update: {},
    create: {
      id: "64ecdc0848bde21b3c5d63e3",
      chapter_id: "64de34fc980ffe56f1c0c351",
      title: "Блок ( Div )",
      order: 4,
      is_draft: false
    }
  });

  const chapterLevel6 = await prisma.chapter_level.upsert({
    where: { id: "64ecdc4548bde21b3c5d63e4" },
    update: {},
    create: {
      id: "64ecdc4548bde21b3c5d63e4",
      chapter_id: "64de34fc980ffe56f1c0c351",
      title: "Собираем все вместе ",
      order: 5,
      is_draft: false
    }
  });

  console.log({ chapter1, chapter2 });
  console.log({ chapterLevel1, chapterLevel2, chapterLevel3, chapterLevel4, chapterLevel5, chapterLevel6 });
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