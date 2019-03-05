import { NewsAuthor } from './news-author';
import { NewsCategory } from './news-category';

export class News {
    id: number;
    title: string;
    description: string;
    author: NewsAuthor;
    category: NewsCategory;
}
