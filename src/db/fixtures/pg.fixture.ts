// generateFakePG.ts
import faker from 'faker';
import { PG } from '../entities/PG.entity';
import { generateFakeOwner } from './owner.fixture';
import { generateFakeAmenity } from './amenity.fixture';

export function generateFakePG(): PG {
  const pg: PG = new PG({
    name: faker.company.companyName(),
    contactNumber: faker.phone.phoneNumber(),
    totalFloors: faker.random.number({ min: 1, max: 10 }),
    totalRooms: faker.random.number({ min: 5, max: 50 }),
    owner: generateFakeOwner(),
    amenity: generateFakeAmenity(),
  });

  return pg;
}
