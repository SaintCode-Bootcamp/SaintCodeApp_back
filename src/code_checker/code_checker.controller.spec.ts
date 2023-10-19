import { Test, TestingModule } from '@nestjs/testing';
import { CodeCheckerController } from './code_checker.controller';

describe('CodeCheckerController', () => {
  let controller: CodeCheckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeCheckerController],
    }).compile();

    controller = module.get<CodeCheckerController>(CodeCheckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
