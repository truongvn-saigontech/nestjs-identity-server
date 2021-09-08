import { Injectable } from '@nestjs/common';
import { Oauth2ModelService } from './oauth2-model.service';
import OAuth2Server from 'oauth2-server';
import express from 'express';

@Injectable()
export class Oauth2Service {
  public oauth2Server: OAuth2Server;
  constructor(private oauth2ModelService: Oauth2ModelService) {}

  initOauthServer() {
    this.oauth2Server = new OAuth2Server({
      model: this.oauth2ModelService,
    });
  }

  async handleToken(
    req: express.Request,
    res: express.Response,
  ): Promise<OAuth2Server.Token> {
    this.initOauthServer();
    const request = new OAuth2Server.Request(req);
    const response = new OAuth2Server.Response(res);

    try {
      return await this.oauth2Server.token(request, response);
    } catch (e) {}
  }

  async handleAuthorize(
    req: express.Request,
    res: express.Response,
  ): Promise<OAuth2Server.AuthorizationCode> {
    this.initOauthServer();
    const request = new OAuth2Server.Request(req);
    const response = new OAuth2Server.Response(res);
    try {
      return await this.oauth2Server.authorize(request, response);
    } catch (e) {}
  }
}
