import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  const lecture1 = await prisma.lecture.upsert({
    where: { id: "64d63ab1980ffe56f1c0c2f8" },
    update: {},
    create: {
      id: "64d63ab1980ffe56f1c0c2f8",
      title: "Работа с основными HTML тегами",
      content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
        "<p>Любой сайт начинается с верстки. И чтобы на странице появились любые элементы: картинки, кнопки, текст, используютспользуютспользуют язык разметки HTML</p>\n" +
        "<p>HTML (HyperText Markup Language) - это язык гипертекстовой разметки.</p>\n" +
        "<p>Еслислисли сравнить сайт с домом, то этотото его каркас, ссстены и крыша, но без ремонта.</p>\n" +
        "</div>",
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
      created_by: "64d63774980ffe56f1c0c2ef",
      time_to_read: 5,
      is_draft: false
    }
  });

  const lecture2 = await prisma.lecture.upsert({
    where: { id: "64ecf3c148bde21b3c5d63f1" },
    update: {},
    create: {
      id: "64ecf3c148bde21b3c5d63f1",
      title: "CSS + color, background",
      content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
        "<p>Сейчас наша кнопка выглядит вот так</p>\n" +
        "<p><img src=\"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87a4fc14-d635-4bc4-ac88-217a16b10380/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-08-21_%D0%B2_19.28.31.png\" alt=\"Снимок экрана 2023-08-21 в 19.28.31.png\"></p>\n" +
        "<p>Если сравнивать сайт с домом, то HTML - это его стены, но на вид они как голый бетон. Чтобыбы добавить крассоотытыты нанамм нужен CSS. CSS (Cascading Style Sheets) означаетчает каскадные таблицы стилей, которыерые меняют цвета, размеры, работают ссоо шрифтами.</p>\n" +
        "</div>",
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
      created_by: "64d63774980ffe56f1c0c2ef",
      time_to_read: 10,
      is_draft: false
    }
  });

  const lecture3 = await prisma.lecture.upsert({
    where: { id: "64ecf42f48bde21b3c5d63f2" },
    update: {},
    create: {
      id: "64ecf42f48bde21b3c5d63f2",
      title: "border-radius + верстка кнопки из макета",
      content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
        "<p>Помимо изменения цвета текста и фона, у кнопки можно изменять обводку. Для этого иииспользуютуютуют свойство border и ему прописываютсывают сразууу 3 значенияя:</p>\n" +
        "<pre><code>button {\n" +
        "\tborder: red     1px         solid;\n" +
        " /*       цвет  толщина  сплошная линия   */\n" +
        "}\n" +
        "</code></pre>\n" +
        "<p><img src=\"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1aeda21-701f-4710-b616-ee38e5666cff/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-08-28_%D0%B2_01.05.12.png\" alt=\"Снимок экрана 2023-08-28 в 01.05.12.png\"></p>\n" +
        "<p>А чтобы вообще убрать границу, достаточно прописать</p>\n" +
        "</div>",
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
      created_by: "64d63774980ffe56f1c0c2ef",
      time_to_read: 11,
      is_draft: false
    }
  });
  console.log({ lecture1, lecture2, lecture3 });
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