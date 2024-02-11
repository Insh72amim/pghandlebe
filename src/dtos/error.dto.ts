import { HttpStatus } from '@nestjs/common';

export interface ErrorDTO {
  status: HttpStatus;
  error: Error;
  message: String;
}
