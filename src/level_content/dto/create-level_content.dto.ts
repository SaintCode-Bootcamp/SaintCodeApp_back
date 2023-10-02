import { ApiProperty } from "@nestjs/swagger";
export class CreateLevelContentDto {

  @ApiProperty({
    description: "Chapter level ID. Object ID.",
    required: true,
    type: String,
    nullable: false,
    example: "64de366a980ffe56f1c0c35e"
  })
  chapter_level_id: string;

  @ApiProperty({
    description: "Порядок в рамках chapter_level",
    required: false,
    type: Number,
    nullable: true,
    example: 1,
    default: 0
  })
  order: number;

  @ApiProperty({
    description: "Описание",
    required: false,
    type: String,
    nullable: true,
    example: "Описание, если нужно"
  })
  desc: string | null;

}
