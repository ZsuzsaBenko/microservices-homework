import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {VideoDetails} from '../../models/VideoDetails';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  videoDetails = new VideoDetails();
  videoSrc: any;
  videoId: number;

  constructor(private videoService: VideoService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.videoId = this.route.snapshot.params.id;

    this.videoService.getVideoDetails(this.videoId).subscribe(response => {
      this.videoDetails.id = response.id;
      this.videoDetails.name = response.name;
      this.videoDetails.recommendations = response.recommendations;
      this.videoSrc = this.getSafeUrl(response.url);
    });
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
