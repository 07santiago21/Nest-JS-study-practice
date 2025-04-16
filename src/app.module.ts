import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [
    
    ConfigModule.forRoot({

      envFilePath:`.develop.env`,
      isGlobal:true

    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'santiago',
      password: 'santiago',
      database: 'ejemplo',
      autoLoadEntities: true,
      synchronize: true,
      retryDelay:3000,
      retryAttempts:10
    }),

  ],
})
export class AppModule {}
