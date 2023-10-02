import { Injectable } from "@nestjs/common";
import { CreateTaskFillBlankDto } from "./dto/create-task_fill_blank.dto";
import { UpdateTaskFillBlankDto } from "./dto/update-task_fill_blank.dto";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class TaskFillBlanksService {

  constructor(private prisma: PrismaService) {
  }

  create(createTaskFillBlankDto: CreateTaskFillBlankDto) {
    return this.prisma.task_fill_blanks.create({ data: createTaskFillBlankDto });
  }

  findAll() {
    return this.prisma.task_fill_blanks.findMany();
  }

  findOne(id: string) {
    return this.prisma.task_fill_blanks.findUnique({ where: { id } });
  }

  update(id: string, updateTaskFillBlankDto: UpdateTaskFillBlankDto) {
    return this.prisma.task_fill_blanks.update({ data: updateTaskFillBlankDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.task_fill_blanks.delete({ where: { id } });
  }
}
