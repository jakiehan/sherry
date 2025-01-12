import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articlePage?.isLoading;

export const getArticlesError = (state: StateSchema) =>
  state.articlePage?.error;

export const getArticlesViews = (state: StateSchema) =>
  state.articlePage?.views || 'place';

export const getArticlesPage = (state: StateSchema) =>
  state.articlePage?.page || 1;

export const getArticlesLimit = (state: StateSchema) =>
  state.articlePage?.limit;

export const getArticlesHasMore = (state: StateSchema) =>
  state.articlePage?.hasMore;

export const getArticlesInited = (state: StateSchema) =>
  state.articlePage?._inited;

export const getArticlesOrder = (state: StateSchema) =>
  state.articlePage?.order ?? 'asc';

export const getArticlesSearch = (state: StateSchema) =>
  state.articlePage?.search ?? '';

export const getArticlesSort = (state: StateSchema) =>
  state.articlePage?.sort ?? ArticleSortField.VIEWS;

export const getArticlesType = (state: StateSchema) =>
  state.articlePage?.type ?? ArticleType.ALL;
