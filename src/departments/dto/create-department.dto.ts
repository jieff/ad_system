import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { CreatePersonDto } from '../../people/dto/create-person.dto'

export class CreateDepartmentDto {


    @IsNumber()
    @IsNotEmpty()
    personId: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    people: CreatePersonDto[];

}
