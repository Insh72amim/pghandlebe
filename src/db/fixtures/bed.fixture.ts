import { faker } from '@faker-js/faker';
import { generateFakeRoom } from './room.fixture';
import { Room } from '../entities/room.entity';

export function generateFakeBed(room: Room = new Room(generateFakeRoom())) {
  return {
    isAvailable: faker.datatype.boolean(),
    bedNumber: faker.number.int({ min: 1, max: 10 }),
    room,
  };
}
