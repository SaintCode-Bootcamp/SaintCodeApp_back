import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserEntity } from "./entities/user.entity";
import { UserLevelStatService } from "../user_level_stat/user_level_stat.service";

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get('/key/:token')
  @ApiOkResponse({ type: UserEntity})
  findToken(@Param('token') token: string) {
    return this.userService.findToken(token);
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity})
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
  @Get('/profile/:id')
  @ApiOkResponse({ type: UserEntity})
  profile(@Param('id') id: string) {
   return this.userService.profile(id)
  }
}
