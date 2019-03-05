import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { LoadNewsAction } from '../reducers/news.actions';
import { News } from '../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.pipe(
      select('news')
    ).subscribe(news => {
      this.news = news;
    });

    this.store.dispatch(new LoadNewsAction());
  }

}
