import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, View } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
  article: Article;
  view: View;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  );
});

ArticleListItem.displayName = 'ArticleListItem';
