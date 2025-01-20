import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleListItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  View,
} from '../../model/types/article';
import { Text } from '@/shared/Text';
import EyeIcon from '@/app/styles/assets/icons/eye.svg';
import { Card } from '@/shared/Card';
import { Avatar } from '@/shared/Avatar';
import { Button } from '@/shared/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { routePath } from '@/app/providers/Router/lib/routeConfig/routeConfig';
import { AppLink } from '@/shared/AppLink';

interface ArticleListItemProps {
  article: Article;
  view: View;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
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
            <img
              className={cls.img}
              src={article.img}
              alt={article.title}
            />
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
            <div className={cls.footer}>
              <AppLink
                to={routePath.article_details + article.id}
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
        to={routePath.article_details + article.id}
        target={target}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <img
              className={cls.img}
              src={article.img}
              alt={article.title}
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

ArticleListItem.displayName = 'ArticleListItem';
