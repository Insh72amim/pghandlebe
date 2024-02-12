import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { ErrorFilterResponse } from 'src/lib/dtos/error.dto';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter extends BaseExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const wrapper = new ErrorFilterResponse();

    response.status(HttpStatus.UNAUTHORIZED).send(wrapper.response(HttpStatus.UNAUTHORIZED, exception.message));
  }
}
