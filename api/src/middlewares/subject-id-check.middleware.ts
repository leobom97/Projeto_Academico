/* eslint-disable prettier/prettier */
import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class SubjectIdCheckMiddleware implements NestMiddleware {
  apply() {
    throw new Error('Method not implemented.');
  }
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Objeto Request Interceptado pelo Middleware');
    if (isNaN(Number(req.params.id)) || Number(req.params.id) <= 0) {
      throw new BadRequestException(
        `Por favor entre com um nome válido de Id. Ou tente mais tarde`,
      );
    }
    console.log('Objeto Request Passou pelo Middleware');
    next();
  }
}
