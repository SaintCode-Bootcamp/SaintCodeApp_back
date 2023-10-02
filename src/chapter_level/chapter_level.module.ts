import { Module } from '@nestjs/common';
import { ChapterLevelService } from './chapter_level.service';
import { ChapterLevelController } from './chapter_level.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [ChapterLevelController],
  imports: [PrismaModule],
  providers: [ChapterLevelService],
})
export class ChapterLevelModule {}
