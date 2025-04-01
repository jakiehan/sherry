import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from '../ArticleDetails.module.scss';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import DatePickerIcon from '@/shared/assets/icons/calendar.svg';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { renderArticleBlock } from '../../../lib/renderArticleBlock';
import { ArticleDetailsProps } from '../ArticleDetails';

export const ArticleDetailsDeprecated = memo(
  ({ article, error, isLoading }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');

    if (isLoading) {
      return (
        <div className={cls.contentWrapper}>
          <Skeleton
            width={200}
            height={200}
            borderRadius="50%"
            className={cls.avatar}
          />
          <Skeleton
            width={669}
            height={31}
          />
          <Skeleton
            width={339}
            height={31}
          />
          <Skeleton
            width="100%"
            height={231}
          />
          <Skeleton
            width="100%"
            height={231}
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
          <Avatar
            src={article?.img}
            size={200}
            className={cls.avatar}
          />
          <Text
            title={article?.title}
            text={article?.subtitle}
            align="left"
            size="sizeL"
            tagTitle="h2"
          />
          <div>
            <div className={cls.articleInfo}>
              <EyeIcon className={cls.icon} />
              <Text text={String(article?.views)} />
            </div>
            <div className={cls.articleInfo}>
              <DatePickerIcon className={cls.icon} />
              <Text text={article?.createdAt} />
            </div>
          </div>
          {article?.blocks.map(renderArticleBlock)}
        </div>
      );
    }
  }
);

ArticleDetailsDeprecated.displayName = 'ArticleDetailsDeprecated';
