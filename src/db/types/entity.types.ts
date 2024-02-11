import { BaseEntity } from '@mikro-orm/core';
import { Address } from '../entities/address.entity';
import { Amenity } from '../entities/amenity.entity';
import { Bed } from '../entities/bed.entity';
import { Guest } from '../entities/guest.entity';
import { Owner } from '../entities/owner.entity';
import { PG } from '../entities/pg.entity';
import { Room } from '../entities/room.entity';
import { Stay } from '../entities/stay.entity';

export enum ENTITIES {
  Owner = 'Owner',
  Guest = 'Guest',
  PG = 'PG',
  Room = 'Room',
  Bed = 'Bed',
  Address = 'Address',
  Amenity = 'Amenity',
  Stay = 'Stay',
}

export type TGuest = Omit<Guest, 'id' | 'createdAt' | 'updatedAt'>;
export type TOwner = Omit<Owner, 'id' | 'createdAt' | 'updatedAt' | 'pgs'>;

export type TPG = Omit<PG, 'id' | 'createdAt' | 'updatedAt' | 'rooms'>;
export type TRoom = Omit<Room, 'id' | 'createdAt' | 'updatedAt' | 'beds'>;
export type TBed = Omit<Bed, 'id' | 'createdAt' | 'updatedAt' | 'guest' | 'currentStay'>;

export type TAddress = Omit<Address, 'id' | 'createdAt' | 'updatedAt'>;
export type TAmenity = Omit<Amenity, 'id' | 'createdAt' | 'updatedAt'>;
export type TStay = Omit<Stay, 'id' | 'createdAt' | 'updatedAt'>;

export type EntityArgs<T extends BaseEntity> = Partial<T> & Omit<BaseEntity, 'id' | 'createdAt' | 'updatedAt'>;
