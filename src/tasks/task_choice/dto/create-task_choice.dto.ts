import { ApiProperty } from "@nestjs/swagger";
import { TaskAnswers } from "@prisma/client";

export class CreateTaskChoiceDto {

  @ApiProperty({
    description: "Содержание задания",
    required: true,
    type: String,
    nullable: false,
    example: "Выберите типы данных которых нет в JavaScript"
  })
  content: string;

  @ApiProperty({
    description: "Questions and answers",
    required: true,
    type: JSON,
    nullable: false,
    example: "{\n" +
      "    \"q1\": {\n" +
      "      \"title\": \"Char\",\n" +
      "      \"is_correct\": true\n" +
      "    },\n" +
      "    \"q2\": {\n" +
      "      \"title\": \"Undefined\",\n" +
      "      \"is_correct\": false\n" +
      "    },\n" +
      "    \"q3\": {\n" +
      "      \"title\": \"Null\",\n" +
      "      \"is_correct\": false\n" +
      "    },\n" +
      "    \"q4\": {\n" +
      "      \"title\": \"Float\",\n" +
      "      \"is_correct\": false\n" +
      "    },\n" +
      "    \"q5\": {\n" +
      "      \"title\": \"String\",\n" +
      "      \"is_correct\": false\n" +
      "    }\n" +
      "  }"
  })
  answers: TaskAnswers;

  @ApiProperty({
    description: "ID task_abstract",
    required: true,
    type: String,
    nullable: false,
    example: "64e264a3980ffe56f1c0c417"
  })
  task_abstract_id: string;
}
