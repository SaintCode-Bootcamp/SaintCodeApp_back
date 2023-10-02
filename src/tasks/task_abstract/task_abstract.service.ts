import { Injectable } from "@nestjs/common";
import { CreateTaskAbstractDto } from "./dto/create-task_abstract.dto";
import { UpdateTaskAbstractDto } from "./dto/update-task_abstract.dto";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class TaskAbstractService {
  constructor(private prisma: PrismaService) {
  }

  create(createTaskAbstractDto: CreateTaskAbstractDto) {
    return this.prisma.task_abstract.create({ data: createTaskAbstractDto });
  }

  findAll() {
    return this.prisma.task_abstract.findMany();
  }

  findOne(id: string) {
    return this.prisma.task_abstract.findUnique({ where: { id } });
  }

  update(id: string, updateTaskAbstractDto: UpdateTaskAbstractDto) {
    return this.prisma.task_abstract.update({ data: updateTaskAbstractDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.task_abstract.delete({ where: { id } });
  }
}
