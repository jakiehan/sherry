import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../ArticleDetails.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { renderArticleBlock } from '../../../lib/renderArticleBlock';
import { ArticleDetailsProps } from '../ArticleDetails';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { VStack } from '@/shared/ui/redesigned/Flex';

export const ArticleDetailsRedesigned = memo(
  ({ article, error, isLoading }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');

    if (isLoading) {
      return (
        <div className={cls.contentWrapper}>
          <Skeleton
            width={300}
            height={31}
          />
          <Skeleton
            width={350}
            height={31}
          />
          <Skeleton
            width="100%"
            height={420}
          />
          <Skeleton
            width={339}
            height={31}
          />
          <Skeleton
            width="100%"
            height={200}
          />
          <Skeleton
            width="100%"
            height={200}
          />
        </div>
      );
    } else if (error) {
      return (
        <Text
          title={t('Статья не найдена')}
          align="center"
        />
      );
    } else {
      return (
        <div
          className={cls.contentWrapper}
          data-testid="articleDetails"
        >
          <VStack gap="16">
            <Text
              title={article?.title}
              align="left"
              size="sizeL"
              tagTitle="h2"
              bold
            />
            <Text
              title={article?.subtitle}
              align="left"
            />
          </VStack>
          <AppImage
            src={article?.img}
            className={cls.image}
          />
          {article?.blocks.map(renderArticleBlock)}
        </div>
      );
    }
  }
);

ArticleDetailsRedesigned.displayName = 'ArticleDetailsRedesigned';
