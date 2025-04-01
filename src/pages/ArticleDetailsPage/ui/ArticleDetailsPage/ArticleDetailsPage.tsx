import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsError } from '@/entities/Article';
import { articleDetailsPageReducer } from '../../model/slice';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { ArticleDetailsPageDeprecated } from './ArticleDetailsPageDeprecated/ArticleDetailsPageDeprecated';
import { ArticleDetailsPageRedesigned } from './ArticleDetailsPageRedesigned/ArticleDetailsPageRedesigned';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { id } = useParams();

  const errorArticle = useSelector(getArticleDetailsError);

  if (!id && __PROJECT__ === 'frontend') {
    return null;
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <ArticleDetailsPageRedesigned
            id={id}
            className={className}
            errorArticle={errorArticle}
          />
        }
        off={
          <ArticleDetailsPageDeprecated
            id={id}
            className={className}
            errorArticle={errorArticle}
          />
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
