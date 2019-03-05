import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsAuthor } from 'src/app/models/news-author';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get<NewsAuthor[]>(environment.apiEndpoint + 'authors');
  }

  getAuthorById(id: string) {
    return this.http.get<NewsAuthor>(environment.apiEndpoint + 'authors/' + id);
  }
}
