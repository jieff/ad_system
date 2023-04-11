import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
//import { RolesGuard } from './guards/role.guards';
//import { Roles } from './decorators/roles.decorator';
//import { Role } from './enums/role.enum';

@Controller()
//@UseGuards(RolesGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('AD System')
  //@Roles(Role.Admin)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
