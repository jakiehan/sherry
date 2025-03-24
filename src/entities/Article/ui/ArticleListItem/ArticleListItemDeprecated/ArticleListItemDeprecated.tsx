import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleListItemDeprecated.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ArticleBlockType,
  ArticleTextBlock,
} from '../../../model/types/article';
import { Text } from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleDetails } from '@/app/providers/Router/constants/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleListItemProps } from '../ArticleListItem';

export const ArticleListItemDeprecated = memo(
  ({ className, article, view, target }: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    const types = (
      <Text
        className={cls.types}
        text={article.type.join(', ')}
      />
    );

    const views = (
      <>
        <Text
          className={cls.views}
          text={String(article.views)}
        />
        <EyeIcon className={cls.icon} />
      </>
    );

    if (view === 'list') {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;

      return (
        <div
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Avatar
                size={30}
                src={article.user.avatar}
              />
              <Text text={article.user.username} />
              <Text
                className={cls.date}
                text={article.createdAt}
                align="right"
              />
            </div>
            <Text
              className={cls.title}
              title={article.title}
            />
            {types}
            <AppImage
              className={cls.img}
              src={article.img}
              alt={article.title}
              fallback={
                <Skeleton
                  width="100%"
                  height={220}
                />
              }
            />
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
            <div className={cls.footer}>
              <AppLink
                to={getRouteArticleDetails(article.id)}
                target={target}
              >
                <Button variant="outline">{`${t('Читать далее')}...`}</Button>
              </AppLink>
              {views}
            </div>
          </Card>
        </div>
      );
    }

    return (
      <AppLink
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
        to={getRouteArticleDetails(article.id)}
        target={target}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <AppImage
              className={cls.img}
              src={article.img}
              alt={article.title}
              fallback={
                <Skeleton
                  width="100%"
                  height={200}
                />
              }
            />
            <Text
              className={cls.date}
              text={article.createdAt}
            />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text
            className={cls.title}
            text={article.title}
          />
        </Card>
      </AppLink>
    );
  }
);

ArticleListItemDeprecated.displayName = 'ArticleListItem';
