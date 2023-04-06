import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
<<<<<<< HEAD
  port: 3307,
=======
  port: 3706,
>>>>>>> 8e8d0a02bd3063cb767d6ad043c7629f760edfd9
  username: 'root',
  password: 'root',
  database: 'ad',
  synchronize: true, // Obs: use synchronize: true somente em desenvolvimento.
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
