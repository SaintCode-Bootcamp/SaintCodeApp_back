import { Test, TestingModule } from '@nestjs/testing';
import { ChapterLevelService } from './chapter_level.service';

describe('ChapterLevelService', () => {
  let service: ChapterLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapterLevelService],
    }).compile();

    service = module.get<ChapterLevelService>(ChapterLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
