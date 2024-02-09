import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TPG } from '../types/entity';
import { Room } from './room.entity';
import { Guest } from './guest.entity';
import { Stay } from './stay.entity';
import { PG } from './pg.entity';

@Entity({ tableName: 'Bed' })
export class Bed extends BaseEntity {
  @Property()
  isAvailable!: boolean;

  @Property()
  bedNumber!: number;

  @ManyToOne()
  room!: Room;

  @ManyToOne()
  pg!: PG;

  @OneToOne()
  guest: Guest;

  @OneToOne()
  currentStay: Stay;

  constructor(args: TPG) {
    super();
    Object.assign(this, args);
  }
}
