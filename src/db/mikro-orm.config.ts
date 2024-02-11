import { MigrationsOptions, Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';
import { CustomMigrationGenerator } from './migrations/custom/custom-migration.generator';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';

type IOptions = Options & { migrations: MigrationsOptions };

const config: IOptions = {
  entities: ['./dist/**/*.entity.ts'],
  entitiesTs: ['./src/**/*.entity.ts'],
  clientUrl: process.env.DATABASE_URL,
  dbName: 'pghandle',
  password: 'syedamim9876',
  user: 'syedamim',
  port: 5112,
  driver: PostgreSqlDriver,
  debug: process.env.LOG_LEVEL === 'debug',
  logger: (msg) => new Logger('MikroORM').log(msg),
  highlighter: process.env.LOG_FORMAT === 'pretty' ? new SqlHighlighter() : undefined,
  migrations: {
    path: './src/db/migrations',
    disableForeignKeys: false,
    generator: CustomMigrationGenerator,
  },
  seeder: {
    path: './src/db/seeds',
    defaultSeeder: 'DatabaseSeeder',
  },
  schemaGenerator: {
    disableForeignKeys: false,
    createForeignKeyConstraints: true,
  },
  extensions: [Migrator, EntityGenerator, SeedManager],
};

export default config;
