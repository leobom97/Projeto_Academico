import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRooms } from '../models/rooms.interface';
import { Observable } from 'rxjs';
import {
  API_PATH_ROOMS,
  API_PATH_ROOMS_CREATE,
} from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly snackBar: MatSnackBar
  ) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  createRoom(room: IRooms): Observable<IRooms> {
    return this.httpClient.post<IRooms>(`${API_PATH_ROOMS_CREATE}`, room);
  }

  getRooms(): Observable<IRooms[]> {
    return this.httpClient.get<IRooms[]>(`${API_PATH_ROOMS}`);
  }

  getRoom(id: any): Observable<IRooms> {
    const _url = `${API_PATH_ROOMS}/${id}`;
    return this.httpClient.get<IRooms>(_url);
  }

  updateRoom(room: IRooms): Observable<IRooms> {
    const _url = `${API_PATH_ROOMS}/${room.id}`;
    return this.httpClient.patch<IRooms>(_url, room);
  }

  deleteRoom(id: any): Observable<IRooms> {
    const _url = `${API_PATH_ROOMS}/${id}`;
    return this.httpClient.delete<IRooms>(_url);
  }
}
