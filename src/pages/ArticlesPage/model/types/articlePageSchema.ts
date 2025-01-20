import { EntityState } from '@reduxjs/toolkit';
import { Article, View } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';
import { ArticleType } from '@/entities/Article/model/types/article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  hasMore: boolean;
  limit: number;

  //filters
  views: View;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  // для проверки инициализации стейта
  _inited: boolean;
}
