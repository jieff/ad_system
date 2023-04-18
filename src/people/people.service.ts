import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}
  create(createPersonDto: CreatePersonDto) {
    
    const salt = bcrypt.genSaltSync(10);
    const person = new Person();

    person.name      = createPersonDto.name;
    person.email     = createPersonDto.email;
    person.phone     = createPersonDto.phone;
    person.branch_line = createPersonDto.branch_line;
    person.password  = bcrypt.hashSync(createPersonDto.password, salt);
    person.whatsapp  = createPersonDto.whatsapp;
    person.instagram = createPersonDto.instagram;
    person.linkedin  = createPersonDto.linkedIn;
    person.facebook  = createPersonDto.facebook;

    return this.personRepository.save(person);

  }

  findAll() {
    return this.personRepository.find()
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
