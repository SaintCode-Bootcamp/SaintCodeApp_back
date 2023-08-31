import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskInputDto {
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
