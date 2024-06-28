import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:'*'//ให้ใช้แค่บางคน
  });
  app.use(helmet());
  app.use(json({limit:'30mb'}));//max json body size
  
  //uncomman if u wanna use adapter
  //   const redisIoAdapter = new RedisIoAdapter(app); 
  // await redisIoAdapter.connectToRedis();

  // app.useWebSocketAdapter(redisIoAdapter);
  // Ws

  app.setGlobalPrefix(process.env.GLOBAL_PREFIX);
 
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode:HttpStatus.UNPROCESSABLE_ENTITY,//422
  }));

  await app.listen(3000);
}
bootstrap();
