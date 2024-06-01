import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BedService } from './bed.service';
import { Room } from 'src/db/entities/room.entity';
import { Bed } from 'src/db/entities/bed.entity';
import { Guest } from 'src/db/entities/guest.entity';
import { ApiTags } from '@nestjs/swagger';
import { TBed } from 'src/db/types/entity.types';

@ApiTags('5. Bed')
@Controller('bed')
export class BedController {
  constructor(private readonly bedService: BedService) {}

  @Post('/bed')
  async addBed(@Body() bed: TBed): Promise<Bed> {
    return await this.bedService.addBed(bed);
  }

  @Get('/:id')
  async getBedById(@Param('id') id: string): Promise<Bed> {
    return await this.bedService.getBedById(id);
  }

  @Get('/:id/rooms')
  async getAllRoomsOfPG(@Param('id') id: string): Promise<Room[]> {
    return await this.bedService.getAllRoomsOfPG(id);
  }

  @Get('/:id/beds')
  async getAllBedsOfPG(@Param('id') id: string, @Query('available') available: string): Promise<Bed[]> {
    return await this.bedService.getAllBedsOfPG(id, available === 'true');
  }

  @Get('/:id/guests')
  async getAllGuestsOfPG(@Param('id') id: string): Promise<Guest[]> {
    return await this.bedService.getAllGuestsOfPG(id);
  }
}
