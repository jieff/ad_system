import { IsNotEmpty, IsString } from "class-validator";
import { CreatePersonDto } from '../../people/dto/create-person.dto'

export class CreateDepartmentDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    people: CreatePersonDto[];

}
