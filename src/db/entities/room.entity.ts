import { Collection, Entity, ManyToOne, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TRoom } from '../types/entity.types';
import { PG } from './pg.entity';
import { Bed } from './bed.entity';

@Entity({ tableName: 'Room' })
export class Room extends BaseEntity {
  @Property()
  number!: string;

  @Property()
  floor!: string;

  @Property()
  block!: string;

  @Property()
  sharing: number;

  @Property()
  isAirConditioned!: boolean;

  @ManyToOne(() => PG)
  pg!: PG;

  @OneToMany(() => Bed, (bed) => bed.room)
  beds = new Collection<Bed>(this);

  constructor(args: TRoom) {
    super();
    Object.assign(this, args);
  }
}
