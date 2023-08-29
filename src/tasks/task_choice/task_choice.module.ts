import { Module } from "@nestjs/common";
import { TaskChoiceService } from "./task_choice.service";
import { TaskChoiceController } from "./task_choice.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [TaskChoiceController],
  providers: [TaskChoiceService],
  imports: [PrismaModule],
})

export class TaskChoiceModule {}