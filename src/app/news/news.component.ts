import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LoadNewsAction } from '../reducers/news.actions';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadNewsAction());
  }

}
