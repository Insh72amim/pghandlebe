import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TAddress } from '../types/entity';

@Entity({ tableName: 'Address' })
export class Address extends BaseEntity {
  @Property()
  identity!: string; // referenced to entity for which it is addressed like pg or owner or manager

  @Property()
  addressLine1!: string;

  @Property()
  addressLine2!: string;

  @Property()
  addressLine3?: string;

  @Property()
  zipcode!: string;

  @Property()
  city!: string;

  @Property()
  state!: string;

  @Property()
  country!: string;

  constructor(args: TAddress) {
    super();
    Object.assign(this, args);
  }
}
