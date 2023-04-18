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
import { DepartmentsModule } from './departments/departments.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(config),
    CompanyModule,
    AuthModule,
    PlansModule,
    PeopleModule,
    DepartmentsModule,
    PositionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
