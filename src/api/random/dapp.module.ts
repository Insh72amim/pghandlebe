import { Module } from '@nestjs/common';
import { AppController } from './dapp.controller';
import { AppService } from './dapp.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class DappModule {}
