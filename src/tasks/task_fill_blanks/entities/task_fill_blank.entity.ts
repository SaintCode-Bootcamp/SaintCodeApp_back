import { ApiProperty } from "@nestjs/swagger";
import { task_fill_blanks } from "@prisma/client";

export class TaskFillBlankEntity implements task_fill_blanks {

  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string;

  @ApiProperty({
    description: "Title task",
    required: true,
    type: String,
    nullable: false,
    example: "Вставьте пропуску в строку"
  })
  title: string;

  @ApiProperty({
    description: "Content of task",
    required: true,
    type: String,
    nullable: false,
    example: "<b> <div{1} Привет! <{2}> {3} "
  })
  content: string;

  @ApiProperty({
    description: "Answers",
    required: true,
    type: [],
    nullable: false,
    example: [">", "div", "</b>"]
  })
  answers: string[];
}
