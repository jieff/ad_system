import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Cadastra Empresas Administradora do Sistema')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiBody({
    schema: {
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
      },
      required: ['name', 'password', 'email' ]
    }
  })
  @ApiResponse({
    status: 201
  })
  @ApiOperation({ summary: 'Rota para cadastrar Empresa ADM' })
  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @ApiResponse({
    status: 200
  })
  @ApiOperation({ summary: 'Rota para listar todas as empresas ADM' })
  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @ApiResponse({
    status: 200
  })
  @ApiOperation({ summary: 'Rota para listar uma empresa por id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @ApiBody({
    schema: {
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
      }
    }
  })
  @ApiResponse({
    status: 203
  })
  @ApiOperation({ summary: 'Rota para realizar a atualização dos dados por id' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @ApiOperation({ summary: 'Rota para apagar uma empresa ADM' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
