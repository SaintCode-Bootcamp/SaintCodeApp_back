import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

  const task_choice_1 = await prisma.task_choice.upsert({
    where: { id: "64e26a12980ffe56f1c0c41f" },
    update: {},
    create: {
      id: "64e26a12980ffe56f1c0c41f",
      title: "Язык разметки",
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
  });

  const task_choice_2 = await prisma.task_choice.upsert({
    where: { id: "64e26a12980ffe56f1c0c41f" },
    update: {},
    create: {
      id: "64e26a12980ffe56f1c0c41f",
      title: "Код отображения кнопки",
      content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
        "<p>Что изобразит данный код?</p>\n" +
        "<p><code>&lt;button&gt;SaintCode&lt;/button&gt;</code></p>\n" +
        "</div>",
      answers: {
        "q1": {
          "title": "кнопку Saint Code",
          "is_correct": false
        },
        "q2": {
          "title": "SaintCode",
          "is_correct": false
        },
        "q3": {
          "title": "кнопку SaintCode",
          "is_correct": true
        },
        "q4": {
          "title": "заголовок SaintCode",
          "is_correct": false
        }
      }
    }
  });

  const task_choice_3 = await prisma.task_choice.upsert({
    where: { id: "64ed0852efbd4b4de67a0052" },
    update: {},
    create: {
      id: "64ed0852efbd4b4de67a0052",
      title: "Тег кнопки",
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
  });

  const task_fill_blanks1 = await prisma.task_fill_blanks.upsert({
    where: { id: "64e27388980ffe56f1c0c467" },
    update: {},
    create: {
      id: "64e27388980ffe56f1c0c467",
      "title": "Вставьте пропуску в строку",
      "content": "<b> <div{1} Привет! <{2}> {3} ",
      "answers": [
        ">",
        "div",
        "</b>"
      ],
      "template": " <div{1} <b> Привет! <{2}> {3}",
      "rightAnswer": "<div><b>Привет!</b></div> "
    }
  });


  const task_fill_blanks2 = await prisma.task_fill_blanks.upsert({
    where: { id: "64ed1034af20a1c36f39bd12" },
    update: {},
    create: {
      id: "64ed1034af20a1c36f39bd12",
      title: "Закрытие тега button",
      content: "<button> - это только начало тега, его называют открывающим, но у него есть и закрывающая часть. Она точно такая же, только после первой скобки стоит символ /   Попробуй закрыть тег",
      answers: ["<", "/", "button", ">"],
      template: "<button> {1} {2} {3} {4}",
      rightAnswer: "<button></button>"
    }
  });

  const task_fill_blanks3 = await prisma.task_fill_blanks.upsert({
    where: { id: "64f07e39434db69e4c9bb4aa" },
    update: {},
    create: {
      id: "64f07e39434db69e4c9bb4aa",
      title: "Закрытие тега button2",
      content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
        "<p>Закрой тег</p>\n" +
        "<p><code>&lt;button&gt;SaintCode&lt;/button&gt;</code></p>\n" +
        "</div>",
      answers: ["<", "/", "button", ">", "[", "]"],
      template: "<button>Just Do It! {1} {2} {3} {4}",
      rightAnswer: "<button>Just Do It!</button>"
    }
  });

  const task_fill_blanks4 = await prisma.task_fill_blanks.upsert({
    where: { id: "64f07e48434db69e4c9bb4ab" },
    update: {},
    create: {
      id: "64f07e48434db69e4c9bb4ab",
      title: "Добавление тега",
      content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
        "<p><span data-token-index=\"1\">Чтобы добавить элемент на страницу, в HTML используют теги Пример &lt; tag &gt;</span> Для добавления кнопки, вввнутри скобок должен стоять button Попробуй создать тег кнопки</p>\n" +
        "</div>",
      answers: ["<button>", "<h1>", "<tag>", "<h6>"],
      template: "{1}",
      rightAnswer: "<button>"
    }
  });
  console.log({ task_choice_1, task_choice_2, task_choice_3 });
  console.log({ task_fill_blanks1, task_fill_blanks2, task_fill_blanks3, task_fill_blanks4 });
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