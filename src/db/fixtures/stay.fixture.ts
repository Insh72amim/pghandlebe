import { faker } from '@faker-js/faker';
import { generateFakeGuest } from './guest.fixture';
import { generateFakeBed } from './bed.fixture';
import { Guest } from '../entities/guest.entity';
import { Bed } from '../entities/bed.entity';

export function generateFakeStay(guest: Guest = new Guest(generateFakeGuest()), bed: Bed = new Bed(generateFakeBed())) {
  return {
    checkInDate: faker.date.past(),
    checkOutDate: faker.date.future(),
    firstPaymentDate: faker.date.recent(),
    latestPaymentDate: faker.date.future(),
    isActive: faker.datatype.boolean(),
    reccuringDaysForPayment: faker.number.int({ min: 7, max: 30 }),
    rentPerMonth: faker.number.int({ min: 5000, max: 15000 }),
    guest,
    bed,
  };
}
