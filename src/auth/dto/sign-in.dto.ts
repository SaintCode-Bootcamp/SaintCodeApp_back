import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {

  @ApiProperty({
    description: "Username",
    required: true,
    type: String,
    nullable: false,
    example: "test123"
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

}
