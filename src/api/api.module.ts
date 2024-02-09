import { Module } from '@nestjs/common';
import { DappModule } from './random/dapp.module';

@Module({
  imports: [DappModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
