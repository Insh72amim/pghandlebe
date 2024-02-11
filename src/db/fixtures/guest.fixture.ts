// generateFakeGuest.ts
import { Guest } from '../entities/Guest.entity';
import faker from 'faker';
import { generateFakeAddress } from './address.fixture';
import { generateFakeBed } from './bed.fixture';
import { generateFakeStay } from './stay.fixture';

export function generateFakeGuest(): Guest {
  const guest: Guest = new Guest({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    mobileNumber: faker.phone.phoneNumber(),
    homeAddress: generateFakeAddress(),
    bed: generateFakeBed(),
    stay: generateFakeStay(),
  });

  return guest;
}
