import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Plans } from '../plans/entities/plan.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Plans])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
