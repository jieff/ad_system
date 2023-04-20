import { Department } from 'src/departments/entities/department.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: String;

    @Column()
    branch_line: number;

    @Column()
    password: string;

    @Column()
    whatsapp: string;

    @Column()
    instagram: string;

    @Column()
    linkedin: string;

    @Column()
    facebook: string;

    @ManyToOne(() => Department, department => department.persons)
    department: Department;


}
