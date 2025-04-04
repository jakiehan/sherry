import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Article } from '../../model/types/article';
import { View } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text } from '@/shared/ui/deprecated/Text';

type ViewNumber = Partial<Record<View, number>>;

interface ArticleListProps {
  articles?: Article[];
  isLoading?: boolean;
  view?: View;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  inited?: boolean;
  viewNumber?: ViewNumber;
}

const renderArticle = (
  article: Article,
  view: View,
  target?: HTMLAttributeAnchorTarget
) => {
  return (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      target={target}
    />
  );
};

const renderSkeleton = (view: View, viewNumber?: ViewNumber) => {
  return new Array(view === 'place' ? (viewNumber?.['place'] ?? 9) : 3)
    .fill(0)
    .map((item, i) => (
      <ArticleListItemSkeleton
        key={i}
        view={view}
      />
    ));
};

export const ArticleList = memo(
  ({
    className,
    articles = [],
    view = 'place',
    isLoading,
    target,
    inited,
    viewNumber,
  }: ArticleListProps) => {
    const { t } = useTranslation();

    if (articles.length === 0 && !isLoading && inited) {
      return (
        <div
          className={classNames(cls.articleList, {}, [className, cls[view]])}
          data-testid="articleList"
        >
          <Text
            size="sizeL"
            title={t('Статья не найдена')}
          />
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.articleList, {}, [className, cls[view]])}
        data-testid="articleList"
      >
        {articles.length !== 0 &&
          articles.map((article) => renderArticle(article, view, target))}
        {isLoading && renderSkeleton(view, viewNumber)}
      </div>
    );
  }
);

ArticleList.displayName = 'ArticleList';
