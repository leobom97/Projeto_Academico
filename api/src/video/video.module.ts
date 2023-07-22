import { Module } from '@nestjs/common';
import { VideoService } from './services/video.service';
import { VideoController } from './controllers/video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from 'src/entities/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideoController],
  providers: [VideoService],
  exports: [TypeOrmModule.forFeature([Video])],
})
export class VideoModule {}
