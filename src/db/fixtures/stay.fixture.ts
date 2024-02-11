// generateFakeStay.ts
import { Stay } from '../entities/Stay.entity';
import faker from 'faker';
import { generateFakeGuest } from './guest.fixture';
import { generateFakeBed } from './bed.fixture';

export function generateFakeStay(): Stay {
  const stay: Stay = new Stay({
    checkInDate: faker.date.past(),
    checkOutDate: faker.date.future(),
    firstPaymentDate: faker.date.recent(),
    latestPaymentDate: faker.date.future(),
    isActive: faker.random.boolean(),
    reccuringDaysForPayment: faker.random.number(),
    guest: generateFakeGuest(),
    bed: generateFakeBed(),
  });

  return stay;
}
