import { EntityManager, NotFoundError } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Owner } from 'src/db/entities/owner.entity';
import { PG } from 'src/db/entities/pg.entity';

@Injectable()
export class OwnerService {
  constructor(private readonly entityManager: EntityManager) {}

  async getOwnerById(id: string): Promise<Owner> {
    return this.entityManager.findOneOrFail(Owner, id);
  }

  async getAllPgsByOwnerId(id: string): Promise<PG[]> {
    const pgs = await this.entityManager.find(PG, { owner: id }, { populate: ['address', 'amenity'] });
    if (pgs.length == 0) throw new NotFoundError(`Owner with ID ${id} has No PG`);
    return pgs;
  }
}
