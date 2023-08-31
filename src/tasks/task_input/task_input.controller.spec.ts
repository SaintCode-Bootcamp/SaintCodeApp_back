import { Test, TestingModule } from '@nestjs/testing';
import { TaskInputController } from './task_input.controller';
import { TaskInputService } from './task_input.service';

describe('TaskInputController', () => {
  let controller: TaskInputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskInputController],
      providers: [TaskInputService],
    }).compile();

    controller = module.get<TaskInputController>(TaskInputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
