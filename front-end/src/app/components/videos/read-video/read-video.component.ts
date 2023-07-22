import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/shared/models/video.interface';
import { VideoService } from 'src/app/shared/services/video.service';

@Component({
  selector: 'app-read-video',
  templateUrl: './read-video.component.html',
  styleUrls: ['./read-video.component.css'],
})
export class ReadVideoComponent implements OnInit {
  longText: string = `texto`;

  videos: IVideo[];

  constructor(private readonly videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((videos) => {
      this.videos = videos;
    });
  }
}
