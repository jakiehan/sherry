import { memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlePageSlice';
import {
  getArticlesInited,
  getArticlesIsLoading,
  getArticlesViews,
} from '../../model/selectors/articlesList';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useSearchParams } from 'react-router-dom';

interface ArticleInfinityListProps {
  className?: string;
}

export const ArticleInfinityList = memo(
  ({ className }: ArticleInfinityListProps) => {
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesViews);
    const isInited = useSelector(getArticlesInited);

    useInitialEffect(() => {
      dispatch(initArticlesPage(searchParams));
    });

    return (
      <ArticleList
        view={view}
        isLoading={isLoading}
        articles={articles}
        inited={isInited}
      />
    );
  }
);

ArticleInfinityList.displayName = 'ArticleInfinityList';
