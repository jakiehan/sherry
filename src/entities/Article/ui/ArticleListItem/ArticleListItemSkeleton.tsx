import { memo } from 'react';
import { View } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { ArticleListItemSkeletonDeprecated } from './ArticleListItemDeprecated/ArticleListItemSkeletonDeprecated';
import { ArticleListItemSkeletonRedesigned } from './ArticleListItemRedesigned/ArticleListItemSkeletonRedesigned';

export interface ArticleListItemSkeletonProps {
  view: View;
  className?: string;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={<ArticleListItemSkeletonRedesigned {...props} />}
        off={<ArticleListItemSkeletonDeprecated {...props} />}
      />
    );
  }
);

ArticleListItemSkeleton.displayName = 'ArticleListItem';
