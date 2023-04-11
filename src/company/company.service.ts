import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}
  create(createCompanyDto: CreateCompanyDto) {

    const salt = bcrypt.genSaltSync(10);

    const company = new Company();
    
    company.name = createCompanyDto.name;
    company.email =  createCompanyDto.email;
    company.role = createCompanyDto.role;
    company.password = bcrypt.hashSync(createCompanyDto.password, salt);
    return this.companyRepository.save(company);
  }

  findAll() {
    return this.companyRepository.find();
  }

  findOneByEmail(username: string) {
    return this.companyRepository.findOneBy({ email: username });
  }

  findOne(id: number) {
    return this.companyRepository.findOneBy({id:id})
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companyRepository.findOneBy({id:id});
    if (!company) {
      throw new Error(`Company with ID ${id} not found`);
    }
  
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(updateCompanyDto.password, salt);
  
    const updatedCompany = this.companyRepository.merge(company, {
      ...updateCompanyDto,
      password: hashedPassword, // substitui a senha não criptografada pelo hash
    });
  
    return this.companyRepository.save(updatedCompany);
  }

  remove(id: number) {
    return this.companyRepository.delete(id);
  }
}
