import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import {
  useGetArticleRatingQuery,
  useRateArticleMutation,
} from '../api/articleRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();

  const user = useSelector(getUserAuthData);

  const { data, isFetching, isError } = useGetArticleRatingQuery({
    articleId,
    userId: user?.id ?? '',
  });

  const [rateArticle] = useRateArticleMutation();

  const handleRateArticle = useCallback(
    (starCount: number, feedback?: string) => {
      rateArticle({
        articleId,
        userId: user?.id ?? '',
        rate: starCount,
        feedback,
      });
    },
    [articleId, rateArticle, user?.id]
  );

  const handleAccept = useCallback(
    (starCount: number, feedback?: string) => {
      handleRateArticle(starCount, feedback);
    },
    [handleRateArticle]
  );

  const handleCancel = useCallback(
    (starCount: number) => {
      handleRateArticle(starCount);
    },
    [handleRateArticle]
  );

  if (isFetching) {
    return (
      <Skeleton
        width="100%"
        height={120}
      />
    );
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={handleAccept}
      onCancel={handleCancel}
      className={className}
      title={t('Как вам статья?')}
      feedbackTitle={t('Оставьте отзыв о статье')}
      rate={rating?.rate}
    />
  );
});

ArticleRating.displayName = 'ArticleRating';

export default ArticleRating;
