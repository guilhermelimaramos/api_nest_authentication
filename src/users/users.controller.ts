import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupDto } from 'src/dto/signup.dto';
import { User } from './models/users.model';
import { SigninDto } from 'src/dto/signin.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @HttpCode(201)
  public async signup(@Body() signupDto: SignupDto): Promise<User> {
    return this.usersService.signup(signupDto);
  }

  @Post('signin')
  @HttpCode(200)
  public async signin(
    @Body() signinDto: SigninDto,
  ): Promise<{ name: string; jwtToken: string; email: string }> {
    return this.usersService.signin(signinDto);
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(200)
  public async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
