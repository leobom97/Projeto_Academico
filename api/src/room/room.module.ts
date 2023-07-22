import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RoomController } from './controllers/room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/entities/room.entity';
import { RoomService } from './services/room.service';
import { VideoModule } from 'src/video/video.module';
import { SubjectModule } from 'src/subject/subject.module';

@Module({
  imports: [TypeOrmModule.forFeature([Room]), VideoModule, SubjectModule],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
