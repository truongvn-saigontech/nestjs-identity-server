import { Module } from '@nestjs/common';
import { Oauth2Controller } from './oauth2.controller';
import { Oauth2ModelService } from './services/oauth2-model.service';
import { Oauth2Service } from './services/oauth2.service';

@Module({
  controllers: [Oauth2Controller],
  providers: [Oauth2ModelService, Oauth2Service],
})
export class Oauth2Module {}
