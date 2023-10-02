import { Module } from '@nestjs/common';
import { TaskFillBlanksService } from './task_fill_blanks.service';
import { TaskFillBlanksController } from './task_fill_blanks.controller';
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  controllers: [TaskFillBlanksController],
  providers: [TaskFillBlanksService],
  imports: [PrismaModule],
})
export class TaskFillBlanksModule {}
