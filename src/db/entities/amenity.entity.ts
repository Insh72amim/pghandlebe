import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TPG } from '../types/entity';
import { PG } from './pg.entity';

// General Amenities available in a PG
// Specific to PG and not bounded to any room

@Entity({ tableName: 'Amenity' })
export class Amenity extends BaseEntity {
  @Property()
  food: boolean;

  @Property()
  internet: boolean;

  @Property()
  television: boolean;

  @Property()
  washingMachine: boolean;

  @Property()
  regfrigerator: boolean;

  @Property()
  airConditioned: boolean;

  @Property()
  gym: boolean;

  @Property()
  swimmingPool: boolean;

  @Property()
  bikeParking: boolean;

  @Property()
  carParking: boolean;

  @OneToOne()
  PG: PG;

  constructor(args: TPG) {
    super();
    Object.assign(this, args);
  }
}
