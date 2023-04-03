import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../ormconfig';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config), CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
