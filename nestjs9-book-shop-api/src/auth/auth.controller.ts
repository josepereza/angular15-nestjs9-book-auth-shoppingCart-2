import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Get,
  Request
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UserDto } from './dto/users.dto';
import { Roles } from 'src/common/decorator/role.decorator';
import { RolesGuard } from 'src/common/guards/role.guard';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signup(@Body() user: UserDto) {
    return await this.authService.signUp(user);
  }

  @Post('/login')
  async login(@Body() userData: LoginDto) {
    return await this.authService.login(userData);
  }

  @Get('/user')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(['user','admin'])
  async getProfile(@Request() req) {
    return await req.user;
  }
}
