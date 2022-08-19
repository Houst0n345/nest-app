import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return `${dto.email} ${dto.passwordHash} OK`;
  }

  @HttpCode(200)
  @Post('login')
  async login() {}
}
