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

export interface State {
  accounts: Accounts;
  // loggedIn: boolean;
}

export const reducers: ActionReducerMap<State> = {
  accounts: accountReducer/*,
  loggedIn: ...*/
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
