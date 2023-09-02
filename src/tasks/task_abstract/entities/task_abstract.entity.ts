import { Display, task_abstract, TypeTask } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class TaskAbstractEntity implements task_abstract {
  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string;

  @ApiProperty({
    description: "Name of task for search",
    required: true,
    type: String,
    nullable: false,
    example: "Создание объекта"
  })
  name: string;

  @ApiProperty({
    description: "Название задачи для пользователя",
    required: false,
    type: String,
    nullable: true,
    example: "Типы данных №1"
  })
  title: string;

  @ApiProperty({
    description: "Тип задачи. Один из типов TASK_MATCHING, FILL_BLANKS, SORTING, CHOICE, INPUT ",
    required: true,
    type: String,
    nullable: false,
    example: "TASK_MATCHING"
  })
  type: TypeTask;

  @ApiProperty({
    description: "Вариант отображения задачи",
    required: false,
    type: String,
    nullable: true,
    example: "LIST",
    default: "LIST"
  })
  display: Display;

  @ApiProperty({
    description: "Вариант отображения задачи",
    required: false,
    type: Boolean,
    nullable: true,
    default: true
  })
  is_archive: boolean;

  @ApiProperty({
    description: "Сложность задачи",
    required: false,
    type: Number,
    nullable: true,
    default: 0
  })
  difficulty: number;

  @ApiProperty({
    description: "Сколько всего решений отправлено",
    required: false,
    type: Number,
    nullable: true,
    default: 0
  })
  total_solved: number;

  @ApiProperty({
    description: "Сколько успешных решений отправлено",
    required: false,
    type: Number,
    nullable: true,
    default: 0
  })
  successful_solved: number;

  @ApiProperty({
    description: "Сколько успешных в %",
    required: false,
    type: Number,
    nullable: true,
    default: 0.00
  })
  successful_percent: number;

  @ApiProperty({
    description: "Дата создания задания",
    required: true,
    type: Date,
    nullable: true,
    default: "now()"
  })
  created_at: Date;

  @ApiProperty({
    description: "Теги для поиска",
    required: false,
    type: String,
    nullable: true,
    default: []
  })
  tags: string[];

  @ApiProperty({
    description: "ID автора",
    required: true,
    type: String,
    nullable: false
  })
  created_by: string;

  @ApiProperty({
    description: "ID level_content",
    required: true,
    type: String,
    nullable: false
  })
  level_content_id: string;
}
