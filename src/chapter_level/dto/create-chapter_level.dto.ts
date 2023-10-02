import { ApiProperty } from "@nestjs/swagger";

export class CreateChapterLevelDto {
  @ApiProperty({
    description: "Chapter ID. ObjectID",
    required: true,
    type: String,
    nullable: false,
    example: "64de34fc980ffe56f1c0c351"
  })
  chapter_id: string;

  @ApiProperty({
    description: "Chapter ID. ObjectID",
    required: false,
    type: Boolean,
    nullable: true,
    example: true,
    default: true
  })
  is_draft: boolean | null;

  @ApiProperty({
    description: "Title chapter level",
    required: true,
    type: String,
    nullable: false,
    example: "Переменные"
  })
  title: string;

  @ApiProperty({
    description: "Order in chapter",
    required: false,
    type: Number,
    nullable: true,
    example: 10,
    default: 0
  })
  order: number;
}
