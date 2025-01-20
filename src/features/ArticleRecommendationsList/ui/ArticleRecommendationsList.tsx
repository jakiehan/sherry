import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleRecommendationsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/Text';
import { ArticleList } from '@/entities/Article';
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsListApi';

const LIMIT = 4;

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  ({ className }: ArticleRecommendationsListProps) => {
    const { t } = useTranslation();

    const { data: articles, isLoading } =
      useGetArticleRecommendationsQuery(LIMIT);

    return (
      <div className={classNames('', {}, [className])}>
        <Text
          className={cls.title}
          title={t('Рекомендуем')}
        />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          className={cls.recommendations}
          target="_blank"
        />
      </div>
    );
  }
);

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
