import { IsNotEmpty, IsString } from "class-validator";
import {CreatePersonDto } from '../../people/dto/create-person.dto'

export class CreatePositionDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    positions : CreatePersonDto[];

}
