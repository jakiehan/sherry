import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, View } from '@/entities/Article';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { VIEW_LOCALE_STORAGE_KEY } from '@/shared/constants/localstorage';
import { SortOrder } from '@/shared/types/sort';
import { ArticleType } from '@/entities/Article';

const initialView: View =
  (localStorage.getItem(VIEW_LOCALE_STORAGE_KEY) as View) ?? 'place';

const initialLimit = initialView === 'place' ? 18 : 4;

const initialState: ArticlePageSchema = {
  ids: [],
  entities: {},
  error: undefined,
  isLoading: false,
  views: initialView,
  page: 1,
  hasMore: true,
  limit: initialLimit,
  order: 'asc',
  search: '',
  sort: ArticleSortField.CREATED,
  type: ArticleType.ALL,
  _inited: false,
};

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage ?? articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState:
    articlesAdapter.getInitialState<ArticlePageSchema>(initialState),
  reducers: {
    setViews: (state, action: PayloadAction<View>) => {
      state.views = action.payload;
      localStorage.setItem(VIEW_LOCALE_STORAGE_KEY, action.payload);
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
        state._inited = true;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } =
  articlePageSlice;
