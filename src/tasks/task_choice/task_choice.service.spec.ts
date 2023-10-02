import { Test, TestingModule } from '@nestjs/testing';
import { TaskChoiceService } from './task_choice.service';

describe('TaskChoiceService', () => {
  let service: TaskChoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskChoiceService],
    }).compile();

    service = module.get<TaskChoiceService>(TaskChoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
