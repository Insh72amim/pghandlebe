import { faker } from '@faker-js/faker';
import { generateFakeAddress } from './address.fixture';
import { Address } from '../entities/address.entity';

export function generateFakeOwner(address = new Address(generateFakeAddress())) {
  return {
    name: faker.string.alpha({ length: 10 }),
    email: faker.internet.email(),
    password: faker.internet.password(),
    mobileNumber: faker.phone.number(),
    address,
  };
}
