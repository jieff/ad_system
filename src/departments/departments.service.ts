import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';


@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    
    const department = new Department();

    department.name = createDepartmentDto.name;
   
    return this.departmentRepository.save(department);
  }

  findAll() {
    return this.departmentRepository.find();
  }

  findOne(id: number) {
    return this.departmentRepository.findOneBy({id:id});
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.departmentRepository.findOneBy({id:id});

    if(!department){
      return ({ msg: `Department with ID ${id} not found`});
    }

    const updateDepartment = this.departmentRepository.merge(department, updateDepartmentDto);

    return this.departmentRepository.save(updateDepartment);

  }

  remove(id: number) {
    return this.departmentRepository.delete(id)
  }
}
