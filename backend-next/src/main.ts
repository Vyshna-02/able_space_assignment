import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow requests from frontend
  await app.listen(5000);
  console.log('Backend running on http://localhost:5000');
}

bootstrap();


