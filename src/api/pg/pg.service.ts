import { EntityManager, NotFoundError } from '@mikro-orm/postgresql';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Address } from 'src/db/entities/address.entity';
import { Amenity } from 'src/db/entities/amenity.entity';
import { Bed } from 'src/db/entities/bed.entity';
import { Guest } from 'src/db/entities/guest.entity';

import { PG } from 'src/db/entities/pg.entity';
import { Room } from 'src/db/entities/room.entity';
import { TPG } from 'src/db/types/entity.types';
import { PgDTO } from 'src/lib/dtos/request/pg.request.dto';

@Injectable()
export class PgService {
  constructor(private readonly entityManager: EntityManager) {}

  async getPgById(id: string): Promise<PG> {
    return this.entityManager.findOneOrFail(PG, id, { populate: ['address', 'amenity'] });
  }

  async getAllRoomsOfPG(id: string): Promise<Room[]> {
    const rooms = await this.entityManager.find(Room, { pg: id }, { populate: ['beds'] });
    if (rooms.length == 0) throw new NotFoundError(`PG with ID ${id} has not been found`);
    return rooms;
  }

  async getAllBedsOfPG(id: string, available: boolean): Promise<Bed[]> {
    const beds = available
      ? await this.entityManager.find(Bed, { pg: id, isAvailable: true }, { populate: ['guest', 'room'] })
      : await this.entityManager.find(Bed, { pg: id }, { populate: ['guest', 'room'] });
    if (beds.length == 0) throw new NotFoundError(`PG with ID ${id} has no beds`);
    return beds;
  }

  async getAllGuestsOfPG(id: string): Promise<Guest[]> {
    const guests = await this.entityManager.find(Guest, { bed: { pg: id } }, { populate: ['stay', 'address', 'bed'] });
    if (guests.length == 0) throw new NotFoundError(`Owner with ID ${id} has No PG`);
    return guests;
  }

  async addPg(pg: PgDTO): Promise<PG> {
    try {
      const amenity = this.entityManager.create(Amenity, pg.amenity);
      const address = this.entityManager.create(Address, pg.address);
      pg.amenity = amenity;
      pg.address = address;
      const newPg = this.entityManager.create(PG, pg);
      this.entityManager.persistAndFlush(address);
      this.entityManager.persistAndFlush(amenity);
      this.entityManager.persistAndFlush(newPg);
      return newPg;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error while adding PG');
    }
  }
}
