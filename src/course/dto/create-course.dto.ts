import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {

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
