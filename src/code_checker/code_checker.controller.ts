import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import {ApiTags } from "@nestjs/swagger";
import { CodeCheckerService } from "./code_checker.service";

@Controller('code-checker')
@ApiTags("Автопроверка кода")
export class CodeCheckerController {
  constructor(private readonly checkerService: CodeCheckerService) {
  }
  @HttpCode(201)
  @Post()
  run(@Body() CodeObject: any) {
    return this.checkerService.run(CodeObject.CodeString);
  }
}
