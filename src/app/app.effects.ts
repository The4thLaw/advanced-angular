import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AccountAction, AccountActionType } from './reducers/accounts.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { LoadNewsAction, NewsActionType, NewsLoadedAction } from './reducers/news.actions';
import { NewsService } from './services/news.service';
import { empty, of } from 'rxjs';
import { emptyScheduled } from 'rxjs/internal/observable/empty';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  @Effect()
  loadNewsEffect$ = this.actions$.pipe(
    // Only process news load actions
    ofType(NewsActionType.LOAD_NEWS),
    // Each time an action is sent, cancel the last one and re-start loading the news
    switchMap(() => {
      return this.newsService.loadNews()
        .pipe(
          map(loadedNews => new NewsLoadedAction(loadedNews)),
          catchError(error => {
            console.log(error);
            // This allows not returning any action
            return of(empty);
          })
        );
    })
  );

  /*@Effect()
  foo$ = this.actions$.pipe(
    // Only process deposits
    ofType(AccountActionType.deposit),
    // For each of them
    map((action: AccountAction) => {
      // And then the reducers should be able to process those actions, rather than the original ones
      if (action.amount > 1000) {
        return { type: 'DepositError', reason: 'Too much'};
      }
      return { type: 'DepositConfirm', amount: action.amount, accountId: action.accountId};
    })
  );*/
}
