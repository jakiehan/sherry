import { memo } from 'react';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticleViewSwitcherContainerProps {
  className?: string;
}

export const ArticleViewSwitcherContainer = memo(
  ({ className }: ArticleViewSwitcherContainerProps) => {
    const { view, toggleView } = useArticleFilters();

    return (
      <ArticleViewSwitcher
        views={view}
        onClick={toggleView}
        className={className}
      />
    );
  }
);

ArticleViewSwitcherContainer.displayName = 'ArticleViewSwitcherContainer';
