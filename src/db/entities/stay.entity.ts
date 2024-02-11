import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TStay } from '../types/entity.types';
import { Bed } from './bed.entity';
import { Guest } from './guest.entity';

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
  isActive: boolean;

  @Property()
  reccuringDaysForPayment: number;

  @OneToOne(() => Guest)
  guest: Guest;

  @OneToOne(() => Bed)
  bed: Bed;

  constructor(args: TStay) {
    super();
    Object.assign(this, args);
  }
}
