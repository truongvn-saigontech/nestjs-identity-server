import { NestApplication } from '@nestjs/core';
import OAuth2Server from 'oauth2-server';

export class AppNest extends NestApplication {
  oauth: OAuth2Server;
}
