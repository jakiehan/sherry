import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsError } from '@/entities/Article';
import { Button } from '@/shared/Button';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@/app/providers/Router/lib/routeConfig/routeConfig';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation('article');

  const { id } = useParams();
  const navigate = useNavigate();

  const errorArticle = useSelector(getArticleDetailsError);

  const handleClickBackToList = useCallback(() => {
    navigate(routePath.articles);
  }, [navigate]);

  if (!id && __PROJECT__ === 'frontend') {
    return null;
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <Page
        className={classNames('', {}, [className])}
        isSaveScrollPosition
      >
        <Button
          onClick={handleClickBackToList}
          variant="outline"
        >
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <ArticleRating articleId={id!} />
        <ArticleRecommendationsList />
        {!errorArticle && <ArticleDetailsComments id={id} />}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
