import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRooms } from 'src/app/shared/models/rooms.interface';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent implements OnInit {
  room: IRooms = {
    name: '',
    description: '',
  };

  constructor(
    private readonly router: Router,
    private readonly roomService: RoomService
  ) {}

  ngOnInit(): void {}

  public createNewRoom() {
    return this.roomService.createRoom(this.room).subscribe(() => {
      this.roomService.showMessage('Room Succefully Created!!!'),
        this.router.navigate(['/rooms']);
    });
  }

  public cancelRegistration() {
    this.router.navigate(['/rooms']);
  }
}
