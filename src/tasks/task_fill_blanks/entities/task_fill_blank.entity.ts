import { ApiProperty } from "@nestjs/swagger";
import { task_fill_blanks } from "@prisma/client";

export class TaskFillBlankEntity implements task_fill_blanks {

  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string;

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
    type: String,
    nullable: false,
    example: [">", "div", "</b>"]
  })
  answers: string[];

  @ApiProperty({
    description: "Template for answer",
    required: false,
    type: String,
    nullable: false,
    example: "<b> <div{1} Привет! <{2}> {3}"
  })
  template: string;


  @ApiProperty({
    description: "Right answer",
    required: true,
    type: String,
    nullable: false,
    example: "<div><b>Привет!</b></div> "
  })
  rightAnswer: string;

  @ApiProperty({
    description: "ID task_abstract",
    required: true,
    type: String,
    nullable: false,
    example: "64e264a3980ffe56f1c0c417"
  })
  task_abstract_id: string;
}
