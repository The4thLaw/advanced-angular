import { NewsAction, LoadNewsAction, NewsActionType, NewsLoadedAction } from './news.actions';
import { News } from '../models/news';

const defaultNews = [];

export function newsReducer(oldState: News[] = defaultNews, action: NewsAction): News[] {
    switch (action.type) {
        case NewsActionType.NEWS_LOADED:
            return (action as NewsLoadedAction).news;
        default:
            return oldState;
    }
}
