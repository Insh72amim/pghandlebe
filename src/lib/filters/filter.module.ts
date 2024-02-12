import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundErrorFilter } from './mikro-orm/not-found-error.filter';
import { ConstraintViolationExceptionFilter } from './mikro-orm/constraint-violation-exception.filter';
import { UniqueConstraintViolationExceptionFilter } from './mikro-orm/unique-constraint-violation-exception.filter';
import { UnauthorizedExceptionFilter } from './http/unauthorised.filter';
import { BadRequestExceptionFilter } from './http/badRequest.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: NotFoundErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ConstraintViolationExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: UniqueConstraintViolationExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: UnauthorizedExceptionFilter,
    },
  ],
})
export class FilterModule {}
