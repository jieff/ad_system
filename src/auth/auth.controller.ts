//auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiResponse, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('Login do Sistema')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({
    schema: {
      properties: {
        username: { type: 'string' },
        password: { type: 'string' }
      },
      required: ['username', 'password']
    }
  })
  @ApiResponse({
    status: 200
  })
  @ApiOperation({ summary: 'Rota para realizar o login' })
  @Post('auth/login')
  async login(@Body() body) {
    return this.authService.validarUsuario(body.username, body.password);
  }
}
