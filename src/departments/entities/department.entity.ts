import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Person } from '../../people/entities/person.entity'

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @OneToMany(() => Person, person => person.department)
    persons: Person[];

}
