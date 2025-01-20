import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUserName';
import {
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ArticleDetailsSchema } from '@/entities/Article';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { ArticlePageSchema } from '@/pages/ArticlesPage';
import { SaveScrollSchema } from '@/features/ScrollSave';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  saveScroll: SaveScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редусеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema; // сгруппированы комменты и рекомендации
  addCommentForm?: AddCommentFormSchema;
  articlePage?: ArticlePageSchema;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: Reducer<CombinedState<StateSchema>>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
