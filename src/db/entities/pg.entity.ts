import { Collection, Entity, ManyToOne, OneToMany, OneToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { Owner } from './owner.entity';
import { TPG } from '../types/entity.types';
import { Amenity } from './amenity.entity';
import { Room } from './room.entity';
import { Address } from './address.entity';

@Entity({ tableName: 'PG' })
export class PG extends BaseEntity {
  @Property()
  name!: string;

  @Property()
  contactNumber!: string;

  @Property()
  totalFloors!: number;

  @Property()
  totalRooms!: number;

  @OneToOne(() => Address, { nullable: true })
  address?: Address;

  @OneToOne(() => Amenity, { nullable: true })
  amenity?: Amenity;

  @ManyToOne(() => Owner)
  owner!: Owner;

  @OneToMany(() => Room, (room) => room.pg)
  rooms = new Collection<Room>(this);

  constructor(args: TPG) {
    super();
    Object.assign(this, args);
  }
}
