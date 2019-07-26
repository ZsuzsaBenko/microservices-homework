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
    setInterval(() => {
      this.changePictures();
    }, 15000);
  }

  changePictures() {
    const pic1 = document.getElementById('carousel-img1');
    const pic2 = document.getElementById('carousel-img2');
    const pic3 = document.getElementById('carousel-img3');

    setTimeout(() => {
      pic1.style.transition = 'opacity 1s ease-out';
      pic1.style.opacity = '0';
      pic2.style.transition = 'none';
      pic2.style.opacity = '1';
    }, 4000);
    setTimeout(() => {
      pic2.style.transition = 'opacity 1s ease-out';
      pic2.style.opacity = '0';
      pic3.style.transition = 'none';
      pic3.style.opacity = '1';
    }, 9000);
    setTimeout(() => {
      pic1.style.transition = 'opacity 1s ease-out';
      pic1.style.opacity = '1';
      pic3.style.transition = 'opacity 1s ease-out';
      pic3.style.opacity = '0';
    }, 14000);
  }

}
