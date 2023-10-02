import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { LevelContentService } from "./level_content.service";
import { CreateLevelContentDto } from "./dto/create-level_content.dto";
import { UpdateLevelContentDto } from "./dto/update-level_content.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { LevelContentEntity } from "./entities/level_content.entity";

@Controller("level-content")
@ApiTags('Level content (Tasks or Lectures)')
export class LevelContentController {
  constructor(private readonly levelContentService: LevelContentService) {
  }

  @ApiCreatedResponse({ type: LevelContentEntity })
  @HttpCode(201)
  @Post()
  create(@Body() createLevelContentDto: CreateLevelContentDto) {
    return this.levelContentService.create(createLevelContentDto);
  }

  @ApiOkResponse({ type: LevelContentEntity, isArray: true })
  @Get()
  findAll() {
    return this.levelContentService.findAll();
  }


  @ApiOkResponse({ type: LevelContentEntity })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.levelContentService.findOne(id);
  }

  @ApiOkResponse({ type: LevelContentEntity })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateLevelContentDto: UpdateLevelContentDto) {
    return this.levelContentService.update(id, updateLevelContentDto);
  }

  @ApiOkResponse({ type: LevelContentEntity })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.levelContentService.remove(id);
  }

  @ApiOkResponse({ type: LevelContentEntity, isArray: true })
  @Get("/find-by-chapter-level-id/:chapterLevelId")
  findByChapterLevelId(@Param("chapterLevelId") chapterLevelId: string) {
    return this.levelContentService.findByChapterLevelId(chapterLevelId);
  }
}
