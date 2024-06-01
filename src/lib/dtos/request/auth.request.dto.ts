import { ApiProperty } from '@nestjs/swagger';

export class OwnerSignUpRequestDTO {
  @ApiProperty({
    example: 'Akmal Ali',
  })
  name: string;
  @ApiProperty({
    example: 'akmalali@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'password',
  })
  password: string;
  @ApiProperty({
    example: '01712345678',
  })
  mobileNumber: string;
}

export class OwnerSignInRequestDTO {
  @ApiProperty({
    example: 'akmalali@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'password',
  })
  password: string;
}

export class AcessTokenDTO {
  @ApiProperty({
    example: 'my_access_token',
  })
  access_token: string;
}
