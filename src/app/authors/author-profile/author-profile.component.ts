import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NewsAuthor } from 'src/app/models/news-author';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news';

@Component({
    selector: 'app-author-profile',
    templateUrl: './author-profile.component.html',
    styleUrls: ['./author-profile.component.css']
})
export class AuthorProfileComponent implements OnInit {

    author: NewsAuthor;
    news: News[];

    constructor(private authorService: AuthorService,
                private route: ActivatedRoute,
                private newsService: NewsService) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            map(params => params.get('id'))
        ).subscribe(id => {
            this.authorService.getAuthorById(id).toPromise().then(author => this.author = author);
            this.newsService.getNewsFromAuthor(id).toPromise().then(news => this.news = news);
        });
    }

}
