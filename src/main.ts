import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { logger, loggerError } from './common/middleware/logger.middleware';
import { json, urlencoded } from 'body-parser';

async function bootstrap() {
  const basePath = 'api/v1';
  const app = await NestFactory.create(AppModule);

  app.use(logger);
  app.use(loggerError);
  app.setGlobalPrefix(basePath);
  app.useGlobalPipes(new ValidationPipe());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  // Setup Swagger
  const options = new DocumentBuilder()
    .setTitle('PDF API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  await app.listen(57300);
}
bootstrap();
