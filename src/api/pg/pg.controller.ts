import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { PgService } from './pg.service';
import { PG } from 'src/db/entities/pg.entity';
import { Room } from 'src/db/entities/room.entity';
import { Bed } from 'src/db/entities/bed.entity';
import { Guest } from 'src/db/entities/guest.entity';
import { request } from 'http';
import { Request } from 'express';

@Controller('pg')
export class PgController {
  constructor(private readonly pgService: PgService) {}

  @Get('/:id')
  async getPgById(@Param('id') id: string): Promise<PG> {
    console.log(`Hello from ${id}`);
    return await this.pgService.getPgById(id);
  }

  @Get('/:id/rooms')
  async getAllRoomsOfPG(@Param('id') id: string): Promise<Room[]> {
    return await this.pgService.getAllRoomsOfPG(id);
  }

  @Get('/:id/beds')
  async getAllBedsOfPG(@Param('id') id: string, @Query('available') available: string): Promise<Bed[]> {
    return await this.pgService.getAllBedsOfPG(id, available === 'true');
  }

  @Get('/:id/guests')
  async getAllGuestsOfPG(@Param('id') id: string): Promise<Guest[]> {
    return await this.pgService.getAllGuestsOfPG(id);
  }
}
