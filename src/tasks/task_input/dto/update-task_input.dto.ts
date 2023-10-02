import { PartialType } from '@nestjs/swagger';
import { CreateTaskInputDto } from './create-task_input.dto';

export class UpdateTaskInputDto extends PartialType(CreateTaskInputDto) {}
