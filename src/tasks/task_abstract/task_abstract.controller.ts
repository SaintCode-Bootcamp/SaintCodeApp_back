import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { TaskAbstractService } from "./task_abstract.service";
import { CreateTaskAbstractDto } from "./dto/create-task_abstract.dto";
import { UpdateTaskAbstractDto } from "./dto/update-task_abstract.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { TaskAbstractEntity } from "./entities/task_abstract.entity";

@Controller("task-abstract")
@ApiTags("Task abstract")
export class TaskAbstractController {
  constructor(private readonly taskAbstractService: TaskAbstractService) {
  }

  @Post()
  @ApiCreatedResponse({ type: TaskAbstractEntity })
  @HttpCode(201)
  create(@Body() createTaskAbstractDto: CreateTaskAbstractDto) {
    return this.taskAbstractService.create(createTaskAbstractDto);
  }

  @Get()
  @ApiOkResponse({ type: TaskAbstractEntity, isArray:true })
  findAll() {
    return this.taskAbstractService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: TaskAbstractEntity})
  findOne(@Param("id") id: string) {
    return this.taskAbstractService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: TaskAbstractEntity})
  update(@Param("id") id: string, @Body() updateTaskAbstractDto: UpdateTaskAbstractDto) {
    return this.taskAbstractService.update(id, updateTaskAbstractDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: TaskAbstractEntity})
  remove(@Param("id") id: string) {
    return this.taskAbstractService.remove(id);
  }
}
