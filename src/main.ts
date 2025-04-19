import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { application } from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));
 

  //app.setGlobalPrefix('api');



  app.useGlobalPipes(//de forma global hacer validaciones de entrada
    new ValidationPipe({
      whitelist: true,  //sirve para tirar error en el caso de que no entre lo que esperabamos
      forbidNonWhitelisted: true,
      transform: true,  // nos transforma los datos automaticamente de string a numero por ejemplo
    })
  ),


  await app.listen(process.env.PORT ?? 3000);
  

  console.log(`application running on: ${await app.getUrl()}`)

}
bootstrap();
