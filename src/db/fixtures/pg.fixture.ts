import { faker } from '@faker-js/faker';
import { generateFakeOwner } from './owner.fixture';
import { Owner } from '../entities/owner.entity';
import { Address } from '../entities/address.entity';
import { generateFakeAddress } from './address.fixture';

export function generateFakePG(
  address: Address = new Address(generateFakeAddress()),
  owner: Owner = new Owner(generateFakeOwner()),
) {
  return {
    name: faker.company.name(),
    contactNumber: faker.phone.number(),
    totalFloors: faker.number.int({ min: 1, max: 10 }),
    totalRooms: faker.number.int({ min: 5, max: 50 }),
    address,
    owner,
  };
}
