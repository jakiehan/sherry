import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesOrder,
  getArticlesSearch,
  getArticlesSort,
  getArticlesType,
  getArticlesViews,
} from '../../model/selectors/articlesList';
import { useCallback } from 'react';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleSortField, ArticleType, View } from '@/entities/Article';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import { SortOrder } from '@/shared/types/sort';

export const useArticleFilters = () => {
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
      console.log(newSort);
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

  return {
    view,
    sort,
    order,
    search,
    type,
    toggleView,
    handleChangeOrder,
    handleChangeSort,
    handleChangeSearch,
    handleChangeType,
  };
};
