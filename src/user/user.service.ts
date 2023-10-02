import { Body, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";


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

  /**
   * Find count of done chapter_level items by user
   * @param id userId
   * ex. [ { _count: { id: 2 }, chapter_level_id: '64e7d6270d4f09cada4267a9' } ]
   */
  getDoneChapterLevels(id: string) {
    return this.prisma.user_level_stat.groupBy({
      by: ["chapter_level_id"],
      where: {
        user_id: id,
        is_complete: true
      },
      _count: {
        id: true
      }
    });
  }

  /**
   * Find count of done chapter items by user
   * @param id
   */
  getDoneChapters(id: string) {
    return this.prisma.user_level_stat.groupBy({
      by: ["chapter_id"],
      where: {
        user_id: id,
        is_complete: true
      },
      _count: {
        id: true // Count the chapters
      }
    });
  }

  /**
   *
   * @param id
   * ex.
   * {
   *   "profile": {
   *     "id": "64d63774980ffe56f1c0c2ef",
   *     "accessToken": "ghu_z3b5dClfPYGPAVWLlBJnkpNhyDCS2L0DWCq2",
   *     "created_at": "2023-08-10T21:00:01.000Z",
   *     "email": "user@user.com",
   *     "expires": "2023-09-11T00:12:56.194Z",
   *     "github_id": "64d7f944980ffe56f1c0c32d",
   *     "google_id": "null",
   *     "image_github": "https://avatars.githubusercontent.com/u/102468675?v=4",
   *     "last_log_in": "2023-01-01T00:00:00.000Z",
   *     "name": "Danil"
   *   },
   *   "chaptersStat": [
   *     {
   *       "title": "Раздел 1",
   *       "userProgress": 2,
   *       "countInChapter": 4
   *     },
   *     {
   *       "title": "Раздел 2",
   *       "userProgress": 0,
   *       "countInChapter": 0
   *     }
   *   ]
   * }
   */
  async profile(id: string) {
    const chapters = await this.prisma.chapter.findMany({
      select: {
        title: true,
        chapter_level: {
          select: {
            title: true,
            level_content: {
              select: {
                user_stats: {
                  where: {
                    is_complete: true,
                    user_id: id
                  }
                }
              }
            }
          }
        }
      }
    });
    chapters.map((chapter) => {
      let countUserProgress = 0;
      let countInChapter = 0;
      chapter.chapter_level.map((chapter_level) => {
        if (chapter_level.level_content.length) {
          chapter_level.level_content.map((level) => {
            if (level.user_stats.length) {
              countUserProgress++;
            }
          });
          countInChapter = chapter_level.level_content.length;
        }
      });
      chapter["userProgress"] = countUserProgress;
      chapter["countInChapter"] = countInChapter;
      delete chapter.chapter_level;
    });
    return {
      "profile": await this.findOne(id),
      "chaptersStat": chapters
    };
  }


}
