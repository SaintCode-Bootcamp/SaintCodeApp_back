import { Test, TestingModule } from '@nestjs/testing';
import { CodeCheckerService } from './code_checker.service';

describe('CodeCheckerService', () => {
  let service: CodeCheckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeCheckerService],
    }).compile();

    service = module.get<CodeCheckerService>(CodeCheckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
