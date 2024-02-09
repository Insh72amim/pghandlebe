import { merge } from 'lodash';

const config = async () => {
  const mikroOrmConfig = await import('./db/mikro-orm.config');
  const database = merge(
    {
      autoLoadEntities: true,
    },
    mikroOrmConfig.default,
  );

  return {
    database,
  };
};

export default config;
