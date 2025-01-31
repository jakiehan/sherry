import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPageFilters.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { ArticleSortField, ArticleTypeTabs, View } from '@/entities/Article';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import { useSelector } from 'react-redux';
import {
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort,
  getArticlesType,
  getArticlesViews,
} from '../../model/selectors/articlesList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/Card';
import { Input } from '@/shared/Input';
import { ArticleSortSelector } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleType } from '@/entities/Article';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesViews);
    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const toggleView = useCallback(
      (view: View) => {
        dispatch(articlePageActions.setViews(view));
      },
      [dispatch]
    );

    const handleChangeOrder = useCallback(
      (newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const handleChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const handleChangeSearch = useCallback(
      (searchValue: string) => {
        dispatch(articlePageActions.setSearch(searchValue));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
      },
      [dispatch, debounceFetchData]
    );

    const handleChangeType = useCallback(
      (tab: ArticleType) => {
        dispatch(articlePageActions.setType(tab));
        dispatch(articlePageActions.setPage(1));
        debounceFetchData();
      },
      [dispatch, debounceFetchData]
    );

    return (
      <div className={classNames(cls.articlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            onChangeSort={handleChangeSort}
            sort={sort}
            onChangeOrder={handleChangeOrder}
            order={order}
          />
          <ArticleViewSwitcher
            views={view}
            onClick={toggleView}
          />
        </div>
        <Card>
          <Input
            value={search}
            onChange={handleChangeSearch}
            placeholder={t('Поиск')}
          />
        </Card>
        <ArticleTypeTabs
          value={type}
          onChangeType={handleChangeType}
        />
      </div>
    );
  }
);

ArticlesPageFilters.displayName = 'ArticlesPageFilters';
