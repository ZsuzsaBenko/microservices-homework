import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpParams} from '@angular/common/http';
import {Video} from '../models/Video';
import {VideoDetails} from '../models/VideoDetails';
import {Recommendation} from '../models/Recommendation';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  baseUrl = 'http://localhost:8762/video-service/videos';

  constructor(private http: HttpClient) {
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl + '/all');
  }

  getVideoDetails(id: number): Observable<VideoDetails> {
    return this.http.get<VideoDetails>(this.baseUrl + '/' + id);
  }


  saveNewRecommendation(recommendation: Recommendation) {
    const url = this.baseUrl + '/' + recommendation.videoId + '/recommendation';
    return this.http.post(url, recommendation, httpOptions);
  }
}
