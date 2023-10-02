import { Test, TestingModule } from '@nestjs/testing';
import { TaskInputService } from './task_input.service';

describe('TaskInputService', () => {
  let service: TaskInputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskInputService],
    }).compile();

    service = module.get<TaskInputService>(TaskInputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
