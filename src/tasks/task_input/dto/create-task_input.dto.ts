import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskInputDto {
  @ApiProperty({
    description: "Content of task",
    required: true,
    type: String,
    nullable: false,
    example: "Вот такая задача, где проверять строки. Напишите 'Hello' "
  })
  content: string;

  @ApiProperty({
    description: "Answers",
    required: true,
    type: String,
    nullable: false,
    example: "Hello"
  })
  answers: string;

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
