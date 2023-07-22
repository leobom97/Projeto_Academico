import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVideo } from '../models/video.interface';
import { Observable } from 'rxjs';
import {
  API_PATH_VIDEOS,
  API_PATH_VIDEOS_CREATE,
} from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
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

  createVideo(video: IVideo): Observable<IVideo> {
    return this.httpClient.post<IVideo>(`${API_PATH_VIDEOS_CREATE}`, video);
  }

  getVideos(): Observable<IVideo[]> {
    return this.httpClient.get<IVideo[]>(`${API_PATH_VIDEOS}`);
  }

  getVideo(id: number): Observable<IVideo> {
    const _url = `${API_PATH_VIDEOS}/${id}`;
    return this.httpClient.get<IVideo>(_url);
  }

  updateVideo(id: number, video: IVideo): Observable<IVideo> {
    const _url = `${API_PATH_VIDEOS}/${video.id}`;
    return this.httpClient.patch<IVideo>(_url, video);
  }

  deleteVideo(id: number): Observable<IVideo> {
    const _url = `${API_PATH_VIDEOS}/${id}`;
    return this.httpClient.delete<IVideo>(_url);
  }
}
