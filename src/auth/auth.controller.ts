import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { RegisterDTO } from './dto/register.dto';
import express from 'express';

@Controller('auth')
@ApiTags('oauth')
export class AuthController {
  @Post('register')
  @ApiOperation({ summary: 'User register' })
  @ApiUnprocessableEntityResponse({
    status: HttpStatus.NOT_MODIFIED,
    description: 'Successful created user',
  })
  @ApiOkResponse({
    description: 'Failed created',
    status: HttpStatus.CREATED,
  })
  async register(
    @Body() registerDto: RegisterDTO,
    @Res() res: express.Response,
  ) {}

}
