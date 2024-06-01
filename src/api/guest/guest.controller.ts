import { Controller, Get, Param, Query } from '@nestjs/common';
import { GuestService } from './guest.service';
import { PG } from 'src/db/entities/pg.entity';
import { Room } from 'src/db/entities/room.entity';
import { Bed } from 'src/db/entities/bed.entity';
import { Guest } from 'src/db/entities/guest.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('6. Guest')
@Controller('guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Get('/:id')
  async getPgById(@Param('id') id: string): Promise<PG> {
    return await this.guestService.getPgById(id);
  }

  @Get('/:id/rooms')
  async getAllRoomsOfPG(@Param('id') id: string): Promise<Room[]> {
    return await this.guestService.getAllRoomsOfPG(id);
  }

  @Get('/:id/beds')
  async getAllBedsOfPG(@Param('id') id: string, @Query('available') available: string): Promise<Bed[]> {
    return await this.guestService.getAllBedsOfPG(id, available === 'true');
  }

  @Get('/:id/guests')
  async getAllGuestsOfPG(@Param('id') id: string): Promise<Guest[]> {
    return await this.guestService.getAllGuestsOfPG(id);
  }
}
