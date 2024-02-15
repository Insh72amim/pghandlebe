import { Controller, Get, Param, Query } from '@nestjs/common';
import { RoomService } from './room.service';
import { PG } from 'src/db/entities/pg.entity';
import { Room } from 'src/db/entities/room.entity';
import { Bed } from 'src/db/entities/bed.entity';
import { Guest } from 'src/db/entities/guest.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Guest')
@Controller('guest')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('/:id')
  async getPgById(@Param('id') id: string): Promise<PG> {
    return await this.roomService.getPgById(id);
  }

  @Get('/:id/rooms')
  async getAllRoomsOfPG(@Param('id') id: string): Promise<Room[]> {
    return await this.roomService.getAllRoomsOfPG(id);
  }

  @Get('/:id/beds')
  async getAllBedsOfPG(@Param('id') id: string, @Query('available') available: string): Promise<Bed[]> {
    return await this.roomService.getAllBedsOfPG(id, available === 'true');
  }

  @Get('/:id/guests')
  async getAllGuestsOfPG(@Param('id') id: string): Promise<Guest[]> {
    return await this.roomService.getAllGuestsOfPG(id);
  }
}
