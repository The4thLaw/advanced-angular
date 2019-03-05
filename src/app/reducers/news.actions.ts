import { Action } from '@ngrx/store';
import { News } from '../models/news';

export enum NewsActionType {
    LOAD_NEWS = '[NewsComponent] Load news',
    NEWS_LOADED = '[loadNewsEffect$] News loaded'
}

export class LoadNewsAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS;
}

export class NewsLoadedAction implements Action {
    readonly type = NewsActionType.NEWS_LOADED;

    constructor(public news: News[]) {}
}

export type NewsAction = LoadNewsAction | NewsLoadedAction;
