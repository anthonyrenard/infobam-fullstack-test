import { HttpException, HttpStatus } from '@nestjs/common';

export class VehicleNotFoundException extends HttpException {
  constructor(id: string) {
    super({
      status: HttpStatus.NOT_FOUND,
      error: 'Vehicle Not Found',
      message: `Vehicle with ID ${id} not found`,
      timestamp: new Date().toISOString()
    }, HttpStatus.NOT_FOUND);
  }
}

export class InvalidFilterException extends HttpException {
  constructor(message: string) {
    super({
      status: HttpStatus.BAD_REQUEST,
      error: 'Invalid Filter Parameters',
      message,
      timestamp: new Date().toISOString()
    }, HttpStatus.BAD_REQUEST);
  }
}