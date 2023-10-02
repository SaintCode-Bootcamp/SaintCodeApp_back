import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { TaskChoiceService } from "./task_choice.service";
import { CreateTaskChoiceDto } from "./dto/create-task_choice.dto";
import { UpdateTaskChoiceDto } from "./dto/update-task_choice.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { TaskChoiceEntity } from "./entities/task_choice.entity";

@Controller("task-choice")
@ApiTags('Task with choice one or few')
export class TaskChoiceController {
  constructor(private readonly taskChoiceService: TaskChoiceService) {
  }

  @Post()
  @ApiCreatedResponse({ type: TaskChoiceEntity })
  @HttpCode(201)
  create(@Body() createTaskChoiceDto: CreateTaskChoiceDto) {
    return this.taskChoiceService.create(createTaskChoiceDto);
  }

  @Get()
  @ApiOkResponse({ type: TaskChoiceEntity, isArray: true })
  findAll() {
    return this.taskChoiceService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: TaskChoiceEntity })
  findOne(@Param("id") id: string) {
    return this.taskChoiceService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: TaskChoiceEntity })
  update(@Param("id") id: string, @Body() updateTaskChoiceDto: UpdateTaskChoiceDto) {
    return this.taskChoiceService.update(id, updateTaskChoiceDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: TaskChoiceEntity })
  remove(@Param("id") id: string) {
    return this.taskChoiceService.remove(id);
  }
}
