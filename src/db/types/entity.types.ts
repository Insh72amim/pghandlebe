import { Address } from '../entities/address.entity';
import { Amenity } from '../entities/amenity.entity';
import { BaseEntity } from '../entities/base.entity';
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

export type WithoutBase<T extends BaseEntity> = Partial<T> & Omit<BaseEntity, 'id' | 'createdAt' | 'updatedAt'>;

export type TGuest = WithoutBase<Guest>;
export type TOwner = Omit<Owner, 'id' | 'createdAt' | 'updatedAt' | 'pgs'>;

export type TPG = Omit<PG, 'id' | 'createdAt' | 'updatedAt' | 'rooms'>;
export type TRoom = Omit<Room, 'id' | 'createdAt' | 'updatedAt' | 'beds'>;
export type TBed = Omit<Bed, 'id' | 'createdAt' | 'updatedAt' | 'guest' | 'currentStay'>;

export type TAddress = WithoutBase<Address>;
export type TAmenity = WithoutBase<Amenity>;
export type TStay = WithoutBase<Stay>;

export type EntityArgs<T extends BaseEntity> = Partial<T> & Omit<BaseEntity, 'id' | 'createdAt' | 'updatedAt'>;

export interface AcessToken {
  access_token: string;
}

export interface TokenVerifyResponse {
  valid: boolean;
  decoded: {
    sub: string;
    name: string;
    email: string;
    iat: number;
    exp: number;
  };
}
