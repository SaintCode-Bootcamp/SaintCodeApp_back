import { Test, TestingModule } from '@nestjs/testing';
import { TaskAbstractService } from './task_abstract.service';

describe('TaskAbstractService', () => {
  let service: TaskAbstractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskAbstractService],
    }).compile();

    service = module.get<TaskAbstractService>(TaskAbstractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
