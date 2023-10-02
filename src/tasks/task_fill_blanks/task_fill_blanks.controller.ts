import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { TaskFillBlanksService } from "./task_fill_blanks.service";
import { CreateTaskFillBlankDto } from "./dto/create-task_fill_blank.dto";
import { UpdateTaskFillBlankDto } from "./dto/update-task_fill_blank.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { TaskFillBlankEntity } from "./entities/task_fill_blank.entity";

@Controller("task-fill-blanks")
@ApiTags("Task fill blank input")
export class TaskFillBlanksController {
  constructor(private readonly taskFillBlanksService: TaskFillBlanksService) {
  }

  @Post()
  @ApiCreatedResponse({ type: TaskFillBlankEntity })
  @HttpCode(201)
  create(@Body() createTaskFillBlankDto: CreateTaskFillBlankDto) {
    return this.taskFillBlanksService.create(createTaskFillBlankDto);
  }

  @Get()
  @ApiOkResponse({ type: TaskFillBlankEntity, isArray: true })
  findAll() {
    return this.taskFillBlanksService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: TaskFillBlankEntity })
  findOne(@Param("id") id: string) {
    return this.taskFillBlanksService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: TaskFillBlankEntity })
  update(@Param("id") id: string, @Body() updateTaskFillBlankDto: UpdateTaskFillBlankDto) {
    return this.taskFillBlanksService.update(id, updateTaskFillBlankDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: TaskFillBlankEntity })
  remove(@Param("id") id: string) {
    return this.taskFillBlanksService.remove(id);
  }
}
