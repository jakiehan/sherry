import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPageFilters.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation('article');

    const {
      handleChangeSort,
      sort,
      handleChangeType,
      handleChangeSearch,
      handleChangeOrder,
      order,
      search,
      type,
      view,
      toggleView,
    } = useArticleFilters();

    return (
      <div className={classNames(cls.articlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            onChangeSort={handleChangeSort}
            sort={sort}
            onChangeOrder={handleChangeOrder}
            order={order}
          />
          <ArticleViewSwitcher
            views={view}
            onClick={toggleView}
          />
        </div>
        <Card>
          <Input
            value={search}
            onChange={handleChangeSearch}
            placeholder={t('Поиск')}
          />
        </Card>
        <ArticleTypeTabs
          value={type}
          onChangeType={handleChangeType}
        />
      </div>
    );
  }
);

ArticlesPageFilters.displayName = 'ArticlesPageFilters';
