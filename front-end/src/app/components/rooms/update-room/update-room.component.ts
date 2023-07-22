import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRooms } from 'src/app/shared/models/rooms.interface';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css'],
})
export class UpdateRoomComponent implements OnInit {
  room: IRooms = {
    name: '',
    description: '',
  };

  constructor(
    private readonly roomService: RoomService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id).subscribe((room) => {
      this.room = room;
    });
  }

  public updateRoom() {
    this.roomService.updateRoom(this.room).subscribe(() => {
      this.roomService.showMessage('Room Succefully Updated!!!');
      this.router.navigate(['/rooms']);
    });
  }

  public cancelUpdate() {
    this.router.navigate(['/rooms']);
  }
}
