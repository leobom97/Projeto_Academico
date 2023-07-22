import { Injectable, NotFoundException } from '@nestjs/common';
import { IVideo } from 'src/shared/interfaces/video.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/entities/video.entity';
import { Repository } from 'typeorm';
import { IUpdateVideo } from 'src/shared/interfaces/updateVideo.interface';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
  ) {}

  async create(video: IVideo) {
    const newVideo = this.videoRepository.create(video);

    await this.videoRepository.save(newVideo);

    return newVideo;
  }

  async findAll() {
    return this.videoRepository.find();
  }

  async findOne(id: number) {
    return this.videoRepository.findOneBy({ id: id });
  }

  async update(id: number, updateVideo: IUpdateVideo) {
    const video = this.videoRepository.findOneBy({ id: id });

    if (!video) {
      throw new NotFoundException(
        `Video ${id} was not found. Please enter a valid id for the video`,
      );
    }

    await this.videoRepository.update(id, updateVideo);

    return video;
  }

  async remove(id: number) {
    return this.videoRepository.delete(id);
  }
}
