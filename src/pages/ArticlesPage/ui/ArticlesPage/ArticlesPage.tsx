import { FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageReducer } from '../../model/slice/articlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPart } from '../../model/services/fetchNextArticlesPart/fetchNextArticlesPart';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ArticleViewSwitcherContainer } from '../ArticleViewSwitcherContainer/ArticleViewSwitcherContainer';
import { ArticleFiltersContainer } from '../ArticleFiltersContainer/ArticleFiltersContainer';

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

  const content = (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <StickyContentLayout
          content={
            <Page
              className={classNames(cls.articlesPage, {}, [className])}
              onScrollEnd={loadNextPart}
              isSaveScrollPosition
              data-testid="article-page"
            >
              <ArticleInfinityList />
            </Page>
          }
          left={<ArticleViewSwitcherContainer />}
          right={<ArticleFiltersContainer />}
        />
      }
      off={
        <Page
          className={classNames(cls.articlesPage, {}, [className])}
          onScrollEnd={loadNextPart}
          isSaveScrollPosition
          data-testid="article-page"
        >
          <ArticlesPageFilters />
          <ArticleInfinityList />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount={false}
    >
      {content}
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
