import { IsNotEmpty, IsString, IsEmail, IsNumber } from "class-validator";
//import { CreateDepartmentDto } from '../../departments/dto/create-department.dto'

export class CreatePersonDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsNumber()
    @IsNotEmpty()
    branch_line: number;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    instagram: string;

    @IsString()
    @IsNotEmpty()
    linkedIn: string;

    @IsString()
    @IsNotEmpty()
    facebook: string;

    @IsString()
    @IsNotEmpty()
    whatsapp: string;

    @IsNumber()
    @IsNotEmpty()
    departmentId: number;

    @IsNumber()
    @IsNotEmpty()
    positionId: number;


}
