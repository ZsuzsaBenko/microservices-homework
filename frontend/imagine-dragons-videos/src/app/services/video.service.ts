import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpParams} from '@angular/common/http';
import {Video} from '../models/Video';

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


}
