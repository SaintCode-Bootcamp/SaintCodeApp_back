import { Module } from '@nestjs/common';
import { TaskInputService } from './task_input.service';
import { TaskInputController } from './task_input.controller';
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  controllers: [TaskInputController],
  providers: [TaskInputService],
  imports: [PrismaModule]
})
export class TaskInputModule {}
