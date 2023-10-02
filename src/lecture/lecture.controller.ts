import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { LectureEntity } from "./entities/lecture.entity";

@Controller('lecture')
@ApiTags('Lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @ApiCreatedResponse({type:LectureEntity})
  @Post()
  @HttpCode(201)
  create(@Body() createLectureDto: CreateLectureDto) {
    return this.lectureService.create(createLectureDto);
  }

  @ApiOkResponse({type:LectureEntity, isArray:true})
  @Get()
  findAll() {
    return this.lectureService.findAll();
  }

  @ApiOkResponse({type:LectureEntity})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lectureService.findOne(id);
  }

  @ApiOkResponse({type:LectureEntity})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLectureDto: UpdateLectureDto) {
    return this.lectureService.update(id, updateLectureDto);
  }

  @ApiOkResponse({type:LectureEntity})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectureService.remove(id);
  }
}
