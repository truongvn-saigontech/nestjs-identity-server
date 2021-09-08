import { Controller, HttpStatus, Inject, Post, Req, Res } from '@nestjs/common';
import { Oauth2Service } from './services/oauth2.service';
import {
  ApiBody,
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import OAuth2Server from 'oauth2-server';
import express from 'express';
import { REQUEST } from '@nestjs/core';

@ApiTags('oauth2')
@Controller('oauth2')
export class Oauth2Controller {
  constructor(
    private oauth2Service: Oauth2Service,
    @Inject(REQUEST) private requestCtx: express.Request,
  ) {}

  @ApiOperation({
    summary: 'Sign in',
    description: 'Sign in with Oauth2',
  })
  @ApiQuery({
    name: 'grant_type',
    enum: ['password', 'refresh_token', 'authorization_code'],
  })
  @ApiQuery({
    name: 'username',
    description: 'Email. If grant_type = password',
    required: false,
  })
  @ApiQuery({
    name: 'password',
    description: 'If grant_type = password',
    required: false,
  })
  @ApiQuery({
    name: 'code',
    description: 'If grant_type = authorization_code',
    required: false,
  })
  @ApiQuery({
    name: 'refresh_token',
    description: 'If grant_type = refresh_token',
    required: false,
  })
  @Post('token')
  async token(
    @Req() request: express.Request,
    @Res() response: express.Response,
  ) {
    const tokenResult: OAuth2Server.Token =
      await this.oauth2Service.handleToken(this.requestCtx, response);

    return response.json(HttpStatus.OK).json(tokenResult);
  }
}
