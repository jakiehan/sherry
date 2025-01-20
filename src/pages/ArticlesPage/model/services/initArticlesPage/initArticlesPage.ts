import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesInited } from '../../selectors/articlesList';
import { articlePageActions } from '../../slice/articlePageSlice';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('article/initArticlesPage', async (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const inited = getArticlesInited(getState());

  if (!inited) {
    const searchParamFromUrl = searchParams.get('search');
    const orderParamFromUrl = searchParams.get('order') as SortOrder;
    const sortParamFromUrl = searchParams.get('sort') as ArticleSortField;

    if (searchParamFromUrl) {
      dispatch(articlePageActions.setSearch(searchParamFromUrl));
    }

    if (orderParamFromUrl) {
      dispatch(articlePageActions.setOrder(orderParamFromUrl));
    }

    if (sortParamFromUrl) {
      dispatch(articlePageActions.setSort(sortParamFromUrl));
    }

    dispatch(fetchArticlesList({}));
  }
});
