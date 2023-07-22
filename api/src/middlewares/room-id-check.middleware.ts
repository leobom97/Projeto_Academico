/* eslint-disable prettier/prettier */
import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class RoomIdCheckMiddleware implements NestMiddleware {
  apply() {
    throw new Error('Method not implemented.');
  }
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Object Request Intercepted by the Middleware');
    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
      throw new BadRequestException(
        `Invalid Id. Please enter a numeric valid id on the request`,
      );
    }
    console.log('Object Request pass throught Middleware');
    next();
  }
}
