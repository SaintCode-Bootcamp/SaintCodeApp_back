import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  const user1 = await prisma.user.upsert({
    where: { email : "user1@ya.ru"},
    update: {},
    create: {
      created_at: now.toISOString(),
      email: "user1@ya.ru",
      expires: now.toISOString(),
      accessToken: "ghu_z3b5dClfPYGPAVWLlBJnkpNhyDCS2L0DWCq2",
      github_id: "64d7f944980ffe56f1c0c32d",
      image_github: "https://avatars.githubusercontent.com/u/102468675?v=4",
      name: "Danil",
      google_id: null,
      last_log_in:  now.toISOString()
    }
  });

  const user2 = await prisma.user.upsert({
    where: { email: "user2@ya.ru" },
    update: {},
    create: {
      created_at: now.toISOString(),
      email: "user2@ya.ru",
      expires: now.toISOString(),
      accessToken: "ghu_z3b5dClfPYGPAVWLlBJnkpNhsfdsfdsfsdf",
      github_id: "frwfwjnfjwenrrwer",
      image_github: "https://avatars.githubusercontent.com/u/102468675?v=4",
      name: "Andrei",
      google_id: null,
      last_log_in:  now.toISOString()
    }
  });

  console.log({ user1, user2 });
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