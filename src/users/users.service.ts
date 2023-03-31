import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';




@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.razaoSocial = createUserDto.razaoSocial;
    user.nomeFantasia = createUserDto.nomeFantasia;
    user.cnpj = createUserDto.cnpj;
    user.cep = createUserDto.cep;
    user.rua = createUserDto.rua;
    user.numero = createUserDto.numero;
    user.bairro = createUserDto.bairro;
    user.complemento = createUserDto.complemento;
    user.cidade = createUserDto.cidade;
    user.estado = createUserDto.estado;
    user.telefone = createUserDto.telefone;
    user.site = createUserDto.site;
    user.email = createUserDto.email;
  
    return this.userRepository.save(user);
  }
  

  findAll() {
    return this.userRepository.find();
  }
  
  findOne(id: number) {
  
    return this.userRepository.findOneBy({id:id});
  }



  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({id:id});
    if (!user) {
      throw new Error(`Usuário com o ID ${id} não encontrado`);
    }
  
    const updatedUser = this.userRepository.merge(user, updateUserDto);
  
    return this.userRepository.save(updatedUser);
  }
  
  

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
