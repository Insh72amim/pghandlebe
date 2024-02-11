import { faker } from '@faker-js/faker';

export function generateFakeAddress() {
  return {
    addressLine1: faker.location.streetAddress(true),
    addressLine2: faker.location.secondaryAddress(),
    addressLine3: faker.location.secondaryAddress(),
    zipcode: faker.location.zipCode(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
  };
}
