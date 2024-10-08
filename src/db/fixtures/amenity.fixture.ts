import { faker } from '@faker-js/faker';
import { generateFakePG } from './pg.fixture';
import { PG } from '../entities/pg.entity';

export function generateFakeAmenity(pg: PG = new PG(generateFakePG())) {
  return {
    pg,
    gym: faker.datatype.boolean(),
    food: faker.datatype.boolean(),
    internet: faker.datatype.boolean(),
    television: faker.datatype.boolean(),
    washingMachine: faker.datatype.boolean(),
    refrigerator: faker.datatype.boolean(),
    airConditioned: faker.datatype.boolean(),
    swimmingPool: faker.datatype.boolean(),
    bikeParking: faker.datatype.boolean(),
    carParking: faker.datatype.boolean(),
  };
}
