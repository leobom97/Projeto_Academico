import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRooms } from 'src/app/shared/models/rooms.interface';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css'],
})
export class DeleteRoomComponent implements OnInit {
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
    const id: string = this.route.snapshot.paramMap.get('id');
    this.roomService.getRoom(id).subscribe((room) => {
      this.room = room;
    });
  }

  public deleteRoom() {
    this.roomService.deleteRoom(this.room).subscribe(() => {
      this.roomService.showMessage('Room Succefully Deleted!!!');
      this.router.navigate(['/rooms']);
    });
  }

  public cancelDelete() {
    this.router.navigate(['/rooms']);
  }
}
