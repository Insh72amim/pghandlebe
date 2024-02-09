import { Collection, Entity, ManyToOne, OneToMany, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TPG } from '../types/entity';
import { PG } from './pg.entity';
import { Bed } from './bed.entity';
import { Guest } from './guest.entity';
import { Room } from './room.entity';

@Entity({ tableName: 'Stay' })
export class Stay extends BaseEntity {
  @Property()
  checkInDate: Date;

  @Property()
  checkOutDate: Date;

  @Property()
  firstPaymentDate: Date;

  @Property()
  latestPaymentDate: Date;

  @Property()
  reccuringDaysForPayment: number;

  @OneToOne()
  guest: Guest;

  @OneToOne()
  bed: Bed;

  @ManyToOne()
  room: Room;

  constructor(args: TPG) {
    super();
    Object.assign(this, args);
  }
}
