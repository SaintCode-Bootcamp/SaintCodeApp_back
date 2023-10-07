import { Role, user } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UserEntity implements user {

  @ApiProperty({
    description: "ID in mongo DB",
    required: false
  })
  id: string;


  @ApiProperty({
    description: "Дата регистрации пользователя",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: "now()"
  })
  created_at: Date;

  @ApiProperty({
    description: "Почта пользователя",
    required: true,
    type: String,
    nullable: true,
    example: "some@some.ru"
  })
  email: string;

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

  @ApiProperty({
    description: "Github image ",
    required: false,
    type: String,
    nullable: true,
    example: "http://github.com/path-to-img"
  })
  image_github: string;

  @ApiProperty({
    description: "Дата последней авторизации",
    required: false,
    type: Date,
    nullable: true,
    example: "2023-01-01T00:00:00.000+00:00",
    default: "now()"
  })
  last_log_in: Date;

  @ApiProperty({
    description: "Имя пользователя (для отображения)",
    required: false,
    type: String,
    nullable: false,
    example: "Andrei"
  })
  display_name: string;

  @ApiProperty({
    description: "Username",
    required: true,
    type: String,
    nullable: false,
    example: "Andrei"
  })
  username: string;

  @ApiProperty({
    description: "Пароль",
    required: true,
    type: String,
    nullable: false,
    example: "12345678"
  })
  password: string;

  @ApiProperty({
    description: "Роль пользователя",
    required: false,
    type: String,
    nullable: false,
    default: "USER",
    example: "USER|ADMIN|MANAGER"
  })

  role: Role;

}
