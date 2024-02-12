import { UniqueConstraintViolationException } from '@mikro-orm/core';
import { BaseExceptionFilter } from '@nestjs/core';
import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ErrorFilterResponse } from 'src/lib/dtos/error.dto';

@Catch(UniqueConstraintViolationException)
export class UniqueConstraintViolationExceptionFilter extends BaseExceptionFilter {
  catch(exception: UniqueConstraintViolationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const wrapper = new ErrorFilterResponse();

    response.status(HttpStatus.CONFLICT).send(wrapper.response(HttpStatus.CONFLICT, exception.message));
  }
}
