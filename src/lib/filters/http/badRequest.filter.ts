import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, BadRequestException, Catch, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ErrorFilterResponse } from 'src/lib/dtos/error.dto';

@Catch(BadRequestException)
export class BadRequestExceptionFilter extends BaseExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const wrapper = new ErrorFilterResponse();

    response.status(HttpStatus.BAD_REQUEST).send(wrapper.response(HttpStatus.BAD_REQUEST, exception.message));
  }
}
