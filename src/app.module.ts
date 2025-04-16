import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';



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
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay:3000,
      retryAttempts:10
    }),

    UsersModule,

    ProjectsModule
  ],
})
export class AppModule {}
