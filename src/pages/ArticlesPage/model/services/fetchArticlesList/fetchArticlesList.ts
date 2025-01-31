import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import {
  getArticlesLimit,
  getArticlesOrder,
  getArticlesPage,
  getArticlesSearch,
  getArticlesSort,
  getArticlesType,
} from '../../selectors/articlesList';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { ArticleType } from '@/entities/Article';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('article/fetchArticlesList', async (props, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;

  const limit = getArticlesLimit(getState());
  const page = getArticlesPage(getState());
  const search = getArticlesSearch(getState());
  const sort = getArticlesSort(getState());
  const order = getArticlesOrder(getState());
  const type = getArticlesType(getState());

  try {
    addQueryParams({ sort, order, search, type });

    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type_like: type === ArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
