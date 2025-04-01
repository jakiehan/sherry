import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Button } from '@/shared/ui/deprecated/Button';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { Card } from '@/shared/ui/deprecated/Card';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { useNavigate } from 'react-router-dom';
import { getRouteArticles } from '@/app/providers/Router/constants/router';

interface ArticleDetailsPageDeprecatedProps {
  className?: string;
  id?: string;
  errorArticle?: string;
}

export const ArticleDetailsPageDeprecated: FC<
  ArticleDetailsPageDeprecatedProps
> = ({ className, errorArticle, id }) => {
  const { t } = useTranslation('article');

  const navigate = useNavigate();

  const handleClickBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  return (
    <Page
      className={classNames('', {}, [className])}
      isSaveScrollPosition
      data-testid="article-details-page"
    >
      <Button
        onClick={handleClickBackToList}
        variant="outline"
      >
        {t('Назад к списку')}
      </Button>
      <ArticleDetails id={id} />
      <ToggleFeatures
        name="isArticleRatingEnabled"
        on={<ArticleRating articleId={id!} />}
        off={<Card>{t('Оценка статей скоро появится')}</Card>}
      />
      <ArticleRecommendationsList />
      {!errorArticle && <ArticleDetailsComments id={id} />}
    </Page>
  );
};
