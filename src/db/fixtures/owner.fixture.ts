// generateFakeOwner.ts
import faker from 'faker';
import { Owner } from '../entities/Owner.entity';
import { generateFakeAddress } from './address.fixture';
import { Address } from '../entities/address.entity';
import { PG } from '../entities/pg.entity';
import { generateFakePG } from './pg.fixture';
import { Collection } from '@mikro-orm/core';

export function generateFakeOwner(address: Address = generateFakeAddress()): Owner {
  const owner: Owner = new Owner({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    mobileNumber: faker.phone.phoneNumber(),
    address,
  });

  return owner;
}
