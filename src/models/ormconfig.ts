// Commons
// LIBRARIES
import constants from '../constants';
import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const getOrmConfig = (
  customPathEntities?: string,
  customPathMigrations?: string,
) => {
  const pathMigrations = customPathMigrations || __dirname;
  // Connection config Typeorm
  const config: PostgresConnectionOptions = {
    type:'postgres',
    host: constants.DATABASE_HOST,
    username: constants.DATABASE_USER,
    password: constants.DATABASE_PASSWORD,
    database: constants.DATABASE_NAME,
    port: Number(constants.DATABASE_PORT),
    entities: [join(__dirname, '**', '*.entity.{ts,js}'), customPathEntities],
    synchronize: false,
    migrationsTableName: 'migrations',
    migrations: [pathMigrations],
    logging: constants.NODE_ENV !== 'production' ? true : false,
  };
  return config;
};

const config = getOrmConfig(
  join(__dirname, '**', '*.entity.{ts,js}'),
  __dirname + '/migrations/*.ts',
);

export = config;
