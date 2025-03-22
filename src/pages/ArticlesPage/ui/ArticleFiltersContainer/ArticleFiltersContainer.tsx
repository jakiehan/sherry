import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticleFiltersContainer {
  className?: string;
}

export const ArticleFiltersContainer = memo(
  ({ className }: ArticleFiltersContainer) => {
    const {
      handleChangeSort,
      sort,
      handleChangeType,
      handleChangeSearch,
      handleChangeOrder,
      order,
      search,
      type,
    } = useArticleFilters();

    return (
      <ArticlesFilters
        className={className}
        type={type}
        sort={sort}
        order={order}
        search={search}
        onChangeSearch={handleChangeSearch}
        onChangeSort={handleChangeSort}
        onChangeOrder={handleChangeOrder}
        onChangeType={handleChangeType}
      />
    );
  }
);

ArticleFiltersContainer.displayName = 'ArticleFiltersContainer';
