import { faker } from '@faker-js/faker';
import { generateFakeRoom } from './room.fixture';
import { Room } from '../entities/room.entity';
import { PG } from '../entities/pg.entity';
import { generateFakePG } from './pg.fixture';

export function generateFakeBed(pg: PG = new PG(generateFakePG()), room: Room = new Room(generateFakeRoom())) {
  return {
    isAvailable: faker.datatype.boolean(),
    bedNumber: faker.number.int({ min: 1, max: 10 }),
    room,
    pg,
  };
}
