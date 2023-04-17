import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plans } from './entities/plan.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plans)
    private plansRepository: Repository<Plans>,
  ) {}
  create(createPlanDto: CreatePlanDto) {
    const plan = new Plans();

    plan.name = createPlanDto.name;
    plan.value = createPlanDto.value;
    plan.description = createPlanDto.description;

    return this.plansRepository.save(plan);

  }

  findAll() {

    return this.plansRepository.find();
  }

  findOne(id: number) {
    return this.plansRepository.findOneBy({id:id});
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    const plan = await this.plansRepository.findOneBy({id:id});
    if(!plan){
      throw new Error('Plan with ID ${id} not found');
    }

    const updatePlan = this.plansRepository.merge(plan, updatePlanDto);

    return this.plansRepository.save(updatePlan);
    
  }

  remove(id: number) {
    return this.plansRepository.delete(id);
  }
}
