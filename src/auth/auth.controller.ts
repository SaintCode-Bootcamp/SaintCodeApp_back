import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import {SignInDto} from './dto/sign-in.dto'
import {SignSocialDto} from './dto/sign-social.dto'
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserEntity } from "../user/entities/user.entity";

@ApiTags("Авторизация (JWT)")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserEntity })
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserEntity })
  @Post('login-social')
  signInSocial(@Body() signInDto: SignSocialDto) {
    return this.authService.signInSocial(signInDto.github_id, signInDto.google_id);
  }
}