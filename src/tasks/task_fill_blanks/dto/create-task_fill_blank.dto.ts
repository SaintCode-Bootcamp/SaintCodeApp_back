import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskFillBlankDto {

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
    example: " <div{1} <b> Привет! <{2}> {3}"
  })
  template: string

  @ApiProperty({
    description: "Right answer",
    required: true,
    type: String,
    nullable: false,
    example: "<div><b>Привет!</b></div> "
  })
  rightAnswer: string
}
