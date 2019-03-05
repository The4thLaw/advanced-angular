import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../models/news';
import { ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  loadNews() {
    return this.http.get<News[]>(environment.newsEndpointRoot + 'news');
  }
}
