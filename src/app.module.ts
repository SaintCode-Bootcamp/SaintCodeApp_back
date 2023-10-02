import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { PrismaModule } from "./prisma/prisma.module";
import { LectureModule } from "./lecture/lecture.module";
import { CourseModule } from "./course/course.module";
import { ChapterModule } from "./chapter/chapter.module";
import { LevelContentModule } from "./level_content/level_content.module";
import { UserLevelStatModule } from "./user_level_stat/user_level_stat.module";
import { ChapterLevelModule } from "./chapter_level/chapter_level.module";
import { TaskChoiceModule } from "./tasks/task_choice/task_choice.module";
import { TaskFillBlanksModule } from './tasks/task_fill_blanks/task_fill_blanks.module';
import { TaskInputModule } from './tasks/task_input/task_input.module';
import { TaskAbstractModule } from './tasks/task_abstract/task_abstract.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    UserLevelStatModule,
    CourseModule,
    ChapterModule,
    ChapterLevelModule,
    LevelContentModule,
    LectureModule,
    TaskChoiceModule,
    TaskFillBlanksModule,
    TaskInputModule,
    TaskAbstractModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
