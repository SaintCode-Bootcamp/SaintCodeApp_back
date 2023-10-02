import { user } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UserEntity implements user {

  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string;

  @ApiProperty({
    description: "Access token of user",
    required: true,
    type: String,
    nullable: false,
    example: "64de366a980ffe56f1c0c35e"
  })
  accessToken: string;

  @ApiProperty({
    description: "Created at date",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: "now()"
  })
  created_at: Date;

  @ApiProperty({
    description: "E-mail user",
    required: false,
    type: String,
    nullable: true,
    example: "some@some.ru"
  })
  email: string;

  @ApiProperty({
    description: "Datetime expires access token ",
    required: false,
    type: String,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00"
  })
  expires: Date;

  @ApiProperty({
    description: "GitHub ID ",
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

  @ApiProperty({
    description: "Github image ",
    required: false,
    type: String,
    nullable: true,
    example: "http://github.com/path-to-img"
  })
  image_github: string;

  @ApiProperty({
    description: "Last login time",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: "now()"
  })
  last_log_in: Date;

  @ApiProperty({
    description: "Username or really name",
    required: true,
    type: String,
    nullable: false,
    example: "Andrei"
  })
  name: string;
}
