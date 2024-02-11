import { Guest } from '../entities/Guest.entity';
import { faker } from '@faker-js/faker';
import { generateFakeAddress } from './address.fixture';
import { generateFakeBed } from './bed.fixture';
import { Bed } from '../entities/bed.entity';
import { Address } from '../entities/address.entity';

export function generateFakeGuest(
  address: Address = new Address(generateFakeAddress()),
  bed: Bed = new Bed(generateFakeBed()),
) {
  return {
    name: faker.string.alpha({ length: 10 }),
    email: faker.internet.email(),
    mobileNumber: faker.phone.number(),
    address,
    bed,
  };
}
