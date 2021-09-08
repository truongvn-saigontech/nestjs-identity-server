import { Injectable } from '@nestjs/common';
import OAuth2Server from 'oauth2-server';

@Injectable()
export class Oauth2ModelService implements OAuth2Server.AuthorizationCodeModel {
  generateAccessToken(
    client: OAuth2Server.Client,
    user: OAuth2Server.User,
    scope: string | string[],
    callback?: OAuth2Server.Callback<string>,
  ): Promise<string> {
    return Promise.resolve('');
  }

  generateAuthorizationCode(
    client: OAuth2Server.Client,
    user: OAuth2Server.User,
    scope: string | string[],
    callback?: OAuth2Server.Callback<string>,
  ): Promise<string> {
    return Promise.resolve('');
  }

  generateRefreshToken(
    client: OAuth2Server.Client,
    user: OAuth2Server.User,
    scope: string | string[],
    callback?: OAuth2Server.Callback<string>,
  ): Promise<string> {
    return Promise.resolve('');
  }

  getAccessToken(
    accessToken: string,
    callback?: OAuth2Server.Callback<OAuth2Server.Token>,
  ): Promise<OAuth2Server.Token | OAuth2Server.Falsey> {
    return Promise.resolve(undefined);
  }

  getAuthorizationCode(
    authorizationCode: string,
    callback?: OAuth2Server.Callback<OAuth2Server.AuthorizationCode>,
  ): Promise<OAuth2Server.AuthorizationCode | OAuth2Server.Falsey> {
    return Promise.resolve(undefined);
  }

  getClient(
    clientId: string,
    clientSecret: string,
    callback?: OAuth2Server.Callback<OAuth2Server.Client | OAuth2Server.Falsey>,
  ): Promise<OAuth2Server.Client | OAuth2Server.Falsey> {
    return Promise.resolve(undefined);
  }

  revokeAuthorizationCode(
    code: OAuth2Server.AuthorizationCode,
    callback?: OAuth2Server.Callback<boolean>,
  ): Promise<boolean> {
    return Promise.resolve(false);
  }

  saveAuthorizationCode(
    code: Pick<
      OAuth2Server.AuthorizationCode,
      'authorizationCode' | 'expiresAt' | 'redirectUri' | 'scope'
    >,
    client: OAuth2Server.Client,
    user: OAuth2Server.User,
    callback?: OAuth2Server.Callback<OAuth2Server.AuthorizationCode>,
  ): Promise<OAuth2Server.AuthorizationCode | OAuth2Server.Falsey> {
    return Promise.resolve(undefined);
  }

  saveToken(
    token: OAuth2Server.Token,
    client: OAuth2Server.Client,
    user: OAuth2Server.User,
    callback?: OAuth2Server.Callback<OAuth2Server.Token>,
  ): Promise<OAuth2Server.Token | OAuth2Server.Falsey> {
    return Promise.resolve(undefined);
  }

  validateScope(
    user: OAuth2Server.User,
    client: OAuth2Server.Client,
    scope: string | string[],
    callback?: OAuth2Server.Callback<string | OAuth2Server.Falsey>,
  ): Promise<string | string[] | OAuth2Server.Falsey> {
    return Promise.resolve(undefined);
  }

  verifyScope(
    token: OAuth2Server.Token,
    scope: string | string[],
    callback?: OAuth2Server.Callback<boolean>,
  ): Promise<boolean> {
    return Promise.resolve(false);
  }
}
