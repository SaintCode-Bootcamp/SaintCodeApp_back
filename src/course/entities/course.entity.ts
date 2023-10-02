import { ApiProperty } from "@nestjs/swagger";
import {course} from "@prisma/client"

export class CourseEntity implements course{

  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string | null;

  @ApiProperty({
      description: "Description of course",
      required: false,
      type: String,
      nullable: true,
      example: "This is  best TODO of all TODO !!"
    }
  )
  desc: string | null;

  @ApiProperty({
    description: "Name of course",
    required: true,
    type: String,
    nullable: false,
    example: "It's TODO app"
  })
  title: string;
}
