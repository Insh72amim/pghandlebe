import { faker } from '@faker-js/faker';
import { generateFakeAddress } from './address.fixture';
import { generateFakeBed } from './bed.fixture';
import { Bed } from '../entities/bed.entity';
import { Address } from '../entities/address.entity';
import { PG } from '../entities/pg.entity';
import { generateFakePG } from './pg.fixture';

export function generateFakeGuest(
  address: Address = new Address(generateFakeAddress()),
  bed: Bed = new Bed(generateFakeBed()),
  pg: PG = new PG(generateFakePG()),
) {
  return {
    name: faker.string.alpha({ length: 10 }),
    email: faker.internet.email(),
    mobileNumber: faker.phone.number(),
    address,
    bed,
    pg,
  };
}
