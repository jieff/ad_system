import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Plans } from '../../plans/entities/plan.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  razaoSocial: string;

  @Column()
  nomeFantasia: string;

  @Column()
  cnpj: string;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column({ nullable: true })
  complemento?: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  telefone: string;

  @Column({ nullable: true })
  site?: string;

  @Column()
  email: string;

  @ManyToOne(() => Plans, plan => plan.users)
  plans: Plans;

}

