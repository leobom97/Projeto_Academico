/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/entities/room.entity';
import { IRoom } from 'src/shared/interfaces/room.interface';
import { Repository } from 'typeorm';
import { Video } from 'src/entities/video.entity';
import { IVideo } from 'src/shared/interfaces/video.interface';
import { Subject } from 'src/entities/subject.entity';
import { IUpdateRoom } from 'src/shared/interfaces/updateRoom.interface';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async createRoom(room: IRoom) {
    const newRoom = this.roomRepository.create(room);

    await this.roomRepository.save(newRoom);

    return newRoom;
  }

  async createVideo(video: IVideo, id: number) {
    const Room = await this.roomRepository.findOneBy({ id: id });

    if (!id) {
      throw new NotFoundException(`Room doesn't exist`);
    }

    const newVideo = this.videoRepository.create({
      title: video.title,
      url: video.url,
      room: Room,
    });

    await this.videoRepository.save(newVideo);

    return newVideo;
  }

  async roomSubject(idRoom: number, subject_id: number) {
    const Room = await this.roomRepository.findOneBy({ id: idRoom });

    if (!Room) {
      throw new NotFoundException(
        `Room ${idRoom} was not found. Please enter a valid id for the room`,
      );
    }

    const subject = await this.subjectRepository.findOneBy({ id: subject_id });

    if (!subject) {
      throw new NotFoundException(
        `Subject ${subject_id} was not found. Please enter a valid id for the subject`,
      );
    }

    const roomUpdate = {
      ...Room,
      subjects: [subject],
    };

    await this.roomRepository.save(roomUpdate);

    return roomUpdate;
  }

  async findAll() {
    return this.roomRepository.find();
  }

  async findOne(id: number) {
    const room = this.roomRepository.findOneBy({ id: id });

    if (!room) {
      throw new NotFoundException(
        `The room ${id} was not found. Please enter a valid id to find`,
      );
    }

    return room;
  }

  async update(id: number, updateRoom: IUpdateRoom) {
    const room = this.roomRepository.findOneBy({ id: id });

    if (!room) {
      throw new NotFoundException(
        `The room ${id} was not found. Please enter a valid id to find`,
      );
    }

    await this.roomRepository.update({ id: id }, updateRoom);

    return `Room ${id} succefully created`;
  }

  async remove(id: any) {
    return this.roomRepository.delete(id);
  }
}
