import { Injectable } from "@nestjs/common";
import { CreateChapterLevelDto } from "./dto/create-chapter_level.dto";
import { UpdateChapterLevelDto } from "./dto/update-chapter_level.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ChapterLevelService {
  constructor(private prisma: PrismaService) {
  }

  create(createChapterLevelDto: CreateChapterLevelDto) {
    return this.prisma.chapter_level.create({ data: createChapterLevelDto });
  }

  findAll() {
    return this.prisma.chapter_level.findMany();
  }

  findOne(id: string) {
    return this.prisma.chapter_level.findUnique({ where: { id } });
  }

  update(id: string, updateChapterLevelDto: UpdateChapterLevelDto) {
    return this.prisma.chapter_level.update({ data: updateChapterLevelDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.chapter_level.delete({ where: { id } });
  }
}
