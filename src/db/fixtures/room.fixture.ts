// generateFakeRoom.ts

import { Room } from '../entities/Room.entity';
import faker from 'faker';
import { generateFakePG } from './pg.fixture';
import { generateFakeBed } from './bed.fixture';
import { Collection } from '@mikro-orm/core';
import { Bed } from '../entities/bed.entity';

export function generateFakeRoom(): Room {
  const room: Room = new Room({
    number: faker.datatype.number().toString(),
    floor: faker.datatype.number({ min: 1, max: 10 }).toString(),
    block: faker.datatype.number({ min: 1, max: 5 }),
    isAirConditioned: faker.datatype.boolean(),
    pg: generateFakePG(),
  });

  return room;
}
