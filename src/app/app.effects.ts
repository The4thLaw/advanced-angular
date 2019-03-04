import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AccountAction, AccountActionType } from './reducers/accounts.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

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
