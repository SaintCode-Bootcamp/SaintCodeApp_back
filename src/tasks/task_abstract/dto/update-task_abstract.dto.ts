import { PartialType } from '@nestjs/swagger';
import { CreateTaskAbstractDto } from './create-task_abstract.dto';

export class UpdateTaskAbstractDto extends PartialType(CreateTaskAbstractDto) {}
