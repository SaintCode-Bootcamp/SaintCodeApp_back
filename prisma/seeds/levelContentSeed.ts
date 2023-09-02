import { Display, PrismaClient, TypeTask } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  const level_content_lecture_1 = await prisma.level_content.upsert({
    where: { id: "64d63ab1980ffe56f1c0c2f8" },
    update: {},
    create: {
      id: "64d63ab1980ffe56f1c0c2f8",
      order: 1,
      chapter_level_id: "64e7d6270d4f09cada4267a9",
      desc: "Какое-то описание. Это лекция",
      lectures: {
        create: {
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
      }
    }
  });

  const level_content_task_2 = await prisma.level_content.upsert({
        where: { id: "64d63ab1980ffe56f1c0c2f9" },
        update: {},
        create: {
          id: "64d63ab1980ffe56f1c0c2f9",
          order: 3,
          chapter_level_id: "64e7d6270d4f09cada4267a9",
          desc: "Какое-то описание. Это задача",
          tasks: {
            create: {
              name: "Работа с основными HTML тегами",
              title: "",
              type: TypeTask.CHOICE,
              display: Display.LIST,
              is_archive: false,
              difficulty: 1,
              tags: ["HTML"],
              created_by: "64d63774980ffe56f1c0c2ef",
              tasks_choice: {
                create: {
                  content: "Какой язык разметки отвечает за верстку на странице?",
                  answers: {
                    "q1": {
                      "title": "JavaScript",
                      "is_correct": false
                    },
                    "q2": {
                      "title": "HTML",
                      "is_correct": true
                    },
                    "q3": {
                      "title": "CSS",
                      "is_correct": false
                    },
                    "q4": {
                      "title": "Java",
                      "is_correct": false
                    }
                  }
                }
              }
            }
          }
        }
      }
    )
  ;

  const level_content_task_3 = await prisma.level_content.upsert({
        where: { id: "64f2f358434db69e4c9bb4d7" },
        update: {},
        create: {
          id: "64f2f358434db69e4c9bb4d7",
          order: 3,
          chapter_level_id: "64e7d6270d4f09cada4267a9",
          desc: "Какое-то описание. Это задача",
          tasks: {
            create: {
              name: "Работа с основными HTML тегами",
              title: "Добавление тега",
              type: TypeTask.FILL_BLANKS,
              display: Display.LIST,
              is_archive: false,
              difficulty: 1,
              tags: ["HTML"],
              created_by: "64d63774980ffe56f1c0c2ef",
              tasks_fill_blanks: {
                create: {
                  content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                    "<p><span data-token-index=\"1\">Чтобы добавить элемент на страницу, в HTML используют теги Пример &lt; tag &gt;</span> Для добавления кнопки, вввнутри скобок должен стоять button Попробуй создать тег кнопки</p>\n" +
                    "</div>",
                  answers: ["<button>", "<h1>", "<tag>", "<h6>"],
                  template: "{1}",
                  rightAnswer: "<button>"
                }
              }
            }
          }
        }
      }
    )
  ;

  const level_content_task_4 = await prisma.level_content.upsert({
        where: { id: "64f2f377434db69e4c9bb4d8" },
        update: {},
        create: {
          id: "64f2f377434db69e4c9bb4d8",
          order: 4,
          chapter_level_id: "64e7d6270d4f09cada4267a9",
          desc: "Какое-то описание. Это задача",
          tasks: {
            create: {
              name: "Работа с основными HTML тегами",
              title: "",
              type: TypeTask.CHOICE,
              display: Display.LIST,
              is_archive: false,
              difficulty: 1,
              tags: ["HTML"],
              created_by: "64d63774980ffe56f1c0c2ef",
              tasks_choice: {
                create: {
                  content: "Какой тег создает кнопку? ",
                  answers: {
                    "q1": {
                      "title": "<h1>",
                      "is_correct": false
                    },
                    "q2": {
                      "title": "<p>",
                      "is_correct": false
                    },
                    "q3": {
                      "title": "<h4>",
                      "is_correct": false
                    },
                    "q4": {
                      "title": "<button>",
                      "is_correct": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    )
  ;

  console.log({ level_content_lecture_1, level_content_task_2, level_content_task_3, level_content_task_4});
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