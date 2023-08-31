import { Body, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {
  }

  create(@Body() createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findToken(token: string) {
    return this.prisma.user.findFirst({ where: { accessToken: token } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ data: updateUserDto, where: { id } });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  profile(id: string) {
    const prisma = new PrismaClient();

    return prisma.user.findMany({
      select: {
        name: true,
        email: true,
        created_at: true,
        stat: {
          select: {
            level_content_id: true,
            devices: true,
            // level_content: {
            //   select: {
            //     lecture_id: true,
            //     order: true
            //   }
            // }
          },
          where: {
            is_complete: true
          },


        }
      },
      where: { id },


    });
  }


}
