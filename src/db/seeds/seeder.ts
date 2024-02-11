import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';
import { generateFakeOwner } from '../fixtures/owner.fixture';
import { Owner } from '../entities/owner.entity';
import { generateFakePG } from '../fixtures/pg.fixture';

async function seedData(em: EntityManager) {
  const owner1 = generateFakeOwner();
  const owner2 = generateFakeOwner();
  em.create(Owner, [owner1, owner2]);
  em.persistAndFlush(Owner);

  const pgs = [];
  for (let i = 0; i < 4; i++) pgs.push(generateFakePG());
}

export class DatabaseSeeder extends Seeder {
  run(em: EntityManager): void {
    seedData(em);
  }
}
