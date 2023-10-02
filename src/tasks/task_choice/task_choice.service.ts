import { Injectable } from "@nestjs/common";
import { CreateTaskChoiceDto } from "./dto/create-task_choice.dto";
import { UpdateTaskChoiceDto } from "./dto/update-task_choice.dto";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class TaskChoiceService {
  constructor(private prisma: PrismaService) {
  }

  create(createTaskChoiceDto: CreateTaskChoiceDto) {
    return this.prisma.task_choice.create({ data: createTaskChoiceDto });
  }

  findAll() {
    return this.prisma.task_choice.findMany();
  }

  findOne(id: string) {
    return this.prisma.task_choice.findUnique({ where: { id } });
  }

  update(id: string, updateTaskChoiceDto: UpdateTaskChoiceDto) {
    return this.prisma.task_choice.update({ data: updateTaskChoiceDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.task_choice.delete({ where: { id } });
  }
}
