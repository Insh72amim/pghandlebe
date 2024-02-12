import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { OwnerModule } from './owner/owner.module';
import { PgModule } from './pg/pg.module';

@Module({
  imports: [AuthModule, OwnerModule, PgModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
