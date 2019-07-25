import {Component, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('commentText', {static: false}) commentText;


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

    this.videoService.saveNewRecommendation(recommendation).subscribe(response => {
      this.getDetails();
      this.newComment = '';
      this.newRating = undefined;
    });
  }

  makeTextEditable(index: number) {
    const item = document.getElementById(index.toString(10));
    item.setAttribute('contentEditable', 'true');
    item.classList.add('update-comment');
  }

  onEdit(index: number, recommendation: Recommendation) {
    const item = document.getElementById(index.toString(10));
    const updatedComment = item.textContent;

    item.setAttribute('contentEditable', 'false');
    item.classList.remove('update-comment');

    recommendation.comment = updatedComment;

    this.videoService.updateComment(recommendation).subscribe( response => this.getDetails());
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
