import { PartialType } from '@nestjs/swagger';
import { CreateTaskChoiceDto } from './create-task_choice.dto';

export class UpdateTaskChoiceDto extends PartialType(CreateTaskChoiceDto) {}
