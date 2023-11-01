/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;
}
