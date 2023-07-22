/* eslint-disable prettier/prettier */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SubjectService } from './services/subject.service';
import { SubjectController } from './controllers/subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';
import { MulterModule } from '@nestjs/platform-express';
import { SubjectIdCheckMiddleware } from 'src/middlewares/subject-id-check.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subject]),
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [SubjectController],
  providers: [SubjectService],
  exports: [
    SubjectService,
    TypeOrmModule.forFeature([Subject]),
    MulterModule.register({ dest: './uploads' }),
  ],
})
export class SubjectModule {}
