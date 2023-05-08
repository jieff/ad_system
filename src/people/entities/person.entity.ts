import { Department } from 'src/departments/entities/department.entity';
import { Position } from '../../positions/entities/position.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

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

    @ManyToOne(() => Position)
    @JoinColumn({ name: 'positionId' })
    position: Position;

    @ManyToOne(() => Department)
    @JoinColumn({ name: 'departmentId' })
    department: Department;

    //@ManyToOne(() => Department, department => department.persons)
    //department: Department;
//
    //@ManyToOne(() => Position, position => position.persons)
    //position: Position;


}
