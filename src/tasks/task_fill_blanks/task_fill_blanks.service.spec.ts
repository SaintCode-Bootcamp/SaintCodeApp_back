import { Test, TestingModule } from '@nestjs/testing';
import { TaskFillBlanksService } from './task_fill_blanks.service';

describe('TaskFillBlanksService', () => {
  let service: TaskFillBlanksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskFillBlanksService],
    }).compile();

    service = module.get<TaskFillBlanksService>(TaskFillBlanksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
