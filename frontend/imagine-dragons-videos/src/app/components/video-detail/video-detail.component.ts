import {Component, OnInit} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {VideoDetails} from '../../models/VideoDetails';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Recommendation} from '../../models/Recommendation';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  videoDetails = new VideoDetails();
  videoSrc: any;
  videoId: number;
  newComment: string;
  newRating: number;

  constructor(private videoService: VideoService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.videoId = this.route.snapshot.params.id;
    this.getDetails();
  }

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onSubmit() {
    const recommendation = new Recommendation();
    recommendation.comment = this.newComment;
    recommendation.rating = (this.newRating >= 0 && this.newRating <= 5) ? this.newRating : 0;
    recommendation.videoId = this.videoId;

    this.videoService.saveNewRecommendation(recommendation).subscribe( response => {
      this.getDetails();
      this.newComment = '';
      this.newRating = undefined;
    });
  }

  getDetails() {
    this.videoService.getVideoDetails(this.videoId).subscribe(response => {
      this.videoDetails.id = response.id;
      this.videoDetails.name = response.name;
      this.videoDetails.recommendations = response.recommendations;
      this.videoSrc = this.getSafeUrl(response.url);
    });
  }

}
