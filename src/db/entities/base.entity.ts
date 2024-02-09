import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity({ abstract: true })
export abstract class BaseEntity {
  @PrimaryKey({ columnType: 'uuid' })
  id: string = v4();

  @Property({
    fieldName: 'createdAt',
    defaultRaw: `CURRENT_TIMESTAMP`,
    onCreate: () => new Date(),
  })
  createdAt!: Date;

  @Property({
    fieldName: 'updatedAt',
    defaultRaw: `CURRENT_TIMESTAMP`,
    onUpdate: () => new Date(),
  })
  updatedAt!: Date;

  protected constructor() {}
}
