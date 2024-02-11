import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { generateFakeOwner } from '../fixtures/owner.fixture';
import { Owner } from '../entities/owner.entity';
import { generateFakePG } from '../fixtures/pg.fixture';
import { generateFakeAddress } from '../fixtures/address.fixture';
import { generateFakeRoom } from '../fixtures/room.fixture';
import { Room } from '../entities/room.entity';
import { Address } from '../entities/address.entity';
import { PG } from '../entities/pg.entity';
import { Bed } from '../entities/bed.entity';
import { generateFakeBed } from '../fixtures/bed.fixture';
import { Guest } from '../entities/guest.entity';
import { generateFakeGuest } from '../fixtures/guest.fixture';
import { Stay } from '../entities/stay.entity';
import { generateFakeStay } from '../fixtures/stay.fixture';
import { Amenity } from '../entities/amenity.entity';
import { generateFakeAmenity } from '../fixtures/amenity.fixture';

async function seedOneSetData(em: EntityManager) {
  // created one unique owner
  const ownerAddress: Address = em.create(Address, generateFakeAddress());
  const owner: Owner = em.create(Owner, generateFakeOwner());

  // create 2 pgs and add also create amenities for them
  const pgAddresses: Address[] = [em.create(Address, generateFakeAddress()), em.create(Address, generateFakeAddress())];
  const pgs: PG[] = [
    em.create(PG, generateFakePG(pgAddresses[0], owner)),
    em.create(PG, generateFakePG(pgAddresses[1], owner)),
  ];
  const amenities: Amenity[] = [];
  pgs.forEach((pg, i) => {
    amenities.push(em.create(Amenity, generateFakeAmenity(pg)));
    pg.amenity = amenities[i];
  });

  // create 4 rooms in each pg
  const rooms: Room[] = [];
  pgs.forEach((pg) => {
    rooms.push(em.create(Room, generateFakeRoom(pg)));
  });

  // create beds in each room based on sharing value
  const beds: Bed[] = [];
  rooms.forEach((room) => {
    for (let i = 0; i < room.sharing; i++) {
      beds.push(em.create(Bed, generateFakeBed(room)));
    }
  });

  // add guest to all the beds in room
  const guests: Guest[] = [];
  beds.forEach((bed) => {
    guests.push(em.create(Guest, generateFakeGuest(em.create(Address, generateFakeAddress()), bed)));
  });

  // create a stay for their time
  const stays: Stay[] = [];
  guests.forEach((guest, i) => {
    stays.push(em.create(Stay, generateFakeStay(guest, beds[i])));
  });

  // creat data and persist in database

  await em.persistAndFlush(ownerAddress);
  await em.persistAndFlush(owner);
  pgAddresses.forEach(async (pgAddress) => {
    await em.persistAndFlush(pgAddress);
  });
  pgs.forEach(async (pg) => {
    await em.persistAndFlush(pg);
  });
  amenities.forEach(async (amenity) => {
    await em.persistAndFlush(amenity);
  });
  rooms.forEach(async (room) => {
    await em.persistAndFlush(room);
  });
  guests.forEach(async (guest) => {
    await em.persistAndFlush(guest);
  });
  stays.forEach(async (stay) => {
    await em.persistAndFlush(stay);
  });
}

export class DatabaseSeeder extends Seeder {
  run(em: EntityManager): void {
    for (let i = 0; i < 5; i++) seedOneSetData(em);
  }
}
