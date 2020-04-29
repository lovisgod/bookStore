import { Controller,Dependencies, UseGuards, Request, Bind,Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.gaurd';

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
  constructor(authService) {
      this.authService = authService;
  }

  @Post('/login')
  @Bind(Request())
  async login(req) {
      console.log(req.body);
      return this.authService.login({name: req.body.name, password:req.body.password});
  }
}
