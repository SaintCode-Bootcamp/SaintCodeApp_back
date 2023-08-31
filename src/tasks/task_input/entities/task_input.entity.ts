import { ApiProperty } from "@nestjs/swagger";
import { task_input } from "@prisma/client";

export class TaskInputEntity implements task_input {
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
    example: "Написание строки"
  })
  title: string;

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
}
