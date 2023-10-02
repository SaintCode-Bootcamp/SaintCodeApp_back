import { PartialType } from '@nestjs/swagger';
import { CreateChapterLevelDto } from './create-chapter_level.dto';

export class UpdateChapterLevelDto extends PartialType(CreateChapterLevelDto) {}
