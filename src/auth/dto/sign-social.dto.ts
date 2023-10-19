import { ApiProperty } from "@nestjs/swagger";

export class SignSocialDto {

  @ApiProperty({
    description: "GitHub ID",
    required: false,
    type: String,
    nullable: true,
    example: "328409324"
  })
  github_id: string;

  @ApiProperty({
    description: "Google ID ",
    required: false,
    type: String,
    nullable: true,
    example: "328409324"
  })
  google_id: string;

}
