import 'dotenv/config';
import { MigrationsOptions, Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';
import { CustomMigrationGenerator } from './migrations/custom/custom-migration.generator';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';
import * as fs from 'fs';

type IOptions = Options & { migrations: MigrationsOptions };

const config: IOptions = {
  entities: ['./dist/**/*.entity.ts'],
  entitiesTs: ['./src/**/*.entity.ts'],
  clientUrl: process.env.DB_URL,
  driver: PostgreSqlDriver,
  // required for ssl certificate for connecting to aws from local
  // driverOptions: {
  //   connection: {
  //     ssl: {
  //       ca: fs.readFileSync('./certs/global-bundle.pem', 'utf-8'),
  //     },
  //   },
  // },
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
