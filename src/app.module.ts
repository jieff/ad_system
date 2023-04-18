import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../ormconfig';
import { CompanyModule } from './company/company.module';
import { AuthModule } from './auth/auth.module';
import { PlansModule } from './plans/plans.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config),
    CompanyModule,
    AuthModule,
    PlansModule,
    PeopleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
