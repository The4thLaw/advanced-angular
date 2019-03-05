import { Action } from '@ngrx/store';

export enum NewsActionType {
    LOAD_NEWS = 'Load news'
}

export class LoadNewsAction implements Action {
    readonly type = NewsActionType.LOAD_NEWS;
}
