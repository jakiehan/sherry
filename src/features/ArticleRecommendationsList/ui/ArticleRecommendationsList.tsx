import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleRecommendationsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsListApi';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';

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
      <div
        className={classNames('', {}, [className])}
        data-testid="articleRecommendationsList"
      >
        <ToggleFeatures
          name="isAppRedesigned"
          on={
            <Text
              title={t('Рекомендуем')}
              size="sizeL"
            />
          }
          off={
            <TextDeprecated
              className={cls.title}
              title={t('Рекомендуем')}
            />
          }
        />

        <ArticleList
          articles={articles}
          isLoading={isLoading}
          className={cls.recommendations}
          target="_blank"
          viewNumber={{ place: 4 }}
        />
      </div>
    );
  }
);

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
