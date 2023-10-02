import { Module } from "@nestjs/common";
import { TaskAbstractService } from "./task_abstract.service";
import { TaskAbstractController } from "./task_abstract.controller";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  controllers: [TaskAbstractController],
  imports: [PrismaModule],
  providers: [TaskAbstractService]
})
export class TaskAbstractModule {
}
