import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { Response } from 'express';
import { RoomService } from '../services/room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.findOne(id);
  }

  @Post('register')
  create(@Body() createRoomDto: CreateRoomDto, @Res() res: Response) {
    return (
      this.roomService.createRoom(createRoomDto),
      res.json({ message: 'Room succefully created' })
    );
  }

  // @Post(':idRoom/create')
  // createVideo(
  //   @Param('idRoom', ParseIntPipe) idRoom: number,
  //   @Body() createVideoDto: CreateVideoDto,
  // ) {
  //   return this.roomService.createVideo(createVideoDto, idRoom);
  // }

  // @Post(':idRoom/subject')
  // roomSubject(
  //   @Param('idRoom', ParseIntPipe) idRoom: number,
  //   @Body(ParseIntPipe) subject_id: number,
  // ) {
  //   return this.roomService.roomSubject(idRoom, subject_id);
  // }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoom: UpdateRoomDto,
    @Res() res: Response,
  ) {
    return (
      this.roomService.update(id, updateRoom),
      res.json({ message: 'Room succefully updated' })
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.remove(id);
  }
}
