import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'up_system',
  synchronize: true, // Obs: use synchronize: true somente em desenvolvimento.
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
