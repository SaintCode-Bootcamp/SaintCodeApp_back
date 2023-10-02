import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { TaskInputService } from './task_input.service';
import { CreateTaskInputDto } from './dto/create-task_input.dto';
import { UpdateTaskInputDto } from './dto/update-task_input.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { TaskInputEntity } from "./entities/task_input.entity";

@Controller('task-input')
@ApiTags("Task string input")
export class TaskInputController {
  constructor(private readonly taskInputService: TaskInputService) {}

  @Post()
  @ApiCreatedResponse({type: TaskInputEntity})
  @HttpCode(201)
  create(@Body() createTaskInputDto: CreateTaskInputDto) {
    return this.taskInputService.create(createTaskInputDto);
  }

  @Get()
  @ApiOkResponse({type: TaskInputEntity, isArray: true})
  findAll() {
    return this.taskInputService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: TaskInputEntity})
  findOne(@Param('id') id: string) {
    return this.taskInputService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: TaskInputEntity})
  update(@Param('id') id: string, @Body() updateTaskInputDto: UpdateTaskInputDto) {
    return this.taskInputService.update(id, updateTaskInputDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: TaskInputEntity})
  remove(@Param('id') id: string) {
    return this.taskInputService.remove(id);
  }
}
