import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { UserLevelStatService } from "./user_level_stat.service";
import { CreateUserLevelStatDto } from "./dto/create-user_level_stat.dto";
import { UpdateUserLevelStatDto } from "./dto/update-user_level_stat.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserLevelStatEntity } from "./entities/user_level_stat.entity";

@Controller("user-level-stat")
@ApiTags("User Statistics")
export class UserLevelStatController {
  constructor(private readonly userLevelStatService: UserLevelStatService) {
  }

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ type: UserLevelStatEntity })
  create(@Body() createUserLevelStatDto: CreateUserLevelStatDto) {
    return this.userLevelStatService.create(createUserLevelStatDto);
  }

  @Get()
  @ApiOkResponse({ type: UserLevelStatEntity, isArray: true })
  findAll() {
    return this.userLevelStatService.findAll();
  }

  @Get(":id")
  @ApiOkResponse({ type: UserLevelStatEntity})
  findOne(@Param("id") id: string) {
    return this.userLevelStatService.findOne(id);
  }

  @Patch(":id")
  @ApiOkResponse({ type: UserLevelStatEntity})
  update(@Param("id") id: string, @Body() updateUserLevelStatDto: UpdateUserLevelStatDto) {
    return this.userLevelStatService.update(id, updateUserLevelStatDto);
  }

  @Delete(":id")
  @ApiOkResponse({ type: UserLevelStatEntity})
  remove(@Param("id") id: string) {
    return this.userLevelStatService.remove(id);
  }
}
