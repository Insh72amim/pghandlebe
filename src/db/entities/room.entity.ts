import { Collection, Entity, ManyToOne, OneToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { TPG } from '../types/entity';
import { PG } from './pg.entity';
import { Bed } from './bed.entity';

@Entity({ tableName: 'Room' })
export class Room extends BaseEntity {
  @Property()
  number!: string;

  @Property()
  floor!: string;

  @Property()
  block!: number;

  @ManyToOne()
  pg!: PG;

  @Property()
  isAirConditioned!: boolean;

  @OneToMany(() => Bed, (bed) => bed.id)
  beds = new Collection<Bed>(this);

  constructor(args: TPG) {
    super();
    Object.assign(this, args);
  }
}
