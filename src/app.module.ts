import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './db/db.module';
import { FilterModule } from './lib/filters/filter.module';

@Module({
  imports: [DatabaseModule, ApiModule, FilterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
