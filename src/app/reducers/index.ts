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
import { NewsActionType } from './news.actions';

export interface State {
    accounts: Accounts;
    news: News[];
    loading: string;
    // loggedIn: boolean;
}

export const reducers: ActionReducerMap<State> = {
    accounts: accountReducer,
    news: newsReducer,
    loading: loadingReducer
    /*,
    loggedIn: ...*/
};

// TODO: put this in its own file
export function loadingReducer(oldState: string, action: Action): string {
    switch (action.type) {
        case NewsActionType.LOAD_NEWS:
            return 'Loading news';
        case NewsActionType.NEWS_LOADED:
            return null;
        default:
            return oldState;
    }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
