import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { NewsAuthor } from 'src/app/models/news-author';

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

    authors: NewsAuthor[];

    constructor(private authorService: AuthorService) { }

    ngOnInit() {
        this.authorService.getAuthors().subscribe(authors => {
            this.authors = authors;
        });
    }

}
