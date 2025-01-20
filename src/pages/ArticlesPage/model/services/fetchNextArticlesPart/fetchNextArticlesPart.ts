import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  getArticlesHasMore,
  getArticlesIsLoading,
  getArticlesPage,
} from '../../selectors/articlesList';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPart = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('article/fetchNextArticlesPart', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const page = getArticlesPage(getState());
  const hasMore = getArticlesHasMore(getState());
  const isLoading = getArticlesIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlePageActions.setPage(page + 1));
    dispatch(fetchArticlesList({}));
  }
});
