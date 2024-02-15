import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TAddress } from '../types/entity.types';

@Entity({ tableName: 'Address' })
export class Address extends BaseEntity {
  @Property()
  addressLine1!: string;

  @Property({ nullable: true })
  addressLine2?: string;

  @Property({ nullable: true })
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
