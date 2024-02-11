import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [AuthModule, OwnerModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
