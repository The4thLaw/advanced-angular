import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { accountReducer } from './accounts.reducers';
import { Accounts } from '../models/accounts';
import { newsReducer } from './news.reducers';
import { News } from '../models/news';

export interface State {
  accounts: Accounts;
  news: News[];
  // loggedIn: boolean;
}

export const reducers: ActionReducerMap<State> = {
  accounts: accountReducer,
  news: newsReducer
  /*,
  loggedIn: ...*/
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
