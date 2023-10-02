import { Test, TestingModule } from '@nestjs/testing';
import { ChapterLevelController } from './chapter_level.controller';
import { ChapterLevelService } from './chapter_level.service';

describe('ChapterLevelController', () => {
  let controller: ChapterLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChapterLevelController],
      providers: [ChapterLevelService],
    }).compile();

    controller = module.get<ChapterLevelController>(ChapterLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
