import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  ValidateIf,
} from 'class-validator';

export enum GranType {
  password = 'password',
  refresh_token = 'refresh_token',
  authorization_code = 'authorization_code',
}

export class SignInDto {
  @IsEnum(GranType)
  grand_type: GranType;

  @ValidateIf((o) => o.grand_type === GranType.password)
  // @IsNotEmpty()
  @IsEmail()
  username: string;

  @ValidateIf((o) => o.grand_type === GranType.password)
  @IsNotEmpty()
  password: string;

  @ValidateIf((o) => o.grand_type === GranType.authorization_code)
  @IsNotEmpty()
  code: string;

  @ValidateIf((o) => o.grand_type === GranType.refresh_token)
  @IsNotEmpty()
  refresh_token: string;
}
