import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlePage: articlePageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const loadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPart());
  }, [dispatch]);

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      <Page
        className={classNames(cls.articlesPage, {}, [className])}
        onScrollEnd={loadNextPart}
        isSaveScrollPosition
      >
        <ArticlesPageFilters />
        <ArticleInfinityList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
