import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {Video} from '../../models/Video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    this.videoService.getVideos().subscribe(response => this.videos = response);
    setInterval(() => {this.movePictures(); }, 15000);
  }

  movePictures() {
    const pic1 = document.getElementById('carousel-img1');
    const pic2 = document.getElementById('carousel-img2');
    const pic3 = document.getElementById('carousel-img3');
    const pics = [pic3, pic2, pic1];
    console.log('called');

    setTimeout(() => pic1.style.display = 'none', 5000);
    setTimeout(() => pic2.style.display = 'none', 10000);
    setTimeout(() => {
      pics.forEach(pic => pic.style.display = 'block');
    }, 15000);
  }

}
