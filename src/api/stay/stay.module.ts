import { Module } from '@nestjs/common';
import { StayController } from './stay.controller';
import { StayService } from './stay.service';

@Module({
  imports: [],
  controllers: [StayController],
  providers: [StayService],
})
export class StayModule {}
