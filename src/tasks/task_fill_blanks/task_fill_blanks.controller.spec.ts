import { Test, TestingModule } from '@nestjs/testing';
import { TaskFillBlanksController } from './task_fill_blanks.controller';
import { TaskFillBlanksService } from './task_fill_blanks.service';

describe('TaskFillBlanksController', () => {
  let controller: TaskFillBlanksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskFillBlanksController],
      providers: [TaskFillBlanksService],
    }).compile();

    controller = module.get<TaskFillBlanksController>(TaskFillBlanksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
