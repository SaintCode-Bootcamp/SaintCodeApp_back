import { Module } from '@nestjs/common';
import { CodeCheckerController } from './code_checker.controller';
import { CodeCheckerService } from './code_checker.service';

@Module({
  controllers: [CodeCheckerController],
  providers: [CodeCheckerService]
})
export class CodeCheckerModule {}
