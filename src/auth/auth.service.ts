import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {
  }

  async signIn(username, pass) {
    const user = await this.usersService.findByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  async signInSocial(githubID: string = null, googleID: string = null): Promise<any> {
    const user = await this.usersService.findUserBySocialID(githubID, googleID);
    if (user?.github_id !== githubID || user?.google_id !== googleID) {
      throw new UnauthorizedException();
    }
    const { github_id,google_id, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}