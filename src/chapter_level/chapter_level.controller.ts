import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { ChapterLevelService } from "./chapter_level.service";
import { CreateChapterLevelDto } from "./dto/create-chapter_level.dto";
import { UpdateChapterLevelDto } from "./dto/update-chapter_level.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ChapterEntity } from "../chapter/entities/chapter.entity";
import { ChapterLevelEntity } from "./entities/chapter_level.entity";

@Controller("chapter-level")
@ApiTags("Levels of chapter (chapter_level)")
export class ChapterLevelController {
  constructor(private readonly chapterLevelService: ChapterLevelService) {
  }

  @ApiCreatedResponse({ type: ChapterLevelEntity })
  @HttpCode(201)
  @Post()
  create(@Body() createChapterLevelDto: CreateChapterLevelDto) {
    return this.chapterLevelService.create(createChapterLevelDto);
  }

  @ApiOkResponse({ type: ChapterEntity, isArray: true })
  @Get()
  findAll() {
    return this.chapterLevelService.findAll();
  }

  @ApiOkResponse({ type: ChapterEntity })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.chapterLevelService.findOne(id);
  }

  @ApiOkResponse({ type: ChapterEntity })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChapterLevelDto: UpdateChapterLevelDto) {
    return this.chapterLevelService.update(id, updateChapterLevelDto);
  }

  @ApiOkResponse({ type: ChapterEntity })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.chapterLevelService.remove(id);
  }
}
