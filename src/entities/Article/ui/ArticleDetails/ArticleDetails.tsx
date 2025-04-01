import { memo, useEffect } from 'react';
import cls from './ArticleDetails.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { Article } from '../../model/types/article';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';

export interface ArticleDetailsProps {
  id?: string;
  className?: string;
  isLoading?: boolean;
  article?: Article;
  error?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const props = {
    article,
    error,
    isLoading,
  };

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.articleDetails, {}, [className])}>
        <ToggleFeatures
          name="isAppRedesigned"
          on={<ArticleDetailsRedesigned {...props} />}
          off={<ArticleDetailsDeprecated {...props} />}
        />
      </div>
    </DynamicModuleLoader>
  );
});

ArticleDetails.displayName = 'ArticleDetails';
