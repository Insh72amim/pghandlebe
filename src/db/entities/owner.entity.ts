import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TOwner } from '../types/entity';
import { Address } from './address.entity';
import { PG } from './pg.entity';

@Entity({ tableName: 'Owner' })
export class Owner extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  password!: string;

  @Property()
  mobileNumber!: string;

  @Property()
  address!: Address;

  @OneToMany(() => PG, (pg) => pg.id)
  pgs = new Collection<PG>(this);

  constructor(args: TOwner) {
    super();
    Object.assign(this, args);
  }
}
