import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PG } from './entities/pg.entity';
import { Bed } from './entities/bed.entity';
import { Room } from './entities/room.entity';
import { Stay } from './entities/stay.entity';
import { Guest } from './entities/guest.entity';
import { Owner } from './entities/owner.entity';
import { Address } from './entities/address.entity';
import { Amenity } from './entities/amenity.entity';
import config from 'src/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    MikroOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => config.get('database')!,
    }),
    MikroOrmModule.forFeature({
      entities: [Owner, PG, Guest, Address, Amenity, Bed, Room, Stay],
    }),
  ],
  exports: [MikroOrmModule],
})
export class DatabaseModule {}
