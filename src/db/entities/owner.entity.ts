import { Collection, Entity, OneToMany, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TOwner } from '../types/entity.types';
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

  @OneToOne(() => Address, { nullable: true })
  address?: Address;

  @OneToMany(() => PG, (pg) => pg.owner, { nullable: true })
  pgs = new Collection<PG>(this);

  constructor({ ...args }: TOwner) {
    super();
    Object.assign(this, args);
  }
}
