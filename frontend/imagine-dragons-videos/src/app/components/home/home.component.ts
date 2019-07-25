import { Component, OnInit } from '@angular/core';
import {VideoService} from '../../services/video.service';
import {Video} from '../../models/Video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(response => this.videos = response);
  }

}
