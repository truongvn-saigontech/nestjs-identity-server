import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const example = {
  email: 'vonhattruong250695@gmail.com',
  password: '123qwe123qwe@',
  name: 'Vo Nhat Truong',
};

export class RegisterDTO {
  @ApiProperty({
    example: example.email,
  })
  @IsEmail()
  @IsString()
  readonly userEmail: string;

  @IsString()
  @IsOptional()
  readonly firstName: string;

  @IsString()
  @IsOptional()
  readonly lastName: string;

  @ApiProperty({
    example: example.password,
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
