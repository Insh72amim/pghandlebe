import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TBed } from '../types/entity.types';
import { Room } from './room.entity';
import { Guest } from './guest.entity';
import { Stay } from './stay.entity';

@Entity({ tableName: 'Bed' })
export class Bed extends BaseEntity {
  @Property()
  isAvailable!: boolean;

  @Property()
  bedNumber!: number;

  @ManyToOne(() => Room)
  room!: Room;

  @OneToOne(() => Guest, (guest) => guest.bed, { owner: true, mappedBy: 'bed', nullable: true })
  guest?: Guest;

  @OneToOne(() => Stay, { nullable: true })
  currentStay?: Stay;

  constructor(args: TBed) {
    super();
    Object.assign(this, args);
  }
}
