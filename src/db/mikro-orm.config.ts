import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';

const config: Options = {
  entities: ['./dist/**/*.entity.ts'],
  entitiesTs: ['./src/**/*.entity.ts'],
  clientUrl: process.env.DATABASE_URL,
  driver: PostgreSqlDriver,
  debug: process.env.LOG_LEVEL === 'debug',
  logger: (msg) => new Logger('MikroORM').log(msg),
  highlighter: process.env.LOG_FORMAT === 'pretty' ? new SqlHighlighter() : undefined,
  seeder: {
    path: '',
    defaultSeeder: '',
  },
  schemaGenerator: {
    disableForeignKeys: false,
    createForeignKeyConstraints: false,
  },
};

export default config;
