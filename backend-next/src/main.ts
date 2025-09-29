import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend (Next.js on port 3000)
  app.enableCors({
    origin: 'http://localhost:3000', // Next.js dev server
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  await app.listen(5000); // backend port
}
bootstrap();
