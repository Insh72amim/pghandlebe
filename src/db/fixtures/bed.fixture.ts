import { Bed } from '../entities/Bed.entity';
import faker from 'faker';
import { generateFakeRoom } from './room.fixture';

export function generateFakeBed(): Bed {
  const bed: Bed = new Bed({
    isAvailable: faker.datatype.boolean(),
    bedNumber: faker.datatype.number(),
    room: generateFakeRoom(),
  });

  return bed;
}
