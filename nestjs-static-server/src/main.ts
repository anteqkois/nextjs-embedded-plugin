import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT_API_GATEWAY || 3001;
  const host = process.env.ENV === 'prod' ? '0.0.0.0' : '127.0.0.1';

  // app.enableCors({
  //   origin: frontendUrl,
  //   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  //   credentials: true,
  // });
  app.enableCors();

  await app.listen(port);

  Logger.log(`🚀 Api service is running on: http://${host}:${port}`);
}
bootstrap();
