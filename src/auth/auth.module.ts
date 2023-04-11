import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/entities/company.entity';
import { CompanyService } from 'src/company/company.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.auth';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'topSecret512', // Defina a chave secreta para assinatura do token
      signOptions: { expiresIn: '7d' }, // Defina o tempo de expiração do token
    }),
    TypeOrmModule.forFeature([Company]),
  ],
  providers: [AuthService, CompanyService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
