import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TBed } from '../types/entity';
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

  @ManyToOne(() => Room)
  room!: Room;

  @ManyToOne(() => PG)
  pg!: PG;

  @OneToOne(() => Guest, (guest) => guest.bed, { owner: true, mappedBy: 'bed' })
  guest: Guest;

  @OneToOne(() => Stay)
  currentStay: Stay;

  constructor(args: TBed) {
    super();
    Object.assign(this, args);
  }
}
