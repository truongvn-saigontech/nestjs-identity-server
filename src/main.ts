import 'dotenv/config';
import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';

import {
  Logger,
  RequestMethod,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppNest } from './app.model';
import { join } from 'path';

const NOOP = () => null;

async function bootstrap() {
  const app: AppNest = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api', {
    exclude: [
      {
        path: 'oauth2/token',
        method: RequestMethod.GET,
      },
      {
        path: 'auth',
        method: RequestMethod.GET,
      },
    ],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      validationError: {
        value: false,
      },
      transform: true,
    }),
  );
  app.use(cookieParser());

  const options = new DocumentBuilder()
    .setTitle('Nestjs identity server')
    .setDescription('Nestjs identity server description')
    .setVersion('1.0')
    .build();

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setViewEngine('ejs');

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.APP_PORT);

  Logger.log(`App is running on port ${process.env.APP_PORT}`);
}

bootstrap().then(NOOP);
