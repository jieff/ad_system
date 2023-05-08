import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { Department } from 'src/departments/entities/department.entity';
import { Position } from 'src/positions/entities/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person, Department, Position])],
  controllers: [PeopleController],
  providers: [PeopleService],
  exports: [PeopleService],
})
export class PeopleModule {}
