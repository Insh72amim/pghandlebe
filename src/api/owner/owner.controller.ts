import { Controller, Get, Param } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner } from 'src/db/entities/owner.entity';
import { PG } from 'src/db/entities/pg.entity';

@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get('/:id')
  async getOwnerById(@Param('id') id: string): Promise<Owner> {
    return await this.ownerService.getOwnerById(id);
  }

  @Get('/:id/pg')
  async getAllPgsByOwnerId(@Param('id') id: string): Promise<PG[]> {
    return await this.ownerService.getAllPgsByOwnerId(id);
  }
}
