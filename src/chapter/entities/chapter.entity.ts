import { ApiProperty } from "@nestjs/swagger";
import { chapter } from "@prisma/client";

export class ChapterEntity implements chapter {
  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string | null;

  @ApiProperty({
    description: "Description of chapter",
    required: false,
    type: String,
    nullable: true,
    example: "How work css in the web....."
  })
  desc: string | null;

  @ApiProperty({
    description: "Name of chapter",
    required: true,
    type: String,
    nullable: false,
    example: "Css in the web"
  })
  title: string;

  @ApiProperty({
    description: "Course ID",
    required: true,
    type: String,
    nullable: true,
    example: "64d63c73980ffe56f1c0c2fd"
  })
  course_id: string;

  @ApiProperty({
    description: "Order of chapters in one course. Autoincrement by course",
    required: false,
    type: Number,
    nullable: true,
    default: 0,
  })
  order: number | null;
}
