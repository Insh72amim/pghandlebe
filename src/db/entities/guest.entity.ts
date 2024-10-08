import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TGuest } from '../types/entity.types';
import { Address } from './address.entity';
import { Bed } from './bed.entity';
import { Stay } from './stay.entity';
import { PG } from './pg.entity';

@Entity({ tableName: 'Guest' })
export class Guest extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  mobileNumber!: string;

  @ManyToOne(() => PG)
  pg!: PG;

  @OneToOne(() => Address, { nullable: true })
  address?: Address;

  @OneToOne(() => Bed, (bed) => bed.guest, { owner: false })
  bed!: Bed;

  @OneToOne(() => Stay, (stay) => stay.guest, { owner: false })
  stay?: Stay;

  constructor(args: TGuest) {
    super();
    Object.assign(this, args);
  }
}
