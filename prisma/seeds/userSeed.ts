import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  const user1 = await prisma.user.upsert({
    where: { email: "user1@ya.ru" },
    update: {},
    create: {
      created_at: now.toISOString(),
      email: "user1@ya.ru",
      github_id: "64d7f944980ffe56f1c0c32d",
      google_id: null,
      last_log_in: now.toISOString(),
      image_github: "https://avatars.githubusercontent.com/u/102468675?v=4",
      display_name: "Danil",
      username: "user1",
      password: await bcrypt.hash("12345678", 10),
      role: "USER"
    }
  });

  const user2 = await prisma.user.upsert({
    where: { email: "user2@ya.ru" },
    update: {},
    create: {
      created_at: now.toISOString(),
      email: "user2@ya.ru",
      github_id: "frwfwjnfjwenrrwer",
      google_id: null,
      last_log_in: now.toISOString(),
      image_github: "https://avatars.githubusercontent.com/u/102468675?v=4",
      display_name: "Andrei",
      username: "user2",
      password: await bcrypt.hash("12345678", 10),
      role: "USER"
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