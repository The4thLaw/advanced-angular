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
import { Account } from '../models/account';

export interface State {
  accounts: Account[];
  // loggedIn: boolean;
}

export const reducers: ActionReducerMap<State> = {
  accounts: accountReducer/*,
  loggedIn: ...*/
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
