import { Component, OnInit } from '@angular/core';
import { IRooms } from 'src/app/shared/models/rooms.interface';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-read-room',
  templateUrl: './read-room.component.html',
  styleUrls: ['./read-room.component.css'],
})
export class ReadRoomComponent implements OnInit {
  constructor(private readonly roomService: RoomService) {}

  rooms: IRooms[];
  displayedColumns = ['id', 'name', 'description', 'action'];

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }
}
