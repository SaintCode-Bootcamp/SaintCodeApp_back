import { Injectable } from "@nestjs/common";
import { CreateTaskInputDto } from "./dto/create-task_input.dto";
import { UpdateTaskInputDto } from "./dto/update-task_input.dto";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class TaskInputService {
  constructor(private prisma: PrismaService) {
  }

  create(createTaskInputDto: CreateTaskInputDto) {
    return this.prisma.task_input.create({ data: createTaskInputDto });
  }

  findAll() {
    return this.prisma.task_input.findMany();
  }

  findOne(id: string) {
    return this.prisma.task_input.findUnique({ where: { id } });
  }

  update(id: string, updateTaskInputDto: UpdateTaskInputDto) {
    return this.prisma.task_input.update({ data: updateTaskInputDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.task_input.delete({ where: { id } });
  }
}
