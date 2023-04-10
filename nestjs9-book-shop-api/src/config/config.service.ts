import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',

      host: process.env.HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,

      entities: ['**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',
      synchronize: true,
    };
  }
}

export { ConfigService };
