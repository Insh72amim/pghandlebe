import { MikroORM } from '@mikro-orm/core';
import { PG } from '../entities/pg.entity';
import { Bed } from '../entities/bed.entity';
import { Room } from '../entities/room.entity';
import { Stay } from '../entities/stay.entity';
import { Guest } from '../entities/guest.entity';
import { Owner } from '../entities/owner.entity';
import { Address } from '../entities/address.entity';
import { Amenity } from '../entities/amenity.entity';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

(async () => {
  const orm = await MikroORM.init({
    entities: [Owner, PG, Guest, Address, Amenity, Bed, Room, Stay],
    dbName: 'pghandle',
    driver: PostgreSqlDriver,
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    port: 5112,
  });

  const generator = orm.getSchemaGenerator();

  const dropDump = await generator.getDropSchemaSQL();
  console.log(dropDump);

  const createDump = await generator.getCreateSchemaSQL();
  console.log(createDump);

  const updateDump = await generator.getUpdateSchemaSQL();
  console.log(updateDump);

  // or you can run those queries directly, but be sure to check them first!
  await generator.dropSchema();
  await generator.createSchema();
  await generator.updateSchema();

  // in tests it can be handy to use those:
  await generator.refreshDatabase(); // ensure db exists and is fresh
  await generator.clearDatabase(); // removes all data

  await orm.close(true);
})();
