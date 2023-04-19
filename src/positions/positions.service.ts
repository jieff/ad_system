import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private positionRepository: Repository<Position>,
  ) {}
  create(createPositionDto: CreatePositionDto) {
    
    const position = new Position();

    position.name = createPositionDto.name;

    return this.positionRepository.save(position);
  }

  findAll() {
    return this.positionRepository.find();
  }

  findOne(id: number) {
    return this.positionRepository.findOneBy({id:id});
  }

  async update(id: number, updatePositionDto: UpdatePositionDto) {
    const position = await this.positionRepository.findOneBy({id:id});

    if(!position){
      return ({ msg: `Position with ID ${id} not found`});
    }
    
    const updatePosition = this.positionRepository.merge(position, updatePositionDto);

    return this.positionRepository.save(updatePosition);
  }

  remove(id: number) {
    return this.positionRepository.delete(id);
  }
}
