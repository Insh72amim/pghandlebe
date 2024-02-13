import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { OwnerModule } from './owner/owner.module';
import { PgModule } from './pg/pg.module';
import { BedModule } from './bed/bed.module';
import { GuestModule } from './guest/guest.module';
import { RoomModule } from './room/room.module';
import { StayModule } from './stay/stay.module';

@Module({
  imports: [AuthModule, BedModule, GuestModule, OwnerModule, PgModule, RoomModule, StayModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
