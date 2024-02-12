import { NotFoundError } from '@mikro-orm/core';
import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ErrorFilterResponse } from 'src/lib/dtos/error.dto';

@Catch(NotFoundError)
export class NotFoundErrorFilter extends BaseExceptionFilter {
  catch(exception: NotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const wrapper = new ErrorFilterResponse();

    response.status(HttpStatus.NOT_FOUND).send(wrapper.response(HttpStatus.NOT_FOUND, exception.message));
  }
}
