import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { Company } from 'src/company/entities/company.entity'

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyService } from 'src/company/company.service';
import { LocalStrategy } from './local.auth';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    PassportModule,
    JwtModule,
  ],
  providers: [AuthService, CompanyService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
