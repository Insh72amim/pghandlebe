import { Address } from '../entities/Address.entity';
import { ENTITIES } from '../types/entity.types';
import faker from 'faker';

export function generateFakeAddress(
  identity: ENTITIES = ENTITIES.Guest,
  identityId: string = faker.random.uuid(),
): Address {
  const address: Address = new Address({
    identity,
    identityId,
    addressLine1: faker.address.streetAddress(),
    addressLine2: faker.address.secondaryAddress(),
    addressLine3: faker.address.secondaryAddress(),
    zipcode: faker.address.zipCode(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
  });

  return address;
}
