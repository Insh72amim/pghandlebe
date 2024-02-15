import { HttpStatus } from '@nestjs/common';

export interface ErrorDTO {
  status: HttpStatus;
  error: Error;
  message: string;
}

export class ErrorFilterResponse {
  constructor() {}

  response(status: HttpStatus, message: string) {
    return {
      status,
      message,
      timestamp: new Date(),
    };
  }
}
