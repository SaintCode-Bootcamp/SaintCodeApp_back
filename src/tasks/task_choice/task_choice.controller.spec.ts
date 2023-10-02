import { Test, TestingModule } from '@nestjs/testing';
import { TaskChoiceController } from './task_choice.controller';
import { TaskChoiceService } from './task_choice.service';

describe('TaskChoiceController', () => {
  let controller: TaskChoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskChoiceController],
      providers: [TaskChoiceService],
    }).compile();

    controller = module.get<TaskChoiceController>(TaskChoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
