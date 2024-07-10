import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';

export class InternalServerError extends HttpException {
  constructor(error: string) {
    super(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
