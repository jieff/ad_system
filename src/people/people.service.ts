import { Injectable } from '@nestjs/common';

import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { CreatePositionDto } from 'src/positions/dto/create-position.dto';

import { Department } from 'src/departments/entities/department.entity';
import { Person } from './entities/person.entity';
import { Position } from '../positions/entities/position.entity'

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { CreateDepartmentDto } from 'src/departments/dto/create-department.dto';





@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
    @InjectRepository(Department) // Injetando o DepartmentRepository
    private departmentRepository: Repository<Department>,
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>
  ) {}


  async findOneWithDepartmentAndPosition(id: number) {
    return this.personRepository.findOne({
      where: { id },
      relations: ['department', 'position'],
    });
  }
  
  async create(createPersonDto: CreatePersonDto) {
    const salt = bcrypt.genSaltSync(10);
    const person = new Person();

    person.name = createPersonDto.name;
    person.email = createPersonDto.email;
    person.phone = createPersonDto.phone;
    person.branch_line = createPersonDto.branch_line;
    person.password = bcrypt.hashSync(createPersonDto.password, salt);
    person.whatsapp = createPersonDto.whatsapp;
    person.instagram = createPersonDto.instagram;
    person.linkedin = createPersonDto.linkedIn;
    person.facebook = createPersonDto.facebook;


    const department = await this.departmentRepository.findOne({ where: { id: createPersonDto.departmentId } });
    
    const position = await this.positionRepository.findOne({ where: { id: createPersonDto.positionId } });

    person.department = department;
    person.position = position;

    return this.personRepository.save(person);
  }

  findAll() {
    return this.personRepository.find()
  }
  
  findAllWithDepartmentAndPosition() {
    return this.personRepository.find({
      relations: ['department', 'position'],
    })
  }

  findOne(id: number) {
    return this.personRepository.findOneBy({id: id})
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.personRepository.findOneBy({id:id});
    if(!person){
      return ({ msg: `User with ID ${id} not found`});
    }

    const updatePerson = this.personRepository.merge(person, updatePersonDto);

    return this.personRepository.save(updatePerson);

  }

  remove(id: number) {
    return this.personRepository.delete(id);
  }
}
