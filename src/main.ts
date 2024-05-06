import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.ts';
import '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule
  );
  await app.listen(3000);
}
bootstrap();
