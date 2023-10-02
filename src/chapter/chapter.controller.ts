import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { ChapterService } from "./chapter.service";
import { CreateChapterDto } from "./dto/create-chapter.dto";
import { UpdateChapterDto } from "./dto/update-chapter.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ChapterEntity } from "./entities/chapter.entity";
import { CourseEntity } from "../course/entities/course.entity";

@Controller("chapter")
@ApiTags("Chapter of main application")
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {
  }

  @ApiCreatedResponse({ type: ChapterEntity })
  @HttpCode(201)
  @Post()
  async create(@Body() createChapterDto: CreateChapterDto) {
    const lastOrder = await this.chapterService.getMaxOrderInCourse(createChapterDto.course_id);
    if (!createChapterDto.order) {
      lastOrder ? createChapterDto.order = lastOrder + 1 : createChapterDto.order = 0;
    }
    return this.chapterService.create(createChapterDto);
  }

  @ApiOkResponse({ type: CourseEntity, isArray: true })
  @Get()
  findAll() {
    return this.chapterService.findAll();
  }

  @ApiOkResponse({ type: CourseEntity })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.chapterService.findOne(id);
  }

  @ApiOkResponse({ type: CourseEntity })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateChapterDto: UpdateChapterDto) {
    return this.chapterService.update(id, updateChapterDto);
  }

  @ApiOkResponse({ type: CourseEntity })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.chapterService.remove(id);
  }

  @ApiOkResponse({ type: CourseEntity, isArray: true })
  @Get("/find-by-course-id/:courseId")
  findByCourseId(@Param("courseId") courseId: string) {
    return this.chapterService.findByCourseId(courseId);
  }
}
