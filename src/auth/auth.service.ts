//auth.service.ts
import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Company } from 'src/company/entities/company.entity';
import { CompanyService } from 'src/company/company.service';
const bcrypt = require('bcrypt');


@Injectable()
export class AuthService {
  constructor(
    private readonly companyService: CompanyService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(username: string, password: string): Promise<any> {
    const company = await this.companyService.findOneByEmail(username);
    if (!company) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }

    const passwordMatch = await bcrypt.compare(password, company.password);
  
    if (passwordMatch) {
      return await this.gerarToken(company);
    }

    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async gerarToken(payload: Company) {
    return {
      access_token: this.jwtService.sign(
        { email: payload.email },
        {
          secret: 'topSecret512',
          expiresIn: '7d',
        },
      ),
    };
  }
}
