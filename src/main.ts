import { NestFactory } from '@nestjs/core';
import * as path from 'path'
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
  
}
bootstrap();
