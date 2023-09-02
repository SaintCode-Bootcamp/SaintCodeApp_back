import { Test, TestingModule } from '@nestjs/testing';
import { TaskAbstractController } from './task_abstract.controller';
import { TaskAbstractService } from './task_abstract.service';

describe('TaskAbstractController', () => {
  let controller: TaskAbstractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskAbstractController],
      providers: [TaskAbstractService],
    }).compile();

    controller = module.get<TaskAbstractController>(TaskAbstractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
