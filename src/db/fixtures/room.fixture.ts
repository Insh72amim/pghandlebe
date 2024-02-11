import { Room } from '../entities/Room.entity';
import { faker } from '@faker-js/faker';
import { generateFakePG } from './pg.fixture';
import { PG } from '../entities/pg.entity';

export function generateFakeRoom(pg: PG = new PG(generateFakePG())) {
  return {
    number: faker.number.int().toString(),
    floor: faker.number.int({ min: 1, max: 10 }).toString(),
    block: faker.number.int({ min: 1, max: 5 }).toString(),
    isAirConditioned: faker.datatype.boolean(),
    sharing: faker.number.int({ min: 1, max: 5 }),
    pg,
  };
}
