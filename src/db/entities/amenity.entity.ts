import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TAmenity } from '../types/entity';

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

  constructor(args: TAmenity) {
    super();
    Object.assign(this, args);
  }
}
