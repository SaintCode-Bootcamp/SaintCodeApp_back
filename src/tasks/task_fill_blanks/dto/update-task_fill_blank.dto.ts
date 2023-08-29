import { PartialType } from '@nestjs/swagger';
import { CreateTaskFillBlankDto } from './create-task_fill_blank.dto';

export class UpdateTaskFillBlankDto extends PartialType(CreateTaskFillBlankDto) {}
