import { user_level_stat } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UserLevelStatEntity implements user_level_stat {

  @ApiProperty({
    description: "Count of attempts",
    required: false,
    type: Number,
    nullable: true,
    example: 3,
    default: 1
  })
  attemp_count: number | null;

  @ApiProperty({
    description: "What browser client use",
    required: false,
    type: String,
    isArray: true,
    nullable: true,
    example: ["chrome 1.23", "safari 5"],
    default: []
  })
  browsers: string[] | [];

  @ApiProperty({
    description: "What device client use",
    required: false,
    type: String,
    isArray: true,
    nullable: true,
    example: ["PC", "MAC"],
    default: []
  })
  devices: string[] | [];

  @ApiProperty({
    description: "End task or read lecture",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00"
  })
  end_at: Date | null;

  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string;

  @ApiProperty({
    description: "Task is Done",
    required: false,
    type: Boolean,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: false
  })
  is_complete: boolean | null;

  @ApiProperty({
    description: "Level content ID. ObjectID.",
    required: true,
    type: String,
    nullable: false,
    example: "64d6445d980ffe56f1c0c30d"
  })
  level_content_id: string;

  @ApiProperty({
    description: "When user make pause",
    required: false,
    type: Date,
    isArray: true,
    nullable: true,
    example: "64d6445d980ffe56f1c0c30d",
    default: []
  })
  pause_at: Date[] | null;

  @ApiProperty({
    description: "When user start task or lecture",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: []
  })
  start_at: Date | null;

  @ApiProperty({
    description: "Wrong answers of user in JSON",
    required: false,
    type: () => ({
      task_abstract_id: { type: "string", example: "64e264a3980ffe56f1c0c417" },
      answer: { type: "string", example: "{}" }
    }),
    nullable: true,
    example: "{here object of answer}",
    default: []
  })
  task_wrong_answers: Record<string, any>;

  @ApiProperty({
    description: "User ID. ObjectID",
    required: true,
    type: String,
    nullable: false,
    example: "64d63774980ffe56f1c0c2ef"
  })
  user_id: string;

  @ApiProperty({
    description: "Chapter level ID",
    required: true,
    type: String,
    nullable: false,
    example: "64d63774980ffe56f1c0c2ef"
  })
  chapter_level_id: string;

  @ApiProperty({
    description: "Chapter ID",
    required: false,
    type: String,
    nullable: false,
    example: "64d63774980ffe56f1c0c2ef"
  })
  chapter_id: string
}
