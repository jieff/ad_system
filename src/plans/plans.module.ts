import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plans } from './entities/plan.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Plans])],
  controllers: [PlansController],
  providers: [PlansService]
})
export class PlansModule {}
