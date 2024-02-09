import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TOwner } from '../types/entity';
import { Address } from './address.entity';
import { Bed } from './bed.entity';
import { Stay } from './stay.entity';

@Entity({ tableName: 'Guest' })
export class Guest extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  mobileNumber!: string;

  @Property()
  homeAddress!: Address;

  @Property()
  workAddress!: Address;

  @OneToOne()
  bed!: Bed;

  @OneToOne()
  stay!: Stay;

  constructor(args: TOwner) {
    super();
    Object.assign(this, args);
  }
}
